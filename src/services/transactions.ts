import { audit, db } from "@/database/db";
import type { Cart, CartItem, Cashier, HeldCart, PaymentLine, Store, Transaction } from "@/types";
import { calcTotals } from "@/utils/money";
import { settlePayments } from "@/utils/payment";
import { formatTxNumber, periodKey, uid } from "@/utils/helpers";

export function emptyCart(): Cart {
  return { draftId: uid(), items: [], discountType: "amount", discountValue: 0, fee: 0, taxOn: false, customer: "", note: "" };
}

export function cartTotals(cart: Cart, store: Store) {
  return calcTotals({
    items: cart.items,
    discountType: cart.discountType,
    discountValue: cart.discountValue,
    taxOn: cart.taxOn,
    taxRate: store.taxRate,
    fee: cart.fee,
  });
}

async function nextNumber(store: Store, ts: number): Promise<string> {
  const key = `${store.id}:${periodKey(ts, store.resetPeriod)}`;
  const cur = await db.counters.get(key);
  const seq = (cur?.value ?? 0) + 1;
  await db.counters.put({ key, value: seq });
  return formatTxNumber(store.numberFormat, store.prefix, seq, store.seqPad, ts);
}

/**
 * Checkout atomik. `cart.draftId` dipakai sebagai ID transaksi → klik ganda /
 * submit ulang mengembalikan transaksi yang sama, bukan transaksi baru.
 */
export async function checkout(args: {
  store: Store;
  cashier: Cashier;
  cart: Cart;
  tendered: PaymentLine[];
  allowDp?: boolean;
}): Promise<Transaction> {
  const { store, cashier, cart } = args;
  if (cart.items.length === 0) throw new Error("Keranjang kosong");
  if (cart.items.some((i) => !(i.qty > 0) || !Number.isInteger(i.qty))) throw new Error("Kuantitas tidak valid");
  return db.transaction("rw", [db.transactions, db.counters, db.products, db.audit], async () => {
    const existing = await db.transactions.get(cart.draftId);
    if (existing) return existing;
    const ts = Date.now();
    const totals = cartTotals(cart, store);
    if (totals.total <= 0 && !cart.items.length) throw new Error("Total tidak valid");
    const res = settlePayments(totals.total, args.tendered, { allowDp: args.allowDp });

    if (store.stockEnabled) {
      for (const it of cart.items) {
        const p = await db.products.get(it.productId);
        if (p?.trackStock) {
          if (p.stock < it.qty) throw new Error(`Stok "${p.name}" tidak cukup (sisa ${p.stock})`);
          await db.products.update(p.id, { stock: p.stock - it.qty, updatedAt: ts });
        }
      }
    }
    const number = await nextNumber(store, ts);
    const tx: Transaction = {
      id: cart.draftId,
      number,
      storeId: store.id,
      cashierId: cashier.id,
      cashierName: cashier.name,
      customer: cart.customer.trim(),
      note: cart.note.trim(),
      items: cart.items.map((i) => ({ ...i, total: i.price * i.qty })),
      subtotal: totals.subtotal,
      discountType: cart.discountType,
      discountValue: cart.discountValue,
      discountAmount: totals.discountAmount,
      taxName: store.taxName,
      taxRate: cart.taxOn ? store.taxRate : 0,
      taxAmount: totals.taxAmount,
      feeAmount: totals.feeAmount,
      total: totals.total,
      payments: res.payments,
      paid: res.paid,
      cashReceived: res.cashReceived,
      change: res.change,
      balance: res.balance,
      status: res.status,
      createdAt: ts,
      updatedAt: ts,
    };
    await db.transactions.add(tx);
    await audit({ action: res.status === "dp" ? "tx.dp" : "tx.create", entity: "transaction", entityId: tx.id, detail: `${number} total ${tx.total}`, actor: cashier.name, storeId: store.id });
    return tx;
  });
}

async function restock(tx: Transaction, store: Store | undefined) {
  if (store && !store.stockEnabled) return;
  for (const it of tx.items) {
    const p = await db.products.get(it.productId);
    if (p?.trackStock) await db.products.update(p.id, { stock: p.stock + it.qty, updatedAt: Date.now() });
  }
}

export async function cancelTransaction(txId: string, reason: string, actor: string) {
  if (!reason.trim()) throw new Error("Alasan pembatalan wajib diisi");
  await db.transaction("rw", [db.transactions, db.products, db.stores, db.audit], async () => {
    const tx = await db.transactions.get(txId);
    if (!tx) throw new Error("Transaksi tidak ditemukan");
    if (tx.status !== "completed" && tx.status !== "dp") throw new Error("Transaksi tidak bisa dibatalkan");
    await restock(tx, await db.stores.get(tx.storeId));
    await db.transactions.update(txId, { status: "cancelled", cancelReason: reason.trim(), cancelledAt: Date.now(), updatedAt: Date.now() });
    await audit({ action: "tx.cancel", entity: "transaction", entityId: txId, detail: `${tx.number}: ${reason}`, actor, storeId: tx.storeId });
  });
}

export async function refundTransaction(txId: string, reason: string, actor: string) {
  if (!reason.trim()) throw new Error("Alasan retur wajib diisi");
  await db.transaction("rw", [db.transactions, db.products, db.stores, db.audit], async () => {
    const tx = await db.transactions.get(txId);
    if (!tx) throw new Error("Transaksi tidak ditemukan");
    if (tx.status !== "completed") throw new Error("Hanya transaksi lunas yang bisa diretur");
    await restock(tx, await db.stores.get(tx.storeId));
    await db.transactions.update(txId, { status: "refunded", refundReason: reason.trim(), refundedAt: Date.now(), updatedAt: Date.now() });
    await audit({ action: "tx.refund", entity: "transaction", entityId: txId, detail: `${tx.number}: ${reason}`, actor, storeId: tx.storeId });
  });
}

/** Pelunasan transaksi DP. */
export async function settleTransaction(txId: string, tendered: PaymentLine[], actor: string): Promise<Transaction> {
  return db.transaction("rw", [db.transactions, db.audit], async () => {
    const tx = await db.transactions.get(txId);
    if (!tx || tx.status !== "dp") throw new Error("Transaksi bukan DP");
    const res = settlePayments(tx.total, tendered, { alreadyPaid: tx.paid });
    const merged = [...tx.payments];
    for (const l of res.payments) {
      const f = merged.find((m) => m.method === l.method);
      if (f) f.amount += l.amount;
      else merged.push({ ...l });
    }
    const upd: Partial<Transaction> = {
      payments: merged,
      paid: tx.total,
      cashReceived: res.cashReceived,
      change: res.change,
      balance: 0,
      status: "completed",
      settledAt: Date.now(),
      updatedAt: Date.now(),
    };
    await db.transactions.update(txId, upd);
    await audit({ action: "tx.settle", entity: "transaction", entityId: txId, detail: tx.number, actor, storeId: tx.storeId });
    return { ...tx, ...upd } as Transaction;
  });
}

export function cartFromTransaction(tx: Transaction, store: Store): Cart {
  const items: CartItem[] = tx.items.map((i) => ({ productId: i.productId, name: i.name, sku: i.sku, price: i.price, qty: i.qty, note: i.note }));
  return {
    draftId: uid(),
    items,
    discountType: tx.discountType,
    discountValue: tx.discountValue,
    fee: tx.feeAmount,
    taxOn: tx.taxAmount > 0 && store.taxEnabled,
    customer: tx.customer,
    note: tx.note,
  };
}

/* ───────── Hold / resume ───────── */
export async function holdCart(storeId: string, cart: Cart, label: string) {
  if (cart.items.length === 0) throw new Error("Keranjang kosong");
  const h: HeldCart = { id: uid(), storeId, label: label.trim() || cart.customer || "Tahan", cart, createdAt: Date.now() };
  await db.held.add(h);
  return h;
}
export async function resumeHeld(id: string): Promise<Cart | null> {
  const h = await db.held.get(id);
  if (!h) return null;
  await db.held.delete(id);
  return { ...h.cart, draftId: uid() };
}
export async function deleteHeld(id: string) {
  await db.held.delete(id);
}

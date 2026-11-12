import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import { db, newStore, seedIfEmpty } from "@/database/db";
import type { Cashier, Product, Store } from "@/types";
import { cancelTransaction, checkout, emptyCart, refundTransaction, settleTransaction } from "@/services/transactions";
import { saveProduct, validateProduct } from "@/services/products";
import { createBackup, restoreBackup, validateBackup } from "@/services/backup";
import { summarize } from "@/services/reports";
import { importTemplateJson, exportTemplateJson, blankTemplate, saveTemplate, duplicateTemplate, deleteTemplate, allTemplates } from "@/services/templates";

let store: Store;
let cashier: Cashier;
let p1: Product;

beforeEach(async () => {
  await Promise.all(db.tables.map((t) => t.clear()));
  store = { ...newStore("Uji"), stockEnabled: true, taxEnabled: true, taxRate: 10, resetPeriod: "daily" };
  cashier = { id: "c1", name: "Budi", active: true, createdAt: 1 };
  await db.stores.add(store);
  await db.cashiers.add(cashier);
  p1 = await saveProduct({ storeId: store.id, sku: "A1", barcode: "111", name: "Kopi", description: "", price: 10000, unit: "pcs", trackStock: true, stock: 5, minStock: 1, active: true }, "t");
});

const cartOf = (qty: number, extra = {}) => ({ ...emptyCart(), items: [{ productId: p1.id, name: p1.name, sku: p1.sku, price: p1.price, qty }], ...extra });

describe("produk (CRUD & validasi)", () => {
  it("simpan, baca, update, hapus", async () => {
    expect((await db.products.get(p1.id))?.name).toBe("Kopi");
    await saveProduct({ ...p1, name: "Kopi Hitam" }, "t");
    expect((await db.products.get(p1.id))?.name).toBe("Kopi Hitam");
    await db.products.delete(p1.id);
    expect(await db.products.count()).toBe(0);
  });
  it("menolak SKU/barcode duplikat dan harga tidak valid", async () => {
    expect(await validateProduct({ ...p1, id: undefined, name: "X", barcode: "999" })).toMatch(/SKU/);
    expect(await validateProduct({ ...p1, id: undefined, name: "X", sku: "Z", barcode: "111" })).toMatch(/Barcode/);
    expect(await validateProduct({ ...p1, price: 1.5 })).toMatch(/bulat/);
  });
});

describe("transaksi", () => {
  it("checkout: total benar, nomor urut, stok berkurang", async () => {
    const cart = cartOf(2, { taxOn: true });
    const tx = await checkout({ store, cashier, cart, tendered: [{ method: "cash", amount: 30000 }] });
    expect(tx.total).toBe(22000); // 20000 + 10%
    expect(tx.change).toBe(8000);
    expect(tx.number).toMatch(/^INV-\d{8}-0001$/);
    expect((await db.products.get(p1.id))?.stock).toBe(3);
    const tx2 = await checkout({ store, cashier, cart: cartOf(1), tendered: [{ method: "qris", amount: 10000 }] });
    expect(tx2.number).toMatch(/-0002$/);
  });
  it("double submit tidak membuat transaksi ganda & stok tidak dikurangi dua kali", async () => {
    const cart = cartOf(1);
    const args = { store, cashier, cart, tendered: [{ method: "cash" as const, amount: 10000 }] };
    const [a, b] = await Promise.all([checkout(args), checkout(args)]);
    expect(a.id).toBe(b.id);
    expect(await db.transactions.count()).toBe(1);
    expect((await db.products.get(p1.id))?.stock).toBe(4);
  });
  it("menolak stok tidak cukup dan keranjang kosong", async () => {
    await expect(checkout({ store, cashier, cart: cartOf(99), tendered: [{ method: "cash", amount: 990000 }] })).rejects.toThrow(/Stok/);
    await expect(checkout({ store, cashier, cart: emptyCart(), tendered: [] })).rejects.toThrow();
    expect(await db.transactions.count()).toBe(0);
  });
  it("batal mengembalikan stok & tercatat di audit (tidak dihapus)", async () => {
    const tx = await checkout({ store, cashier, cart: cartOf(2), tendered: [{ method: "cash", amount: 20000 }] });
    await expect(cancelTransaction(tx.id, " ", "Budi")).rejects.toThrow();
    await cancelTransaction(tx.id, "salah input", "Budi");
    const t = await db.transactions.get(tx.id);
    expect(t?.status).toBe("cancelled");
    expect((await db.products.get(p1.id))?.stock).toBe(5);
    expect((await db.audit.toArray()).some((a) => a.action === "tx.cancel")).toBe(true);
  });
  it("retur hanya untuk transaksi lunas", async () => {
    const tx = await checkout({ store, cashier, cart: cartOf(1), tendered: [{ method: "cash", amount: 10000 }] });
    await refundTransaction(tx.id, "rusak", "Budi");
    expect((await db.transactions.get(tx.id))?.status).toBe("refunded");
    await expect(refundTransaction(tx.id, "lagi", "Budi")).rejects.toThrow();
  });
  it("DP lalu pelunasan", async () => {
    const tx = await checkout({ store, cashier, cart: cartOf(2), tendered: [{ method: "cash", amount: 5000 }], allowDp: true });
    expect(tx.status).toBe("dp");
    expect(tx.balance).toBe(15000);
    const s = await settleTransaction(tx.id, [{ method: "cash", amount: 20000 }], "Budi");
    expect(s.status).toBe("completed");
    expect((await db.transactions.get(tx.id))?.paid).toBe(20000);
  });
  it("laporan dari transaksi nyata", async () => {
    await checkout({ store, cashier, cart: cartOf(2), tendered: [{ method: "cash", amount: 20000 }] });
    const t2 = await checkout({ store, cashier, cart: cartOf(1), tendered: [{ method: "qris", amount: 10000 }] });
    await cancelTransaction(t2.id, "x", "Budi");
    const s = summarize(await db.transactions.toArray());
    expect(s.sales).toBe(20000);
    expect(s.count).toBe(1);
    expect(s.cancelledCount).toBe(1);
    expect(s.topProducts[0].qty).toBe(2);
    expect(s.payments.cash).toBe(20000);
  });
});

describe("backup & restore", () => {
  it("roundtrip + persistensi setelah 'reload' (data dibaca ulang)", async () => {
    await checkout({ store, cashier, cart: cartOf(1), tendered: [{ method: "cash", amount: 10000 }] });
    const json = JSON.stringify(await createBackup("all"));
    const v = validateBackup(JSON.parse(json));
    expect(v.ok).toBe(true);
    await Promise.all(db.tables.map((t) => t.clear()));
    if (v.ok) await restoreBackup(v.backup, "replace");
    expect(await db.products.count()).toBe(1);
    expect(await db.transactions.count()).toBe(1);
    expect(await db.stores.count()).toBe(1);
  });
  it("merge-skip mempertahankan data yang ada", async () => {
    const b = await createBackup("products");
    await db.products.update(p1.id, { name: "Diubah" });
    const r = await restoreBackup(b, "merge-skip");
    expect(r.skipped).toBe(1);
    expect((await db.products.get(p1.id))?.name).toBe("Diubah");
    await restoreBackup(b, "merge-overwrite");
    expect((await db.products.get(p1.id))?.name).toBe("Kopi");
  });
  it("menolak file tidak valid / versi lebih baru", () => {
    expect(validateBackup(null).ok).toBe(false);
    expect(validateBackup({ app: "lain" }).ok).toBe(false);
    expect(validateBackup({ app: "pos-receipt-studio", version: 99, data: {} }).ok).toBe(false);
    expect(validateBackup({ app: "pos-receipt-studio", version: 1, data: { products: [{ id: 1 }] } }).ok).toBe(false);
  });
});

describe("template kustom", () => {
  it("simpan, duplikat, ekspor/impor, hapus; bawaan dilindungi", async () => {
    const t = await saveTemplate(blankTemplate());
    const copy = await duplicateTemplate(t, "Salinan A");
    expect((await allTemplates()).filter((x) => !x.builtin).length).toBe(2);
    const imported = await importTemplateJson(exportTemplateJson(copy));
    expect(imported.elements.length).toBe(copy.elements.length);
    await deleteTemplate(t.id);
    expect((await allTemplates()).some((x) => x.id === t.id)).toBe(false);
    await expect(deleteTemplate("minimalist")).rejects.toThrow();
    await expect(importTemplateJson("{bukan json")).rejects.toThrow();
    expect((await allTemplates()).filter((x) => x.builtin).length).toBeGreaterThanOrEqual(18);
  });
});

describe("seed", () => {
  it("membuat data awal sekali saja", async () => {
    await Promise.all(db.tables.map((t) => t.clear()));
    await seedIfEmpty();
    const n = await db.products.count();
    await seedIfEmpty();
    expect(await db.products.count()).toBe(n);
    expect(await db.stores.count()).toBe(1);
  });
});

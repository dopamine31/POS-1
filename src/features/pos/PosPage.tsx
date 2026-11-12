"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { PauseCircle, ScanLine, Search, ShoppingBag } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, Modal } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import { usePersistentState } from "@/hooks/useOnline";
import type { Cart, Product, Transaction } from "@/types";
import { cartTotals, deleteHeld, emptyCart, holdCart, resumeHeld } from "@/services/transactions";
import { ScannerModal } from "@/features/barcode/Scanner";
import { ReceiptModal } from "@/features/printer/ReceiptModal";
import { CartPanel } from "./CartPanel";
import { PaymentModal } from "./PaymentModal";
import { fmtDateTime } from "@/utils/helpers";

export function PosPage() {
  const { store } = useApp();
  return <PosInner key={store.id} />;
}

function PosInner() {
  const { store, fmt } = useApp();
  const toast = useToast();
  const { confirm, prompt } = useDialogs();
  const [cart, setCartRaw] = usePersistentState<Cart>(`cart:${store.id}`, emptyCart);
  const setCart = (f: (c: Cart) => Cart) => setCartRaw((c) => f(c));
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [scan, setScan] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [pay, setPay] = useState(false);
  const [done, setDone] = useState<Transaction | null>(null);
  const [heldOpen, setHeldOpen] = useState(false);

  const products = useLiveQuery(() => db.products.where("storeId").equals(store.id).toArray(), [store.id]);
  const cats = useLiveQuery(() => db.categories.where("storeId").equals(store.id).toArray(), [store.id]) ?? [];
  const held = useLiveQuery(() => db.held.where("storeId").equals(store.id).toArray(), [store.id]) ?? [];

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return (products ?? [])
      .filter((p) => p.active && (cat === "all" || p.categoryId === cat) && (!s || p.name.toLowerCase().includes(s) || p.sku.toLowerCase().includes(s) || p.barcode.includes(s)))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, q, cat]);

  const count = cart.items.reduce((s, i) => s + i.qty, 0);
  const totals = cartTotals(cart, store);

  const add = (p: Product) => {
    const inCart = cart.items.find((i) => i.productId === p.id)?.qty ?? 0;
    if (store.stockEnabled && p.trackStock && inCart + 1 > p.stock) {
      toast(`Stok "${p.name}" tidak cukup (sisa ${p.stock})`, "error");
      return;
    }
    setCart((c) => {
      const exists = c.items.some((i) => i.productId === p.id);
      return {
        ...c,
        taxOn: c.items.length ? c.taxOn : store.taxEnabled,
        items: exists
          ? c.items.map((i) => (i.productId === p.id ? { ...i, qty: i.qty + 1 } : i))
          : [...c.items, { productId: p.id, name: p.name, sku: p.sku, price: p.price, qty: 1 }],
      };
    });
  };

  const byCode = (code: string) => {
    const c = code.trim();
    const p = (products ?? []).find((x) => x.active && (x.barcode === c || x.sku.toLowerCase() === c.toLowerCase()));
    if (p) {
      add(p);
      toast(`${p.name} ditambahkan`, "success");
      return true;
    }
    toast(`Kode "${c}" tidak ditemukan`, "error");
    return false;
  };

  const lowStock = (p: Product) => store.stockEnabled && p.trackStock && p.stock <= p.minStock;

  const clear = async () => {
    if (!cart.items.length) return;
    if (await confirm({ title: "Batalkan transaksi?", message: "Seluruh item di keranjang akan dihapus.", confirmText: "Ya, batalkan", danger: true })) {
      setCartRaw(emptyCart());
      setCartOpen(false);
    }
  };
  const hold = async () => {
    const label = await prompt({ title: "Tahan transaksi", label: "Label (mis. nama pelanggan / meja)", initial: cart.customer, confirmText: "Tahan" });
    if (label === null) return;
    try {
      await holdCart(store.id, cart, label);
      setCartRaw(emptyCart());
      setCartOpen(false);
      toast("Transaksi ditahan", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal", "error");
    }
  };
  const resume = async (id: string) => {
    if (cart.items.length && !(await confirm({ title: "Ganti keranjang?", message: "Keranjang saat ini akan diganti transaksi yang ditahan.", confirmText: "Lanjutkan" }))) return;
    const c = await resumeHeld(id);
    if (c) {
      setCartRaw(c);
      setHeldOpen(false);
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-6">
      <section aria-label="Produk">
        <div className="sticky top-14 z-10 -mx-4 space-y-3 bg-bg px-4 pb-3 pt-1 lg:static lg:mx-0 lg:px-0">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                className="input pl-9"
                placeholder="Cari produk, SKU, atau barcode…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && q.trim()) {
                    const exact = (products ?? []).find((x) => x.active && (x.barcode === q.trim() || x.sku.toLowerCase() === q.trim().toLowerCase()));
                    if (exact) {
                      add(exact);
                      setQ("");
                    } else if (list.length === 1) {
                      add(list[0]);
                      setQ("");
                    }
                  }
                }}
                aria-label="Cari produk"
              />
            </div>
            <button className="btn btn-icon" onClick={() => setScan(true)} aria-label="Scan barcode"><ScanLine size={20} /></button>
            <button className="btn btn-icon relative" onClick={() => setHeldOpen(true)} aria-label="Transaksi ditahan">
              <PauseCircle size={20} />
              {held.length > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-bold text-brandfg">{held.length}</span>}
            </button>
          </div>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0">
            <button className="chip" data-active={cat === "all"} onClick={() => setCat("all")}>Semua</button>
            {cats.map((c) => (
              <button key={c.id} className="chip" data-active={cat === c.id} onClick={() => setCat(c.id)}>{c.name}</button>
            ))}
          </div>
        </div>

        {!products ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="skeleton h-28" />)}</div>
        ) : list.length === 0 ? (
          <EmptyState icon={<ShoppingBag size={22} />} title={products.length ? "Produk tidak ditemukan" : "Belum ada produk"} hint={products.length ? "Coba kata kunci atau kategori lain." : "Tambahkan produk di menu Produk untuk mulai berjualan."} />
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {list.map((p) => {
              const qty = cart.items.find((i) => i.productId === p.id)?.qty ?? 0;
              return (
                <button key={p.id} onClick={() => add(p)} className="card relative flex min-h-28 flex-col justify-between p-3 text-left transition active:scale-[0.97]">
                  {qty > 0 && <span className="num absolute right-2 top-2 grid h-6 min-w-6 place-items-center rounded-full bg-brand px-1.5 text-xs font-bold text-brandfg">{qty}</span>}
                  {p.image ? <img src={p.image} alt="" className="mb-2 h-14 w-full rounded-lg object-cover" /> : <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-brandsoft text-sm font-bold text-brand">{p.name.slice(0, 2).toUpperCase()}</div>}
                  <div>
                    <div className="line-clamp-2 text-sm font-medium leading-snug">{p.name}</div>
                    <div className="num mt-0.5 text-sm font-semibold text-brand">{fmt(p.price)}</div>
                    {store.stockEnabled && p.trackStock && <div className={`mt-0.5 text-[11px] ${lowStock(p) ? "font-semibold text-danger" : "text-muted"}`}>Stok {p.stock}{lowStock(p) ? " · menipis" : ""}</div>}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Keranjang desktop */}
      <aside className="card sticky top-20 hidden h-[calc(100dvh-7rem)] p-4 lg:block" aria-label="Keranjang">
        <h2 className="mb-1 text-sm font-semibold">Keranjang · {count} item</h2>
        <div className="h-[calc(100%-1.75rem)]">
          <CartPanel cart={cart} setCart={setCart} onPay={() => setPay(true)} onHold={hold} onClear={clear} />
        </div>
      </aside>

      {/* Bar keranjang mobile */}
      {count > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="no-print fixed inset-x-3 bottom-[calc(var(--safe-bottom)+70px)] z-30 flex min-h-14 items-center justify-between rounded-2xl bg-brand px-4 text-brandfg shadow-[var(--shadow-lg)] lg:hidden"
        >
          <span className="flex items-center gap-2 text-sm font-medium"><ShoppingBag size={19} /> {count} item · Lihat keranjang</span>
          <span className="num text-base font-bold">{fmt(totals.total)}</span>
        </button>
      )}

      <div className="lg:hidden">
        <Modal open={cartOpen} onClose={() => setCartOpen(false)} title={`Keranjang · ${count} item`} size="lg">
          <div className="h-[70dvh]">
            <CartPanel cart={cart} setCart={setCart} onPay={() => setPay(true)} onHold={hold} onClear={clear} />
          </div>
        </Modal>
      </div>

      {pay && (
        <PaymentModal
          cart={cart}
          onClose={() => setPay(false)}
          onDone={(tx) => {
            setPay(false);
            setCartOpen(false);
            setCartRaw(emptyCart());
            setDone(tx);
          }}
        />
      )}

      <ReceiptModal
        tx={done}
        onClose={() => setDone(null)}
        footerExtra={
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-success">✓ Transaksi {done?.status === "dp" ? "DP " : ""}tersimpan</span>
            <button className="btn btn-sm" onClick={() => setDone(null)}>Transaksi baru</button>
          </div>
        }
      />

      <ScannerModal open={scan} onClose={() => setScan(false)} onDetected={byCode} continuous />

      <Modal open={heldOpen} onClose={() => setHeldOpen(false)} title="Transaksi ditahan">
        {held.length === 0 ? (
          <EmptyState title="Tidak ada transaksi ditahan" />
        ) : (
          <ul className="divide-y divide-line">
            {held.map((h) => (
              <li key={h.id} className="flex items-center justify-between gap-2 py-3">
                <div className="min-w-0">
                  <div className="truncate font-medium">{h.label}</div>
                  <div className="text-xs text-muted">{h.cart.items.length} jenis · {fmtDateTime(h.createdAt)} · {fmt(cartTotals(h.cart, store).total)}</div>
                </div>
                <div className="flex gap-1">
                  <button className="btn btn-sm btn-primary" onClick={() => resume(h.id)}>Lanjutkan</button>
                  <button className="btn btn-sm" onClick={async () => (await confirm({ title: "Hapus transaksi ditahan?", danger: true, confirmText: "Hapus" })) && deleteHeld(h.id)}>Hapus</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
}

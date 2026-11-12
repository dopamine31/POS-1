"use client";

import { useState } from "react";
import { Minus, NotebookPen, Pause, Plus, Trash2, X } from "lucide-react";
import { EmptyState, Field, Modal, MoneyInput, Segmented, Toggle } from "@/components/ui";
import { useDialogs } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { Cart } from "@/types";
import { cartTotals } from "@/services/transactions";

export function CartPanel({
  cart,
  setCart,
  onPay,
  onHold,
  onClear,
}: {
  cart: Cart;
  setCart: (f: (c: Cart) => Cart) => void;
  onPay: () => void;
  onHold: () => void;
  onClear: () => void;
}) {
  const { store, fmt } = useApp();
  const { prompt } = useDialogs();
  const [detail, setDetail] = useState(false);
  const t = cartTotals(cart, store);
  const qty = (i: number, d: number) =>
    setCart((c) => ({ ...c, items: c.items.map((it, k) => (k === i ? { ...it, qty: Math.max(1, it.qty + d) } : it)) }));
  const remove = (i: number) => setCart((c) => ({ ...c, items: c.items.filter((_, k) => k !== i) }));
  const note = async (i: number) => {
    const v = await prompt({ title: "Catatan item", label: cart.items[i].name, initial: cart.items[i].note ?? "", confirmText: "Simpan" });
    if (v !== null) setCart((c) => ({ ...c, items: c.items.map((it, k) => (k === i ? { ...it, note: v.trim() || undefined } : it)) }));
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto">
        {cart.items.length === 0 ? (
          <EmptyState title="Keranjang kosong" hint="Ketuk produk atau scan barcode untuk menambah item." />
        ) : (
          <ul className="divide-y divide-line">
            {cart.items.map((it, i) => (
              <li key={it.productId} className="py-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{it.name}</div>
                    <div className="num text-xs text-muted">{fmt(it.price)}</div>
                    {it.note && <div className="mt-0.5 text-xs italic text-muted">↳ {it.note}</div>}
                  </div>
                  <div className="num text-sm font-semibold">{fmt(it.price * it.qty)}</div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-xl border border-line">
                    <button className="grid h-10 w-11 place-items-center active:bg-surface2" onClick={() => (it.qty === 1 ? remove(i) : qty(i, -1))} aria-label="Kurangi">
                      <Minus size={16} />
                    </button>
                    <span className="num w-9 text-center text-sm font-semibold" aria-label="Kuantitas">{it.qty}</span>
                    <button className="grid h-10 w-11 place-items-center active:bg-surface2" onClick={() => qty(i, 1)} aria-label="Tambah">
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="flex">
                    <button className="btn btn-ghost btn-icon" onClick={() => note(i)} aria-label="Catatan item"><NotebookPen size={17} /></button>
                    <button className="btn btn-ghost btn-icon text-danger" onClick={() => remove(i)} aria-label="Hapus item"><Trash2 size={17} /></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-1.5 border-t border-line pt-3 text-sm">
        <Row l="Subtotal" v={fmt(t.subtotal)} />
        {t.discountAmount > 0 && <Row l="Diskon" v={"-" + fmt(t.discountAmount)} />}
        {t.taxAmount > 0 && <Row l={`${store.taxName} ${store.taxRate}%`} v={fmt(t.taxAmount)} />}
        {t.feeAmount > 0 && <Row l="Biaya tambahan" v={fmt(t.feeAmount)} />}
        <div className="flex items-baseline justify-between pt-1">
          <span className="font-medium">Total</span>
          <span className="num text-2xl font-bold tracking-tight">{fmt(t.total)}</span>
        </div>
        <button className="btn btn-sm w-full" onClick={() => setDetail(true)}>Diskon, pajak, biaya & pelanggan</button>
        <div className="grid grid-cols-[auto_auto_1fr] gap-2 pt-1">
          <button className="btn btn-icon" onClick={onClear} disabled={!cart.items.length} aria-label="Batalkan transaksi"><X size={18} /></button>
          <button className="btn btn-icon" onClick={onHold} disabled={!cart.items.length} aria-label="Tahan transaksi"><Pause size={18} /></button>
          <button className="btn btn-primary min-h-12 text-base" onClick={onPay} disabled={!cart.items.length}>Bayar {cart.items.length > 0 && fmt(t.total)}</button>
        </div>
      </div>

      <Modal open={detail} onClose={() => setDetail(false)} title="Detail transaksi" footer={<button className="btn btn-primary flex-1" onClick={() => setDetail(false)}>Selesai</button>}>
        <div className="space-y-4">
          <Field label="Jenis diskon">
            <Segmented value={cart.discountType} onChange={(v) => setCart((c) => ({ ...c, discountType: v, discountValue: 0 }))} options={[{ value: "amount", label: `Nominal (${store.currency.symbol})` }, { value: "percent", label: "Persen (%)" }]} />
          </Field>
          <Field label={cart.discountType === "percent" ? "Diskon (%)" : "Diskon nominal"}>
            {cart.discountType === "percent" ? (
              <input className="input num" inputMode="decimal" value={cart.discountValue || ""} placeholder="0" onChange={(e) => setCart((c) => ({ ...c, discountValue: Math.min(100, Math.max(0, Number(e.target.value.replace(",", ".")) || 0)) }))} />
            ) : (
              <MoneyInput value={cart.discountValue} onChange={(v) => setCart((c) => ({ ...c, discountValue: v }))} currency={store.currency} allowEmpty />
            )}
          </Field>
          <Field label="Biaya tambahan (mis. service, kemasan)">
            <MoneyInput value={cart.fee} onChange={(v) => setCart((c) => ({ ...c, fee: v }))} currency={store.currency} allowEmpty />
          </Field>
          <Toggle checked={cart.taxOn} onChange={(v) => setCart((c) => ({ ...c, taxOn: v }))} label={`${store.taxName} ${store.taxRate}%`} hint="Tarif diatur di Pengaturan → Toko." />
          <Field label="Nama pelanggan (opsional)">
            <input className="input" value={cart.customer} onChange={(e) => setCart((c) => ({ ...c, customer: e.target.value }))} />
          </Field>
          <Field label="Catatan transaksi">
            <textarea className="input" rows={2} value={cart.note} onChange={(e) => setCart((c) => ({ ...c, note: e.target.value }))} />
          </Field>
        </div>
      </Modal>
    </div>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex justify-between text-muted">
      <span>{l}</span>
      <span className="num">{v}</span>
    </div>
  );
}

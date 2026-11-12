"use client";

import { useMemo, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Modal, MoneyInput, Toggle } from "@/components/ui";
import { useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { Cart, PaymentLine, PaymentMethod, Transaction } from "@/types";
import { PAYMENT_LABEL, PAYMENT_METHODS, settlePayments } from "@/utils/payment";
import { cartTotals, checkout } from "@/services/transactions";

function suggestions(total: number): number[] {
  const steps = [1000, 5000, 10000, 20000, 50000, 100000];
  const set = new Set<number>();
  for (const s of steps) {
    const v = Math.ceil(total / s) * s;
    if (v > total) set.add(v);
  }
  return [...set].slice(0, 4);
}

export function PaymentModal({ cart, onClose, onDone }: { cart: Cart; onClose: () => void; onDone: (tx: Transaction) => void }) {
  const { store, cashier, fmt } = useApp();
  const toast = useToast();
  const totals = useMemo(() => cartTotals(cart, store), [cart, store]);
  const [lines, setLines] = useState<PaymentLine[]>([{ method: "cash", amount: totals.total }]);
  const [dp, setDp] = useState(false);
  const [busy, setBusy] = useState(false);
  const lock = useRef(false);

  const result = useMemo(() => {
    try {
      return { ok: settlePayments(totals.total, lines, { allowDp: dp }), err: "" };
    } catch (e) {
      return { ok: null, err: e instanceof Error ? e.message : "Pembayaran tidak valid" };
    }
  }, [totals.total, lines, dp]);

  const sum = lines.reduce((s, l) => s + l.amount, 0);
  const setLine = (i: number, p: Partial<PaymentLine>) => setLines((ls) => ls.map((l, k) => (k === i ? { ...l, ...p } : l)));

  const submit = async () => {
    if (lock.current || !result.ok) return; // cegah klik ganda
    lock.current = true;
    setBusy(true);
    try {
      const tx = await checkout({ store, cashier, cart, tendered: lines, allowDp: dp });
      onDone(tx);
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal menyimpan transaksi", "error");
      lock.current = false;
      setBusy(false);
    }
  };

  return (
    <Modal
      open
      onClose={busy ? () => undefined : onClose}
      title="Pembayaran"
      footer={
        <button className="btn btn-primary min-h-12 flex-1 text-base" disabled={!result.ok || busy} onClick={submit}>
          {busy ? "Menyimpan…" : dp ? "Simpan DP" : "Selesaikan Pembayaran"}
        </button>
      }
    >
      <div className="space-y-4">
        <div className="rounded-2xl bg-brandsoft p-4 text-center">
          <div className="text-xs font-medium text-brand">Total tagihan</div>
          <div className="num text-3xl font-bold tracking-tight text-brand">{fmt(totals.total)}</div>
        </div>

        <div className="space-y-2">
          {lines.map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <select className="input w-32 shrink-0" value={l.method} onChange={(e) => setLine(i, { method: e.target.value as PaymentMethod })} aria-label="Metode">
                {PAYMENT_METHODS.map((m) => (
                  <option key={m} value={m}>{PAYMENT_LABEL[m]}</option>
                ))}
              </select>
              <MoneyInput value={l.amount} onChange={(v) => setLine(i, { amount: v })} currency={store.currency} aria-label={`Nominal ${PAYMENT_LABEL[l.method]}`} />
              {lines.length > 1 && (
                <button className="btn btn-ghost btn-icon" onClick={() => setLines((ls) => ls.filter((_, k) => k !== i))} aria-label="Hapus baris">
                  <Trash2 size={17} />
                </button>
              )}
            </div>
          ))}
          <button
            className="btn btn-sm"
            onClick={() => setLines((ls) => [...ls, { method: ls.some((x) => x.method === "cash") ? "qris" : "cash", amount: Math.max(0, totals.total - sum) }])}
          >
            <Plus size={15} /> Pembayaran campuran
          </button>
        </div>

        {lines[0]?.method === "cash" && lines.length === 1 && (
          <div className="flex flex-wrap gap-2">
            <button className="chip" onClick={() => setLine(0, { amount: totals.total })}>Uang pas</button>
            {suggestions(totals.total).map((s) => (
              <button key={s} className="chip num" onClick={() => setLine(0, { amount: s })}>{fmt(s)}</button>
            ))}
          </div>
        )}

        <Toggle checked={dp} onChange={setDp} label="Bayar sebagian (DP)" hint="Sisa tagihan dilunasi nanti dari menu Transaksi." />

        <div className="space-y-1.5 rounded-2xl border border-line p-4 text-sm">
          <div className="flex justify-between"><span className="text-muted">Dibayar</span><span className="num font-medium">{fmt(sum)}</span></div>
          {result.ok ? (
            result.ok.status === "dp" ? (
              <div className="flex justify-between text-warning"><span>Sisa tagihan</span><span className="num font-semibold">{fmt(result.ok.balance)}</span></div>
            ) : (
              <div className="flex justify-between text-success"><span>Kembalian</span><span className="num text-lg font-bold">{fmt(result.ok.change)}</span></div>
            )
          ) : (
            <div className="text-danger">{sum < totals.total ? `Kurang ${fmt(totals.total - sum)}` : result.err}</div>
          )}
        </div>
      </div>
    </Modal>
  );
}

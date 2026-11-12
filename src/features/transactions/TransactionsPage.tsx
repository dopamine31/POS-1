"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import { Ban, CopyPlus, Printer, Receipt, Search, Undo2, Wallet } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, Modal, MoneyInput, PageHeader, Skeleton } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { PaymentMethod, Transaction, TxStatus } from "@/types";
import { PAYMENT_LABEL, PAYMENT_METHODS } from "@/utils/payment";
import { cancelTransaction, cartFromTransaction, refundTransaction, settleTransaction } from "@/services/transactions";
import { fmtDateTime, parseInputDate } from "@/utils/helpers";
import { ReceiptModal } from "@/features/printer/ReceiptModal";

export const STATUS_LABEL: Record<TxStatus, string> = { completed: "Lunas", dp: "DP", cancelled: "Dibatalkan", refunded: "Diretur" };
export const STATUS_CLASS: Record<TxStatus, string> = { completed: "badge-ok", dp: "badge-warn", cancelled: "badge-muted", refunded: "badge-bad" };

export function TransactionsPage() {
  const { store, cashiers, cashier, fmt } = useApp();
  const router = useRouter();
  const toast = useToast();
  const { prompt, confirm } = useDialogs();
  const all = useLiveQuery(() => db.transactions.where("storeId").equals(store.id).toArray(), [store.id]);
  const [q, setQ] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cashierF, setCashierF] = useState("all");
  const [payF, setPayF] = useState("all");
  const [statusF, setStatusF] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Transaction | null>(null);
  const [settle, setSettle] = useState<Transaction | null>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const f = from ? parseInputDate(from) : 0;
    const t = to ? parseInputDate(to, true) : Infinity;
    return (all ?? [])
      .filter(
        (x) =>
          (!s || x.number.toLowerCase().includes(s) || x.customer.toLowerCase().includes(s)) &&
          x.createdAt >= f && x.createdAt <= t &&
          (cashierF === "all" || x.cashierId === cashierF) &&
          (payF === "all" || x.payments.some((p) => p.method === payF)) &&
          (statusF === "all" || x.status === statusF),
      )
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [all, q, from, to, cashierF, payF, statusF]);

  const open = (all ?? []).find((x) => x.id === openId) ?? null;

  const act = async (fn: () => Promise<unknown>, ok: string) => {
    try {
      await fn();
      toast(ok, "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal", "error");
    }
  };

  const duplicate = (tx: Transaction) => {
    localStorage.setItem(`cart:${store.id}`, JSON.stringify(cartFromTransaction(tx, store)));
    toast("Item disalin ke keranjang kasir", "success");
    router.push("/pos");
  };

  return (
    <div>
      <PageHeader title="Transaksi" subtitle={all ? `${list.length} dari ${all.length} transaksi` : " "} />
      <div className="card mb-4 space-y-3 p-3">
        <div className="relative">
          <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input className="input pl-9" placeholder="Cari nomor transaksi atau pelanggan…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Cari transaksi" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          <input type="date" className="input" value={from} onChange={(e) => setFrom(e.target.value)} aria-label="Dari tanggal" />
          <input type="date" className="input" value={to} onChange={(e) => setTo(e.target.value)} aria-label="Sampai tanggal" />
          <select className="input" value={cashierF} onChange={(e) => setCashierF(e.target.value)} aria-label="Kasir">
            <option value="all">Semua kasir</option>
            {cashiers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select className="input" value={payF} onChange={(e) => setPayF(e.target.value)} aria-label="Pembayaran">
            <option value="all">Semua pembayaran</option>
            {PAYMENT_METHODS.map((m) => <option key={m} value={m}>{PAYMENT_LABEL[m]}</option>)}
          </select>
          <select className="input col-span-2 md:col-span-1" value={statusF} onChange={(e) => setStatusF(e.target.value)} aria-label="Status">
            <option value="all">Semua status</option>
            {(Object.keys(STATUS_LABEL) as TxStatus[]).map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
          </select>
        </div>
      </div>

      {!all ? (
        <div className="space-y-2">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-16" />)}</div>
      ) : list.length === 0 ? (
        <div className="card"><EmptyState icon={<Receipt size={22} />} title={all.length ? "Tidak ada transaksi yang cocok" : "Belum ada transaksi"} hint={all.length ? "Ubah filter pencarian." : "Transaksi dari menu Kasir akan muncul di sini."} /></div>
      ) : (
        <ul className="card divide-y divide-line overflow-hidden">
          {list.map((t) => (
            <li key={t.id}>
              <button className="flex w-full items-center justify-between gap-3 p-3 text-left active:bg-surface2" onClick={() => setOpenId(t.id)}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="num truncate text-sm font-semibold">{t.number}</span>
                    <span className={`badge ${STATUS_CLASS[t.status]}`}>{STATUS_LABEL[t.status]}</span>
                  </div>
                  <div className="truncate text-xs text-muted">{fmtDateTime(t.createdAt)} · {t.cashierName}{t.customer ? ` · ${t.customer}` : ""}</div>
                </div>
                <div className={`num text-sm font-semibold ${t.status === "cancelled" || t.status === "refunded" ? "text-muted line-through" : ""}`}>{fmt(t.total)}</div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <Modal open={!!open} onClose={() => setOpenId(null)} title={open ? `Transaksi ${open.number}` : ""} size="lg"
        footer={open && (
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <button className="btn btn-primary sm:flex-1" onClick={() => setReceipt(open)}><Printer size={16} /> Cetak ulang</button>
            <button className="btn sm:flex-1" onClick={() => duplicate(open)}><CopyPlus size={16} /> Duplikat</button>
            {open.status === "dp" && <button className="btn sm:flex-1" onClick={() => setSettle(open)}><Wallet size={16} /> Lunasi</button>}
            {open.status === "completed" && (
              <button className="btn sm:flex-1" onClick={async () => {
                const r = await prompt({ title: "Retur / refund transaksi", label: "Alasan retur", required: true, multiline: true, confirmText: "Proses retur" });
                if (r) await act(() => refundTransaction(open.id, r, cashier.name), "Transaksi diretur");
              }}><Undo2 size={16} /> Retur</button>
            )}
            {(open.status === "completed" || open.status === "dp") && (
              <button className="btn text-danger sm:flex-1" onClick={async () => {
                const r = await prompt({ title: "Batalkan transaksi", label: "Alasan pembatalan", required: true, multiline: true, confirmText: "Batalkan transaksi" });
                if (r && (await confirm({ title: "Yakin membatalkan?", message: "Transaksi tidak dihapus, hanya ditandai dibatalkan dan tercatat di audit log.", danger: true, confirmText: "Ya, batalkan" }))) await act(() => cancelTransaction(open.id, r, cashier.name), "Transaksi dibatalkan");
              }}><Ban size={16} /> Batalkan</button>
            )}
          </div>
        )}
      >
        {open && <Detail tx={open} />}
      </Modal>

      <ReceiptModal tx={receipt && (all ?? []).find((x) => x.id === receipt.id) ? (all ?? []).find((x) => x.id === receipt.id)! : receipt} onClose={() => setReceipt(null)} />
      {settle && <SettleModal tx={settle} onClose={() => setSettle(null)} onDone={(t) => { setSettle(null); setReceipt(t); }} />}
    </div>
  );
}

function Detail({ tx }: { tx: Transaction }) {
  const { fmt } = useApp();
  const logs = useLiveQuery(async () => (await db.audit.where("entity").equals("transaction").toArray()).filter((l) => l.entityId === tx.id).reverse(), [tx.id]) ?? [];
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className={`badge ${STATUS_CLASS[tx.status]}`}>{STATUS_LABEL[tx.status]}</span>
        <span className="text-muted">{fmtDateTime(tx.createdAt)} · Kasir {tx.cashierName}{tx.customer ? ` · ${tx.customer}` : ""}</span>
      </div>
      <ul className="divide-y divide-line rounded-xl border border-line">
        {tx.items.map((i, k) => (
          <li key={k} className="flex justify-between gap-3 px-3 py-2 text-sm">
            <div><div className="font-medium">{i.name}</div><div className="num text-xs text-muted">{i.qty} × {fmt(i.price)}{i.note ? ` · ${i.note}` : ""}</div></div>
            <div className="num font-medium">{fmt(i.total)}</div>
          </li>
        ))}
      </ul>
      <div className="space-y-1">
        <Row l="Subtotal" v={fmt(tx.subtotal)} />
        {tx.discountAmount > 0 && <Row l="Diskon" v={"-" + fmt(tx.discountAmount)} />}
        {tx.taxAmount > 0 && <Row l={`${tx.taxName} ${tx.taxRate}%`} v={fmt(tx.taxAmount)} />}
        {tx.feeAmount > 0 && <Row l="Biaya tambahan" v={fmt(tx.feeAmount)} />}
        <Row l="Total" v={fmt(tx.total)} b />
        {tx.payments.map((p, i) => <Row key={i} l={PAYMENT_LABEL[p.method as PaymentMethod]} v={fmt(p.amount)} />)}
        {tx.change > 0 && <Row l="Kembalian" v={fmt(tx.change)} />}
        {tx.balance > 0 && <Row l="Sisa tagihan" v={fmt(tx.balance)} b />}
      </div>
      {tx.note && <p className="rounded-xl bg-surface2 p-3 text-sm">Catatan: {tx.note}</p>}
      {(tx.cancelReason || tx.refundReason) && <p className="rounded-xl bg-dangersoft p-3 text-sm text-danger">{tx.cancelReason ? `Dibatalkan: ${tx.cancelReason}` : `Diretur: ${tx.refundReason}`}</p>}
      {logs.length > 0 && (
        <div>
          <div className="label">Audit log</div>
          <ul className="space-y-1 text-xs text-muted">{logs.map((l) => <li key={l.id}>{fmtDateTime(l.at)} · {l.action} · {l.actor}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

function Row({ l, v, b }: { l: string; v: string; b?: boolean }) {
  return (
    <div className={`flex justify-between ${b ? "text-base font-bold" : "text-sm"}`}><span className={b ? "" : "text-muted"}>{l}</span><span className="num">{v}</span></div>
  );
}

function SettleModal({ tx, onClose, onDone }: { tx: Transaction; onClose: () => void; onDone: (t: Transaction) => void }) {
  const { store, cashier, fmt } = useApp();
  const toast = useToast();
  const [method, setMethod] = useState<PaymentMethod>("cash");
  const [amount, setAmount] = useState(tx.balance);
  const [busy, setBusy] = useState(false);
  return (
    <Modal open onClose={onClose} title={`Pelunasan ${tx.number}`} size="sm" footer={
      <button className="btn btn-primary flex-1" disabled={busy || amount < tx.balance} onClick={async () => {
        setBusy(true);
        try { onDone(await settleTransaction(tx.id, [{ method, amount }], cashier.name)); toast("Transaksi dilunasi", "success"); }
        catch (e) { toast(e instanceof Error ? e.message : "Gagal", "error"); setBusy(false); }
      }}>Lunasi {fmt(tx.balance)}</button>
    }>
      <div className="space-y-3">
        <div className="rounded-xl bg-warningsoft p-3 text-center text-warning"><div className="text-xs">Sisa tagihan</div><div className="num text-2xl font-bold">{fmt(tx.balance)}</div></div>
        <select className="input" value={method} onChange={(e) => setMethod(e.target.value as PaymentMethod)}>{PAYMENT_METHODS.map((m) => <option key={m} value={m}>{PAYMENT_LABEL[m]}</option>)}</select>
        <MoneyInput value={amount} onChange={setAmount} currency={store.currency} />
        {amount > tx.balance && method === "cash" && <p className="text-sm text-success">Kembalian {fmt(amount - tx.balance)}</p>}
        {amount < tx.balance && <p className="text-sm text-danger">Nominal kurang dari sisa tagihan.</p>}
      </div>
    </Modal>
  );
}

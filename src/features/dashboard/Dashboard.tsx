"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { ArrowRight, Download, Receipt, ShoppingCart, Store as StoreIcon, User } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, PageHeader, Skeleton } from "@/components/ui";
import { BarChart } from "@/components/charts";
import { OnlineBadge } from "@/layouts/AppShell";
import { useApp } from "@/hooks/useApp";
import { fillDays, summarize } from "@/services/reports";
import { endOfDay, fmtTime, startOfDay } from "@/utils/helpers";
import { PAYMENT_LABEL } from "@/utils/payment";
import type { PaymentMethod } from "@/types";
import { STATUS_CLASS, STATUS_LABEL } from "@/features/transactions/TransactionsPage";

export function Dashboard() {
  const { store, cashier, fmt } = useApp();
  const now = Date.now();
  const week = useLiveQuery(
    () => db.transactions.where("createdAt").between(startOfDay(now - 6 * 86400000), endOfDay(now), true, true).filter((t) => t.storeId === store.id).toArray(),
    [store.id],
  );
  const today = (week ?? []).filter((t) => t.createdAt >= startOfDay(now));
  const s = summarize(today);
  const sw = summarize(week ?? []);
  const chart = fillDays(sw.daily, startOfDay(now - 6 * 86400000), now).map((d) => ({ label: d.day.slice(5), value: d.total }));
  const recent = [...(week ?? [])].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);
  const payEntries = (Object.entries(s.payments) as [PaymentMethod, number][]).filter(([, v]) => v > 0);
  const payTotal = payEntries.reduce((a, [, v]) => a + v, 0);

  return (
    <div className="space-y-4">
      <PageHeader title="Dashboard" subtitle={new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} actions={<Link href="/pos" className="btn btn-primary"><ShoppingCart size={17} /> Buka Kasir</Link>} />

      <div className="card flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-sm">
        <span className="flex items-center gap-1.5"><StoreIcon size={15} className="text-muted" /> {store.name}</span>
        <span className="flex items-center gap-1.5"><User size={15} className="text-muted" /> {cashier.name}</span>
        <OnlineBadge />
        <Link href="/install" className="ml-auto flex items-center gap-1 text-brand"><Download size={15} /> Install aplikasi</Link>
      </div>

      {!week ? (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-24" />)}</div>
      ) : (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <div className="card col-span-2 p-4 lg:col-span-1">
            <div className="text-xs font-medium text-muted">Penjualan hari ini</div>
            <div className="num mt-1 text-3xl font-bold tracking-tight">{fmt(s.sales)}</div>
          </div>
          <div className="card p-4"><div className="text-xs font-medium text-muted">Transaksi</div><div className="num mt-1 text-2xl font-bold">{s.count}</div></div>
          <div className="card p-4"><div className="text-xs font-medium text-muted">Rata-rata</div><div className="num mt-1 text-2xl font-bold">{fmt(s.average)}</div></div>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="card p-4 lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold">Penjualan 7 hari terakhir</h2>
          {sw.count === 0 ? <EmptyState icon={<Receipt size={22} />} title="Belum ada penjualan" hint="Grafik muncul setelah transaksi pertama." action={<Link className="btn btn-primary" href="/pos">Mulai berjualan</Link>} /> : <BarChart data={chart} format={fmt} />}
        </section>
        <section className="card p-4">
          <h2 className="mb-3 text-sm font-semibold">Metode pembayaran (hari ini)</h2>
          {payEntries.length === 0 ? <p className="py-6 text-center text-sm text-muted">Belum ada pembayaran.</p> : (
            <ul className="space-y-3">
              {payEntries.map(([m, v]) => (
                <li key={m}>
                  <div className="mb-1 flex justify-between text-sm"><span>{PAYMENT_LABEL[m]}</span><span className="num font-medium">{fmt(v)}</span></div>
                  <div className="h-1.5 rounded-full bg-surface2"><div className="h-full rounded-full bg-brand" style={{ width: `${(v / payTotal) * 100}%` }} /></div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-4">
          <h2 className="mb-2 text-sm font-semibold">Produk terlaris (7 hari)</h2>
          {sw.topProducts.length === 0 ? <p className="py-6 text-center text-sm text-muted">Belum ada data.</p> : (
            <ol className="divide-y divide-line">
              {sw.topProducts.slice(0, 5).map((p, i) => (
                <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="flex items-center gap-2"><span className="num grid h-6 w-6 place-items-center rounded-lg bg-surface2 text-xs font-semibold">{i + 1}</span>{p.name}</span><span className="num text-muted">{p.qty} terjual</span></li>
              ))}
            </ol>
          )}
        </section>
        <section className="card p-4">
          <div className="mb-2 flex items-center justify-between"><h2 className="text-sm font-semibold">Transaksi terbaru</h2><Link href="/transactions" className="flex items-center gap-1 text-xs text-brand">Semua <ArrowRight size={13} /></Link></div>
          {recent.length === 0 ? <p className="py-6 text-center text-sm text-muted">Belum ada transaksi.</p> : (
            <ul className="divide-y divide-line">
              {recent.map((t) => (
                <li key={t.id} className="flex items-center justify-between gap-2 py-2 text-sm">
                  <div><div className="num font-medium">{t.number}</div><div className="text-xs text-muted">{fmtTime(t.createdAt)} · {t.cashierName}</div></div>
                  <div className="text-right"><div className="num font-semibold">{fmt(t.total)}</div><span className={`badge ${STATUS_CLASS[t.status]}`}>{STATUS_LABEL[t.status]}</span></div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

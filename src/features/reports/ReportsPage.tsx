"use client";

import { useMemo, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { BarChart3, Download, Printer } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, PageHeader, Segmented } from "@/components/ui";
import { BarChart } from "@/components/charts";
import { useApp } from "@/hooks/useApp";
import { fillDays, summarize, toCsv } from "@/services/reports";
import { download, endOfDay, fmtDateTime, inputDate, parseInputDate, startOfDay } from "@/utils/helpers";
import { PAYMENT_LABEL } from "@/utils/payment";
import type { PaymentMethod } from "@/types";

type Period = "day" | "week" | "month" | "custom";

function Card({ l, v, sub }: { l: string; v: string; sub?: string }) {
  return (
    <div className="card p-4"><div className="text-xs font-medium text-muted">{l}</div><div className="num mt-1 text-xl font-bold tracking-tight">{v}</div>{sub && <div className="text-xs text-muted">{sub}</div>}</div>
  );
}

export function ReportsPage() {
  const { store, fmt } = useApp();
  const [period, setPeriod] = useState<Period>("day");
  const [from, setFrom] = useState(inputDate(Date.now() - 6 * 86400000));
  const [to, setTo] = useState(inputDate(Date.now()));

  const range = useMemo(() => {
    const now = Date.now();
    if (period === "day") return [startOfDay(now), endOfDay(now)] as const;
    if (period === "week") return [startOfDay(now - 6 * 86400000), endOfDay(now)] as const;
    if (period === "month") {
      const d = new Date(now);
      return [new Date(d.getFullYear(), d.getMonth(), 1).getTime(), endOfDay(now)] as const;
    }
    return [parseInputDate(from), parseInputDate(to, true)] as const;
  }, [period, from, to]);

  const txs = useLiveQuery(() => db.transactions.where("createdAt").between(range[0], range[1], true, true).filter((t) => t.storeId === store.id).toArray(), [store.id, range[0], range[1]]);
  const s = useMemo(() => summarize(txs ?? []), [txs]);
  const chart = useMemo(() => fillDays(s.daily, range[0], range[1]).map((d) => ({ label: d.day.slice(5), value: d.total })), [s, range]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [["Nomor", "Tanggal", "Kasir", "Pelanggan", "Status", "Subtotal", "Diskon", "Pajak", "Biaya", "Total", "Pembayaran"]];
    for (const t of [...(txs ?? [])].sort((a, b) => a.createdAt - b.createdAt))
      rows.push([t.number, fmtDateTime(t.createdAt), t.cashierName, t.customer, t.status, t.subtotal, t.discountAmount, t.taxAmount, t.feeAmount, t.total, t.payments.map((p) => `${PAYMENT_LABEL[p.method]}:${p.amount}`).join(" | ")]);
    download(`laporan-${inputDate(range[0])}_${inputDate(range[1])}.csv`, toCsv(rows), "text/csv");
  };

  return (
    <div className="space-y-4">
      <PageHeader title="Laporan" subtitle={`${store.name} · ${inputDate(range[0])} s/d ${inputDate(range[1])}`}
        actions={<><button className="btn no-print" onClick={exportCsv} disabled={!txs?.length}><Download size={16} /> CSV</button><button className="btn no-print" onClick={() => window.print()}><Printer size={16} /> Cetak</button></>} />
      <div className="no-print space-y-3">
        <Segmented value={period} onChange={setPeriod} options={[{ value: "day", label: "Harian" }, { value: "week", label: "7 Hari" }, { value: "month", label: "Bulan ini" }, { value: "custom", label: "Custom" }]} />
        {period === "custom" && (
          <div className="grid grid-cols-2 gap-2"><input type="date" className="input" value={from} max={to} onChange={(e) => setFrom(e.target.value)} aria-label="Dari" /><input type="date" className="input" value={to} min={from} onChange={(e) => setTo(e.target.value)} aria-label="Sampai" /></div>
        )}
      </div>

      {txs && txs.length === 0 ? (
        <div className="card"><EmptyState icon={<BarChart3 size={22} />} title="Tidak ada transaksi pada periode ini" hint="Pilih periode lain atau lakukan penjualan di menu Kasir." /></div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Card l="Total penjualan" v={fmt(s.sales)} />
            <Card l="Jumlah transaksi" v={String(s.count)} />
            <Card l="Rata-rata transaksi" v={fmt(s.average)} />
            <Card l="Diskon diberikan" v={fmt(s.discount)} />
            <Card l="Pajak" v={fmt(s.tax)} />
            <Card l="Biaya tambahan" v={fmt(s.fee)} />
            <Card l="Retur" v={fmt(s.refundTotal)} sub={`${s.refundCount} transaksi`} />
            <Card l="Dibatalkan" v={String(s.cancelledCount)} sub={fmt(s.cancelledTotal)} />
          </div>
          {s.dpCount > 0 && <div className="rounded-xl bg-warningsoft px-4 py-3 text-sm text-warning">{s.dpCount} transaksi DP belum lunas · sisa tagihan {fmt(s.dpOutstanding)}</div>}
          <section className="card p-4"><h2 className="mb-3 text-sm font-semibold">Grafik penjualan harian</h2><BarChart data={chart} format={fmt} /></section>
          <div className="grid gap-4 lg:grid-cols-2">
            <section className="card p-4">
              <h2 className="mb-2 text-sm font-semibold">Rincian pembayaran</h2>
              <ul className="divide-y divide-line text-sm">
                {(Object.keys(PAYMENT_LABEL) as PaymentMethod[]).map((m) => <li key={m} className="flex justify-between py-2"><span>{PAYMENT_LABEL[m]}</span><span className="num font-medium">{fmt(s.payments[m])}</span></li>)}
              </ul>
            </section>
            <section className="card p-4">
              <h2 className="mb-2 text-sm font-semibold">Produk terlaris</h2>
              {s.topProducts.length === 0 ? <p className="py-4 text-center text-sm text-muted">Belum ada data.</p> : (
                <table className="w-full text-sm"><thead><tr className="text-left text-xs text-muted"><th className="pb-1 font-medium">Produk</th><th className="pb-1 text-right font-medium">Qty</th><th className="pb-1 text-right font-medium">Omzet</th></tr></thead>
                  <tbody className="divide-y divide-line">{s.topProducts.map((p) => <tr key={p.name}><td className="py-2">{p.name}</td><td className="num py-2 text-right">{p.qty}</td><td className="num py-2 text-right">{fmt(p.revenue)}</td></tr>)}</tbody></table>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}

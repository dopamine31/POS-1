import type { PaymentMethod, Transaction } from "@/types";
import { dayKey } from "@/utils/helpers";

export interface ReportSummary {
  sales: number; // total transaksi lunas
  count: number;
  average: number;
  discount: number;
  tax: number;
  fee: number;
  refundTotal: number;
  refundCount: number;
  cancelledTotal: number;
  cancelledCount: number;
  dpCount: number;
  dpOutstanding: number;
  payments: Record<PaymentMethod, number>;
  topProducts: { name: string; qty: number; revenue: number }[];
  daily: { day: string; total: number; count: number }[];
}

const zeroPay = (): Record<PaymentMethod, number> => ({ cash: 0, qris: 0, debit: 0, transfer: 0, ewallet: 0 });

/** Ringkasan laporan dari transaksi nyata. Transaksi batal/retur tidak masuk penjualan. */
export function summarize(txs: Transaction[]): ReportSummary {
  const s: ReportSummary = {
    sales: 0, count: 0, average: 0, discount: 0, tax: 0, fee: 0,
    refundTotal: 0, refundCount: 0, cancelledTotal: 0, cancelledCount: 0, dpCount: 0, dpOutstanding: 0,
    payments: zeroPay(), topProducts: [], daily: [],
  };
  const prod = new Map<string, { name: string; qty: number; revenue: number }>();
  const days = new Map<string, { total: number; count: number }>();
  for (const t of txs) {
    if (t.status === "cancelled") {
      s.cancelledCount++;
      s.cancelledTotal += t.total;
      continue;
    }
    if (t.status === "refunded") {
      s.refundCount++;
      s.refundTotal += t.total;
      continue;
    }
    if (t.status === "dp") {
      s.dpCount++;
      s.dpOutstanding += t.balance;
    }
    for (const p of t.payments) s.payments[p.method] += p.amount;
    if (t.status !== "completed") continue;
    s.count++;
    s.sales += t.total;
    s.discount += t.discountAmount;
    s.tax += t.taxAmount;
    s.fee += t.feeAmount;
    for (const i of t.items) {
      const k = i.productId || i.name;
      const cur = prod.get(k) ?? { name: i.name, qty: 0, revenue: 0 };
      cur.qty += i.qty;
      cur.revenue += i.total;
      prod.set(k, cur);
    }
    const dk = dayKey(t.createdAt);
    const d = days.get(dk) ?? { total: 0, count: 0 };
    d.total += t.total;
    d.count++;
    days.set(dk, d);
  }
  s.average = s.count ? Math.round(s.sales / s.count) : 0;
  s.topProducts = [...prod.values()].sort((a, b) => b.qty - a.qty || b.revenue - a.revenue).slice(0, 10);
  s.daily = [...days.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([day, v]) => ({ day, ...v }));
  return s;
}

/** Isi hari kosong agar grafik kontinu. */
export function fillDays(daily: ReportSummary["daily"], from: number, to: number): ReportSummary["daily"] {
  const map = new Map(daily.map((d) => [d.day, d]));
  const out: ReportSummary["daily"] = [];
  const cur = new Date(from);
  cur.setHours(0, 0, 0, 0);
  let guard = 0;
  while (cur.getTime() <= to && guard++ < 400) {
    const k = dayKey(cur.getTime());
    out.push(map.get(k) ?? { day: k, total: 0, count: 0 });
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

export function toCsv(rows: (string | number)[][]): string {
  return rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
}

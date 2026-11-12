import type { PaymentLine, PaymentMethod, TxStatus } from "@/types";
import { toInt } from "./money";

export const PAYMENT_LABEL: Record<PaymentMethod, string> = {
  cash: "Tunai",
  qris: "QRIS",
  debit: "Debit",
  transfer: "Transfer",
  ewallet: "E-Wallet",
};
export const PAYMENT_METHODS = Object.keys(PAYMENT_LABEL) as PaymentMethod[];

export interface SettleResult {
  payments: PaymentLine[];
  paid: number;
  cashReceived: number;
  change: number;
  balance: number;
  status: TxStatus;
}

/**
 * Menghitung hasil pembayaran dari uang yang diserahkan (tendered).
 * - Kembalian hanya boleh berasal dari porsi tunai.
 * - Jika kurang dari total: hanya boleh bila allowDp (status "dp").
 */
export function settlePayments(
  total: number,
  tendered: PaymentLine[],
  opts: { allowDp?: boolean; alreadyPaid?: number } = {},
): SettleResult {
  const already = opts.alreadyPaid ?? 0;
  const lines = tendered.map((l) => ({ method: l.method, amount: Math.max(0, toInt(l.amount)) })).filter((l) => l.amount > 0);
  const sum = lines.reduce((s, l) => s + l.amount, 0);
  const cash = lines.filter((l) => l.method === "cash").reduce((s, l) => s + l.amount, 0);
  const remaining = Math.max(0, total - already);
  if (sum <= 0 && remaining > 0 && !opts.allowDp) throw new Error("Pembayaran belum diisi");
  if (sum < remaining) {
    if (!opts.allowDp) throw new Error("Pembayaran kurang dari total");
    if (sum <= 0) throw new Error("Nominal DP harus lebih dari 0");
    return { payments: lines, paid: already + sum, cashReceived: cash, change: 0, balance: remaining - sum, status: "dp" };
  }
  const change = sum - remaining;
  if (change > cash) throw new Error("Kembalian hanya bisa dari pembayaran tunai");
  // kurangi kembalian dari baris tunai (dari belakang)
  let rest = change;
  const net = lines.map((l) => ({ ...l }));
  for (let i = net.length - 1; i >= 0 && rest > 0; i--) {
    if (net[i].method !== "cash") continue;
    const d = Math.min(net[i].amount, rest);
    net[i].amount -= d;
    rest -= d;
  }
  return {
    payments: net.filter((l) => l.amount > 0),
    paid: already + remaining,
    cashReceived: cash,
    change,
    balance: 0,
    status: "completed",
  };
}

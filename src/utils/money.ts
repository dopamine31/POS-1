import type { CartItem, CurrencySettings, DiscountType } from "@/types";

export const DEFAULT_CURRENCY: CurrencySettings = { symbol: "Rp", thousandSep: ".", decimals: 0 };

/** Pastikan nilai berupa integer non-negatif yang aman. */
export function toInt(v: unknown): number {
  const n = typeof v === "number" ? v : parseInt(String(v ?? "").replace(/[^\d-]/g, ""), 10);
  return Number.isFinite(n) ? Math.trunc(n) : 0;
}

export function groupDigits(n: number, sep: string): string {
  const neg = n < 0;
  const s = String(Math.abs(Math.trunc(n))).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return (neg ? "-" : "") + s;
}

/** Format angka tanpa simbol, mis. 12.500 */
export function formatNumber(n: number, c: CurrencySettings = DEFAULT_CURRENCY): string {
  if (c.decimals === 2) {
    const neg = n < 0;
    const abs = Math.abs(Math.trunc(n));
    const whole = Math.floor(abs / 100);
    const frac = String(abs % 100).padStart(2, "0");
    const dec = c.thousandSep === "." ? "," : ".";
    return `${neg ? "-" : ""}${groupDigits(whole, c.thousandSep)}${dec}${frac}`;
  }
  return groupDigits(n, c.thousandSep);
}

/** Format dengan simbol, mis. Rp 12.500 */
export function formatMoney(n: number, c: CurrencySettings = DEFAULT_CURRENCY): string {
  const body = formatNumber(Math.abs(n), c);
  return `${n < 0 ? "-" : ""}${c.symbol ? c.symbol + " " : ""}${body}`;
}

export interface Totals {
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  feeAmount: number;
  total: number;
}

/**
 * Perhitungan total. Semua hasil integer.
 * - Diskon persen dibulatkan ke integer terdekat, tidak melebihi subtotal.
 * - Pajak (eksklusif) = dibulatkan(basis * rate%), rate dihitung dalam basis-point (2 desimal).
 */
export function calcTotals(input: {
  items: Pick<CartItem, "price" | "qty">[];
  discountType: DiscountType;
  discountValue: number;
  taxOn: boolean;
  taxRate: number;
  fee: number;
}): Totals {
  const subtotal = input.items.reduce((s, i) => s + toInt(i.price) * toInt(i.qty), 0);
  let discountAmount =
    input.discountType === "percent"
      ? Math.round((subtotal * Math.min(Math.max(input.discountValue, 0), 100)) / 100)
      : toInt(input.discountValue);
  discountAmount = Math.min(Math.max(discountAmount, 0), subtotal);
  const base = subtotal - discountAmount;
  const bp = Math.round(Math.max(input.taxRate, 0) * 100);
  const taxAmount = input.taxOn ? Math.round((base * bp) / 10000) : 0;
  const feeAmount = Math.max(toInt(input.fee), 0);
  return { subtotal, discountAmount, taxAmount, feeAmount, total: base + taxAmount + feeAmount };
}

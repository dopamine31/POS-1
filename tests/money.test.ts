import { describe, expect, it } from "vitest";
import { calcTotals, formatMoney, toInt } from "@/utils/money";
import { settlePayments } from "@/utils/payment";
import { formatTxNumber, periodKey } from "@/utils/helpers";

describe("calcTotals", () => {
  const items = [
    { price: 18000, qty: 2 },
    { price: 25000, qty: 1 },
  ];
  it("subtotal + diskon nominal + pajak + biaya (integer)", () => {
    const t = calcTotals({ items, discountType: "amount", discountValue: 5000, taxOn: true, taxRate: 11, fee: 2000 });
    expect(t.subtotal).toBe(61000);
    expect(t.discountAmount).toBe(5000);
    expect(t.taxAmount).toBe(6160);
    expect(t.total).toBe(61000 - 5000 + 6160 + 2000);
    for (const v of Object.values(t)) expect(Number.isInteger(v)).toBe(true);
  });
  it("diskon persen dibulatkan & tidak melebihi subtotal", () => {
    expect(calcTotals({ items, discountType: "percent", discountValue: 10, taxOn: false, taxRate: 0, fee: 0 }).discountAmount).toBe(6100);
    expect(calcTotals({ items, discountType: "amount", discountValue: 999999, taxOn: false, taxRate: 0, fee: 0 }).total).toBe(0);
  });
  it("tidak ada kesalahan floating point pada pajak desimal", () => {
    const t = calcTotals({ items: [{ price: 1, qty: 3 }], discountType: "amount", discountValue: 0, taxOn: true, taxRate: 10.5, fee: 0 });
    expect(t.taxAmount).toBe(Math.round(0.315));
    const t2 = calcTotals({ items: [{ price: 19990, qty: 3 }], discountType: "amount", discountValue: 0, taxOn: true, taxRate: 11, fee: 0 });
    expect(t2.taxAmount).toBe(6597); // 59970 * 0.11 = 6596.7
  });
});

describe("format", () => {
  it("formatMoney", () => {
    expect(formatMoney(1234567)).toBe("Rp 1.234.567");
    expect(formatMoney(-5000, { symbol: "$", thousandSep: ",", decimals: 0 })).toBe("-$ 5,000");
  });
  it("toInt", () => {
    expect(toInt("12.500")).toBe(12500);
    expect(toInt(undefined)).toBe(0);
  });
  it("nomor transaksi & periode", () => {
    const ts = new Date(2025, 0, 5, 10).getTime();
    expect(formatTxNumber("{PREFIX}-{YYYY}{MM}{DD}-{SEQ}", "INV", 7, 4, ts)).toBe("INV-20250105-0007");
    expect(periodKey(ts, "monthly")).toBe("202501");
    expect(periodKey(ts, "never")).toBe("all");
  });
});

describe("settlePayments", () => {
  it("tunai dengan kembalian", () => {
    const r = settlePayments(45000, [{ method: "cash", amount: 50000 }]);
    expect(r.change).toBe(5000);
    expect(r.payments).toEqual([{ method: "cash", amount: 45000 }]);
    expect(r.status).toBe("completed");
  });
  it("pembayaran campuran", () => {
    const r = settlePayments(100000, [{ method: "qris", amount: 60000 }, { method: "cash", amount: 50000 }]);
    expect(r.change).toBe(10000);
    expect(r.payments.find((p) => p.method === "cash")?.amount).toBe(40000);
    expect(r.payments.reduce((s, p) => s + p.amount, 0)).toBe(100000);
  });
  it("menolak kembalian dari non-tunai", () => {
    expect(() => settlePayments(10000, [{ method: "qris", amount: 20000 }])).toThrow();
  });
  it("kurang bayar ditolak kecuali DP", () => {
    expect(() => settlePayments(10000, [{ method: "cash", amount: 5000 }])).toThrow();
    const dp = settlePayments(10000, [{ method: "cash", amount: 4000 }], { allowDp: true });
    expect(dp.status).toBe("dp");
    expect(dp.balance).toBe(6000);
  });
});

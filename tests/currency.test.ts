// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { BUILTIN_TEMPLATES } from "@/features/receipt-renderer/builtinTemplates";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { newElement } from "@/features/receipt-renderer/elements";
import { layoutReceipt } from "@/features/receipt-renderer/textLayout";
import type { ReceiptTemplate } from "@/types";

function tpl(align: boolean): ReceiptTemplate {
  const els = (["subtotal", "total"] as const).map((t) => ({ ...newElement(t), alignCurrency: align, big: false }));
  return { ...BUILTIN_TEMPLATES[0], elements: els };
}
const texts = (t: ReceiptTemplate, cols: number) => layoutReceipt(t, SAMPLE_DATA, cols).flatMap((l) => (l.kind === "text" ? [l.text] : []));

describe("sejajarkan simbol mata uang", () => {
  it.each([32, 48])("posisi Rp sama di semua baris nominal (%i kolom)", (cols) => {
    const lines = texts(tpl(true), cols);
    expect(lines.length).toBeGreaterThanOrEqual(2);
    const pos = lines.map((l) => l.indexOf("Rp"));
    expect(pos.every((p) => p > 0)).toBe(true);
    expect(new Set(pos).size, JSON.stringify(lines)).toBe(1);
    for (const l of lines) {
      expect(l.length).toBeLessThanOrEqual(cols);
      expect(l).toMatch(/\d$/);
    }
  });
  it("tanpa opsi: perilaku lama (Rp tetap menempel ke angka)", () => {
    const lines = texts(tpl(false), 32);
    for (const l of lines) expect(l).toMatch(/Rp \d/);
  });
});

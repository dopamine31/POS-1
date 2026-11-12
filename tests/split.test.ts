// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { BUILTIN_TEMPLATES } from "@/features/receipt-renderer/builtinTemplates";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { newElement } from "@/features/receipt-renderer/elements";
import { layoutReceipt } from "@/features/receipt-renderer/textLayout";
import type { ReceiptTemplate, TemplateElement } from "@/types";

function only(patch: Partial<TemplateElement>): ReceiptTemplate {
  const el = { ...newElement("split"), ...patch } as TemplateElement;
  return { ...BUILTIN_TEMPLATES[0], elements: [el] };
}
function textLines(t: ReceiptTemplate, cols: number) {
  return layoutReceipt(t, SAMPLE_DATA, cols).flatMap((l) => (l.kind === "text" ? [l.text] : []));
}

describe("elemen Baris 2 kolom (split)", () => {
  it.each([32, 48])("teks kiri + kanan jadi satu baris, maks %i kolom", (cols) => {
    const lines = textLines(only({ leftSource: "text", leftText: "Meja 5", rightSource: "text", rightText: "Budi", showLabel: false }), cols);
    expect(lines).toHaveLength(1);
    expect(lines[0].startsWith("Meja 5")).toBe(true);
    expect(lines[0].endsWith("Budi")).toBe(true);
    expect(lines[0].length).toBeLessThanOrEqual(cols);
  });

  it("kasir kiri, no. struk kanan: tetap satu baris di 32 kolom", () => {
    const lines = textLines(only({ leftSource: "cashier", rightSource: "receiptNo", showLabel: false }), 32);
    expect(lines).toHaveLength(1);
    expect(lines[0].length).toBeLessThanOrEqual(32);
    expect(lines[0].trim().length).toBeGreaterThan(0);
  });

  it("tanggal kiri, jam kanan: satu baris", () => {
    const lines = textLines(only({ leftSource: "date", rightSource: "time", showLabel: false }), 32);
    expect(lines).toHaveLength(1);
    expect(lines[0].length).toBeLessThanOrEqual(32);
  });

  it("showLabel menambah label di depan nilai", () => {
    const lines = textLines(only({ leftSource: "cashier", rightSource: "receiptNo", showLabel: true }), 48);
    expect(lines).toHaveLength(1);
    expect(lines[0].startsWith("Kasir")).toBe(true);
  });

  it("elemen split tanpa sumber (data lama) tidak error", () => {
    const t = only({ leftSource: undefined, rightSource: undefined });
    expect(() => layoutReceipt(t, SAMPLE_DATA, 32)).not.toThrow();
  });
});

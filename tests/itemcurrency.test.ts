// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { BUILTIN_TEMPLATES } from "@/features/receipt-renderer/builtinTemplates";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { newElement } from "@/features/receipt-renderer/elements";
import { layoutReceipt } from "@/features/receipt-renderer/textLayout";
import type { ReceiptTemplate } from "@/types";

function tpl(on: boolean): ReceiptTemplate {
  const el = { ...newElement("items"), itemLayout: "stacked" as const, showUnitPrice: true, itemCurUnit: on, itemCurTotal: on };
  return { ...BUILTIN_TEMPLATES[0], elements: [el] };
}
const texts = (t: ReceiptTemplate, cols: number) => layoutReceipt(t, SAMPLE_DATA, cols).flatMap((l) => (l.kind === "text" ? [l.text] : []));

describe("simbol mata uang di daftar item", () => {
  it("aktif: harga satuan dan jumlah memakai Rp, tidak melebihi kolom", () => {
    const lines = texts(tpl(true), 48);
    expect(lines.some((l) => /Rp \d/.test(l))).toBe(true);
    for (const l of lines) expect(l.length).toBeLessThanOrEqual(48);
  });
  it("mati: perilaku lama, tanpa Rp", () => {
    expect(texts(tpl(false), 48).some((l) => l.includes("Rp"))).toBe(false);
  });
});

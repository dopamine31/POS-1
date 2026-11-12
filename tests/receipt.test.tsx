// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BUILTIN_TEMPLATES } from "@/features/receipt-renderer/builtinTemplates";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { buildBlocks } from "@/features/receipt-renderer/blocks";
import { layoutReceipt, receiptToPlainText } from "@/features/receipt-renderer/textLayout";
import { renderEscPos, testPrintLines } from "@/features/receipt-renderer/escpos";
import { renderPdf } from "@/features/receipt-renderer/pdf";
import { code128Modules, code128Symbols, PATTERNS } from "@/features/barcode/code128";
import { DEFAULT_PRINTER } from "@/database/db";

describe("18 template bawaan", () => {
  it("ada minimal 18, id unik, builtin", () => {
    expect(BUILTIN_TEMPLATES.length).toBeGreaterThanOrEqual(18);
    expect(new Set(BUILTIN_TEMPLATES.map((t) => t.id)).size).toBe(BUILTIN_TEMPLATES.length);
    expect(BUILTIN_TEMPLATES.every((t) => t.builtin)).toBe(true);
  });
  it("layout benar-benar berbeda (bukan sekadar warna)", () => {
    const sig = (t: (typeof BUILTIN_TEMPLATES)[number]) =>
      JSON.stringify(t.elements.map((e) => [e.type, e.align, e.font, e.size, e.weight, e.itemLayout, e.dividerStyle, e.invert, e.border, e.visible]));
    const sigs = BUILTIN_TEMPLATES.map(sig);
    expect(new Set(sigs).size).toBe(BUILTIN_TEMPLATES.length);
    const itemLayouts = new Set(BUILTIN_TEMPLATES.map((t) => t.elements.find((e) => e.type === "items")?.itemLayout));
    expect(itemLayouts.size).toBeGreaterThanOrEqual(5);
    const fonts = new Set(BUILTIN_TEMPLATES.map((t) => t.elements.find((e) => e.type === "storeName")?.font));
    expect(fonts.size).toBe(3);
  });
  it.each(BUILTIN_TEMPLATES.map((t) => [t.id, t] as const))("render HTML: %s", (_id, t) => {
    const { container, getByTestId } = render(<ReceiptView template={t} data={SAMPLE_DATA} widthMm={58} />);
    expect(getByTestId("receipt-paper")).toBeTruthy();
    expect(container.textContent).toContain("Kopi Susu");
    expect(container.textContent).toMatch(/90\.800/);
    cleanup();
  });
  it.each([32, 48])("layout teks tidak melebihi %i kolom (semua template)", (cols) => {
    for (const t of BUILTIN_TEMPLATES) {
      for (const l of layoutReceipt(t, SAMPLE_DATA, cols)) {
        if (l.kind === "text") expect(l.text.length, `${t.id}: "${l.text}"`).toBeLessThanOrEqual(l.big ? Math.floor(cols / 2) : cols);
      }
    }
  });
});

describe("renderer", () => {
  const tpl = BUILTIN_TEMPLATES[1];
  it("packing slip tanpa harga", () => {
    const text = receiptToPlainText(tpl, { ...SAMPLE_DATA, docType: "packing" }, 32);
    expect(text).not.toMatch(/90\.800/);
    expect(text).not.toMatch(/TOTAL/);
    expect(text).not.toMatch(/36\.000/);
    const withTitle = receiptToPlainText(BUILTIN_TEMPLATES.find((t) => t.id === "modern")!, { ...SAMPLE_DATA, docType: "packing" }, 32);
    expect(withTitle).toContain("PACKING SLIP");
  });
  it("struk retur & DP memakai judul berbeda", () => {
    expect(receiptToPlainText(tpl, { ...SAMPLE_DATA, docType: "return" }, 32)).toContain("TOTAL RETUR");
    const blocks = buildBlocks(BUILTIN_TEMPLATES.find((t) => t.id === "modern")!, { ...SAMPLE_DATA, docType: "dp", balance: 1000 });
    expect(blocks.some((b) => b.kind === "row" && b.label === "Sisa")).toBe(true);
  });
  it("ESC/POS: init, teks, QR, barcode, potong kertas", () => {
    const lines = layoutReceipt(BUILTIN_TEMPLATES.find((t) => t.id === "qr-focus")!, SAMPLE_DATA, 32);
    const bytes = renderEscPos(lines, { ...DEFAULT_PRINTER, autoCut: true });
    expect([bytes[0], bytes[1]]).toEqual([0x1b, 0x40]);
    const s = Array.from(bytes).join(",");
    expect(s).toContain("29,40,107"); // GS ( k  (QR)
    expect(s).toContain("29,86,66,3"); // GS V B 3 (cut)
    const bc = renderEscPos(layoutReceipt(BUILTIN_TEMPLATES.find((t) => t.id === "barcode-focus")!, SAMPLE_DATA, 32), DEFAULT_PRINTER);
    expect(Array.from(bc).join(",")).toContain("29,107,73"); // GS k 73 (Code128)
    expect(testPrintLines(48, 80).length).toBeGreaterThan(8);
  });
  it("PDF valid untuk 58mm dan 80mm", () => {
    for (const [mm, cols] of [[58, 32], [80, 48]] as const) {
      const pdf = renderPdf(layoutReceipt(tpl, SAMPLE_DATA, cols), { widthMm: mm, cols });
      const txt = Buffer.from(pdf).toString("latin1");
      expect(txt.startsWith("%PDF-1.4")).toBe(true);
      expect(txt.trimEnd().endsWith("%%EOF")).toBe(true);
      expect(txt).toContain("Kopi Susu");
      const m = /startxref\n(\d+)/.exec(txt)!;
      expect(txt.slice(Number(m[1]), Number(m[1]) + 4)).toBe("xref");
    }
  });
});

describe("Code 128", () => {
  it("setiap pola lebar 11 modul (stop 13)", () => {
    PATTERNS.forEach((p, i) => expect(p.split("").reduce((s, c) => s + Number(c), 0)).toBe(i === 106 ? 13 : 11));
  });
  it("checksum contoh baku Wikipedia (PJJ123C = 54 dengan Start A; Start B +1 = 55)", () => {
    const s = code128Symbols("PJJ123C");
    expect(s[s.length - 2]).toBe(55);
  });
  it("modul diawali & diakhiri quiet zone", () => {
    const m = code128Modules("12345");
    expect(m.slice(0, 10).every((x) => !x)).toBe(true);
    expect(m[10]).toBe(true);
  });
});

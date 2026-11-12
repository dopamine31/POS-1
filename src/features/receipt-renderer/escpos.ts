import type { PrinterSettings } from "@/types";
import { code128Symbols } from "@/features/barcode/code128";
import { sanitize128 } from "@/features/barcode/code128";
import type { Line } from "./textLayout";
import { toAscii } from "./textLayout";

const ESC = 0x1b;
const GS = 0x1d;

export class EscPosBuilder {
  private buf: number[] = [];
  raw(...b: number[]) {
    this.buf.push(...b);
    return this;
  }
  text(s: string) {
    for (const c of toAscii(s)) this.buf.push(c.charCodeAt(0));
    return this;
  }
  init() {
    return this.raw(ESC, 0x40);
  }
  align(a: "left" | "center" | "right") {
    return this.raw(ESC, 0x61, a === "left" ? 0 : a === "center" ? 1 : 2);
  }
  bold(on: boolean) {
    return this.raw(ESC, 0x45, on ? 1 : 0);
  }
  big(on: boolean) {
    return this.raw(GS, 0x21, on ? 0x11 : 0x00);
  }
  lineSpacing(n: number) {
    return this.raw(ESC, 0x33, Math.max(0, Math.min(255, Math.round(n))));
  }
  feed(n: number) {
    return this.raw(ESC, 0x64, Math.max(0, Math.min(255, n)));
  }
  lf() {
    return this.raw(0x0a);
  }
  cut() {
    return this.raw(GS, 0x56, 0x42, 0x03);
  }
  drawer() {
    return this.raw(ESC, 0x70, 0x00, 0x19, 0xfa);
  }
  density(level: 0 | 1 | 2) {
    // ESC 7 n1 n2 n3 (heating dots, heating time, interval) — tidak semua printer mendukung
    return this.raw(ESC, 0x37, 7, level === 0 ? 60 : level === 2 ? 140 : 80, 2);
  }
  qr(value: string, moduleSize: number) {
    const data = Array.from(toAscii(value)).map((c) => c.charCodeAt(0));
    const len = data.length + 3;
    return this.raw(GS, 0x28, 0x6b, 4, 0, 0x31, 0x41, 0x32, 0)
      .raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x43, Math.max(1, Math.min(16, moduleSize)))
      .raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x45, 0x31)
      .raw(GS, 0x28, 0x6b, len & 0xff, len >> 8, 0x31, 0x50, 0x30, ...data)
      .raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x51, 0x30);
  }
  barcode128(value: string, height: number) {
    const s = sanitize128(value).slice(0, 40);
    const data = [0x7b, 0x42, ...Array.from(s).map((c) => c.charCodeAt(0))];
    return this.raw(GS, 0x68, height, GS, 0x77, 2, GS, 0x48, 2).raw(GS, 0x6b, 73, data.length, ...data);
  }
  raster(w: number, h: number, data: Uint8Array) {
    const bytesPerRow = Math.ceil(w / 8);
    this.raw(GS, 0x76, 0x30, 0, bytesPerRow & 0xff, bytesPerRow >> 8, h & 0xff, h >> 8);
    for (const b of data) this.buf.push(b);
    return this;
  }
  build(): Uint8Array {
    return Uint8Array.from(this.buf);
  }
}

/** Renderer ESC/POS: Line[] → byte printer. */
export function renderEscPos(lines: Line[], p: PrinterSettings, opts: { cut?: boolean } = {}): Uint8Array {
  const b = new EscPosBuilder().init();
  if (p.density !== 1) b.density(p.density);
  b.lineSpacing(30 * p.lineSpacing);
  for (const l of lines) {
    switch (l.kind) {
      case "text": {
        b.align(l.align).bold(l.bold).big(l.big).text(l.text).lf();
        b.bold(false).big(false);
        break;
      }
      case "qr":
        b.align("center").qr(l.value, l.size).lf();
        break;
      case "barcode":
        b.align("center").barcode128(l.value, l.height).lf();
        break;
      case "image":
        if (l.bitmap) b.align("center").raster(l.bitmap.w, l.bitmap.h, l.bitmap.data).lf();
        break;
      case "feed":
        b.feed(l.n);
        break;
    }
  }
  b.align("left").feed(p.autoCut ? 4 : 3);
  if (opts.cut ?? p.autoCut) b.cut();
  if (p.openDrawer) b.drawer();
  return b.build();
}

/** Struk uji: alignment, bold, besar, QR, barcode. */
export function testPrintLines(cols: number, paper: number): Line[] {
  const rule = "-".repeat(cols);
  const t = (text: string, o: Partial<Extract<Line, { kind: "text" }>> = {}): Line => ({ kind: "text", text, align: "left", bold: false, big: false, ...o });
  return [
    t("TEST PRINT", { align: "center", bold: true, big: true }),
    t("POS & Receipt Studio", { align: "center" }),
    t(rule),
    t(`Kertas ${paper}mm / ${cols} kolom`),
    t("Rata kiri"),
    t("Rata tengah", { align: "center" }),
    t("Rata kanan", { align: "right" }),
    t("Teks tebal", { bold: true }),
    t("0123456789".repeat(4).slice(0, cols)),
    t(rule),
    { kind: "qr", value: "https://github.com", size: 5 },
    { kind: "barcode", value: "TEST-12345", height: 50 },
    t(rule),
    t("Jika semua baris terbaca rapi,", { align: "center" }),
    t("printer siap digunakan.", { align: "center" }),
  ];
}

export { code128Symbols };

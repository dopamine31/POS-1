import type { ReceiptData, ReceiptTemplate } from "@/types";
import { buildBlocks, type ItemRow } from "./blocks";

export type Align = "left" | "center" | "right";
export interface Bitmap {
  w: number;
  h: number;
  /** 1 bit per pixel, MSB dulu, 1 = hitam */
  data: Uint8Array;
}
export type Line =
  | { kind: "text"; text: string; align: Align; bold: boolean; big: boolean }
  | { kind: "qr"; value: string; size: number }
  | { kind: "barcode"; value: string; height: number }
  | { kind: "image"; src: string; bitmap?: Bitmap }
  | { kind: "feed"; n: number };

const ASCII_MAP: Record<string, string> = { "×": "x", "·": ".", "↳": ">", "–": "-", "—": "-", "‘": "'", "’": "'", "“": '"', "”": '"', "…": "...", "•": "*" };
export function toAscii(s: string): string {
  return Array.from(s)
    .map((c) => {
      if (ASCII_MAP[c]) return ASCII_MAP[c];
      const code = c.charCodeAt(0);
      return code >= 32 && code <= 126 ? c : "?";
    })
    .join("");
}

export function wrap(text: string, width: number): string[] {
  const out: string[] = [];
  for (const para of text.split("\n")) {
    let cur = "";
    for (const word of para.split(" ")) {
      let w = word;
      while (w.length > width) {
        if (cur) {
          out.push(cur);
          cur = "";
        }
        out.push(w.slice(0, width));
        w = w.slice(width);
      }
      if (!cur) cur = w;
      else if (cur.length + 1 + w.length <= width) cur += " " + w;
      else {
        out.push(cur);
        cur = w;
      }
    }
    out.push(cur);
  }
  return out;
}

export function twoCol(left: string, right: string, width: number): string[] {
  if (!right) return wrap(left, width);
  if (left.length + right.length + 1 <= width) return [left + " ".repeat(width - left.length - right.length) + right];
  const lines = wrap(left, Math.max(8, width - right.length - 1));
  const last = lines[lines.length - 1];
  if (last.length + right.length + 1 <= width) {
    lines[lines.length - 1] = last + " ".repeat(width - last.length - right.length) + right;
    return lines;
  }
  return [...lines, " ".repeat(Math.max(0, width - right.length)) + right];
}

const DIV_CHAR: Record<string, string> = { dashed: "-", dotted: ".", solid: "_", double: "=", stars: "*", equals: "=", thick: "=" };

function itemLines(rows: ItemRow[], layout: string, width: number, showQty: boolean, hasPrice: boolean): string[] {
  const out: string[] = [];
  const totalW = Math.max(0, ...rows.map((r) => r.total.length)) + 1;
  if (layout === "table") out.push(...twoCol("Item", hasPrice ? "Total" : "Qty", width), "-".repeat(width));
  rows.forEach((r, idx) => {
    const code = r.code ? `[${r.code}] ` : "";
    const qtyUnit = `${r.qty}${r.unit ? ` x ${r.unit}` : ""}`;
    switch (layout) {
      case "inline":
        out.push(...twoCol(`${showQty ? r.qty + "x " : ""}${code}${r.name}`, r.total, width));
        break;
      case "compact":
        out.push(...twoCol(`${r.name}${showQty ? " x" + r.qty : ""}`, r.total, width));
        break;
      case "table": {
        out.push(...wrap(code + r.name, width));
        const unitW = Math.max(0, width - 5 - totalW);
        out.push((showQty ? String(r.qty) : "").padEnd(5) + (r.unit || "").padStart(unitW) + (hasPrice ? r.total.padStart(totalW) : ""));
        break;
      }
      case "detailed":
        out.push(...wrap(`${idx + 1}. ${r.name}`, width));
        if (r.code) out.push("   Kode: " + r.code);
        out.push(...twoCol(`   ${showQty ? "Qty " + qtyUnit : ""}`, r.total, width));
        break;
      default:
        out.push(...wrap(code + r.name, width));
        out.push(...twoCol(showQty ? `  ${qtyUnit}` : "", r.total, width));
    }
    if (r.note) out.push(...wrap(`  > ${r.note}`, width));
  });
  return out;
}

/** Layout berbasis kolom karakter — dasar untuk ESC/POS, PDF, gambar & teks WhatsApp. */
export function layoutReceipt(tpl: ReceiptTemplate, data: ReceiptData, cols: number): Line[] {
  const lines: Line[] = [];
  for (const b of buildBlocks(tpl, data)) {
    const el = b.el;
    const big = el.big;
    const width = big ? Math.max(8, Math.floor(cols / 2)) : cols;
    const bold = el.weight >= 700 || el.invert;
    const tx = (s: string) => toAscii(el.uppercase ? s.toUpperCase() : s);
    const push = (text: string, align: Align = el.align) => lines.push({ kind: "text", text: tx(text), align, bold, big });
    switch (b.kind) {
      case "text":
        b.lines.forEach((l) => wrap(tx(l), width).forEach((w) => push(w)));
        break;
      case "pair":
        wrap(tx(`${b.label}${b.label ? ": " : ""}${b.value}`), width).forEach((w) => push(w));
        break;
      case "row": {
        const l = tx(b.label);
        const v = tx(b.value);
        // teks 2x yang tidak muat satu baris → turun ke ukuran normal agar tidak terpotong
        if (big && l.length + v.length + 1 > width) {
          twoCol(l, v, cols).forEach((w) => lines.push({ kind: "text", text: w, align: "left", bold, big: false }));
        } else twoCol(l, v, width).forEach((w) => push(w, "left"));
        break;
      }
      case "items":
        itemLines(b.rows.map((r) => ({ ...r, name: tx(r.name), note: tx(r.note) })), el.itemLayout, cols, el.showQty, b.hasPrice).forEach((t) =>
          lines.push({ kind: "text", text: toAscii(t), align: "left", bold: false, big: false }),
        );
        break;
      case "divider": {
        const n = Math.max(4, Math.round((cols * el.widthPct) / 100));
        lines.push({ kind: "text", text: DIV_CHAR[el.dividerStyle].repeat(n), align: el.widthPct < 100 ? el.align : "left", bold: false, big: false });
        break;
      }
      case "qr":
        lines.push({ kind: "qr", value: b.value, size: Math.max(3, Math.min(8, Math.round(el.qrSize / 20))) });
        break;
      case "barcode":
        lines.push({ kind: "barcode", value: b.value, height: Math.max(30, Math.min(150, el.barcodeHeight)) });
        break;
      case "logo":
        lines.push({ kind: "image", src: b.src });
        break;
      case "spacer":
        lines.push({ kind: "feed", n: 1 });
        break;
      case "signature":
        lines.push({ kind: "feed", n: 3 });
        lines.push({ kind: "text", text: "-".repeat(Math.floor(cols * 0.7)), align: el.align, bold: false, big: false });
        lines.push({ kind: "text", text: tx(b.label), align: el.align, bold: false, big: false });
        break;
    }
  }
  return lines;
}

/** Teks polos (untuk WhatsApp / clipboard). */
export function receiptToPlainText(tpl: ReceiptTemplate, data: ReceiptData, cols = 32): string {
  const pad = (t: string, a: Align, big: boolean) => {
    const w = big ? Math.floor(cols / 2) : cols;
    const s = a === "center" ? " ".repeat(Math.max(0, Math.floor((w - t.length) / 2))) + t : a === "right" ? " ".repeat(Math.max(0, w - t.length)) + t : t;
    return s;
  };
  return layoutReceipt(tpl, data, cols)
    .map((l) => {
      if (l.kind === "text") return pad(l.text, l.align, l.big);
      if (l.kind === "feed") return "\n".repeat(Math.max(0, l.n - 1));
      return null;
    })
    .filter((l): l is string => l !== null)
    .join("\n");
}

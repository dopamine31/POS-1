import { code128Modules } from "@/features/barcode/code128";
import { qrMatrix } from "@/features/barcode/qr";
import type { Line } from "./textLayout";
import { toAscii } from "./textLayout";

const MM = 72 / 25.4;

/** Renderer PDF mandiri (tanpa library): font Courier, tinggi halaman otomatis. */
export function renderPdf(lines: Line[], opts: { widthMm: number; cols: number; marginMm?: number }): Uint8Array {
  const margin = (opts.marginMm ?? 3) * MM;
  const pageW = opts.widthMm * MM;
  const innerW = pageW - margin * 2;
  const fs = innerW / (opts.cols * 0.6);
  const cw = fs * 0.6;
  const lh = fs * 1.25;
  // Hitung tinggi
  const heightOf = (l: Line) => {
    switch (l.kind) {
      case "text":
        return l.big ? lh * 2 : lh;
      case "qr":
        return Math.min(innerW * 0.6, 110) + lh;
      case "barcode":
        return l.height * 0.6 + lh * 1.5;
      case "feed":
        return lh * l.n;
      default:
        return 0;
    }
  };
  const total = lines.reduce((s, l) => s + heightOf(l), 0) + margin * 2;
  const pageH = Math.max(total, 60);
  const ops: string[] = [];
  let y = pageH - margin;
  const esc = (s: string) => toAscii(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const xFor = (w: number, a: string) => (a === "center" ? margin + (innerW - w) / 2 : a === "right" ? margin + innerW - w : margin);
  for (const l of lines) {
    const h = heightOf(l);
    if (l.kind === "text") {
      const size = l.big ? fs * 2 : fs;
      const w = l.text.length * size * 0.6;
      y -= h;
      ops.push(`BT /${l.bold ? "F2" : "F1"} ${size.toFixed(2)} Tf ${xFor(w, l.align).toFixed(2)} ${(y + h * 0.22).toFixed(2)} Td (${esc(l.text)}) Tj ET`);
    } else if (l.kind === "qr") {
      const m = qrMatrix(l.value);
      const n = m.size + 4;
      const size = Math.min(innerW * 0.6, 110);
      const s = size / n;
      const x0 = margin + (innerW - size) / 2;
      const y0 = y - size;
      for (let r = 0; r < m.size; r++) for (let c = 0; c < m.size; c++) if (m.get(c, r)) ops.push(`${(x0 + (c + 2) * s).toFixed(2)} ${(y0 + (n - 3 - r) * s).toFixed(2)} ${s.toFixed(2)} ${s.toFixed(2)} re f`);
      y -= h;
    } else if (l.kind === "barcode") {
      const mods = code128Modules(l.value);
      const mw = Math.min(innerW / mods.length, 1.6);
      const bw = mods.length * mw;
      const x0 = margin + (innerW - bw) / 2;
      const bh = l.height * 0.6;
      const y0 = y - bh;
      let i = 0;
      while (i < mods.length) {
        if (mods[i]) {
          let j = i;
          while (j < mods.length && mods[j]) j++;
          ops.push(`${(x0 + i * mw).toFixed(2)} ${y0.toFixed(2)} ${((j - i) * mw).toFixed(2)} ${bh.toFixed(2)} re f`);
          i = j;
        } else i++;
      }
      const ts = fs * 0.8;
      ops.push(`BT /F1 ${ts.toFixed(2)} Tf ${(margin + (innerW - l.value.length * ts * 0.6) / 2).toFixed(2)} ${(y0 - ts - 2).toFixed(2)} Td (${esc(l.value)}) Tj ET`);
      y -= h;
    } else if (l.kind === "feed") y -= h;
  }
  const stream = ops.join("\n");
  const objs: string[] = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(2)} ${pageH.toFixed(2)}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`,
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold /Encoding /WinAnsiEncoding >>",
  ];
  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objs.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((o) => (pdf += `${String(o).padStart(10, "0")} 00000 n \n`));
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const out = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i++) out[i] = pdf.charCodeAt(i) & 0xff;
  return out;
}

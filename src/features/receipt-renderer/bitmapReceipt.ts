import type { PrinterSettings, ReceiptData, ReceiptTemplate, TemplateElement } from "@/types";
import { code128Modules } from "@/features/barcode/code128";
import { qrMatrix } from "@/features/barcode/qr";
import { buildBlocks, type Block, type ItemRow } from "./blocks";
import { EscPosBuilder } from "./escpos";
import { ensureFontsLoaded, fontCss } from "./fonts";
import type { Align, Bitmap } from "./textLayout";

type Ctx = CanvasRenderingContext2D;
interface Op {
  h: number;
  draw: (g: Ctx, y: number) => void;
}
interface Style {
  font: string;
  px: number;
  lh: number;
  ls: string;
}
interface Row {
  left?: string;
  right?: string;
  mid?: string;
  midEnd?: number;
  indent?: number;
  align?: Align;
  rule?: boolean;
  cur?: string;
  colW?: number;
  numChars?: number;
}

const BAND = 128;
const THRESHOLD = 150;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = () => rej(new Error("Gagal memuat gambar"));
    i.src = src;
  });
}

function styleOf(el: TemplateElement, scale: number, k = 1): Style {
  const px = Math.max(8, el.size * scale * k);
  const weight = el.invert ? Math.max(700, el.weight) : el.weight;
  return {
    font: `${el.italic ? "italic " : ""}${weight} ${px}px ${fontCss(el.font)}`,
    px,
    lh: px * Math.max(1, el.lineHeight),
    ls: `${el.letterSpacing * scale * k}px`,
  };
}

function apply(c: Ctx, st: Style) {
  c.font = st.font;
  c.textBaseline = "top";
  c.textAlign = "left";
  (c as unknown as { letterSpacing: string }).letterSpacing = st.ls;
}

/** Bungkus teks berdasarkan lebar piksel (font proporsional aman). */
function wrapPx(c: Ctx, text: string, maxW: number): string[] {
  const out: string[] = [];
  for (const para of text.split("\n")) {
    let line = "";
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const t = line ? line + " " + word : word;
      if (c.measureText(t).width <= maxW) {
        line = t;
        continue;
      }
      if (line) {
        out.push(line);
        line = "";
      }
      let chunk = "";
      for (const ch of Array.from(word)) {
        if (chunk && c.measureText(chunk + ch).width > maxW) {
          out.push(chunk);
          chunk = ch;
        } else chunk += ch;
      }
      line = chunk;
    }
    out.push(line);
  }
  return out;
}

/** Kiri + kanan satu baris; kalau tidak muat, kiri dibungkus dan kanan turun ke baris terakhir. */
function twoColRows(c: Ctx, st: Style, left: string, right: string, maxW: number, indent = 0): Row[] {
  apply(c, st);
  const room = maxW - indent;
  if (!right) return wrapPx(c, left, room).map((l) => ({ left: l, indent }));
  const wr = c.measureText(right).width;
  const gap = st.px * 0.6;
  if (c.measureText(left).width + wr + gap <= room) return [{ left, right, indent }];
  const rows: Row[] = wrapPx(c, left, Math.max(room * 0.3, room - wr - gap)).map((l) => ({ left: l, indent }));
  const last = rows[rows.length - 1];
  if (c.measureText(last.left ?? "").width + wr + gap <= room) last.right = right;
  else rows.push({ left: "", right, indent });
  return rows;
}

function rowOp(st: Style, r: Row, bx: number, bw: number, invert: boolean, align: Align): Op {
  if (r.rule) {
    const h = Math.max(4, st.px * 0.5);
    return {
      h,
      draw: (g, y) => {
        g.fillStyle = "#000";
        g.fillRect(bx, y + h / 2 - 1, bw, 2);
      },
    };
  }
  const pad = invert ? st.px * 0.3 : 0;
  return {
    h: st.lh,
    draw: (g, y) => {
      apply(g, st);
      if (invert) {
        g.fillStyle = "#000";
        g.fillRect(bx, y, bw, st.lh);
      }
      g.fillStyle = invert ? "#fff" : "#000";
      const ty = y + (st.lh - st.px) / 2;
      const left = r.left ?? "";
      const ind = r.indent ?? 0;
      if (r.right !== undefined || r.mid !== undefined) {
        g.fillText(left, bx + pad + ind, ty);
        if (r.mid) g.fillText(r.mid, bx + (r.midEnd ?? bw) - g.measureText(r.mid).width - pad, ty);
        if (r.right) g.fillText(r.right, bx + bw - pad - g.measureText(r.right).width, ty);
        if (r.cur && r.colW) g.fillText(r.cur, bx + bw - pad - r.colW, ty);
      } else {
        const w = g.measureText(left).width;
        const a = r.align ?? align;
        const x = a === "center" ? bx + (bw - w) / 2 : a === "right" ? bx + bw - w - pad : bx + pad + ind;
        g.fillText(left, x, ty);
      }
      g.fillStyle = "#000";
    },
  };
}

function itemRows(c: Ctx, st: Style, items: ItemRow[], el: TemplateElement, hasPrice: boolean, bw: number, tx: (s: string) => string): Row[] {
  apply(c, st);
  const out: Row[] = [];
  const gap = st.px * 0.6;
  const totalW = Math.max(0, ...items.map((r) => c.measureText(r.total).width));
  const ind = c.measureText("   ").width;
  const showQty = el.showQty;
  if (el.itemLayout === "table") {
    out.push(...twoColRows(c, st, "Item", hasPrice ? "Total" : "Qty", bw));
    out.push({ rule: true });
  }
  items.forEach((r, idx) => {
    const name = tx(r.name);
    const code = r.code ? `[${r.code}] ` : "";
    const qtyUnit = `${r.qty}${r.unit ? ` x ${r.unit}` : ""}`;
    switch (el.itemLayout) {
      case "inline":
        out.push(...twoColRows(c, st, `${showQty ? r.qty + "x " : ""}${code}${name}`, r.total, bw));
        break;
      case "compact":
        out.push(...twoColRows(c, st, `${name}${showQty ? " x" + r.qty : ""}`, r.total, bw));
        break;
      case "table":
        wrapPx(c, code + name, bw).forEach((l) => out.push({ left: l }));
        out.push({ left: showQty ? String(r.qty) : "", mid: r.unit, midEnd: hasPrice ? bw - totalW - gap : bw, right: hasPrice ? r.total : undefined });
        break;
      case "detailed":
        wrapPx(c, `${idx + 1}. ${name}`, bw).forEach((l) => out.push({ left: l }));
        if (r.code) out.push({ left: "Kode: " + r.code, indent: ind });
        out.push(...twoColRows(c, st, showQty ? "Qty " + qtyUnit : "", r.total, bw, ind));
        break;
      default:
        wrapPx(c, code + name, bw).forEach((l) => out.push({ left: l }));
        out.push(...twoColRows(c, st, showQty ? qtyUnit : "", r.total, bw, ind));
    }
    if (r.note) wrapPx(c, "> " + tx(r.note), bw - ind).forEach((l) => out.push({ left: l, indent: ind }));
  });
  return out;
}

const gapOp = (h: number): Op => ({ h: Math.max(0, h), draw: () => {} });

function blockOps(c: Ctx, b: Block, W: number, scale: number, imgs: Map<string, HTMLImageElement | null>): Op[] {
  const el = b.el;
  const st = styleOf(el, scale, el.big ? 2 : 1);
  const tx = (s: string) => (el.uppercase ? s.toUpperCase() : s);
  const bw = Math.round((W * Math.min(100, Math.max(10, el.widthPct))) / 100);
  const bx = el.align === "center" ? Math.round((W - bw) / 2) : el.align === "right" ? W - bw : 0;
  const placeX = (w: number) => (el.align === "center" ? bx + (bw - w) / 2 : el.align === "right" ? bx + bw - w : bx);
  const rowsOps = (rows: Row[], s: Style = st) => rows.map((r) => rowOp(s, r, bx, bw, el.invert, el.align));
  let ops: Op[] = [];

  switch (b.kind) {
    case "text": {
      apply(c, st);
      ops = rowsOps(b.lines.flatMap((l) => wrapPx(c, tx(l), bw).map((t) => ({ left: t }))));
      break;
    }
    case "pair": {
      apply(c, st);
      ops = rowsOps(wrapPx(c, tx(`${b.label}${b.label ? ": " : ""}${b.value}`), bw).map((t) => ({ left: t })));
      break;
    }
    case "row": {
      if (b.cur) {
        apply(c, st);
        const colW = c.measureText(b.cur).width + st.px * 0.4 + c.measureText("0".repeat(b.numChars ?? b.value.length)).width;
        const rows: Row[] = wrapPx(c, tx(b.label), Math.max(bw * 0.3, bw - colW - st.px * 0.6)).map((l) => ({ left: l, align: "left" as Align }));
        Object.assign(rows[rows.length - 1], { right: b.value, cur: b.cur, colW });
        ops = rowsOps(rows);
        break;
      }
      ops = rowsOps(twoColRows(c, st, tx(b.label), tx(b.value), bw).map((r) => ({ ...r, align: "left" as Align })));
      break;
    }
    case "items": {
      ops = rowsOps(itemRows(c, st, b.rows, el, b.hasPrice, bw, tx).map((r) => ({ align: "left" as Align, ...r })));
      break;
    }
    case "divider": {
      const style = el.dividerStyle;
      if (style === "stars" || style === "equals") {
        apply(c, st);
        const ch = style === "stars" ? "*" : "=";
        const n = Math.max(1, Math.floor(bw / c.measureText(ch).width));
        ops = rowsOps([{ left: ch.repeat(n), align: "left" }]);
        break;
      }
      const h = style === "thick" || style === "double" ? 14 : 10;
      ops = [
        {
          h,
          draw: (g, y) => {
            g.strokeStyle = "#000";
            const my = y + h / 2;
            const line = (yy: number, w: number, dash: number[]) => {
              g.lineWidth = w;
              g.setLineDash(dash);
              g.beginPath();
              g.moveTo(bx, yy);
              g.lineTo(bx + bw, yy);
              g.stroke();
            };
            if (style === "dashed") line(my, 2, [8, 6]);
            else if (style === "dotted") line(my, 3, [2, 5]);
            else if (style === "double") {
              line(my - 3, 2, []);
              line(my + 3, 2, []);
            } else if (style === "thick") line(my, 6, []);
            else line(my, 2, []);
            g.setLineDash([]);
          },
        },
      ];
      break;
    }
    case "qr": {
      const m = qrMatrix(b.value);
      const s = Math.max(2, Math.min(Math.floor((el.qrSize * scale) / m.size), Math.floor(bw / m.size)));
      const w = s * m.size;
      ops = [
        {
          h: w + 8,
          draw: (g, y) => {
            const x0 = placeX(w);
            g.fillStyle = "#000";
            for (let r = 0; r < m.size; r++) for (let q = 0; q < m.size; q++) if (m.get(q, r)) g.fillRect(x0 + q * s, y + 4 + r * s, s, s);
          },
        },
      ];
      break;
    }
    case "barcode": {
      const mods = code128Modules(b.value);
      const mw = Math.max(1, Math.floor(bw / mods.length));
      const bh = Math.max(40, Math.min(160, Math.round(el.barcodeHeight * scale)));
      const lab = styleOf(el, scale, 1);
      const total = mw * mods.length;
      ops = [
        {
          h: bh + lab.lh + 8,
          draw: (g, y) => {
            const x0 = placeX(total);
            g.fillStyle = "#000";
            mods.forEach((on, k) => on && g.fillRect(x0 + k * mw, y + 2, mw, bh));
            apply(g, lab);
            g.fillText(b.value, x0 + (total - g.measureText(b.value).width) / 2, y + bh + 6);
          },
        },
      ];
      break;
    }
    case "logo": {
      const im = imgs.get(b.src);
      if (!im || !im.naturalWidth) break;
      const w = Math.min(bw, Math.round(el.logoSize * scale));
      const h = Math.round((im.naturalHeight / im.naturalWidth) * w);
      ops = [
        {
          h: h + 6,
          draw: (g, y) => {
            g.filter = "grayscale(1) contrast(1.5)";
            g.drawImage(im, placeX(w), y + 3, w, h);
            g.filter = "none";
          },
        },
      ];
      break;
    }
    case "spacer": {
      ops = [gapOp(6 * scale)];
      break;
    }
    case "signature": {
      const lineW = Math.round(bw * 0.7);
      apply(c, st);
      ops = [
        gapOp(30 * scale),
        {
          h: 6,
          draw: (g, y) => {
            g.fillStyle = "#000";
            g.fillRect(placeX(lineW), y + 2, lineW, 2);
          },
        },
        ...rowsOps(wrapPx(c, tx(b.label), bw).map((t) => ({ left: t }))),
      ];
      break;
    }
  }
  return [gapOp(el.marginTop * scale), ...ops, gapOp(el.marginBottom * scale)];
}

/** Gambar seluruh struk (font per elemen) → bitmap 1-bit. Hanya di browser. */
export async function renderBitmap(tpl: ReceiptTemplate, data: ReceiptData, paper: 58 | 80): Promise<Bitmap> {
  const W = paper === 58 ? 384 : 576;
  const scale = W / (((paper === 58 ? 48 : 72) * 96) / 25.4);
  const blocks = buildBlocks(tpl, data);
  await ensureFontsLoaded(blocks.map((b) => b.el.font));

  const imgs = new Map<string, HTMLImageElement | null>();
  await Promise.all(
    blocks.map(async (b) => {
      if (b.kind === "logo" && !imgs.has(b.src)) {
        imgs.set(b.src, null);
        imgs.set(b.src, await loadImage(b.src).catch(() => null));
      }
    }),
  );

  const scratch = document.createElement("canvas").getContext("2d")!;
  const ops = blocks.flatMap((b) => blockOps(scratch, b, W, scale, imgs));
  const H = Math.max(8, Math.ceil(ops.reduce((a, o) => a + o.h, 0)) + 8);

  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext("2d", { willReadFrequently: true })!;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, W, H);
  let y = 0;
  for (const o of ops) {
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    o.draw(ctx, Math.round(y));
    y += o.h;
  }

  const px = ctx.getImageData(0, 0, W, H).data;
  const bpr = W / 8;
  const bits = new Uint8Array(bpr * H);
  for (let yy = 0; yy < H; yy++)
    for (let x = 0; x < W; x++) {
      const i = (yy * W + x) * 4;
      if (0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2] < THRESHOLD) bits[yy * bpr + (x >> 3)] |= 0x80 >> (x & 7);
    }
  return { w: W, h: H, data: bits };
}

/** Byte ESC/POS: bitmap dikirim per pita (GS v 0) agar buffer printer BLE tidak penuh. */
export async function renderBitmapEscPos(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings): Promise<Uint8Array> {
  const bmp = await renderBitmap(tpl, data, p.paperWidth);
  const bpr = bmp.w / 8;
  const b = new EscPosBuilder().init();
  if (p.density !== 1) b.density(p.density);
  b.align("left");
  for (let y = 0; y < bmp.h; y += BAND) {
    const hh = Math.min(BAND, bmp.h - y);
    b.raster(bmp.w, hh, bmp.data.subarray(y * bpr, (y + hh) * bpr));
  }
  b.feed(p.autoCut ? 4 : 3);
  if (p.autoCut) b.cut();
  if (p.openDrawer) b.drawer();
  return b.build();
}

/** Bitmap 1-bit → PNG: pratinjau persis seperti yang akan dicetak. */
export function bitmapToPng(bmp: Bitmap): Promise<Blob> {
  const cv = document.createElement("canvas");
  cv.width = bmp.w;
  cv.height = bmp.h;
  const g = cv.getContext("2d")!;
  const img = g.createImageData(bmp.w, bmp.h);
  const bpr = bmp.w / 8;
  for (let y = 0; y < bmp.h; y++)
    for (let x = 0; x < bmp.w; x++) {
      const black = bmp.data[y * bpr + (x >> 3)] & (0x80 >> (x & 7));
      const i = (y * bmp.w + x) * 4;
      const v = black ? 0 : 255;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  g.putImageData(img, 0, 0);
  return new Promise((res, rej) => cv.toBlob((b) => (b ? res(b) : rej(new Error("Gagal membuat gambar"))), "image/png"));
}

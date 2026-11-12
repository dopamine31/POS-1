import { code128Modules } from "@/features/barcode/code128";
import { qrMatrix } from "@/features/barcode/qr";
import type { Bitmap, Line } from "./textLayout";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = () => rej(new Error("Gagal memuat gambar"));
    i.src = src;
  });
}

/** Logo → bitmap hitam-putih (dithering ambang) untuk printer thermal. */
export async function imageToMono(src: string, widthDots: number): Promise<Bitmap> {
  const img = await loadImage(src);
  const w = Math.max(8, Math.floor(widthDots / 8) * 8);
  const h = Math.max(1, Math.round((img.height / img.width) * w));
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  const px = ctx.getImageData(0, 0, w, h).data;
  const bpr = w / 8;
  const data = new Uint8Array(bpr * h);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const lum = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
      if (lum < 140) data[y * bpr + (x >> 3)] |= 0x80 >> (x & 7);
    }
  return { w, h, data };
}

/** Siapkan bitmap logo untuk semua baris bertipe image (browser saja). */
export async function prepareImages(lines: Line[], dots: number): Promise<Line[]> {
  return Promise.all(
    lines.map(async (l) => {
      if (l.kind !== "image") return l;
      try {
        return { ...l, bitmap: await imageToMono(l.src, dots) };
      } catch {
        return l;
      }
    }),
  );
}

/** Renderer gambar PNG dari Line[] (untuk ekspor & share). */
export async function renderPng(lines: Line[], cols: number): Promise<Blob> {
  const charW = 12;
  const lineH = 26;
  const pad = 20;
  const width = cols * charW + pad * 2;
  const heights = await Promise.all(
    lines.map(async (l) => {
      if (l.kind === "text") return l.big ? lineH * 2 : lineH;
      if (l.kind === "qr") return 190;
      if (l.kind === "barcode") return l.height + 40;
      if (l.kind === "feed") return lineH * l.n;
      if (l.kind === "image") {
        try {
          const im = await loadImage(l.src);
          return Math.min(160, (im.height / im.width) * 160) + 10;
        } catch {
          return 0;
        }
      }
      return 0;
    }),
  );
  const total = heights.reduce((a, b) => a + b, 0) + pad * 2;
  const scale = 2;
  const c = document.createElement("canvas");
  c.width = width * scale;
  c.height = total * scale;
  const ctx = c.getContext("2d")!;
  ctx.scale(scale, scale);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, total);
  ctx.fillStyle = "#000";
  ctx.textBaseline = "alphabetic";
  let y = pad;
  const inner = cols * charW;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const h = heights[i];
    if (l.kind === "text") {
      const k = l.big ? 2 : 1;
      ctx.font = `${l.bold ? "bold " : ""}${20 * k}px "Courier New", Courier, monospace`;
      const w = l.text.length * charW * k;
      const x = l.align === "center" ? pad + (inner - w) / 2 : l.align === "right" ? pad + inner - w : pad;
      ctx.fillText(l.text, x, y + h - 7 * k);
    } else if (l.kind === "qr") {
      const m = qrMatrix(l.value);
      const s = Math.floor(170 / (m.size + 4));
      const x0 = pad + (inner - s * m.size) / 2;
      for (let r = 0; r < m.size; r++) for (let q = 0; q < m.size; q++) if (m.get(q, r)) ctx.fillRect(x0 + q * s, y + 10 + r * s, s, s);
    } else if (l.kind === "barcode") {
      const mods = code128Modules(l.value);
      const mw = Math.max(1, Math.floor(inner / mods.length));
      const x0 = pad + (inner - mw * mods.length) / 2;
      mods.forEach((on, k) => on && ctx.fillRect(x0 + k * mw, y + 4, mw, l.height));
      ctx.font = '14px "Courier New", monospace';
      ctx.fillText(l.value, pad + (inner - l.value.length * 8.4) / 2, y + l.height + 24);
    } else if (l.kind === "image" && h > 0) {
      const im = await loadImage(l.src);
      const w = Math.min(160, inner);
      const hh = (im.height / im.width) * w;
      ctx.filter = "grayscale(1) contrast(1.5)";
      ctx.drawImage(im, pad + (inner - w) / 2, y + 5, w, hh);
      ctx.filter = "none";
    }
    y += h;
  }
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Gagal membuat gambar"))), "image/png"));
}

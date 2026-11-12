// Generator ikon PWA tanpa dependency (PNG ditulis manual via zlib).
// Jalankan: node scripts/gen-icons.mjs
import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const c = Buffer.alloc(4);
  c.writeUInt32BE(crc(td));
  return Buffer.concat([len, td, c]);
};
function png(size, pixel) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixel(x / size, y / size);
      const o = y * (size * 4 + 1) + 1 + x * 4;
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]);
}

// Desain: latar teal gelap, struk putih dengan tepi bergerigi & garis teks.
const BG = [15, 118, 110];
const BG2 = [8, 74, 69];
const PAPER = [255, 255, 255];
const INK = [15, 118, 110];

function inRoundRect(u, v, x0, y0, x1, y1, r) {
  if (u < x0 || u > x1 || v < y0 || v > y1) return false;
  const cx = Math.min(Math.max(u, x0 + r), x1 - r);
  const cy = Math.min(Math.max(v, y0 + r), y1 - r);
  return (u - cx) ** 2 + (v - cy) ** 2 <= r * r;
}

function sample(u, v, { maskable, rounded }) {
  // skala konten: maskable memakai safe-zone 80%
  const s = maskable ? 0.62 : 0.74;
  const cu = (u - 0.5) / s + 0.5;
  const cv = (v - 0.5) / s + 0.5;
  let bg = BG;
  const t = (u + v) / 2;
  bg = BG.map((c, i) => Math.round(c + (BG2[i] - c) * t));
  let col = [...bg, 255];
  if (rounded && !inRoundRect(u, v, 0, 0, 1, 1, 0.22)) return [0, 0, 0, 0];
  // kertas struk
  const x0 = 0.27, x1 = 0.73, y0 = 0.14, y1 = 0.86;
  if (cu >= x0 && cu <= x1 && cv >= y0 && cv <= y1) {
    const teeth = 0.045;
    const zig = cv > y1 - teeth ? ((cu - x0) / teeth) % 1 : 0;
    const edge = y1 - (zig < 0.5 ? zig : 1 - zig) * teeth;
    if (cv <= edge) {
      col = [...PAPER, 255];
      // baris teks
      const lines = [0.26, 0.34, 0.42, 0.5];
      for (const [i, ly] of lines.entries()) {
        const w = i === 0 ? 0.3 : 0.38;
        if (Math.abs(cv - ly) < 0.018 && cu > x0 + 0.04 && cu < x0 + 0.04 + w) col = [...INK, 255];
      }
      // total (blok tebal)
      if (cv > 0.6 && cv < 0.68 && cu > x0 + 0.04 && cu < x1 - 0.04) col = [...INK, 255];
      // barcode
      if (cv > 0.73 && cv < 0.8 && cu > x0 + 0.04 && cu < x1 - 0.04) {
        const k = Math.floor((cu - x0 - 0.04) / 0.012);
        if ((k * 7 + 3) % 5 < 2) col = [20, 30, 40, 255];
      }
    }
  }
  return col;
}

function ssaa(size, opts) {
  return png(size, (u, v) => {
    const n = 2;
    let r = 0, g = 0, b = 0, a = 0;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const p = sample(u + (i + 0.5) / n / size - 0.5 / size, v + (j + 0.5) / n / size - 0.5 / size, opts);
        r += p[0] * p[3]; g += p[1] * p[3]; b += p[2] * p[3]; a += p[3];
      }
    return a === 0 ? [0, 0, 0, 0] : [Math.round(r / a), Math.round(g / a), Math.round(b / a), Math.round(a / (n * n))];
  });
}

mkdirSync("public/icons", { recursive: true });
writeFileSync("public/icons/icon-192.png", ssaa(192, { rounded: true }));
writeFileSync("public/icons/icon-512.png", ssaa(512, { rounded: true }));
writeFileSync("public/icons/icon-maskable-512.png", ssaa(512, { maskable: true, rounded: false }));
writeFileSync("public/icons/apple-touch-icon.png", ssaa(180, { rounded: false })); // iOS membulatkan sendiri
writeFileSync(
  "public/icons/icon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f766e"/><stop offset="1" stop-color="#084a45"/></linearGradient></defs><rect width="512" height="512" rx="112" fill="url(#g)"/><path d="M148 84h216v344l-18-14-18 14-18-14-18 14-18-14-18 14-18-14-18 14-18-14-18 14-18-14z" fill="#fff"/><g fill="#0f766e"><rect x="180" y="132" width="110" height="12" rx="6"/><rect x="180" y="172" width="150" height="12" rx="6"/><rect x="180" y="212" width="150" height="12" rx="6"/><rect x="180" y="252" width="150" height="12" rx="6"/><rect x="180" y="304" width="152" height="40" rx="8"/></g></svg>`,
);
writeFileSync("public/.nojekyll", "");
console.log("Ikon PWA dibuat di public/icons");

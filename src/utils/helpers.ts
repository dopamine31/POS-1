export function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return "id-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const pad = (n: number, l = 2) => String(n).padStart(l, "0");

export function fmtDate(ts: number): string {
  const d = new Date(ts);
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}
export function fmtTime(ts: number): string {
  const d = new Date(ts);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
export function fmtDateTime(ts: number): string {
  return `${fmtDate(ts)} ${fmtTime(ts)}`;
}
export function dayKey(ts: number): string {
  const d = new Date(ts);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
export function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}
export function endOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(23, 59, 59, 999);
  return d.getTime();
}
export function inputDate(ts: number): string {
  return dayKey(ts);
}
export function parseInputDate(v: string, end = false): number {
  const [y, m, d] = v.split("-").map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1);
  return end ? endOfDay(dt.getTime()) : startOfDay(dt.getTime());
}

export function periodKey(ts: number, period: "never" | "daily" | "monthly" | "yearly"): string {
  const d = new Date(ts);
  if (period === "daily") return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  if (period === "monthly") return `${d.getFullYear()}${pad(d.getMonth() + 1)}`;
  if (period === "yearly") return `${d.getFullYear()}`;
  return "all";
}

export function formatTxNumber(
  format: string,
  prefix: string,
  seq: number,
  seqPad: number,
  ts: number,
): string {
  const d = new Date(ts);
  return format
    .replace(/\{PREFIX\}/g, prefix)
    .replace(/\{YYYY\}/g, String(d.getFullYear()))
    .replace(/\{YY\}/g, String(d.getFullYear()).slice(2))
    .replace(/\{MM\}/g, pad(d.getMonth() + 1))
    .replace(/\{DD\}/g, pad(d.getDate()))
    .replace(/\{SEQ\}/g, String(seq).padStart(seqPad, "0"));
}

export function download(filename: string, data: Blob | string, mime = "application/octet-stream") {
  const blob = typeof data === "string" ? new Blob([data], { type: mime }) : data;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function bytesLabel(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

export function clamp(n: number, a: number, b: number) {
  return Math.min(Math.max(n, a), b);
}

/** Baca file gambar → data URL yang diperkecil (hemat IndexedDB). */
export function fileToDataUrl(file: File, maxSize = 320, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Gagal membaca file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("File bukan gambar valid"));
      img.onload = () => {
        const r = Math.min(1, maxSize / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(img.width * r));
        c.height = Math.max(1, Math.round(img.height * r));
        const ctx = c.getContext("2d")!;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", quality));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

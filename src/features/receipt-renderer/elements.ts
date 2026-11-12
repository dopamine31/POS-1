import type { ElementType, TemplateElement } from "@/types";
import { uid } from "@/utils/helpers";

export const ELEMENT_LABEL: Record<ElementType, string> = {
  logo: "Logo toko",
  storeName: "Nama toko",
  storeAddress: "Alamat toko",
  storePhone: "Nomor telepon",
  title: "Judul struk",
  receiptNo: "Nomor struk",
  date: "Tanggal",
  time: "Jam",
  cashier: "Kasir",
  customer: "Pelanggan",
  items: "Daftar item",
  subtotal: "Subtotal",
  discount: "Diskon",
  tax: "Pajak",
  fee: "Biaya tambahan",
  total: "Grand total",
  payment: "Metode pembayaran",
  cashReceived: "Uang diterima",
  change: "Kembalian",
  balance: "Sisa tagihan",
  barcode: "Barcode",
  qr: "QR Code",
  text: "Teks kustom",
  note: "Catatan transaksi",
  divider: "Garis pemisah",
  footer: "Footer",
  thanks: "Pesan terima kasih",
  signature: "Tanda tangan",
  spacer: "Spasi",
  split: "Baris 2 kolom (kiri-kanan)",
};

const DEFAULT_LABEL: Partial<Record<ElementType, string>> = {
  receiptNo: "No",
  date: "Tanggal",
  time: "Jam",
  cashier: "Kasir",
  customer: "Pelanggan",
  subtotal: "Subtotal",
  discount: "Diskon",
  fee: "Biaya",
  total: "TOTAL",
  payment: "Bayar",
  cashReceived: "Tunai",
  change: "Kembali",
  balance: "Sisa",
  text: "Teks kustom",
  thanks: "Terima kasih",
  signature: "Tanda tangan",
};

export function defaultElement(type: ElementType, o: Partial<TemplateElement> = {}): TemplateElement {
  const base: TemplateElement = {
    id: uid(),
    type,
    visible: true,
    text: DEFAULT_LABEL[type] ?? "",
    showLabel: true,
    align: "left",
    font: "mono",
    size: 12,
    weight: 400,
    italic: false,
    uppercase: false,
    letterSpacing: 0,
    lineHeight: 1.35,
    marginTop: 0,
    marginBottom: 0,
    paddingX: 0,
    paddingY: 0,
    widthPct: 100,
    border: "none",
    invert: false,
    dividerStyle: "dashed",
    itemLayout: "stacked",
    showCode: false,
    showQty: true,
    showUnitPrice: true,
    showNote: true,
    codeSource: "number",
    barcodeHeight: 48,
    qrSize: 110,
    logoSize: 64,
    leftSource: "date",
    rightSource: "time",
    leftText: "",
    rightText: "",
    big: false,
  };
  const per: Partial<Record<ElementType, Partial<TemplateElement>>> = {
    storeName: { align: "center", weight: 700, size: 16, big: true },
    storeAddress: { align: "center", size: 11 },
    storePhone: { align: "center", size: 11 },
    logo: { align: "center" },
    title: { align: "center", weight: 700, size: 13 },
    footer: { align: "center", size: 11 },
    thanks: { align: "center", size: 12 },
    note: { size: 11, showLabel: true, text: "Catatan" },
    barcode: { align: "center" },
    qr: { align: "center" },
    total: { weight: 700, size: 14, big: true },
    spacer: { marginTop: 8 },
    signature: { align: "center", size: 11 },
    split: { size: 11, showLabel: false },
  };
  return { ...base, ...per[type], ...o };
}

/** Tambah elemen baru dengan ID baru (untuk Template Builder). */
export function newElement(type: ElementType): TemplateElement {
  return defaultElement(type);
}

export const ADDABLE_ELEMENTS: ElementType[] = [
  "logo", "storeName", "storeAddress", "storePhone", "title", "receiptNo", "date", "time", "cashier", "customer",
  "items", "subtotal", "discount", "tax", "fee", "total", "payment", "cashReceived", "change", "balance",
  "barcode", "qr", "text", "note", "divider", "footer", "thanks", "signature", "spacer", "split",
];

export const PAPER_MM: Record<string, number> = { "58": 58, "80": 80, a4: 210 };
/** Lebar area cetak efektif (mm). */
export const PRINTABLE_MM: Record<string, number> = { "58": 48, "80": 72, a4: 190 };

/** Lebar kertas efektif: 58/80 mengikuti printer terpasang; A4/custom mengikuti template. */
export function effectiveWidthMm(paper: { size: string; customMm: number }, printerMm: number): number {
  return paper.size === "a4" || paper.size === "custom" ? paperWidthMm(paper) : printerMm;
}

export function paperWidthMm(paper: { size: string; customMm: number }): number {
  return paper.size === "custom" ? Math.min(Math.max(paper.customMm || 58, 30), 300) : PAPER_MM[paper.size];
}

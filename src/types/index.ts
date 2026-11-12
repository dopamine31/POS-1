/** Semua nominal uang = integer (Rupiah / satuan terkecil mata uang). */

export type ID = string;

export type ResetPeriod = "never" | "daily" | "monthly" | "yearly";
export type PaperSize = "58" | "80" | "a4" | "custom";
export type PrintConnection = "browser" | "bluetooth" | "usb" | "share";

export interface CurrencySettings {
  symbol: string;
  thousandSep: "." | "," | " " | "";
  decimals: 0 | 2;
}

export interface PrinterSettings {
  connection: PrintConnection;
  paperWidth: 58 | 80;
  /** jumlah karakter per baris font A (58mm=32, 80mm=48) */
  charCols: number;
  copies: number;
  fontSize: number; // px untuk cetak browser
  margin: number; // mm
  lineSpacing: number; // 1 = normal
  density: 0 | 1 | 2; // 0 ringan, 1 normal, 2 gelap (jika didukung)
  autoCut: boolean;
  openDrawer: boolean;
  deviceName?: string;
}

export interface Store {
  id: ID;
  name: string;
  address: string;
  phone: string;
  logo?: string; // data URL
  currency: CurrencySettings;
  prefix: string;
  numberFormat: string; // {PREFIX} {YYYY} {YY} {MM} {DD} {SEQ}
  seqPad: number;
  resetPeriod: ResetPeriod;
  defaultTemplateId: string;
  header: string;
  footer: string;
  taxEnabled: boolean;
  taxName: string;
  taxRate: number; // persen, boleh desimal
  stockEnabled: boolean;
  printer: PrinterSettings;
  createdAt: number;
}

export interface Cashier {
  id: ID;
  name: string;
  active: boolean;
  createdAt: number;
}

export interface Category {
  id: ID;
  storeId: ID;
  name: string;
}

export interface Product {
  id: ID;
  storeId: ID;
  sku: string;
  barcode: string;
  name: string;
  description: string;
  image?: string;
  costPrice?: number;
  price: number;
  categoryId?: ID;
  unit: string;
  trackStock: boolean;
  stock: number;
  minStock: number;
  active: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface CartItem {
  productId: ID;
  name: string;
  sku: string;
  price: number;
  qty: number;
  note?: string;
}

export type DiscountType = "amount" | "percent";

export interface Cart {
  draftId: ID;
  items: CartItem[];
  discountType: DiscountType;
  discountValue: number;
  fee: number;
  taxOn: boolean;
  customer: string;
  note: string;
}

export type PaymentMethod = "cash" | "qris" | "debit" | "transfer" | "ewallet";

export interface PaymentLine {
  method: PaymentMethod;
  amount: number; // nilai yang dihitung (kas sudah dikurangi kembalian)
}

export type TxStatus = "completed" | "dp" | "cancelled" | "refunded";

export interface Transaction {
  id: ID;
  number: string;
  storeId: ID;
  cashierId: ID;
  cashierName: string;
  customer: string;
  note: string;
  items: (CartItem & { total: number })[];
  subtotal: number;
  discountType: DiscountType;
  discountValue: number;
  discountAmount: number;
  taxName: string;
  taxRate: number;
  taxAmount: number;
  feeAmount: number;
  total: number;
  payments: PaymentLine[];
  paid: number; // total pembayaran yang dihitung
  cashReceived: number;
  change: number;
  balance: number; // sisa (DP)
  status: TxStatus;
  createdAt: number;
  updatedAt: number;
  cancelReason?: string;
  cancelledAt?: number;
  refundedAt?: number;
  refundReason?: string;
  settledAt?: number;
}

export interface HeldCart {
  id: ID;
  storeId: ID;
  label: string;
  cart: Cart;
  createdAt: number;
}

export interface AuditLog {
  id?: number;
  at: number;
  action: string;
  entity: string;
  entityId: string;
  detail: string;
  actor: string;
  storeId?: ID;
}

export type DocType = "sale" | "packing" | "return" | "dp" | "settlement";

/* ───────── Template ───────── */
export type ElementType =
  | "logo"
  | "storeName"
  | "storeAddress"
  | "storePhone"
  | "title"
  | "receiptNo"
  | "date"
  | "time"
  | "cashier"
  | "customer"
  | "items"
  | "subtotal"
  | "discount"
  | "tax"
  | "fee"
  | "total"
  | "payment"
  | "cashReceived"
  | "change"
  | "balance"
  | "barcode"
  | "qr"
  | "text"
  | "note"
  | "divider"
  | "footer"
  | "thanks"
  | "signature"
  | "spacer";

export type FontFamily = "mono" | "sans" | "serif";
export type DividerStyle = "dashed" | "dotted" | "solid" | "double" | "stars" | "equals" | "thick";
export type ItemLayout = "stacked" | "inline" | "table" | "compact" | "detailed";
export type BorderStyle = "none" | "solid" | "dashed" | "dotted" | "double";

export interface TemplateElement {
  id: string;
  type: ElementType;
  visible: boolean;
  text: string; // label / teks kustom
  showLabel: boolean;
  align: "left" | "center" | "right";
  font: FontFamily;
  size: number; // px (layar)
  weight: 400 | 500 | 700 | 900;
  italic: boolean;
  uppercase: boolean;
  letterSpacing: number; // px
  lineHeight: number;
  marginTop: number;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
  widthPct: number; // 10..100
  border: BorderStyle;
  invert: boolean; // teks putih di latar hitam
  dividerStyle: DividerStyle;
  itemLayout: ItemLayout;
  showCode: boolean;
  showQty: boolean;
  showUnitPrice: boolean;
  showNote: boolean;
  codeSource: "number" | "custom";
  barcodeHeight: number;
  qrSize: number;
  logoSize: number;
  /** teks 2x pada printer thermal */
  big: boolean;
}

export interface ReceiptTemplate {
  id: string;
  name: string;
  description: string;
  builtin: boolean;
  favorite: boolean;
  paper: { size: PaperSize; customMm: number };
  elements: TemplateElement[];
  createdAt: number;
  updatedAt: number;
}

export interface ReceiptLineItem {
  name: string;
  sku: string;
  qty: number;
  price: number;
  total: number;
  note?: string;
}

export interface ReceiptData {
  docType: DocType;
  store: {
    name: string;
    address: string;
    phone: string;
    logo?: string;
    header: string;
    footer: string;
    currency: CurrencySettings;
  };
  number: string;
  createdAt: number;
  cashier: string;
  customer: string;
  note: string;
  items: ReceiptLineItem[];
  subtotal: number;
  discountAmount: number;
  discountLabel: string;
  taxAmount: number;
  taxLabel: string;
  feeAmount: number;
  total: number;
  payments: PaymentLine[];
  cashReceived: number;
  change: number;
  balance: number;
}

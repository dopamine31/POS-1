import type { DocType, ReceiptData, Store, Transaction } from "@/types";
import { DEFAULT_CURRENCY } from "@/utils/money";

export const DOC_TITLE: Record<DocType, string> = {
  sale: "STRUK PENJUALAN",
  packing: "PACKING SLIP",
  return: "STRUK RETUR",
  dp: "STRUK DP (UANG MUKA)",
  settlement: "STRUK PELUNASAN",
};

export const DOC_LABEL: Record<DocType, string> = {
  sale: "Struk penjualan",
  packing: "Packing slip (tanpa harga)",
  return: "Struk retur",
  dp: "Struk DP",
  settlement: "Struk pelunasan",
};

/** Bangun data struk dari transaksi tersimpan. */
export function receiptDataFromTx(tx: Transaction, store: Store, docType: DocType = "sale"): ReceiptData {
  const discountLabel = tx.discountType === "percent" && tx.discountValue > 0 ? `Diskon ${tx.discountValue}%` : "Diskon";
  return {
    docType,
    store: {
      name: store.name,
      address: store.address,
      phone: store.phone,
      logo: store.logo,
      header: store.header,
      footer: store.footer,
      currency: store.currency,
    },
    number: tx.number,
    createdAt: docType === "settlement" && tx.settledAt ? tx.settledAt : tx.createdAt,
    cashier: tx.cashierName,
    customer: tx.customer,
    note: docType === "return" && tx.refundReason ? `Retur: ${tx.refundReason}` : tx.note,
    items: tx.items.map((i) => ({ name: i.name, sku: i.sku, qty: i.qty, price: i.price, total: i.total, note: i.note })),
    subtotal: tx.subtotal,
    discountAmount: tx.discountAmount,
    discountLabel,
    taxAmount: tx.taxAmount,
    taxLabel: tx.taxRate > 0 ? `${tx.taxName} ${tx.taxRate}%` : tx.taxName,
    feeAmount: tx.feeAmount,
    total: tx.total,
    payments: tx.payments,
    cashReceived: tx.cashReceived,
    change: tx.change,
    balance: tx.balance,
  };
}

export const SAMPLE_DATA: ReceiptData = {
  docType: "sale",
  store: {
    name: "Kedai Senja",
    address: "Jl. Melati No. 12, Bandung",
    phone: "0812-3456-7890",
    header: "",
    footer: "Terima kasih, sampai jumpa lagi!",
    currency: DEFAULT_CURRENCY,
  },
  number: "INV-20250115-0007",
  createdAt: new Date(2025, 0, 15, 14, 32).getTime(),
  cashier: "Kasir 1",
  customer: "Budi",
  note: "Tanpa gula",
  items: [
    { name: "Kopi Susu", sku: "MNM-001", qty: 2, price: 18000, total: 36000 },
    { name: "Nasi Goreng Spesial", sku: "MKN-001", qty: 1, price: 25000, total: 25000, note: "Pedas" },
    { name: "Es Teh Manis", sku: "MNM-002", qty: 3, price: 8000, total: 24000 },
  ],
  subtotal: 85000,
  discountAmount: 5000,
  discountLabel: "Diskon",
  taxAmount: 8800,
  taxLabel: "PPN 11%",
  feeAmount: 2000,
  total: 90800,
  payments: [{ method: "cash", amount: 90800 }],
  cashReceived: 100000,
  change: 9200,
  balance: 0,
};

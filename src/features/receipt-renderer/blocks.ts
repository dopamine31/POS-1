import type { ReceiptData, ReceiptTemplate, TemplateElement } from "@/types";
import { formatMoney, formatNumber } from "@/utils/money";
import { fmtDate, fmtTime } from "@/utils/helpers";
import { PAYMENT_LABEL } from "@/utils/payment";
import { DOC_TITLE } from "./data";

export interface ItemRow {
  name: string;
  code: string;
  qty: number;
  unit: string; // harga satuan terformat ("" bila disembunyikan)
  total: string; // total baris terformat ("" bila disembunyikan)
  note: string;
}

export type Block =
  | { kind: "text"; el: TemplateElement; lines: string[] }
  | { kind: "pair"; el: TemplateElement; label: string; value: string }
  | { kind: "row"; el: TemplateElement; label: string; value: string }
  | { kind: "items"; el: TemplateElement; rows: ItemRow[]; hasPrice: boolean }
  | { kind: "divider"; el: TemplateElement }
  | { kind: "qr"; el: TemplateElement; value: string }
  | { kind: "barcode"; el: TemplateElement; value: string }
  | { kind: "logo"; el: TemplateElement; src: string }
  | { kind: "spacer"; el: TemplateElement }
  | { kind: "signature"; el: TemplateElement; label: string };

const split = (s: string) => s.split("\n").map((x) => x.trimEnd());

/**
 * Satu-satunya tempat logika "data → konten" untuk semua renderer
 * (layar, cetak HTML, ESC/POS, PDF, gambar). Renderer hanya menentukan tampilan.
 */
export function buildBlocks(tpl: ReceiptTemplate, d: ReceiptData): Block[] {
  const cur = d.store.currency;
  const money = (n: number) => formatMoney(n, cur);
  const packing = d.docType === "packing";
  const out: Block[] = [];

  for (const el of tpl.elements) {
    if (!el.visible) continue;
    const label = el.text.trim();
    switch (el.type) {
      case "logo":
        if (d.store.logo) out.push({ kind: "logo", el, src: d.store.logo });
        break;
      case "storeName":
        out.push({ kind: "text", el, lines: split(d.store.name) });
        break;
      case "storeAddress": {
        const lines = split([d.store.header, d.store.address].filter(Boolean).join("\n"));
        if (lines.length) out.push({ kind: "text", el, lines });
        break;
      }
      case "storePhone":
        if (d.store.phone) out.push({ kind: "text", el, lines: [el.showLabel && label ? `${label} ${d.store.phone}` : d.store.phone] });
        break;
      case "title":
        out.push({ kind: "text", el, lines: split(label || DOC_TITLE[d.docType]) });
        break;
      case "receiptNo":
        out.push(el.showLabel ? { kind: "pair", el, label, value: d.number } : { kind: "text", el, lines: [d.number] });
        break;
      case "date":
        out.push(el.showLabel ? { kind: "pair", el, label, value: fmtDate(d.createdAt) } : { kind: "text", el, lines: [fmtDate(d.createdAt)] });
        break;
      case "time":
        out.push(el.showLabel ? { kind: "pair", el, label, value: fmtTime(d.createdAt) } : { kind: "text", el, lines: [fmtTime(d.createdAt)] });
        break;
      case "cashier":
        if (d.cashier) out.push(el.showLabel ? { kind: "pair", el, label, value: d.cashier } : { kind: "text", el, lines: [d.cashier] });
        break;
      case "customer":
        if (d.customer) out.push(el.showLabel ? { kind: "pair", el, label, value: d.customer } : { kind: "text", el, lines: [d.customer] });
        break;
      case "items": {
        const rows: ItemRow[] = d.items.map((i) => ({
          name: i.name,
          code: el.showCode ? i.sku : "",
          qty: i.qty,
          unit: packing || !el.showUnitPrice ? "" : formatNumber(i.price, cur),
          total: packing ? "" : formatNumber(i.total, cur),
          note: el.showNote ? i.note ?? "" : "",
        }));
        out.push({ kind: "items", el, rows, hasPrice: !packing });
        break;
      }
      case "subtotal":
        if (!packing) out.push({ kind: "row", el, label, value: money(d.subtotal) });
        break;
      case "discount":
        if (!packing && d.discountAmount > 0) out.push({ kind: "row", el, label: label && label !== "Diskon" ? label : d.discountLabel, value: "-" + money(d.discountAmount) });
        break;
      case "tax":
        if (!packing && d.taxAmount > 0) out.push({ kind: "row", el, label: label || d.taxLabel, value: money(d.taxAmount) });
        break;
      case "fee":
        if (!packing && d.feeAmount > 0) out.push({ kind: "row", el, label, value: money(d.feeAmount) });
        break;
      case "total":
        if (!packing) out.push({ kind: "row", el, label: d.docType === "return" ? "TOTAL RETUR" : label, value: money(d.total) });
        break;
      case "payment":
        if (!packing)
          for (const p of d.payments) {
            const name = PAYMENT_LABEL[p.method];
            out.push({ kind: "row", el, label: d.docType === "dp" ? `DP (${name})` : d.docType === "return" ? `Refund (${name})` : `${label} ${name}`.trim(), value: money(p.amount) });
          }
        break;
      case "cashReceived":
        if (!packing && d.docType !== "return" && d.cashReceived > 0) out.push({ kind: "row", el, label, value: money(d.cashReceived) });
        break;
      case "change":
        if (!packing && d.docType !== "return" && d.cashReceived > 0) out.push({ kind: "row", el, label, value: money(d.change) });
        break;
      case "balance":
        if (!packing && d.balance > 0) out.push({ kind: "row", el, label, value: money(d.balance) });
        break;
      case "barcode":
      case "qr": {
        const value = el.codeSource === "custom" && label ? label : d.number;
        out.push({ kind: el.type, el, value } as Block);
        break;
      }
      case "text":
        out.push({ kind: "text", el, lines: split(label) });
        break;
      case "note":
        if (d.note) out.push({ kind: "text", el, lines: split(el.showLabel && label ? `${label}: ${d.note}` : d.note) });
        break;
      case "divider":
        out.push({ kind: "divider", el });
        break;
      case "footer": {
        const t = label || d.store.footer;
        if (t) out.push({ kind: "text", el, lines: split(t) });
        break;
      }
      case "thanks":
        out.push({ kind: "text", el, lines: split(label) });
        break;
      case "signature":
        out.push({ kind: "signature", el, label });
        break;
      case "spacer":
        out.push({ kind: "spacer", el });
        break;
    }
  }
  return out;
}

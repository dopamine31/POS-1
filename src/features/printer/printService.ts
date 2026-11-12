import type { PrinterSettings, ReceiptData, ReceiptTemplate } from "@/types";
import { layoutReceipt, receiptToPlainText, type Line } from "@/features/receipt-renderer/textLayout";
import { renderEscPos, testPrintLines } from "@/features/receipt-renderer/escpos";
import { renderPdf } from "@/features/receipt-renderer/pdf";
import { prepareImages, renderPng } from "@/features/receipt-renderer/canvasImage";
import { effectiveWidthMm, paperWidthMm } from "@/features/receipt-renderer/elements";
import { download } from "@/utils/helpers";
import { printerManager } from "./printerManager";
import { printStore } from "./printStore";
import { renderBitmapEscPos } from "@/features/receipt-renderer/bitmapReceipt";

export const COLS_BY_PAPER: Record<number, number> = { 58: 32, 80: 48 };

function colsOf(p: PrinterSettings) {
  return p.charCols > 0 ? p.charCols : COLS_BY_PAPER[p.paperWidth];
}

export async function sendEscPos(lines: Line[], p: PrinterSettings) {
  const prepared = await prepareImages(lines, p.paperWidth === 58 ? 256 : 384);
  await sendBytes(renderEscPos(prepared, p), p);
}

export async function sendBytes(bytes: Uint8Array, p: PrinterSettings) {
  const copies = Math.max(1, Math.min(p.copies, 5));
  for (let i = 0; i < copies; i++) await printerManager.send(bytes);
}

export type PrintOutcome = "escpos" | "browser" | "shared" | "pdf";

/** Cetak sesuai metode yang dipilih. Lempar error bila gagal (UI menawarkan fallback). */
export async function printReceipt(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings): Promise<PrintOutcome> {
  if (p.connection === "bluetooth" || p.connection === "usb") {
    if (!printerManager.isConnected(p.connection)) await printerManager.connect(p.connection);
    if (p.printMode === "bitmap") await sendBytes(await renderBitmapEscPos(tpl, data, p), p);
    else await sendEscPos(layoutReceipt(tpl, data, colsOf(p)), p);
    return "escpos";
  }
  if (p.connection === "share") {
    await shareReceiptFile(tpl, data, p, "pdf");
    return "shared";
  }
  printStore.request({ tpl, data, widthMm: effectiveWidthMm(tpl.paper, p.paperWidth), marginMm: p.margin, copies: Math.max(1, Math.min(p.copies, 5)), fontScale: p.fontSize / 12, lineSpacing: p.lineSpacing });
  return "browser";
}

export async function testPrint(p: PrinterSettings) {
  const lines = testPrintLines(colsOf(p), p.paperWidth);
  if (p.connection === "bluetooth" || p.connection === "usb") {
    if (!printerManager.isConnected(p.connection)) await printerManager.connect(p.connection);
    await sendEscPos(lines, p);
    return;
  }
  const blob = new Blob([renderPdf(lines, { widthMm: p.paperWidth, cols: colsOf(p), marginMm: p.margin }) as BlobPart], { type: "application/pdf" });
  download("test-print.pdf", blob);
}

export function pdfBlob(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings): Blob {
  const widthMm = tpl.paper.size === "58" || tpl.paper.size === "80" ? Number(tpl.paper.size) : paperWidthMm(tpl.paper);
  const w = tpl.paper.size === "a4" || tpl.paper.size === "custom" ? widthMm : p.paperWidth;
  const cols = tpl.paper.size === "a4" ? 64 : Math.max(20, Math.round((w / 58) * 32));
  return new Blob([renderPdf(layoutReceipt(tpl, data, cols), { widthMm: w, cols, marginMm: p.margin }) as BlobPart], { type: "application/pdf" });
}

export async function pngBlob(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings): Promise<Blob> {
  return renderPng(layoutReceipt(tpl, data, colsOf(p)), colsOf(p));
}

export function exportPdf(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings) {
  download(`struk-${data.number}.pdf`, pdfBlob(tpl, data, p), "application/pdf");
}

export async function exportImage(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings) {
  download(`struk-${data.number}.png`, await pngBlob(tpl, data, p), "image/png");
}

/** Share/print lewat sistem operasi (Web Share API); fallback ke unduhan. */
export async function shareReceiptFile(tpl: ReceiptTemplate, data: ReceiptData, p: PrinterSettings, kind: "pdf" | "png" = "pdf") {
  const blob = kind === "pdf" ? pdfBlob(tpl, data, p) : await pngBlob(tpl, data, p);
  const file = new File([blob], `struk-${data.number}.${kind}`, { type: blob.type });
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
  if (nav.share && nav.canShare?.({ files: [file] })) {
    await nav.share({ files: [file], title: `Struk ${data.number}` });
    return;
  }
  download(file.name, blob, blob.type);
}

export function whatsappLink(tpl: ReceiptTemplate, data: ReceiptData, phone?: string) {
  const text = receiptToPlainText(tpl, data, 32);
  const digits = (phone ?? "").replace(/\D/g, "").replace(/^0/, "62");
  return `https://wa.me/${digits}?text=${encodeURIComponent("```\n" + text + "\n```")}`;
}

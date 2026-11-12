"use client";

import { useMemo, useState } from "react";
import { FileDown, Image as ImageIcon, MessageCircle, Printer, Share2 } from "lucide-react";
import { Modal } from "@/components/ui";
import { useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { DocType, Transaction } from "@/types";
import { DOC_LABEL, receiptDataFromTx } from "@/features/receipt-renderer/data";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";
import { effectiveWidthMm } from "@/features/receipt-renderer/elements";
import { exportImage, exportPdf, printReceipt, shareReceiptFile, whatsappLink } from "./printService";
import { printStore } from "./printStore";

function defaultDoc(tx: Transaction): DocType {
  if (tx.status === "dp") return "dp";
  if (tx.status === "refunded") return "return";
  if (tx.settledAt) return "settlement";
  return "sale";
}

export function ReceiptModal({ tx, onClose, footerExtra }: { tx: Transaction | null; onClose: () => void; footerExtra?: React.ReactNode }) {
  const { store, templates, storeTemplate } = useApp();
  const toast = useToast();
  const [doc, setDoc] = useState<DocType | null>(null);
  const [tplId, setTplId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const docType = doc ?? (tx ? defaultDoc(tx) : "sale");
  const tpl = templates.find((t) => t.id === tplId) ?? storeTemplate;
  const data = useMemo(() => (tx ? receiptDataFromTx(tx, store, docType) : null), [tx, store, docType]);
  if (!tx || !data) return null;
  const printer = store.printer;
  const widthMm = effectiveWidthMm(tpl.paper, printer.paperWidth);

  const run = async (fn: () => Promise<void> | void, ok?: string) => {
    if (busy) return;
    setBusy(true);
    try {
      await fn();
      if (ok) toast(ok, "success");
    } catch (e) {
      const m = e instanceof Error ? e.message : "Gagal";
      if ((e as DOMException)?.name === "NotFoundError" || /cancel|chosen|No device/i.test(m)) toast("Pemilihan perangkat dibatalkan", "info");
      else
        toast(`${m} — coba Cetak Browser/PDF.`, "error", {
          label: "Cetak browser",
          onClick: () => printStore.request({ tpl, data, widthMm, marginMm: printer.margin, copies: printer.copies, fontScale: printer.fontSize / 12, lineSpacing: printer.lineSpacing }),
        });
    } finally {
      setBusy(false);
    }
  };

  const doPrint = () =>
    run(async () => {
      const r = await printReceipt(tpl, data, printer);
      if (r === "escpos") toast("Dikirim ke printer", "success");
    });

  return (
    <Modal
      open
      onClose={() => {
        setDoc(null);
        setTplId(null);
        onClose();
      }}
      title={`Struk ${tx.number}`}
      size="lg"
      footer={
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2">
            <button className="btn btn-primary flex-1" onClick={doPrint} disabled={busy}>
              <Printer size={17} /> Cetak
            </button>
            <button className="btn" onClick={() => run(() => exportPdf(tpl, data, printer))} aria-label="Ekspor PDF" title="PDF"><FileDown size={17} /> <span className="hidden sm:inline">PDF</span></button>
            <button className="btn" onClick={() => run(() => exportImage(tpl, data, printer))} aria-label="Ekspor gambar" title="Gambar"><ImageIcon size={17} /> <span className="hidden sm:inline">Gambar</span></button>
            <button className="btn" onClick={() => run(() => shareReceiptFile(tpl, data, printer, "pdf"))} aria-label="Bagikan" title="Bagikan"><Share2 size={17} /></button>
            <a className="btn" href={whatsappLink(tpl, data)} target="_blank" rel="noreferrer" aria-label="Kirim WhatsApp" title="WhatsApp"><MessageCircle size={17} /></a>
          </div>
          {footerExtra}
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="space-y-3 md:w-56">
          <div>
            <label className="label">Jenis dokumen</label>
            <select className="input" value={docType} onChange={(e) => setDoc(e.target.value as DocType)}>
              {(Object.keys(DOC_LABEL) as DocType[]).map((d) => (
                <option key={d} value={d}>{DOC_LABEL[d]}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Template</label>
            <select className="input" value={tpl.id} onChange={(e) => setTplId(e.target.value)}>
              {templates.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
          <p className="text-xs text-muted">
            Metode cetak: <b>{{ browser: "Cetak browser", bluetooth: "Bluetooth ESC/POS", usb: "USB ESC/POS", share: "Share/PDF" }[printer.connection]}</b> · {printer.paperWidth}mm. Ubah di Receipt Studio → Printer.
          </p>
        </div>
        <div className="flex justify-center overflow-x-auto rounded-2xl bg-surface2 p-4">
          <ReceiptView template={tpl} data={data} widthMm={widthMm} marginMm={printer.margin + 1} />
        </div>
      </div>
    </Modal>
  );
}

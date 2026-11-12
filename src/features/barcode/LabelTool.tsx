"use client";

import { useMemo, useState } from "react";
import { Printer } from "lucide-react";
import { Field, Segmented } from "@/components/ui";
import { useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import { defaultElement as E } from "@/features/receipt-renderer/elements";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";
import { printReceipt } from "@/features/printer/printService";
import { printStore } from "@/features/printer/printStore";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import type { ReceiptData, ReceiptTemplate } from "@/types";

export function buildLabel(kind: "barcode" | "qr", value: string, caption: string, price: string): { tpl: ReceiptTemplate; data: ReceiptData } {
  const els = [
    caption ? E("text", { text: caption, align: "center", weight: 700, size: 12 }) : null,
    kind === "barcode" ? E("barcode", { codeSource: "custom", text: value, barcodeHeight: 56, marginTop: 4 }) : E("qr", { codeSource: "custom", text: value, qrSize: 130, marginTop: 4 }),
    price ? E("text", { text: price, align: "center", weight: 700, size: 14, marginTop: 4 }) : null,
  ].filter(Boolean) as ReceiptTemplate["elements"];
  return {
    tpl: { id: "label", name: "Label", description: "", builtin: false, favorite: false, paper: { size: "58", customMm: 58 }, elements: els, createdAt: 0, updatedAt: 0 },
    data: { ...SAMPLE_DATA, number: value },
  };
}

/** Generator barcode (Code 128) & QR + cetak (thermal / browser). */
export function LabelTool({ initial }: { initial?: { value?: string; caption?: string; price?: string } }) {
  const { store } = useApp();
  const toast = useToast();
  const [kind, setKind] = useState<"barcode" | "qr">("barcode");
  const [value, setValue] = useState(initial?.value ?? "");
  const [caption, setCaption] = useState(initial?.caption ?? "");
  const [price, setPrice] = useState(initial?.price ?? "");
  const [copies, setCopies] = useState(1);
  const [busy, setBusy] = useState(false);
  const { tpl, data } = useMemo(() => buildLabel(kind, value || "0000000000", caption, price), [kind, value, caption, price]);
  const p = store.printer;

  const print = async () => {
    if (!value.trim()) return toast("Isi nilai barcode/QR terlebih dahulu", "error");
    setBusy(true);
    try {
      const pp = { ...p, copies };
      const r = await printReceipt(tpl, data, pp);
      if (r === "escpos") toast("Label dikirim ke printer", "success");
    } catch (e) {
      toast(`${e instanceof Error ? e.message : "Gagal mencetak"} — mencoba cetak browser.`, "error");
      printStore.request({ tpl, data, widthMm: p.paperWidth, marginMm: p.margin, copies, fontScale: 1, lineSpacing: 1 });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-5 md:grid-cols-[1fr_auto]">
      <div className="space-y-3">
        <Segmented value={kind} onChange={setKind} options={[{ value: "barcode", label: "Barcode (Code 128)" }, { value: "qr", label: "QR Code" }]} />
        <Field label={kind === "qr" ? "Isi QR (teks / URL)" : "Nilai barcode (ASCII)"}>
          <input className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="mis. 8990000000011" />
        </Field>
        <Field label="Keterangan atas (opsional)"><input className="input" value={caption} onChange={(e) => setCaption(e.target.value)} /></Field>
        <Field label="Teks bawah / harga (opsional)"><input className="input" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
        <Field label="Jumlah salinan">
          <input className="input num" type="number" min={1} max={20} value={copies} onChange={(e) => setCopies(Math.max(1, Math.min(20, Number(e.target.value) || 1)))} />
        </Field>
        <button className="btn btn-primary w-full" onClick={print} disabled={busy}>
          <Printer size={17} /> Cetak label ({{ browser: "browser", bluetooth: "Bluetooth", usb: "USB", share: "PDF/Share" }[p.connection]})
        </button>
      </div>
      <div className="flex justify-center rounded-2xl bg-surface2 p-4">
        <ReceiptView template={tpl} data={data} widthMm={p.paperWidth} marginMm={3} />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowUp, Copy, Download, Eye, EyeOff, GripVertical, Plus, Printer, Save, Trash2 } from "lucide-react";
import { Field, Modal, Segmented, Toggle } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { DocType, ElementType, FontFamily, PaperSize, ReceiptTemplate, SplitSource, TemplateElement } from "@/types";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { ADDABLE_ELEMENTS, ELEMENT_LABEL, newElement, paperWidthMm } from "@/features/receipt-renderer/elements";
import { saveTemplate, exportTemplateJson } from "@/services/templates";
import { download, uid } from "@/utils/helpers";
import { FONTS } from "@/features/receipt-renderer/fonts";

const LABELED: ElementType[] = ["receiptNo", "date", "time", "cashier", "customer", "storePhone", "note"];
const ROW: ElementType[] = ["subtotal", "discount", "tax", "fee", "total", "payment", "cashReceived", "change", "balance"];
const CONTENT: ElementType[] = ["text", "thanks", "footer", "title", "signature"];

function Num({ label, value, onChange, min = 0, max = 100, step = 1 }: { label: string; value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number }) {
  return (
    <Field label={`${label}: ${value}`}>
      <input type="range" className="w-full accent-[var(--brand)]" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </Field>
  );
}
function Sel<T extends string | number>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: T) => void; options: [T, string][] }) {
  return (
    <Field label={label}>
      <select className="input" value={value} onChange={(e) => onChange((typeof value === "number" ? Number(e.target.value) : e.target.value) as T)}>
        {options.map(([v, l]) => <option key={String(v)} value={v}>{l}</option>)}
      </select>
    </Field>
  );
}

const SPLIT_OPTS: [SplitSource, string][] = [
  ["date", "Tanggal"],
  ["time", "Jam"],
  ["datetime", "Tanggal + jam"],
  ["cashier", "Kasir"],
  ["receiptNo", "No. struk"],
  ["customer", "Pelanggan"],
  ["text", "Teks bebas"],
];

function FontSelect({ label, value, onChange }: { label: string; value: FontFamily; onChange: (v: FontFamily) => void }) {
  const cats = Array.from(new Set(FONTS.map((f) => f.category)));
  return (
    <Field label={label}>
      <select className="input" value={value} onChange={(e) => onChange(e.target.value as FontFamily)}>
        {cats.map((c) => (
          <optgroup key={c} label={c}>
            {FONTS.filter((f) => f.category === c).map((f) => <option key={f.id} value={f.id}>{f.label}</option>)}
          </optgroup>
        ))}
      </select>
    </Field>
  );
}

export function TemplateBuilder({ template, onClose }: { template: ReceiptTemplate; onClose: () => void }) {
  const { store, cashier } = useApp();
  const toast = useToast();
  const { confirm } = useDialogs();
  const [draft, setDraft] = useState<ReceiptTemplate>(template);
  const [saved, setSaved] = useState(JSON.stringify(template));
  const [sel, setSel] = useState<string | null>(template.elements[0]?.id ?? null);
  const [panel, setPanel] = useState<"elements" | "preview" | "props">("elements");
  const [addOpen, setAddOpen] = useState(false);
  const [bmpUrl, setBmpUrl] = useState<string | null>(null);
  const [bmpBusy, setBmpBusy] = useState(false);
  const [doc, setDoc] = useState<DocType>("sale");
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [heightMm, setHeightMm] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  const dirty = JSON.stringify(draft) !== saved;
  const selected = draft.elements.find((e) => e.id === sel) ?? null;
  const widthMm = paperWidthMm(draft.paper);
  const data = useMemo(
    () => ({ ...SAMPLE_DATA, docType: doc, store: { ...SAMPLE_DATA.store, name: store.name, address: store.address, phone: store.phone, logo: store.logo, currency: store.currency, footer: store.footer || SAMPLE_DATA.store.footer }, balance: doc === "dp" ? 40000 : 0, payments: doc === "dp" ? [{ method: "cash" as const, amount: 50000 }] : SAMPLE_DATA.payments, cashReceived: doc === "dp" ? 50000 : SAMPLE_DATA.cashReceived, change: doc === "dp" ? 0 : SAMPLE_DATA.change }),
    [store, doc],
  );

  useEffect(() => {
    const el = previewRef.current;
    if (el) setHeightMm(Math.round(((el.offsetHeight * 25.4) / 96) * 10) / 10);
  }, [draft, doc, widthMm]);

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const upd = (id: string, patch: Partial<TemplateElement>) => setDraft((d) => ({ ...d, elements: d.elements.map((e) => (e.id === id ? { ...e, ...patch } : e)) }));
  const move = (from: number, to: number) =>
    setDraft((d) => {
      if (to < 0 || to >= d.elements.length || from === to) return d;
      const els = [...d.elements];
      const [it] = els.splice(from, 1);
      els.splice(to, 0, it);
      return { ...d, elements: els };
    });
  const add = (type: ElementType) => {
    const el = newElement(type);
    setDraft((d) => {
      const idx = selected ? d.elements.findIndex((e) => e.id === selected.id) + 1 : d.elements.length;
      const els = [...d.elements];
      els.splice(idx, 0, el);
      return { ...d, elements: els };
    });
    setSel(el.id);
    setAddOpen(false);
    setPanel("props");
  };
  const dup = (e: TemplateElement) => {
    const c = { ...e, id: uid() };
    setDraft((d) => {
      const i = d.elements.findIndex((x) => x.id === e.id);
      const els = [...d.elements];
      els.splice(i + 1, 0, c);
      return { ...d, elements: els };
    });
    setSel(c.id);
  };
  const remove = (id: string) => {
    setDraft((d) => ({ ...d, elements: d.elements.filter((e) => e.id !== id) }));
    if (sel === id) setSel(null);
  };

  const save = async () => {
    try {
      const rec = await saveTemplate(draft, cashier.name);
      setSaved(JSON.stringify(rec));
      setDraft(rec);
      toast("Template disimpan", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal menyimpan", "error");
    }
  };
  const back = async () => {
    if (dirty && !(await confirm({ title: "Perubahan belum disimpan", message: "Keluar tanpa menyimpan?", confirmText: "Keluar", danger: true }))) return;
    onClose();
  };

  const el = selected;
  const set = (patch: Partial<TemplateElement>) => el && upd(el.id, patch);
  const applyFontAll = (font: FontFamily) => setDraft((d) => ({ ...d, elements: d.elements.map((e) => ({ ...e, font })) }));
  const closeBmp = () =>
    setBmpUrl((u) => {
      if (u) URL.revokeObjectURL(u);
      return null;
    });
  const previewBitmap = async () => {
    setBmpBusy(true);
    try {
      const m = await import("@/features/receipt-renderer/bitmapReceipt");
      const bmp = await m.renderBitmap(draft, data, store.printer.paperWidth);
      const blob = await m.bitmapToPng(bmp);
      setBmpUrl((u) => {
        if (u) URL.revokeObjectURL(u);
        return URL.createObjectURL(blob);
      });
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal membuat pratinjau bitmap", "error");
    } finally {
      setBmpBusy(false);
    }
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button className="btn btn-icon" onClick={back} aria-label="Kembali"><ArrowLeft size={19} /></button>
        <input className="input max-w-xs flex-1" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} aria-label="Nama template" />
        <div className="ml-auto flex gap-2">
          <button className="btn btn-icon" aria-label="Pratinjau bitmap" title="Pratinjau bitmap (hasil mode cetak Bitmap)" onClick={previewBitmap} disabled={bmpBusy}><Printer size={18} /></button>
          <button className="btn btn-icon" aria-label="Ekspor" onClick={() => download(`template-${draft.name.replace(/\W+/g, "-").toLowerCase()}.json`, exportTemplateJson(draft), "application/json")}><Download size={18} /></button>
          <button className="btn btn-primary" onClick={save} disabled={!dirty}><Save size={17} /> {dirty ? "Simpan" : "Tersimpan"}</button>
        </div>
      </div>

      {bmpUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeBmp}>
          <div className="card max-h-[90dvh] w-full max-w-md overflow-y-auto p-3" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold">Pratinjau bitmap ({store.printer.paperWidth} mm)</h2>
              <button className="btn btn-sm" onClick={closeBmp}>Tutup</button>
            </div>
            <p className="mb-2 text-xs text-muted">Hitam-putih persis seperti yang dikirim ke printer pada mode cetak Bitmap.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bmpUrl} alt="Pratinjau bitmap struk" className="w-full border border-line bg-white" style={{ imageRendering: "pixelated" }} />
          </div>
        </div>
      )}

      <div className="mb-3 lg:hidden"><Segmented value={panel} onChange={setPanel} options={[{ value: "elements", label: "Elemen" }, { value: "preview", label: "Preview" }, { value: "props", label: "Properti" }]} /></div>

      <div className="grid gap-4 lg:grid-cols-[280px_1fr_300px]">
        {/* Daftar elemen */}
        <section className={`card p-3 ${panel === "elements" ? "" : "hidden lg:block"}`}>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Elemen ({draft.elements.length})</h2>
            <button className="btn btn-primary btn-sm" onClick={() => setAddOpen(true)}><Plus size={15} /> Tambah</button>
          </div>
          <ul className="max-h-[70dvh] space-y-1 overflow-y-auto" data-testid="element-list">
            {draft.elements.map((e, i) => (
              <li key={e.id} draggable onDragStart={() => setDragIdx(i)} onDragOver={(ev) => ev.preventDefault()} onDrop={() => { if (dragIdx !== null) move(dragIdx, i); setDragIdx(null); }}
                className={`flex items-center gap-1 rounded-xl border px-1.5 py-1 ${sel === e.id ? "border-brand bg-brandsoft" : "border-transparent hover:bg-surface2"} ${e.visible ? "" : "opacity-50"}`}>
                <GripVertical size={16} className="shrink-0 cursor-grab text-muted" aria-hidden />
                <button className="min-h-9 flex-1 truncate text-left text-sm" onClick={() => { setSel(e.id); setPanel("props"); }}>
                  {ELEMENT_LABEL[e.type]}
                  {CONTENT.includes(e.type) || e.type === "text" ? <span className="ml-1 text-xs text-muted">{e.text.slice(0, 14)}</span> : null}
                </button>
                <button className="btn btn-ghost btn-icon h-8 min-h-8 w-8" aria-label="Naik" onClick={() => move(i, i - 1)}><ArrowUp size={14} /></button>
                <button className="btn btn-ghost btn-icon h-8 min-h-8 w-8" aria-label="Turun" onClick={() => move(i, i + 1)}><ArrowDown size={14} /></button>
                <button className="btn btn-ghost btn-icon h-8 min-h-8 w-8" aria-label={e.visible ? "Sembunyikan" : "Tampilkan"} onClick={() => upd(e.id, { visible: !e.visible })}>{e.visible ? <Eye size={14} /> : <EyeOff size={14} />}</button>
                <button className="btn btn-ghost btn-icon h-8 min-h-8 w-8" aria-label="Duplikat" onClick={() => dup(e)}><Copy size={14} /></button>
                <button className="btn btn-ghost btn-icon h-8 min-h-8 w-8 text-danger" aria-label="Hapus" onClick={() => remove(e.id)}><Trash2 size={14} /></button>
              </li>
            ))}
          </ul>
        </section>

        {/* Preview */}
        <section className={`${panel === "preview" ? "" : "hidden lg:block"}`}>
          <div className="card mb-3 space-y-3 p-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {([["58", "58 mm"], ["80", "80 mm"], ["a4", "A4"], ["custom", "Custom"]] as [PaperSize, string][]).map(([k, l]) => <button key={k} className="chip justify-center" data-active={draft.paper.size === k} onClick={() => setDraft({ ...draft, paper: { ...draft.paper, size: k } })}>{l}</button>)}
            </div>
            {draft.paper.size === "custom" && <Field label={`Lebar custom: ${draft.paper.customMm} mm`}><input type="range" min={30} max={300} className="w-full accent-[var(--brand)]" value={draft.paper.customMm} onChange={(e) => setDraft({ ...draft, paper: { ...draft.paper, customMm: Number(e.target.value) } })} /></Field>}
            <div className="flex items-center justify-between gap-2">
              <select className="input w-auto" value={doc} onChange={(e) => setDoc(e.target.value as DocType)} aria-label="Jenis dokumen">
                <option value="sale">Struk penjualan</option><option value="packing">Packing slip</option><option value="dp">Struk DP</option><option value="return">Struk retur</option><option value="settlement">Pelunasan</option>
              </select>
              <span className="num text-xs text-muted">{widthMm} × ≈{heightMm} mm</span>
            </div>
          </div>
          <div className="overflow-auto rounded-2xl bg-surface2 p-4">
            <div className="mx-auto w-fit" ref={previewRef}>
              <ReceiptView template={draft} data={data} widthMm={widthMm} marginMm={3} />
            </div>
          </div>
        </section>

        {/* Inspector */}
        <section className={`card max-h-[80dvh] space-y-3 overflow-y-auto p-3 ${panel === "props" ? "" : "hidden lg:block"}`}>
          <h2 className="text-sm font-semibold">{el ? ELEMENT_LABEL[el.type] : "Properti"}</h2>
          {!el ? <p className="text-sm text-muted">Pilih elemen di daftar untuk mengubah propertinya.</p> : (
            <>
              {(CONTENT.includes(el.type) || LABELED.includes(el.type) || ROW.includes(el.type)) && (
                <Field label={CONTENT.includes(el.type) ? (el.type === "title" ? "Teks judul (kosong = otomatis)" : el.type === "footer" ? "Teks footer (kosong = footer toko)" : "Teks") : "Label"}>
                  {el.type === "text" || el.type === "footer" || el.type === "thanks" ? <textarea className="input" rows={3} value={el.text} onChange={(e) => set({ text: e.target.value })} /> : <input className="input" value={el.text} onChange={(e) => set({ text: e.target.value })} />}
                </Field>
              )}
              {LABELED.includes(el.type) && el.type !== "note" && <Toggle checked={el.showLabel} onChange={(v) => set({ showLabel: v })} label="Tampilkan label" />}
              {ROW.includes(el.type) && <Toggle checked={!!el.alignCurrency} onChange={(v) => set({ alignCurrency: v })} label="Sejajarkan simbol mata uang" hint="Rp di kolom tetap, angka rata kanan (gaya akuntansi)." />}
              {(el.type === "barcode" || el.type === "qr") && (
                <>
                  <Sel label="Sumber nilai" value={el.codeSource} onChange={(v) => set({ codeSource: v })} options={[["number", "Nomor struk"], ["custom", "Teks kustom"]]} />
                  {el.codeSource === "custom" && <Field label="Nilai / URL"><input className="input" value={el.text} onChange={(e) => set({ text: e.target.value })} /></Field>}
                  {el.type === "barcode" ? <Num label="Tinggi barcode" value={el.barcodeHeight} min={24} max={120} onChange={(v) => set({ barcodeHeight: v })} /> : <Num label="Ukuran QR" value={el.qrSize} min={60} max={200} onChange={(v) => set({ qrSize: v })} />}
                </>
              )}
              {el.type === "split" && (
                <>
                  <Sel label="Kolom kiri" value={el.leftSource ?? "date"} onChange={(v) => set({ leftSource: v })} options={SPLIT_OPTS} />
                  {(el.leftSource ?? "date") === "text" && <Field label="Teks kiri"><input className="input" value={el.leftText ?? ""} onChange={(e) => set({ leftText: e.target.value })} /></Field>}
                  <Sel label="Kolom kanan" value={el.rightSource ?? "time"} onChange={(v) => set({ rightSource: v })} options={SPLIT_OPTS} />
                  {(el.rightSource ?? "time") === "text" && <Field label="Teks kanan"><input className="input" value={el.rightText ?? ""} onChange={(e) => set({ rightText: e.target.value })} /></Field>}
                  <Toggle checked={el.showLabel} onChange={(v) => set({ showLabel: v })} label="Tampilkan label" hint="Contoh: Kasir: Budi (memakan lebih banyak lebar)." />
                </>
              )}
              {el.type === "logo" && <Num label="Ukuran logo" value={el.logoSize} min={24} max={200} onChange={(v) => set({ logoSize: v })} />}
              {el.type === "signature" && <p className="text-xs text-muted">Teks = keterangan di bawah garis tanda tangan.</p>}
              {el.type === "divider" && <Sel label="Gaya garis" value={el.dividerStyle} onChange={(v) => set({ dividerStyle: v })} options={[["dashed", "Putus-putus"], ["dotted", "Titik"], ["solid", "Solid"], ["double", "Ganda"], ["thick", "Tebal"], ["stars", "Bintang ***"], ["equals", "Sama dengan ==="]]} />}
              {el.type === "items" && (
                <>
                  <Sel label="Layout item" value={el.itemLayout} onChange={(v) => set({ itemLayout: v })} options={[["stacked", "Bertumpuk"], ["inline", "Satu baris (qty depan)"], ["table", "Tabel"], ["compact", "Ringkas"], ["detailed", "Detail"]]} />
                  <Toggle checked={el.showCode} onChange={(v) => set({ showCode: v })} label="Kode item (SKU)" />
                  <Toggle checked={el.showQty} onChange={(v) => set({ showQty: v })} label="Kuantitas" />
                  <Toggle checked={el.showUnitPrice} onChange={(v) => set({ showUnitPrice: v })} label="Harga satuan" />
                  <Toggle checked={!!el.itemCurUnit} onChange={(v) => set({ itemCurUnit: v })} label="Simbol mata uang di harga satuan" hint="Contoh: Rp 25.000 (memakan lebih banyak lebar)." />
                  <Toggle checked={!!el.itemCurTotal} onChange={(v) => set({ itemCurTotal: v })} label="Simbol mata uang di jumlah" hint="Contoh: Rp 50.000 di kolom jumlah per baris." />
                  <Toggle checked={el.showNote} onChange={(v) => set({ showNote: v })} label="Catatan item" />
                </>
              )}

              {el.type !== "spacer" && el.type !== "divider" && (
                <>
                  <h3 className="pt-1 text-xs font-semibold uppercase tracking-wide text-muted">Teks</h3>
                  <FontSelect label="Font" value={el.font} onChange={(v) => set({ font: v })} />
                  <button type="button" className="w-full rounded-lg border border-[var(--brand)] px-3 py-2 text-sm font-medium text-[var(--brand)]" onClick={() => applyFontAll(el.font)}>
                    Terapkan font ini ke semua elemen
                  </button>
                  <Num label="Ukuran font" value={el.size} min={7} max={36} step={0.5} onChange={(v) => set({ size: v })} />
                  <Sel label="Ketebalan" value={el.weight} onChange={(v) => set({ weight: v })} options={[[400, "Normal"], [500, "Medium"], [700, "Tebal"], [900, "Sangat tebal"]]} />
                  <Field label="Rata"><Segmented value={el.align} onChange={(v) => set({ align: v })} options={[{ value: "left", label: "Kiri" }, { value: "center", label: "Tengah" }, { value: "right", label: "Kanan" }]} /></Field>
                  <Toggle checked={el.italic} onChange={(v) => set({ italic: v })} label="Miring" />
                  <Toggle checked={el.uppercase} onChange={(v) => set({ uppercase: v })} label="HURUF KAPITAL" />
                  <Toggle checked={el.invert} onChange={(v) => set({ invert: v })} label="Teks putih di blok hitam" />
                  <Toggle checked={el.big} onChange={(v) => set({ big: v })} label="Teks 2× di printer thermal" hint="Berlaku pada ESC/POS/PDF/gambar." />
                  <Num label="Jarak huruf" value={el.letterSpacing} min={0} max={6} step={0.5} onChange={(v) => set({ letterSpacing: v })} />
                  <Num label="Spasi baris" value={el.lineHeight} min={1} max={2.2} step={0.05} onChange={(v) => set({ lineHeight: v })} />
                </>
              )}
              <h3 className="pt-1 text-xs font-semibold uppercase tracking-wide text-muted">Tata letak</h3>
              <Num label="Margin atas" value={el.marginTop} max={60} onChange={(v) => set({ marginTop: v })} />
              {el.type !== "spacer" && <Num label="Margin bawah" value={el.marginBottom} max={60} onChange={(v) => set({ marginBottom: v })} />}
              {el.type !== "spacer" && (
                <>
                  <Num label="Padding vertikal" value={el.paddingY} max={30} onChange={(v) => set({ paddingY: v })} />
                  <Num label="Padding horizontal" value={el.paddingX} max={30} onChange={(v) => set({ paddingX: v })} />
                  <Num label="Lebar elemen (%)" value={el.widthPct} min={10} max={100} onChange={(v) => set({ widthPct: v })} />
                  <Sel label="Border" value={el.border} onChange={(v) => set({ border: v })} options={[["none", "Tanpa"], ["solid", "Solid"], ["dashed", "Putus"], ["dotted", "Titik"], ["double", "Ganda"]]} />
                </>
              )}
            </>
          )}
        </section>
      </div>

      <Modal open={addOpen} onClose={() => setAddOpen(false)} title="Tambah elemen" size="lg">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {ADDABLE_ELEMENTS.map((t) => <button key={t} className="btn justify-start" onClick={() => add(t)}><Plus size={15} className="text-brand" /> {ELEMENT_LABEL[t]}</button>)}
        </div>
      </Modal>
    </div>
  );
}

export type { ReactNode };

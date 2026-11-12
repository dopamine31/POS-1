"use client";

import { useRef, useState } from "react";
import { Check, Copy, Download, Eye, FileUp, MoreVertical, Pencil, Plus, RotateCcw, Star, Trash2 } from "lucide-react";
import { EmptyState, Modal, PageHeader, Segmented } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { ReceiptTemplate } from "@/types";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";
import { SAMPLE_DATA } from "@/features/receipt-renderer/data";
import { effectiveWidthMm, paperWidthMm } from "@/features/receipt-renderer/elements";
import { blankTemplate, deleteTemplate, duplicateTemplate, exportTemplateJson, importTemplateJson, renameTemplate, resetBuiltinState, toggleFavorite } from "@/services/templates";
import { download } from "@/utils/helpers";
import { LabelTool } from "@/features/barcode/LabelTool";
import { TemplateBuilder } from "./TemplateBuilder";
import { PrinterSetup } from "./PrinterSetup";

type Tab = "template" | "printer" | "label";

export function StudioPage() {
  const { store, templates, updateStore, cashier } = useApp();
  const toast = useToast();
  const { confirm, prompt } = useDialogs();
  const [tab, setTab] = useState<Tab>("template");
  const [filter, setFilter] = useState<"all" | "fav" | "custom">("all");
  const [editing, setEditing] = useState<ReceiptTemplate | null>(null);
  const [preview, setPreview] = useState<ReceiptTemplate | null>(null);
  const [menu, setMenu] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const sampleData = { ...SAMPLE_DATA, store: { ...SAMPLE_DATA.store, name: store.name, address: store.address, phone: store.phone, logo: store.logo, currency: store.currency, footer: store.footer || SAMPLE_DATA.store.footer } };

  const list = templates
    .filter((t) => (filter === "all" ? true : filter === "fav" ? t.favorite : !t.builtin))
    .sort((a, b) => Number(b.favorite) - Number(a.favorite));

  const run = async (fn: () => Promise<unknown>, ok?: string) => {
    try {
      await fn();
      if (ok) toast(ok, "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal", "error");
    }
  };

  const edit = async (t: ReceiptTemplate) => {
    if (t.builtin) {
      if (!(await confirm({ title: "Edit template bawaan", message: "Template bawaan tidak bisa diubah. Salinan baru akan dibuat dan dibuka di editor.", confirmText: "Buat salinan & edit" }))) return;
      setEditing(await duplicateTemplate(t));
    } else setEditing(t);
  };

  if (editing) return <TemplateBuilder template={editing} onClose={() => setEditing(null)} />;

  return (
    <div>
      <PageHeader title="Receipt Studio" subtitle="Template struk, printer thermal, dan label barcode" />
      <div className="mb-4"><Segmented value={tab} onChange={setTab} options={[{ value: "template", label: "Template" }, { value: "printer", label: "Printer" }, { value: "label", label: "Barcode & QR" }]} /></div>

      {tab === "printer" && <PrinterSetup />}
      {tab === "label" && <div className="card p-4"><LabelTool /></div>}

      {tab === "template" && (
        <>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {([["all", `Semua (${templates.length})`], ["fav", "Favorit"], ["custom", "Kustom"]] as const).map(([k, l]) => <button key={k} className="chip" data-active={filter === k} onClick={() => setFilter(k)}>{l}</button>)}
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm" onClick={() => fileRef.current?.click()}><FileUp size={15} /> Impor</button>
              <button className="btn btn-sm" onClick={async () => (await confirm({ title: "Kembalikan default?", message: "Menghapus tanda favorit pada template bawaan dan mengatur template default toko ke Minimalist. Template kustom tidak dihapus.", confirmText: "Kembalikan" })) && run(async () => { await resetBuiltinState(); await updateStore({ defaultTemplateId: "minimalist" }); }, "Pengaturan template dikembalikan")}><RotateCcw size={15} /> Reset default</button>
              <button className="btn btn-primary btn-sm" onClick={() => setEditing(blankTemplate())}><Plus size={15} /> Template baru</button>
              <input ref={fileRef} type="file" accept="application/json,.json" className="sr-only" onChange={async (e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) await run(async () => { setEditing(await importTemplateJson(await f.text())); }, "Template diimpor"); }} />
            </div>
          </div>

          {list.length === 0 ? (
            <div className="card"><EmptyState title="Tidak ada template" hint="Buat template baru atau ubah filter." /></div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4" data-testid="template-grid">
              {list.map((t) => {
                const w = paperWidthMm(t.paper);
                const scale = w <= 58 ? 0.6 : w <= 80 ? 0.5 : 0.28;
                const isDefault = store.defaultTemplateId === t.id;
                return (
                  <div key={t.id} className={`card relative flex flex-col overflow-hidden ${isDefault ? "ring-2 ring-brand" : ""}`}>
                    <button className="relative block h-56 overflow-hidden bg-surface2 pt-3" onClick={() => setPreview(t)} aria-label={`Pratinjau ${t.name}`}>
                      <div className="mx-auto" style={{ width: `${w * 3.78 * scale}px` }}>
                        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: `${w}mm` }}>
                          <ReceiptView template={t} data={sampleData} />
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface-2)] to-transparent" />
                    </button>
                    <div className="flex items-start justify-between gap-1 p-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="truncate text-sm font-semibold">{t.name}</span>
                          {t.builtin ? <span className="badge badge-muted">Bawaan</span> : <span className="badge badge-ok">Kustom</span>}
                        </div>
                        <div className="line-clamp-2 text-xs text-muted">{t.description || `${t.paper.size === "custom" ? t.paper.customMm + "mm" : t.paper.size.toUpperCase() + (t.paper.size === "a4" ? "" : "mm")}`}</div>
                        {isDefault && <div className="mt-1 flex items-center gap-1 text-xs font-medium text-brand"><Check size={13} /> Default toko</div>}
                      </div>
                      <div className="flex shrink-0">
                        <button className="btn btn-ghost btn-icon h-9 w-9 min-h-9" aria-label={t.favorite ? "Hapus favorit" : "Favoritkan"} onClick={() => run(() => toggleFavorite(t))}><Star size={17} className={t.favorite ? "fill-current text-warning" : ""} /></button>
                        <div className="relative">
                          <button className="btn btn-ghost btn-icon h-9 w-9 min-h-9" aria-label="Menu template" onClick={() => setMenu(menu === t.id ? null : t.id)}><MoreVertical size={17} /></button>
                          {menu === t.id && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setMenu(null)} />
                              <div className="absolute right-0 z-50 mt-1 w-48 overflow-hidden rounded-xl border border-line bg-surface py-1 text-sm shadow-[var(--shadow-md)]" onClick={() => setMenu(null)}>
                                <Item icon={<Eye size={15} />} label="Pratinjau" onClick={() => setPreview(t)} />
                                <Item icon={<Check size={15} />} label="Jadikan default toko" onClick={() => run(() => updateStore({ defaultTemplateId: t.id }), `${t.name} jadi default`)} />
                                <Item icon={<Pencil size={15} />} label="Edit" onClick={() => edit(t)} />
                                <Item icon={<Copy size={15} />} label="Duplikat" onClick={() => run(() => duplicateTemplate(t), "Template diduplikat")} />
                                {!t.builtin && <Item icon={<Pencil size={15} />} label="Ganti nama" onClick={async () => { const n = await prompt({ title: "Ganti nama template", label: "Nama", initial: t.name, required: true }); if (n) run(() => renameTemplate(t.id, n)); }} />}
                                <Item icon={<Download size={15} />} label="Ekspor JSON" onClick={() => download(`template-${t.name.replace(/\W+/g, "-").toLowerCase()}.json`, exportTemplateJson(t), "application/json")} />
                                {!t.builtin && <Item danger icon={<Trash2 size={15} />} label="Hapus" onClick={async () => { if (await confirm({ title: `Hapus "${t.name}"?`, danger: true, confirmText: "Hapus" })) { if (store.defaultTemplateId === t.id) await updateStore({ defaultTemplateId: "minimalist" }); run(() => deleteTemplate(t.id, cashier.name), "Template dihapus"); } }} />}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      <Modal open={!!preview} onClose={() => setPreview(null)} title={preview ? `Pratinjau · ${preview.name}` : ""} size="md"
        footer={preview && <><button className="btn flex-1" onClick={() => { const t = preview; setPreview(null); edit(t); }}><Pencil size={16} /> Edit</button><button className="btn btn-primary flex-1" onClick={() => { run(() => updateStore({ defaultTemplateId: preview.id }), `${preview.name} jadi default`); setPreview(null); }}>Jadikan default</button></>}>
        {preview && <div className="flex justify-center overflow-x-auto rounded-2xl bg-surface2 p-4"><ReceiptView template={preview} data={sampleData} widthMm={effectiveWidthMm(preview.paper, store.printer.paperWidth)} /></div>}
      </Modal>
    </div>
  );
}

function Item({ icon, label, onClick, danger }: { icon: React.ReactNode; label: string; onClick: () => void; danger?: boolean }) {
  return (
    <button className={`flex min-h-10 w-full items-center gap-2.5 px-3 text-left hover:bg-surface2 ${danger ? "text-danger" : ""}`} onClick={onClick}>
      {icon} {label}
    </button>
  );
}

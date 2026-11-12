"use client";

import { useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { DatabaseBackup, FileUp, Upload } from "lucide-react";
import { db, getKV, setKV } from "@/database/db";
import { Modal, Segmented } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { createBackup, restoreBackup, summarize, validateBackup, type BackupFile, type BackupScope, type RestoreMode } from "@/services/backup";
import { bytesLabel, download, fmtDateTime } from "@/utils/helpers";

const SCOPES: [BackupScope, string][] = [["all", "Semua data"], ["products", "Produk"], ["transactions", "Transaksi"], ["templates", "Template"]];

export function BackupPanel() {
  const toast = useToast();
  const { confirm } = useDialogs();
  const fileRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<{ b: BackupFile; name: string } | null>(null);
  const [mode, setMode] = useState<RestoreMode>("merge-skip");
  const [busy, setBusy] = useState(false);
  const last = useLiveQuery(() => getKV<number | null>("lastBackupAt", null), []);
  const counts = useLiveQuery(async () => ({ products: await db.products.count(), transactions: await db.transactions.count(), templates: await db.templates.count(), stores: await db.stores.count() }), []);

  const doBackup = async (scope: BackupScope) => {
    const b = await createBackup(scope);
    const json = JSON.stringify(b);
    const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
    download(`pos-backup-${scope}-${stamp}.json`, json, "application/json");
    if (scope === "all") await setKV("lastBackupAt", Date.now());
    toast(`Backup ${scope} dibuat (${bytesLabel(json.length)})`, "success");
  };

  const pick = async (f: File) => {
    try {
      const raw = JSON.parse(await f.text());
      const v = validateBackup(raw);
      if (!v.ok) return toast(v.error, "error");
      setPending({ b: v.backup, name: f.name });
    } catch {
      toast("File bukan JSON yang valid", "error");
    }
  };

  const restore = async () => {
    if (!pending) return;
    if (mode === "replace" && !(await confirm({ title: "Ganti seluruh data?", message: "Data yang ada pada tabel terkait akan diganti isi backup. Salinan pengaman data saat ini diunduh otomatis lebih dulu.", danger: true, confirmText: "Ya, restore" }))) return;
    setBusy(true);
    try {
      if (mode === "replace") {
        const safe = await createBackup(pending.b.scope);
        download(`pos-safety-before-restore-${Date.now()}.json`, JSON.stringify(safe), "application/json");
      }
      const r = await restoreBackup(pending.b, mode);
      toast(`Restore selesai: ${r.added} data masuk, ${r.skipped} dilewati`, "success");
      setPending(null);
    } catch (e) {
      toast(`Restore gagal, data lama tidak berubah: ${e instanceof Error ? e.message : ""}`, "error");
    } finally {
      setBusy(false);
    }
  };

  const sum = pending ? summarize(pending.b) : null;

  return (
    <div className="space-y-4">
      <section className="card space-y-3 p-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold"><DatabaseBackup size={17} /> Backup</h2>
        <p className="text-xs text-muted">Data tersimpan di perangkat ini (IndexedDB). Browser/OS dapat menghapusnya jika penyimpanan penuh atau situs dibersihkan — buat backup berkala dan simpan di tempat aman.</p>
        <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
          {[["Toko", counts?.stores], ["Produk", counts?.products], ["Transaksi", counts?.transactions], ["Template kustom", counts?.templates]].map(([l, v]) => <div key={String(l)} className="rounded-xl bg-surface2 p-3"><div className="text-xs text-muted">{l}</div><div className="num text-lg font-bold">{v ?? "…"}</div></div>)}
        </div>
        <p className="text-sm">Backup lengkap terakhir: <b>{last ? fmtDateTime(last) : "belum pernah"}</b></p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {SCOPES.map(([k, l]) => <button key={k} className={`btn ${k === "all" ? "btn-primary" : ""}`} onClick={() => doBackup(k)}>{l}</button>)}
        </div>
      </section>

      <section className="card space-y-3 p-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold"><Upload size={17} /> Restore / Impor</h2>
        <p className="text-xs text-muted">File divalidasi lebih dulu (format, versi, isi). Restore berjalan atomik: bila gagal, data lama tidak berubah.</p>
        <button className="btn" onClick={() => fileRef.current?.click()}><FileUp size={16} /> Pilih file backup (.json)</button>
        <input ref={fileRef} type="file" accept="application/json,.json" className="sr-only" onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) pick(f); }} />
      </section>

      <Modal open={!!pending} onClose={() => setPending(null)} title="Konfirmasi restore" footer={<><button className="btn flex-1" onClick={() => setPending(null)}>Batal</button><button className="btn btn-primary flex-1" onClick={restore} disabled={busy}>{busy ? "Memproses…" : "Restore"}</button></>}>
        {pending && sum && (
          <div className="space-y-4">
            <div className="rounded-xl bg-surface2 p-3 text-sm">
              <div className="font-medium">{pending.name}</div>
              <div className="text-muted">Jenis: {pending.b.scope} · versi {pending.b.version}</div>
              <div className="text-muted">Dibuat: {sum.exportedAt ? fmtDateTime(sum.exportedAt) : "-"} · {bytesLabel(sum.sizeBytes)}</div>
              <div className="mt-1 num">{sum.products} produk · {sum.transactions} transaksi · {sum.templates} template · {sum.stores} toko</div>
            </div>
            <div>
              <div className="label">Jika ada data dengan ID sama</div>
              <Segmented value={mode} onChange={setMode} options={[{ value: "merge-skip", label: "Lewati" }, { value: "merge-overwrite", label: "Timpa" }, { value: "replace", label: "Ganti semua" }]} />
              <p className="mt-2 text-xs text-muted">{{ "merge-skip": "Gabungkan; data yang sudah ada di perangkat dipertahankan.", "merge-overwrite": "Gabungkan; data dengan ID sama ditimpa isi backup.", replace: "Kosongkan tabel terkait lalu isi dari backup (pengaman otomatis diunduh)." }[mode]}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { ImagePlus, Plus, Save, Trash2 } from "lucide-react";
import { Field, MoneyInput, Toggle } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import { audit, db, newStore, setKV } from "@/database/db";
import type { ResetPeriod, Store } from "@/types";
import { fileToDataUrl, formatTxNumber } from "@/utils/helpers";

export function StoreSettings() {
  const { store } = useApp();
  return <StoreForm key={store.id} />;
}

function StoreForm() {
  const { store, stores, templates, cashier } = useApp();
  const toast = useToast();
  const { confirm, prompt } = useDialogs();
  const [s, setS] = useState<Store>(store);
  const set = <K extends keyof Store>(k: K, v: Store[K]) => setS((x) => ({ ...x, [k]: v }));
  const dirty = JSON.stringify(s) !== JSON.stringify(store);
  const [nowTs] = useState(() => Date.now());
  const preview = useMemo(() => formatTxNumber(s.numberFormat, s.prefix, 1, s.seqPad, nowTs), [s.numberFormat, s.prefix, s.seqPad, nowTs]);

  const save = async () => {
    if (!s.name.trim()) return toast("Nama toko wajib diisi", "error");
    if (!s.numberFormat.includes("{SEQ}")) return toast("Format nomor harus memuat {SEQ}", "error");
    if (s.taxRate < 0 || s.taxRate > 100) return toast("Tarif pajak 0–100%", "error");
    await db.stores.put({ ...s, name: s.name.trim(), currency: { ...s.currency, decimals: 0 } });
    await audit({ action: "store.update", entity: "store", entityId: s.id, detail: s.name, actor: cashier.name, storeId: s.id });
    toast("Pengaturan toko disimpan", "success");
  };

  const addStore = async () => {
    const name = await prompt({ title: "Toko baru", label: "Nama toko", required: true, confirmText: "Buat" });
    if (!name) return;
    const n = newStore(name.trim());
    n.currency = { ...store.currency };
    n.printer = { ...store.printer };
    await db.stores.add(n);
    await setKV("activeStoreId", n.id);
    toast("Toko dibuat dan diaktifkan", "success");
  };

  const delStore = async () => {
    if (stores.length < 2) return toast("Minimal harus ada satu toko", "error");
    const txCount = await db.transactions.where("storeId").equals(store.id).count();
    if (txCount > 0) return toast(`Toko punya ${txCount} transaksi. Ekspor backup lalu hapus data transaksi dahulu — toko dengan transaksi tidak dapat dihapus.`, "error");
    if (!(await confirm({ title: `Hapus toko "${store.name}"?`, message: "Produk dan kategori toko ini ikut terhapus.", danger: true, confirmText: "Hapus toko" }))) return;
    const other = stores.find((x) => x.id !== store.id)!;
    await db.transaction("rw", [db.stores, db.products, db.categories, db.held, db.kv], async () => {
      await db.products.where("storeId").equals(store.id).delete();
      await db.categories.where("storeId").equals(store.id).delete();
      await db.held.where("storeId").equals(store.id).delete();
      await db.stores.delete(store.id);
      await db.kv.put({ key: "activeStoreId", value: other.id });
    });
    toast("Toko dihapus", "success");
  };

  return (
    <div className="space-y-4">
      <section className="card space-y-4 p-4">
        <h2 className="text-sm font-semibold">Profil toko</h2>
        <div className="flex items-center gap-3">
          {s.logo ? <img src={s.logo} alt="Logo" className="h-16 w-16 rounded-xl border border-line object-contain" /> : <div className="grid h-16 w-16 place-items-center rounded-xl bg-surface2 text-muted"><ImagePlus /></div>}
          <label className="btn btn-sm cursor-pointer">Unggah logo<input type="file" accept="image/*" className="sr-only" onChange={async (e) => { const f = e.target.files?.[0]; if (f) try { set("logo", await fileToDataUrl(f, 256)); } catch (er) { toast(er instanceof Error ? er.message : "Gagal", "error"); } }} /></label>
          {s.logo && <button className="btn btn-sm btn-ghost" onClick={() => set("logo", undefined)}>Hapus</button>}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Nama toko"><input className="input" value={s.name} onChange={(e) => set("name", e.target.value)} /></Field>
          <Field label="Telepon"><input className="input" value={s.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" /></Field>
          <div className="md:col-span-2"><Field label="Alamat"><textarea className="input" rows={2} value={s.address} onChange={(e) => set("address", e.target.value)} /></Field></div>
          <Field label="Header kustom (di bawah nama/alamat)"><textarea className="input" rows={2} value={s.header} onChange={(e) => set("header", e.target.value)} /></Field>
          <Field label="Footer kustom"><textarea className="input" rows={2} value={s.footer} onChange={(e) => set("footer", e.target.value)} /></Field>
          <Field label="Template struk default">
            <select className="input" value={s.defaultTemplateId} onChange={(e) => set("defaultTemplateId", e.target.value)}>{templates.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select>
          </Field>
        </div>
      </section>

      <section className="card space-y-4 p-4">
        <h2 className="text-sm font-semibold">Mata uang</h2>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Simbol"><input className="input" value={s.currency.symbol} onChange={(e) => set("currency", { ...s.currency, symbol: e.target.value.slice(0, 5) })} /></Field>
          <Field label="Pemisah ribuan">
            <select className="input" value={s.currency.thousandSep} onChange={(e) => set("currency", { ...s.currency, thousandSep: e.target.value as Store["currency"]["thousandSep"] })}>
              <option value=".">Titik (1.000)</option><option value=",">Koma (1,000)</option><option value=" ">Spasi (1 000)</option><option value="">Tanpa (1000)</option>
            </select>
          </Field>
        </div>
        <p className="text-xs text-muted">Nominal disimpan sebagai bilangan bulat (tanpa desimal) agar perhitungan akurat.</p>
      </section>

      <section className="card space-y-4 p-4">
        <h2 className="text-sm font-semibold">Penomoran transaksi</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Prefix"><input className="input" value={s.prefix} onChange={(e) => set("prefix", e.target.value.slice(0, 10))} /></Field>
          <Field label="Format" hint="Token: {PREFIX} {YYYY} {YY} {MM} {DD} {SEQ}"><input className="input" value={s.numberFormat} onChange={(e) => set("numberFormat", e.target.value)} /></Field>
          <Field label="Panjang nomor urut"><input className="input num" type="number" min={1} max={8} value={s.seqPad} onChange={(e) => set("seqPad", Math.max(1, Math.min(8, Number(e.target.value) || 4)))} /></Field>
          <Field label="Reset urutan">
            <select className="input" value={s.resetPeriod} onChange={(e) => set("resetPeriod", e.target.value as ResetPeriod)}><option value="never">Tidak pernah</option><option value="daily">Harian</option><option value="monthly">Bulanan</option><option value="yearly">Tahunan</option></select>
          </Field>
        </div>
        <p className="text-sm">Contoh: <code className="rounded bg-surface2 px-2 py-0.5">{preview}</code></p>
      </section>

      <section className="card space-y-1 p-4">
        <h2 className="mb-1 text-sm font-semibold">Pajak & stok</h2>
        <Toggle checked={s.taxEnabled} onChange={(v) => set("taxEnabled", v)} label="Aktifkan pajak" hint="Pajak ditambahkan di atas subtotal setelah diskon." />
        {s.taxEnabled && (
          <div className="grid grid-cols-2 gap-3 pb-2 pt-1">
            <Field label="Nama pajak"><input className="input" value={s.taxName} onChange={(e) => set("taxName", e.target.value)} /></Field>
            <Field label="Tarif (%)"><input className="input num" inputMode="decimal" value={s.taxRate} onChange={(e) => set("taxRate", Number(e.target.value.replace(",", ".")) || 0)} /></Field>
          </div>
        )}
        <Toggle checked={s.stockEnabled} onChange={(v) => set("stockEnabled", v)} label="Aktifkan manajemen stok" hint="Opsional. Stok berkurang saat transaksi dan kembali saat dibatalkan/diretur." />
      </section>

      <div className="sticky bottom-20 z-10 flex gap-2 lg:bottom-4">
        <button className="btn btn-primary flex-1 shadow-[var(--shadow-md)]" onClick={save} disabled={!dirty}><Save size={17} /> Simpan pengaturan</button>
      </div>

      <section className="card space-y-3 p-4">
        <h2 className="text-sm font-semibold">Multi-toko</h2>
        <p className="text-xs text-muted">Setiap toko punya produk, kategori, transaksi, dan nomor urut sendiri. Data hanya ada di perangkat ini.</p>
        <div className="flex gap-2">
          <button className="btn" onClick={addStore}><Plus size={16} /> Tambah toko</button>
          <button className="btn text-danger" onClick={delStore}><Trash2 size={16} /> Hapus toko ini</button>
        </div>
      </section>
    </div>
  );
}

"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ImagePlus, ScanLine, Sparkles, Tag } from "lucide-react";
import { Field, Modal, MoneyInput, Toggle } from "@/components/ui";
import { useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { Category, Product } from "@/types";
import { saveProduct, type ProductInput } from "@/services/products";
import { ScannerModal } from "@/features/barcode/Scanner";
import { BarcodeSvg } from "@/features/barcode/BarcodeViews";
import { LabelTool } from "@/features/barcode/LabelTool";
import { fileToDataUrl } from "@/utils/helpers";

export function blankProduct(storeId: string): ProductInput {
  return { storeId, sku: "", barcode: "", name: "", description: "", price: 0, costPrice: undefined, categoryId: undefined, unit: "pcs", trackStock: false, stock: 0, minStock: 0, active: true };
}

export function ProductForm({ initial, categories, onClose }: { initial: ProductInput | Product; categories: Category[]; onClose: () => void }) {
  const { store, cashier, fmt } = useApp();
  const toast = useToast();
  const [p, setP] = useState<ProductInput>(initial);
  const [scan, setScan] = useState(false);
  const [label, setLabel] = useState(false);
  const [busy, setBusy] = useState(false);
  const set = <K extends keyof ProductInput>(k: K, v: ProductInput[K]) => setP((x) => ({ ...x, [k]: v }));

  const save = async () => {
    setBusy(true);
    try {
      await saveProduct(p, cashier.name);
      toast(p.id ? "Produk diperbarui" : "Produk ditambahkan", "success");
      onClose();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Gagal menyimpan", "error");
    } finally {
      setBusy(false);
    }
  };

  const genCode = () => {
    const base = "2" + String(Date.now()).slice(-8) + String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    const digits = base.split("").map(Number);
    const sum = digits.reduce((s, d, i) => s + d * (i % 2 === 0 ? 1 : 3), 0);
    set("barcode", base + ((10 - (sum % 10)) % 10));
  };

  return (
    <>
      <Modal
        open
        onClose={onClose}
        title={p.id ? "Edit produk" : "Tambah produk"}
        size="lg"
        footer={
          <>
            <button className="btn flex-1" onClick={onClose}>Batal</button>
            <button className="btn btn-primary flex-1" onClick={save} disabled={busy}>Simpan</button>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <Field label="Nama produk *"><input className="input" value={p.name} onChange={(e) => set("name", e.target.value)} autoFocus /></Field>
          </div>
          <Field label="Harga jual *"><MoneyInput value={p.price} onChange={(v) => set("price", v)} currency={store.currency} /></Field>
          <Field label="Harga beli (opsional)"><MoneyInput value={p.costPrice} onChange={(v) => set("costPrice", v || undefined)} currency={store.currency} allowEmpty /></Field>
          <Field label="SKU"><input className="input" value={p.sku} onChange={(e) => set("sku", e.target.value)} placeholder="mis. MNM-001" /></Field>
          <Field label="Barcode">
            <div className="flex gap-2">
              <input className="input" value={p.barcode} onChange={(e) => set("barcode", e.target.value)} inputMode="text" placeholder="Scan / ketik" />
              <button type="button" className="btn btn-icon" onClick={() => setScan(true)} aria-label="Scan barcode"><ScanLine size={19} /></button>
              <button type="button" className="btn btn-icon" onClick={genCode} aria-label="Buat barcode otomatis" title="Buat otomatis"><Sparkles size={18} /></button>
            </div>
          </Field>
          <Field label="Kategori">
            <select className="input" value={p.categoryId ?? ""} onChange={(e) => set("categoryId", e.target.value || undefined)}>
              <option value="">Tanpa kategori</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="Satuan"><input className="input" value={p.unit} onChange={(e) => set("unit", e.target.value)} placeholder="pcs, porsi, kg…" /></Field>
          <div className="md:col-span-2"><Field label="Deskripsi"><textarea className="input" rows={2} value={p.description} onChange={(e) => set("description", e.target.value)} /></Field></div>
          <div className="md:col-span-2">
            <label className="label">Foto produk</label>
            <div className="flex items-center gap-3">
              {p.image ? <img src={p.image} alt="" className="h-16 w-16 rounded-xl object-cover" /> : <div className="grid h-16 w-16 place-items-center rounded-xl bg-surface2 text-muted"><ImagePlus /></div>}
              <label className="btn btn-sm cursor-pointer">
                Pilih foto
                <input type="file" accept="image/*" className="sr-only" onChange={async (e) => { const f = e.target.files?.[0]; if (f) { try { set("image", await fileToDataUrl(f, 320)); } catch (er) { toast(er instanceof Error ? er.message : "Gagal", "error"); } } }} />
              </label>
              {p.image && <button className="btn btn-sm btn-ghost" onClick={() => set("image", undefined)}>Hapus</button>}
            </div>
          </div>
          <div className="md:col-span-2 space-y-1 rounded-2xl border border-line p-3">
            <Toggle checked={p.active} onChange={(v) => set("active", v)} label="Produk aktif" hint="Produk nonaktif tidak muncul di kasir." />
            {store.stockEnabled ? (
              <>
                <Toggle checked={p.trackStock} onChange={(v) => set("trackStock", v)} label="Lacak stok produk ini" />
                {p.trackStock && (
                  <div className="grid grid-cols-2 gap-3 pb-1 pt-2">
                    <Field label="Stok saat ini"><MoneyInput value={p.stock} onChange={(v) => set("stock", v)} /></Field>
                    <Field label="Peringatan stok minimum"><MoneyInput value={p.minStock} onChange={(v) => set("minStock", v)} /></Field>
                  </div>
                )}
              </>
            ) : (
              <p className="text-xs text-muted">Manajemen stok nonaktif (opsional). Aktifkan di Pengaturan → Toko jika dibutuhkan.</p>
            )}
          </div>
          {p.barcode && (
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface2 p-3">
              <div className="bg-white p-2"><BarcodeSvg value={p.barcode} height={40} /></div>
              <button className="btn btn-sm" onClick={() => setLabel(true)}><Tag size={15} /> Cetak label</button>
              <span className="text-xs text-muted">Harga: {fmt(p.price)}</span>
            </div>
          )}
        </div>
      </Modal>
      <ScannerModal open={scan} onClose={() => setScan(false)} onDetected={(c) => set("barcode", c)} />
      <Modal open={label} onClose={() => setLabel(false)} title="Cetak label produk" size="lg">
        <LabelTool initial={{ value: p.barcode, caption: p.name, price: fmt(p.price) }} />
      </Modal>
    </>
  );
}

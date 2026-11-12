"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { FolderCog, Package, Pencil, Plus, ScanLine, Search, Trash2 } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, Modal, PageHeader, Skeleton } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { Product } from "@/types";
import { deleteCategory, deleteProduct, saveCategory } from "@/services/products";
import { ScannerModal } from "@/features/barcode/Scanner";
import { blankProduct, ProductForm } from "./ProductForm";

export function ProductsPage() {
  const { store, cashier, fmt } = useApp();
  const toast = useToast();
  const { confirm, prompt } = useDialogs();
  const products = useLiveQuery(() => db.products.where("storeId").equals(store.id).toArray(), [store.id]);
  const cats = useLiveQuery(() => db.categories.where("storeId").equals(store.id).toArray(), [store.id]) ?? [];
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [edit, setEdit] = useState<Product | ReturnType<typeof blankProduct> | null>(null);
  const [catOpen, setCatOpen] = useState(false);
  const [scan, setScan] = useState(false);

  const catName = (id?: string) => cats.find((c) => c.id === id)?.name;
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return (products ?? [])
      .filter((p) => (cat === "all" || (cat === "none" ? !p.categoryId : p.categoryId === cat)) && (!s || p.name.toLowerCase().includes(s) || p.sku.toLowerCase().includes(s) || p.barcode.includes(s)))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, q, cat]);

  const low = (products ?? []).filter((p) => store.stockEnabled && p.trackStock && p.active && p.stock <= p.minStock);

  const del = async (p: Product) => {
    if (await confirm({ title: `Hapus "${p.name}"?`, message: "Riwayat transaksi lama tetap tersimpan. Gunakan 'nonaktif' bila hanya ingin menyembunyikan.", confirmText: "Hapus", danger: true })) {
      await deleteProduct(p.id, cashier.name);
      toast("Produk dihapus", "success");
    }
  };

  return (
    <div>
      <PageHeader
        title="Produk"
        subtitle={products ? `${products.length} produk · ${cats.length} kategori` : " "}
        actions={
          <>
            <button className="btn" onClick={() => setCatOpen(true)}><FolderCog size={17} /> Kategori</button>
            <button className="btn btn-primary" onClick={() => setEdit(blankProduct(store.id))}><Plus size={17} /> Tambah</button>
          </>
        }
      />
      {low.length > 0 && (
        <div className="mb-3 rounded-xl bg-warningsoft px-4 py-3 text-sm text-warning" role="alert">
          Stok menipis: {low.slice(0, 4).map((p) => `${p.name} (${p.stock})`).join(", ")}{low.length > 4 ? ` +${low.length - 4} lainnya` : ""}
        </div>
      )}
      <div className="mb-3 flex gap-2">
        <div className="relative flex-1">
          <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input className="input pl-9" placeholder="Cari nama, SKU, barcode…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Cari produk" />
        </div>
        <button className="btn btn-icon" onClick={() => setScan(true)} aria-label="Scan barcode"><ScanLine size={20} /></button>
      </div>
      <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto">
        <button className="chip" data-active={cat === "all"} onClick={() => setCat("all")}>Semua</button>
        {cats.map((c) => <button key={c.id} className="chip" data-active={cat === c.id} onClick={() => setCat(c.id)}>{c.name}</button>)}
        <button className="chip" data-active={cat === "none"} onClick={() => setCat("none")}>Tanpa kategori</button>
      </div>

      {!products ? (
        <div className="space-y-2">{[0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-16" />)}</div>
      ) : list.length === 0 ? (
        <div className="card"><EmptyState icon={<Package size={22} />} title={products.length ? "Tidak ada hasil" : "Belum ada produk"} hint={products.length ? "Ubah kata kunci atau filter kategori." : "Tambahkan produk pertama Anda."} action={!products.length && <button className="btn btn-primary" onClick={() => setEdit(blankProduct(store.id))}><Plus size={16} /> Tambah produk</button>} /></div>
      ) : (
        <ul className="card divide-y divide-line overflow-hidden">
          {list.map((p) => (
            <li key={p.id} className="flex items-center gap-3 p-3">
              <button className="flex min-w-0 flex-1 items-center gap-3 text-left" onClick={() => setEdit(p)} aria-label={`Edit ${p.name}`}>
                {p.image ? <img src={p.image} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover" /> : <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brandsoft text-sm font-bold text-brand">{p.name.slice(0, 2).toUpperCase()}</div>}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-medium">{p.name}</span>
                    {!p.active && <span className="badge badge-muted">Nonaktif</span>}
                  </div>
                  <div className="truncate text-xs text-muted">{[p.sku, p.barcode, catName(p.categoryId)].filter(Boolean).join(" · ") || "—"}</div>
                </div>
              </button>
              <div className="text-right">
                <div className="num text-sm font-semibold">{fmt(p.price)}</div>
                {store.stockEnabled && p.trackStock && <span className={`badge ${p.stock <= p.minStock ? "badge-bad" : "badge-ok"}`}>Stok {p.stock}</span>}
              </div>
              <div className="flex">
                <button className="btn btn-ghost btn-icon hidden sm:inline-flex" onClick={() => setEdit(p)} aria-label="Edit"><Pencil size={17} /></button>
                <button className="btn btn-ghost btn-icon text-danger" onClick={() => del(p)} aria-label="Hapus"><Trash2 size={17} /></button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {edit && <ProductForm key={"id" in edit && edit.id ? edit.id : "new"} initial={edit} categories={cats} onClose={() => setEdit(null)} />}
      <ScannerModal open={scan} onClose={() => setScan(false)} onDetected={(c) => setQ(c)} />

      <Modal open={catOpen} onClose={() => setCatOpen(false)} title="Kategori" footer={
        <button className="btn btn-primary flex-1" onClick={async () => {
          const name = await prompt({ title: "Kategori baru", label: "Nama kategori", required: true, confirmText: "Tambah" });
          if (name) try { await saveCategory({ storeId: store.id, name }); } catch (e) { toast(e instanceof Error ? e.message : "Gagal", "error"); }
        }}><Plus size={17} /> Tambah kategori</button>
      }>
        {cats.length === 0 ? <EmptyState title="Belum ada kategori" /> : (
          <ul className="divide-y divide-line">
            {cats.map((c) => (
              <li key={c.id} className="flex items-center justify-between py-2">
                <span>{c.name} <span className="text-xs text-muted">({(products ?? []).filter((p) => p.categoryId === c.id).length})</span></span>
                <div className="flex">
                  <button className="btn btn-ghost btn-icon" aria-label="Ubah nama" onClick={async () => {
                    const name = await prompt({ title: "Ubah nama kategori", label: "Nama", initial: c.name, required: true });
                    if (name) try { await saveCategory({ id: c.id, storeId: store.id, name }); } catch (e) { toast(e instanceof Error ? e.message : "Gagal", "error"); }
                  }}><Pencil size={16} /></button>
                  <button className="btn btn-ghost btn-icon text-danger" aria-label="Hapus kategori" onClick={async () => { if (await confirm({ title: `Hapus kategori "${c.name}"?`, message: "Produk di dalamnya menjadi tanpa kategori.", danger: true, confirmText: "Hapus" })) await deleteCategory(c.id); }}><Trash2 size={16} /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
}

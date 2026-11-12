import { audit, db } from "@/database/db";
import type { Category, Product } from "@/types";
import { uid } from "@/utils/helpers";

export type ProductInput = Omit<Product, "id" | "createdAt" | "updatedAt"> & { id?: string };

export async function validateProduct(p: ProductInput): Promise<string | null> {
  if (!p.name.trim()) return "Nama produk wajib diisi";
  if (!Number.isInteger(p.price) || p.price < 0) return "Harga jual harus bilangan bulat ≥ 0";
  if (p.costPrice !== undefined && (!Number.isInteger(p.costPrice) || p.costPrice < 0)) return "Harga beli tidak valid";
  if (p.trackStock && (!Number.isInteger(p.stock) || p.stock < 0)) return "Stok tidak valid";
  const all = await db.products.where("storeId").equals(p.storeId).toArray();
  const sku = p.sku.trim().toLowerCase();
  const bc = p.barcode.trim();
  if (sku && all.some((x) => x.id !== p.id && x.sku.trim().toLowerCase() === sku)) return `SKU "${p.sku}" sudah dipakai produk lain`;
  if (bc && all.some((x) => x.id !== p.id && x.barcode.trim() === bc)) return `Barcode "${p.barcode}" sudah dipakai produk lain`;
  return null;
}

export async function saveProduct(p: ProductInput, actor: string): Promise<Product> {
  const err = await validateProduct(p);
  if (err) throw new Error(err);
  const now = Date.now();
  const existing = p.id ? await db.products.get(p.id) : undefined;
  const rec: Product = {
    ...p,
    name: p.name.trim(),
    sku: p.sku.trim(),
    barcode: p.barcode.trim(),
    id: existing?.id ?? p.id ?? uid(),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  await db.products.put(rec);
  await audit({ action: existing ? "product.update" : "product.create", entity: "product", entityId: rec.id, detail: rec.name, actor, storeId: rec.storeId });
  return rec;
}

export async function deleteProduct(id: string, actor: string) {
  const p = await db.products.get(id);
  await db.products.delete(id);
  if (p) await audit({ action: "product.delete", entity: "product", entityId: id, detail: p.name, actor, storeId: p.storeId });
}

export async function findByCode(storeId: string, code: string): Promise<Product | undefined> {
  const c = code.trim();
  if (!c) return undefined;
  const all = await db.products.where("storeId").equals(storeId).toArray();
  return all.find((p) => p.active && (p.barcode === c || p.sku.toLowerCase() === c.toLowerCase()));
}

export async function saveCategory(c: Omit<Category, "id"> & { id?: string }) {
  const name = c.name.trim();
  if (!name) throw new Error("Nama kategori wajib diisi");
  const all = await db.categories.where("storeId").equals(c.storeId).toArray();
  if (all.some((x) => x.id !== c.id && x.name.toLowerCase() === name.toLowerCase())) throw new Error("Kategori sudah ada");
  await db.categories.put({ id: c.id ?? uid(), storeId: c.storeId, name });
}

export async function deleteCategory(id: string) {
  await db.transaction("rw", [db.categories, db.products], async () => {
    await db.categories.delete(id);
    await db.products.where("categoryId").equals(id).modify({ categoryId: undefined });
  });
}

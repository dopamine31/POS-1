import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import { db, newStore } from "@/database/db";
import type { Cashier, Product, Store } from "@/types";
import { checkout, emptyCart } from "@/services/transactions";
import { saveProduct } from "@/services/products";
import { restoreBackup } from "@/services/backup";

type Backup = Parameters<typeof restoreBackup>[0];
const backupOf = (data: Record<string, unknown[]>) => ({ app: "x", version: 1, scope: "all", exportedAt: 0, data }) as unknown as Backup;
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

let store: Store;
let cashier: Cashier;
let p1: Product;

beforeEach(async () => {
  await Promise.all(db.tables.map((t) => t.clear()));
  store = { ...newStore("Uji"), stockEnabled: true, taxEnabled: false, resetPeriod: "daily" };
  cashier = { id: "c1", name: "Budi", active: true, createdAt: 1 };
  await db.stores.add(store);
  await db.cashiers.add(cashier);
  p1 = await saveProduct({ storeId: store.id, sku: "A1", barcode: "111", name: "Kopi", description: "", price: 10000, unit: "pcs", trackStock: true, stock: 50, minStock: 1, active: true }, "t");
});

const cartOf = (qty: number) => ({ ...emptyCart(), items: [{ productId: p1.id, name: p1.name, sku: p1.sku, price: p1.price, qty }] });
const pay = [{ method: "cash" as const, amount: 100000 }];

describe("nomor struk di perangkat kedua", () => {
  it("melewati nomor yang sudah dipakai transaksi lain (counter lokal kosong)", async () => {
    const a = await checkout({ store, cashier, cart: cartOf(1), tendered: pay });
    expect(a.number).toMatch(/-0001$/);
    await db.counters.clear(); // meniru perangkat baru: counter belum ada
    const b = await checkout({ store, cashier, cart: cartOf(1), tendered: pay });
    expect(b.number).toMatch(/-0002$/);
    expect(b.number).not.toBe(a.number);
    const c = await checkout({ store, cashier, cart: cartOf(1), tendered: pay });
    expect(c.number).toMatch(/-0003$/);
  });
});

describe("restore backup mode replace", () => {
  it("baris yang tidak ada di backup dihapus dan masuk outbox", async () => {
    const p2 = await saveProduct({ storeId: store.id, sku: "B2", barcode: "222", name: "Teh", description: "", price: 5000, unit: "pcs", trackStock: false, stock: 0, minStock: 0, active: true }, "t");
    await wait(50);
    await db.outbox.clear();
    await restoreBackup(backupOf({ products: [p1] }), "replace");
    await wait(100);
    expect(await db.products.get(p2.id)).toBeUndefined();
    expect(await db.products.get(p1.id)).toBeTruthy();
    expect(await db.outbox.get("products:" + p2.id)).toBeTruthy();
  });

  it("tidak menimpa syncInit dan syncCursor", async () => {
    await db.kv.put({ key: "syncInit", value: "asli" } as never);
    await db.kv.put({ key: "syncCursor", value: 123 } as never);
    await restoreBackup(
      backupOf({ kv: [{ key: "syncInit", value: "dari-backup" }, { key: "syncCursor", value: 1 }, { key: "tema", value: "gelap" }] }),
      "replace",
    );
    expect(((await db.kv.get("syncInit")) as { value: unknown }).value).toBe("asli");
    expect(((await db.kv.get("syncCursor")) as { value: unknown }).value).toBe(123);
    expect(((await db.kv.get("tema")) as { value: unknown }).value).toBe("gelap");
  });
});

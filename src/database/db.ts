import Dexie, { type Table } from "dexie";
import type {
  AuditLog,
  Cashier,
  Category,
  HeldCart,
  PrinterSettings,
  Product,
  ReceiptTemplate,
  Store,
  Transaction,
} from "@/types";
import { DEFAULT_CURRENCY } from "@/utils/money";
import { uid } from "@/utils/helpers";

export interface KV {
  key: string;
  value: unknown;
}
export interface Counter {
  key: string;
  value: number;
}

export interface OutboxItem {
  key: string;
  tbl: string;
  id: string;
  at: number;
}

/** true saat menerapkan data hasil pull, supaya tidak masuk antrean kirim. */
export const syncState = { applying: false };

export class PosDB extends Dexie {
  stores!: Table<Store, string>;
  cashiers!: Table<Cashier, string>;
  categories!: Table<Category, string>;
  products!: Table<Product, string>;
  transactions!: Table<Transaction, string>;
  held!: Table<HeldCart, string>;
  templates!: Table<ReceiptTemplate, string>;
  counters!: Table<Counter, string>;
  audit!: Table<AuditLog, number>;
  kv!: Table<KV, string>;
  outbox!: Table<OutboxItem, string>;

  constructor(name = "pos-receipt-studio") {
    super(name);
    this.version(1).stores({
      stores: "id",
      cashiers: "id",
      categories: "id, storeId",
      products: "id, storeId, barcode, sku, categoryId, name",
      transactions: "id, storeId, number, createdAt, status, cashierId",
      held: "id, storeId",
      templates: "id",
      counters: "key",
      audit: "++id, at, entity",
      kv: "key",
    });
    this.version(2).stores({ outbox: "key, at" });

    const SYNCED = ["stores", "cashiers", "categories", "products", "transactions", "held", "templates"] as const;
    for (const name of SYNCED) {
      const t = this[name] as unknown as Table<{ id: string }, string>;
      const mark = (id: unknown) => {
        if (syncState.applying || typeof id !== "string") return;
        Dexie.ignoreTransaction(() => {
          this.outbox.put({ key: name + ":" + id, tbl: name, id, at: Date.now() }).catch(() => {});
        });
      };
      t.hook("creating", (_pk, obj) => {
        mark(obj.id);
      });
      t.hook("updating", (_mods, pk) => {
        mark(pk);
      });
      t.hook("deleting", (pk) => {
        mark(pk);
      });
    }
  }
}

export const db = new PosDB();

export const DEFAULT_PRINTER: PrinterSettings = {
  connection: "browser",
  paperWidth: 58,
  charCols: 32,
  copies: 1,
  fontSize: 12,
  margin: 2,
  lineSpacing: 1,
  density: 1,
  autoCut: false,
  openDrawer: false,
  printMode: "text",
};

export function newStore(name = "Toko Saya"): Store {
  return {
    id: uid(),
    name,
    address: "Jl. Contoh No. 1, Kota",
    phone: "0812-0000-0000",
    currency: { ...DEFAULT_CURRENCY },
    prefix: "INV",
    numberFormat: "{PREFIX}-{YYYY}{MM}{DD}-{SEQ}",
    seqPad: 4,
    resetPeriod: "daily",
    defaultTemplateId: "minimalist",
    header: "",
    footer: "Terima kasih atas kunjungan Anda",
    taxEnabled: false,
    taxName: "PPN",
    taxRate: 11,
    stockEnabled: false,
    printer: { ...DEFAULT_PRINTER },
    createdAt: Date.now(),
  };
}

export async function getKV<T>(key: string, fallback: T): Promise<T> {
  const r = await db.kv.get(key);
  return r ? (r.value as T) : fallback;
}
export async function setKV(key: string, value: unknown) {
  await db.kv.put({ key, value });
}

/** Seed pertama kali: 1 toko, 1 kasir, kategori & produk contoh. */
export async function seedIfEmpty(): Promise<void> {
  const store = newStore();
  const cashier: Cashier = { id: uid(), name: "Kasir 1", active: true, createdAt: Date.now() };
  const cats = ["Minuman", "Makanan", "Snack"].map((name) => ({ id: uid(), storeId: store.id, name }));
  const now = Date.now();
  const mk = (name: string, price: number, cat: number, sku: string, barcode: string, cost: number): Product => ({
    id: uid(),
    storeId: store.id,
    sku,
    barcode,
    name,
    description: "",
    costPrice: cost,
    price,
    categoryId: cats[cat].id,
    unit: "pcs",
    trackStock: false,
    stock: 0,
    minStock: 0,
    active: true,
    createdAt: now,
    updatedAt: now,
  });
  const products = [
    mk("Kopi Susu", 18000, 0, "MNM-001", "8990000000011", 9000),
    mk("Es Teh Manis", 8000, 0, "MNM-002", "8990000000028", 3000),
    mk("Air Mineral 600ml", 5000, 0, "MNM-003", "8990000000035", 2500),
    mk("Nasi Goreng", 25000, 1, "MKN-001", "8990000000042", 12000),
    mk("Mie Ayam", 20000, 1, "MKN-002", "8990000000059", 9000),
    mk("Roti Bakar Coklat", 15000, 1, "MKN-003", "8990000000066", 7000),
    mk("Keripik Singkong", 12000, 2, "SNK-001", "8990000000073", 6000),
    mk("Kacang Garing", 10000, 2, "SNK-002", "8990000000080", 5000),
  ];
  await db.transaction("rw", [db.stores, db.cashiers, db.categories, db.products, db.kv], async () => {
    // SEED_GUARD: cek di dalam transaksi supaya pemanggilan ganda tidak membuat toko kembar
    if ((await db.stores.count()) > 0) return;
    await db.stores.add(store);
    await db.cashiers.add(cashier);
    await db.categories.bulkAdd(cats);
    await db.products.bulkAdd(products);
    await db.kv.bulkPut([
      { key: "activeStoreId", value: store.id },
      { key: "activeCashierId", value: cashier.id },
      { key: "theme", value: "system" },
    ]);
  });
}

export async function audit(entry: Omit<AuditLog, "id" | "at"> & { at?: number }) {
  await db.audit.add({ at: Date.now(), ...entry });
}

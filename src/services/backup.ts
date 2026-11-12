import { db } from "@/database/db";

export const BACKUP_APP = "pos-receipt-studio";
export const BACKUP_VERSION = 1;

export type BackupScope = "all" | "products" | "transactions" | "templates";

const TABLES_BY_SCOPE: Record<BackupScope, string[]> = {
  all: ["stores", "cashiers", "categories", "products", "transactions", "held", "templates", "counters", "audit", "kv"],
  products: ["categories", "products"],
  transactions: ["transactions", "counters"],
  templates: ["templates"],
};

export interface BackupFile {
  app: string;
  version: number;
  scope: BackupScope;
  exportedAt: number;
  data: Record<string, unknown[]>;
}

export interface BackupSummary {
  exportedAt: number;
  sizeBytes: number;
  products: number;
  transactions: number;
  templates: number;
  stores: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tbl = (n: string) => (db as any)[n] as import("dexie").Table;

export async function createBackup(scope: BackupScope = "all"): Promise<BackupFile> {
  const data: Record<string, unknown[]> = {};
  for (const t of TABLES_BY_SCOPE[scope]) data[t] = await tbl(t).toArray();
  return { app: BACKUP_APP, version: BACKUP_VERSION, scope, exportedAt: Date.now(), data };
}

export function summarize(b: BackupFile): BackupSummary {
  const n = (k: string) => (Array.isArray(b.data[k]) ? b.data[k].length : 0);
  return {
    exportedAt: b.exportedAt,
    sizeBytes: new Blob([JSON.stringify(b)]).size,
    products: n("products"),
    transactions: n("transactions"),
    templates: n("templates"),
    stores: n("stores"),
  };
}

/** Validasi struktur file backup sebelum menyentuh database. */
export function validateBackup(raw: unknown): { ok: true; backup: BackupFile } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "File bukan JSON backup yang valid" };
  const b = raw as Partial<BackupFile>;
  if (b.app !== BACKUP_APP) return { ok: false, error: "File ini bukan backup POS & Receipt Studio" };
  if (typeof b.version !== "number") return { ok: false, error: "Versi backup tidak ditemukan" };
  if (b.version > BACKUP_VERSION) return { ok: false, error: `Backup versi ${b.version} lebih baru dari aplikasi (v${BACKUP_VERSION}). Perbarui aplikasi dahulu.` };
  if (!b.data || typeof b.data !== "object") return { ok: false, error: "Data backup kosong" };
  const scope = (b.scope ?? "all") as BackupScope;
  if (!TABLES_BY_SCOPE[scope]) return { ok: false, error: "Jenis backup tidak dikenal" };
  for (const [k, v] of Object.entries(b.data)) {
    if (!TABLES_BY_SCOPE.all.includes(k)) return { ok: false, error: `Tabel tidak dikenal: ${k}` };
    if (!Array.isArray(v)) return { ok: false, error: `Data "${k}" rusak` };
  }
  const rows = (k: string) => (b.data as Record<string, unknown[]>)[k] ?? [];
  for (const p of rows("products") as Record<string, unknown>[]) {
    if (typeof p?.id !== "string" || typeof p?.name !== "string" || !Number.isInteger(p?.price)) return { ok: false, error: "Ada produk dengan data tidak valid" };
  }
  for (const t of rows("transactions") as Record<string, unknown>[]) {
    if (typeof t?.id !== "string" || typeof t?.number !== "string" || !Number.isInteger(t?.total) || !Array.isArray(t?.items)) return { ok: false, error: "Ada transaksi dengan data tidak valid" };
  }
  for (const t of rows("templates") as Record<string, unknown>[]) {
    if (typeof t?.id !== "string" || !Array.isArray(t?.elements)) return { ok: false, error: "Ada template dengan data tidak valid" };
  }
  return { ok: true, backup: { app: BACKUP_APP, version: b.version, scope, exportedAt: b.exportedAt ?? 0, data: b.data as Record<string, unknown[]> } };
}

/** Kunci kv milik mesin sinkronisasi: jangan ditimpa saat restore. */
const PROTECT_KV = ["syncInit", "syncCursor"];

export type RestoreMode = "merge-skip" | "merge-overwrite" | "replace";

/**
 * Restore atomik dalam satu transaksi Dexie: bila ada kegagalan, data lama utuh.
 * - merge-skip: data dengan ID sama dipertahankan (yang ada di perangkat).
 * - merge-overwrite: data dengan ID sama ditimpa dari backup.
 * - replace: tabel yang ada di backup dikosongkan lalu diisi dari backup.
 */
export async function restoreBackup(b: BackupFile, mode: RestoreMode): Promise<{ added: number; skipped: number }> {
  const names = Object.keys(b.data);
  let added = 0;
  let skipped = 0;
  await db.transaction("rw", names.map(tbl), async () => {
    for (const name of names) {
      const t = tbl(name);
      const rows = b.data[name];
      if (mode === "replace") {
        // bulkDelete (bukan clear) agar hook outbox jalan dan penghapusan ikut tersinkron.
        const kp = t.schema.primKey.keyPath as string;
        const protect = (k: unknown) => name === "kv" && PROTECT_KV.includes(String(k));
        const keepRows = (rows as Record<string, unknown>[]).filter((r) => !protect(r[kp]));
        const incoming = new Set(keepRows.map((r) => r[kp]));
        const oldKeys = (await t.toCollection().primaryKeys()).filter((k) => !protect(k) && !incoming.has(k));
        await t.bulkDelete(oldKeys);
        await t.bulkPut(keepRows);
        added += keepRows.length;
      } else if (name === "audit") {
        // log audit: tambahkan tanpa id agar tidak bentrok
        await t.bulkAdd(rows.map((r) => ({ ...(r as object), id: undefined })));
        added += rows.length;
      } else if (name === "counters") {
        for (const r of rows as { key: string; value: number }[]) {
          const cur = await t.get(r.key);
          if (!cur || cur.value < r.value) await t.put(r);
        }
      } else if (name === "kv") {
        for (const r of rows as { key: string }[]) if (!(await t.get(r.key))) await t.put(r);
      } else {
        const pk = t.schema.primKey.keyPath as string;
        for (const r of rows as Record<string, string>[]) {
          const exists = await t.get(r[pk]);
          if (exists && mode === "merge-skip") skipped++;
          else {
            await t.put(r);
            added++;
          }
        }
      }
    }
  });
  return { added, skipped };
}

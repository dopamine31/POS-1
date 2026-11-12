import { db, getKV, setKV, syncState } from "./db";
import { supabase, supabaseReady } from "./supabase";

export const SYNC_TABLES = ["stores", "cashiers", "categories", "products", "transactions", "held", "templates"] as const;

interface Row {
  tbl: string;
  id: string;
  data: unknown;
  updated_at: number;
  deleted: boolean;
}

const OVERLAP_MS = 60_000;
const PAGE = 500;
const BATCH = 100;

async function enqueueAll() {
  const at = Date.now();
  for (const t of SYNC_TABLES) {
    const ids = (await db.table(t).toCollection().primaryKeys()) as string[];
    await db.outbox.bulkPut(ids.map((id) => ({ key: t + ":" + id, tbl: t, id, at })));
  }
}

export async function pushChanges(): Promise<number> {
  let sent = 0;
  for (;;) {
    const items = await db.outbox.orderBy("at").limit(BATCH).toArray();
    if (!items.length) return sent;
    const now = Date.now();
    const rows: Row[] = [];
    for (const it of items) {
      const rec = await db.table(it.tbl).get(it.id);
      rows.push({ tbl: it.tbl, id: it.id, data: rec ?? null, updated_at: now, deleted: !rec });
    }
    const { error } = await supabase.from("sync_records").upsert(rows, { onConflict: "tbl,id" });
    if (error) throw new Error(error.message);
    await db.transaction("rw", db.outbox, async () => {
      for (const it of items) {
        const cur = await db.outbox.get(it.key);
        if (cur && cur.at === it.at) await db.outbox.delete(it.key);
      }
    });
    sent += items.length;
  }
}

async function applyRows(rows: Row[]): Promise<number> {
  const pending = new Set((await db.outbox.toArray()).map((o) => o.key));
  const allowed = SYNC_TABLES as readonly string[];
  let n = 0;
  syncState.applying = true;
  try {
    for (const r of rows) {
      if (!allowed.includes(r.tbl)) continue;
      if (pending.has(r.tbl + ":" + r.id)) continue;
      const t = db.table(r.tbl);
      if (r.deleted || r.data == null) await t.delete(r.id);
      else await t.put(r.data);
      n++;
    }
  } finally {
    syncState.applying = false;
  }
  return n;
}

export async function pullChanges(): Promise<number> {
  const cursor = await getKV<number>("syncCursor", 0);
  const from = Math.max(0, cursor - OVERLAP_MS);
  let offset = 0;
  let applied = 0;
  let max = cursor;
  for (;;) {
    const { data, error } = await supabase
      .from("sync_records")
      .select("tbl,id,data,updated_at,deleted")
      .gte("updated_at", from)
      .order("updated_at", { ascending: true })
      .order("tbl")
      .order("id")
      .range(offset, offset + PAGE - 1);
    if (error) throw new Error(error.message);
    const rows = (data ?? []) as Row[];
    if (rows.length) applied += await applyRows(rows);
    for (const r of rows) if (r.updated_at > max) max = r.updated_at;
    if (rows.length < PAGE) break;
    offset += PAGE;
  }
  await setKV("syncCursor", max);
  return applied;
}

async function firstSync() {
  const { count, error } = await supabase.from("sync_records").select("*", { count: "exact", head: true });
  if (error) throw new Error(error.message);
  if ((count ?? 0) === 0) {
    await enqueueAll();
  } else if ((await db.transactions.count()) === 0) {
    syncState.applying = true;
    try {
      for (const t of SYNC_TABLES) await db.table(t).clear();
    } finally {
      syncState.applying = false;
    }
    await db.outbox.clear();
    await pullChanges();
    const store = await db.stores.toCollection().first();
    const cashier = await db.cashiers.toCollection().first();
    if (store) await setKV("activeStoreId", store.id);
    if (cashier) await setKV("activeCashierId", cashier.id);
  } else {
    await enqueueAll();
  }
  await setKV("syncInit", true);
}

let running = false;

export async function syncNow(): Promise<{ pushed: number; pulled: number } | null> {
  if (running || !supabaseReady) return null;
  if (typeof navigator !== "undefined" && !navigator.onLine) return null;
  const { data } = await supabase.auth.getSession();
  if (!data.session) return null;
  running = true;
  try {
    if (!(await getKV<boolean>("syncInit", false))) await firstSync();
    const pushed = await pushChanges();
    const pulled = await pullChanges();
    return { pushed, pulled };
  } finally {
    running = false;
  }
}

export function startSync(): () => void {
  const run = () => {
    void syncNow().catch((e) => console.warn("sync gagal:", e));
  };
  let timer: ReturnType<typeof setTimeout> | undefined;
  const soon = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(run, 3000);
  };
  db.outbox.hook("creating", soon);
  db.outbox.hook("updating", soon);
  const interval = setInterval(run, 120_000);
  window.addEventListener("online", run);
  run();
  return () => {
    if (timer) clearTimeout(timer);
    clearInterval(interval);
    window.removeEventListener("online", run);
    db.outbox.hook("creating").unsubscribe(soon);
    db.outbox.hook("updating").unsubscribe(soon);
  };
}

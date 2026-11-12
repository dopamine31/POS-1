import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it, vi } from "vitest";

const h = vi.hoisted(() => ({ upsertError: null as null | { message: string }, upserted: [] as unknown[][] }));

vi.mock("@/database/supabase", () => {
  interface Q {
    select: () => Q;
    gte: () => Q;
    order: () => Q;
    range: () => Promise<{ data: unknown[]; error: null }>;
  }
  const q: Q = {
    select: () => q,
    gte: () => q,
    order: () => q,
    range: async () => ({ data: [], error: null }),
  };
  return {
    supabaseReady: true,
    supabase: {
      auth: { getSession: async () => ({ data: { session: { user: {} } } }) },
      from: () => ({
        ...q,
        upsert: async (rows: unknown[]) => {
          if (h.upsertError) return { error: h.upsertError };
          h.upserted.push(rows);
          return { error: null };
        },
      }),
    },
  };
});

import { db, setKV } from "@/database/db";
import { syncNow } from "@/database/sync";
import { getSyncStatus, setSyncStatus } from "@/database/syncStatus";

beforeEach(async () => {
  await Promise.all(db.tables.map((t) => t.clear()));
  h.upsertError = null;
  h.upserted = [];
  vi.stubGlobal("navigator", { onLine: true });
  await setKV("syncInit", true);
  setSyncStatus({ state: "idle", lastOk: null, error: null });
});

const queue = () => db.outbox.put({ key: "products:x", tbl: "products", id: "x", at: 1 });

describe("syncNow + status", () => {
  it("sukses: kirim antrean, status ok dan waktu terakhir terisi", async () => {
    await queue();
    const r = await syncNow();
    expect(r).toEqual({ pushed: 1, pulled: 0 });
    expect(h.upserted.length).toBe(1);
    expect(await db.outbox.count()).toBe(0);
    const s = getSyncStatus();
    expect(s.state).toBe("ok");
    expect(typeof s.lastOk).toBe("number");
    expect(s.error).toBeNull();
  });

  it("gagal: status error berisi pesan, antrean utuh, lalu pulih di percobaan berikut", async () => {
    await queue();
    h.upsertError = { message: "boom" };
    await expect(syncNow()).rejects.toThrow("boom");
    expect(getSyncStatus().state).toBe("error");
    expect(getSyncStatus().error).toBe("boom");
    expect(await db.outbox.count()).toBe(1);
    h.upsertError = null;
    const r = await syncNow();
    expect(r?.pushed).toBe(1);
    expect(getSyncStatus().state).toBe("ok");
    expect(await db.outbox.count()).toBe(0);
  });

  it("offline: tidak mengirim apa pun dan status tidak berubah", async () => {
    await queue();
    vi.stubGlobal("navigator", { onLine: false });
    expect(await syncNow()).toBeNull();
    expect(h.upserted.length).toBe(0);
    expect(getSyncStatus().state).toBe("idle");
    expect(await db.outbox.count()).toBe(1);
  });
});

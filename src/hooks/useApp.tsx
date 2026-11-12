"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, seedIfEmpty, setKV } from "@/database/db";
import type { Cashier, ReceiptTemplate, Store } from "@/types";
import { mergeTemplates } from "@/services/templates";
import { formatMoney } from "@/utils/money";

export type ThemePref = "system" | "light" | "dark";

interface AppCtx {
  ready: boolean;
  store: Store;
  stores: Store[];
  cashier: Cashier;
  cashiers: Cashier[];
  templates: ReceiptTemplate[];
  storeTemplate: ReceiptTemplate;
  theme: ThemePref;
  setTheme: (t: ThemePref) => void;
  setActiveStore: (id: string) => void;
  setActiveCashier: (id: string) => void;
  updateStore: (patch: Partial<Store>) => Promise<void>;
  fmt: (n: number) => string;
}

const Ctx = createContext<AppCtx | null>(null);

export function useApp(): AppCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp di luar AppProvider");
  return c;
}

export function AppProvider({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [seeded, setSeeded] = useState(false);
  const [dbError, setDbError] = useState("");
  useEffect(() => {
    seedIfEmpty()
      .then(() => setSeeded(true))
      .catch((e) => setDbError(e instanceof Error ? e.message : "Database tidak bisa dibuka"));
  }, []);

  const stores = useLiveQuery(() => db.stores.toArray(), [], undefined);
  const cashiers = useLiveQuery(() => db.cashiers.toArray(), [], undefined);
  const kv = useLiveQuery(() => db.kv.toArray(), [], undefined);
  const custom = useLiveQuery(() => db.templates.toArray(), [], undefined);

  const kvMap = useMemo(() => Object.fromEntries((kv ?? []).map((r) => [r.key, r.value])), [kv]);
  const theme = ((kvMap.theme as ThemePref) ?? "system") as ThemePref;

  useEffect(() => {
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      const m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute("content", dark ? "#0b0f14" : "#0f766e");
    };
    apply();
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);

  const setTheme = useCallback((t: ThemePref) => void setKV("theme", t), []);
  const setActiveStore = useCallback((id: string) => void setKV("activeStoreId", id), []);
  const setActiveCashier = useCallback((id: string) => void setKV("activeCashierId", id), []);
  const updateStore = useCallback(async (patch: Partial<Store>) => {
    const id = (await db.kv.get("activeStoreId"))?.value as string;
    await db.stores.update(id, patch);
  }, []);

  const store = stores?.find((s) => s.id === kvMap.activeStoreId) ?? stores?.[0];
  const cashier = cashiers?.find((c) => c.id === kvMap.activeCashierId) ?? cashiers?.find((c) => c.active) ?? cashiers?.[0];
  const templates = useMemo(() => mergeTemplates(custom ?? [], (kvMap.favBuiltinTemplates as string[]) ?? []), [custom, kvMap.favBuiltinTemplates]);

  if (dbError)
    return (
      <div className="grid min-h-dvh place-items-center p-6 text-center">
        <div className="max-w-sm">
          <h1 className="text-lg font-semibold">Penyimpanan lokal tidak tersedia</h1>
          <p className="mt-2 text-sm text-muted">
            Aplikasi memerlukan IndexedDB. Pastikan bukan mode privat/penyamaran, lalu muat ulang. Detail: {dbError}
          </p>
        </div>
      </div>
    );

  if (!seeded || !stores || !cashiers || !kv || !custom || !store || !cashier) return <>{fallback}</>;

  const storeTemplate = templates.find((t) => t.id === store.defaultTemplateId) ?? templates[0];
  const value: AppCtx = {
    ready: true,
    store,
    stores,
    cashier,
    cashiers,
    templates,
    storeTemplate,
    theme,
    setTheme,
    setActiveStore,
    setActiveCashier,
    updateStore,
    fmt: (n: number) => formatMoney(n, store.currency),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

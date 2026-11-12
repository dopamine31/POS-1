"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, supabaseReady } from "@/database/supabase";
import { startSync } from "@/database/sync";

const EMAIL = "kasir@pos.app";
const LEN = 6;
const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

export function PinGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<"loading" | "locked" | "open">("loading");
  const [pin, setPin] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!supabaseReady) {
      setState("open");
      return;
    }
    supabase.auth.getSession().then(({ data }) => setState(data.session ? "open" : "locked"));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      if (!s) setState("locked");
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (state !== "open" || !supabaseReady) return;
    return startSync();
  }, [state]);

  const submit = useCallback(async (code: string) => {
    setBusy(true);
    setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email: EMAIL, password: code });
    setBusy(false);
    setPin("");
    if (error) {
      setErr(/fetch|network/i.test(error.message) ? "Tidak ada koneksi internet." : "PIN salah.");
      return;
    }
    setState("open");
  }, []);

  const press = useCallback(
    (k: string) => {
      if (busy) return;
      setErr("");
      if (k === "del") setPin((p) => p.slice(0, -1));
      else if (k) setPin((p) => (p.length >= LEN ? p : p + k));
    },
    [busy],
  );

  useEffect(() => {
    if (pin.length === LEN && state === "locked") void submit(pin);
  }, [pin, state, submit]);

  useEffect(() => {
    if (state !== "locked") return;
    const onKey = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) press(e.key);
      else if (e.key === "Backspace") press("del");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, press]);

  if (state === "open") return <>{children}</>;
  if (state === "loading") return <div className="min-h-dvh" />;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-lg font-semibold">Masukkan PIN</h1>
      <div className="flex gap-3" aria-label="PIN">
        {Array.from({ length: LEN }).map((_, i) => (
          <span key={i} className={`h-3.5 w-3.5 rounded-full border ${i < pin.length ? "bg-current" : ""}`} />
        ))}
      </div>
      <p className="h-5 text-sm text-red-500" role="alert">{err}</p>
      <div className="grid w-64 grid-cols-3 gap-3">
        {KEYS.map((k, i) =>
          k === "" ? (
            <span key={i} />
          ) : (
            <button
              key={i}
              type="button"
              disabled={busy}
              onClick={() => press(k)}
              className="num h-16 rounded-2xl bg-surface2 text-2xl font-semibold active:scale-95 disabled:opacity-50"
              aria-label={k === "del" ? "Hapus" : k}
            >
              {k === "del" ? "⌫" : k}
            </button>
          ),
        )}
      </div>
    </div>
  );
}

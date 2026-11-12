"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Download, Plus, Trash2, UserRound } from "lucide-react";
import { db } from "@/database/db";
import { EmptyState, PageHeader, Segmented, Toggle } from "@/components/ui";
import { useDialogs, useToast } from "@/components/feedback";
import { useApp, type ThemePref } from "@/hooks/useApp";
import { bytesLabel, fmtDateTime, uid } from "@/utils/helpers";
import { StoreSettings } from "./StoreSettings";
import { BackupPanel } from "@/features/backup/BackupPanel";

type Tab = "store" | "cashiers" | "backup" | "general" | "audit";

export function SettingsPage() {
  const [tab, setTab] = useState<Tab>("store");
  return (
    <div>
      <PageHeader title="Pengaturan" />
      <div className="no-scrollbar -mx-4 mb-4 overflow-x-auto px-4">
        <div className="flex min-w-max gap-2">
          {([["store", "Toko"], ["cashiers", "Kasir"], ["backup", "Backup"], ["general", "Umum"], ["audit", "Audit log"]] as [Tab, string][]).map(([k, l]) => <button key={k} className="chip" data-active={tab === k} onClick={() => setTab(k)}>{l}</button>)}
        </div>
      </div>
      {tab === "store" && <StoreSettings />}
      {tab === "cashiers" && <Cashiers />}
      {tab === "backup" && <BackupPanel />}
      {tab === "general" && <General />}
      {tab === "audit" && <Audit />}
    </div>
  );
}

function Cashiers() {
  const { cashiers, cashier: active } = useApp();
  const toast = useToast();
  const { prompt, confirm } = useDialogs();
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-warningsoft px-4 py-3 text-xs text-warning">
        Profil kasir hanya <b>label pencatat</b> di perangkat ini (tanpa kata sandi), bukan sistem login. Multi-pengguna lintas perangkat dengan hak akses yang aman membutuhkan backend + autentikasi — lihat ARCHITECTURE.md.
      </div>
      <ul className="card divide-y divide-line">
        {cashiers.map((c) => (
          <li key={c.id} className="flex items-center justify-between gap-2 p-3">
            <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-brandsoft text-brand"><UserRound size={17} /></div><div><div className="font-medium">{c.name}</div>{c.id === active.id && <span className="badge badge-ok">Aktif sekarang</span>}</div></div>
            <div className="flex items-center gap-1">
              <button className="btn btn-sm" onClick={async () => { const n = await prompt({ title: "Ubah nama kasir", label: "Nama", initial: c.name, required: true }); if (n) await db.cashiers.update(c.id, { name: n.trim() }); }}>Ubah</button>
              <button className="btn btn-sm" onClick={() => db.cashiers.update(c.id, { active: !c.active })}>{c.active ? "Nonaktifkan" : "Aktifkan"}</button>
              <button className="btn btn-sm btn-ghost text-danger" aria-label="Hapus kasir" onClick={async () => { if (cashiers.length < 2) return toast("Minimal satu kasir", "error"); if (c.id === active.id) return toast("Tidak bisa menghapus kasir aktif", "error"); if (await confirm({ title: `Hapus kasir ${c.name}?`, message: "Riwayat transaksi tetap menyimpan nama kasir.", danger: true, confirmText: "Hapus" })) await db.cashiers.delete(c.id); }}><Trash2 size={16} /></button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={async () => { const n = await prompt({ title: "Kasir baru", label: "Nama kasir", required: true, confirmText: "Tambah" }); if (n) await db.cashiers.add({ id: uid(), name: n.trim(), active: true, createdAt: Date.now() }); }}><Plus size={16} /> Tambah kasir</button>
    </div>
  );
}

function General() {
  const { theme, setTheme } = useApp();
  const toast = useToast();
  const [persisted, setPersisted] = useState<boolean | null>(null);
  const [usage, setUsage] = useState<{ used: number; quota: number } | null>(null);
  useEffect(() => {
    navigator.storage?.persisted?.().then(setPersisted);
    navigator.storage?.estimate?.().then((e) => setUsage({ used: e.usage ?? 0, quota: e.quota ?? 0 }));
  }, []);
  return (
    <div className="space-y-4">
      <section className="card space-y-3 p-4">
        <h2 className="text-sm font-semibold">Tampilan</h2>
        <Segmented<ThemePref> value={theme} onChange={setTheme} options={[{ value: "system", label: "Ikuti sistem" }, { value: "light", label: "Terang" }, { value: "dark", label: "Gelap" }]} />
      </section>
      <section className="card space-y-2 p-4">
        <h2 className="text-sm font-semibold">Penyimpanan perangkat</h2>
        <p className="text-sm text-muted">Penyimpanan persisten: <b>{persisted === null ? "tidak diketahui" : persisted ? "aktif" : "belum aktif"}</b>{usage && <> · terpakai {bytesLabel(usage.used)} dari {bytesLabel(usage.quota)}</>}</p>
        {!persisted && <button className="btn btn-sm" onClick={async () => { const ok = await navigator.storage?.persist?.(); setPersisted(!!ok); toast(ok ? "Penyimpanan persisten aktif" : "Browser menolak/ tidak mendukung — buat backup berkala", ok ? "success" : "info"); }}>Minta penyimpanan persisten</button>}
        <Toggle checked={true} onChange={() => undefined} label="Mode offline-first" hint="Semua data utama tersimpan lokal; aplikasi bisa dipakai tanpa internet." />
      </section>
      <section className="card p-4">
        <h2 className="mb-2 text-sm font-semibold">Aplikasi</h2>
        <Link href="/install" className="btn"><Download size={16} /> Panduan instal (Android & iPhone)</Link>
        <p className="mt-3 text-xs text-muted">POS & Receipt Studio v1.0.0 · data lokal (IndexedDB) · tanpa server.</p>
      </section>
    </div>
  );
}

function Audit() {
  const logs = useLiveQuery(() => db.audit.orderBy("at").reverse().limit(150).toArray(), []);
  if (!logs) return null;
  if (!logs.length) return <div className="card"><EmptyState title="Belum ada aktivitas" /></div>;
  return (
    <ul className="card divide-y divide-line">
      {logs.map((l) => (
        <li key={l.id} className="px-4 py-2.5 text-sm">
          <div className="flex justify-between gap-2"><span className="font-medium">{l.action}</span><span className="text-xs text-muted">{fmtDateTime(l.at)}</span></div>
          <div className="truncate text-xs text-muted">{l.actor} · {l.detail}</div>
        </li>
      ))}
    </ul>
  );
}

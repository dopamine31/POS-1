"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  BarChart3, ClipboardList, Download, LayoutDashboard, Menu, Moon, Package, Palette, ReceiptText, Settings, ShoppingCart, Sun, Wifi, WifiOff,
} from "lucide-react";
import { useApp } from "@/hooks/useApp";
import { useOnline } from "@/hooks/useOnline";
import { Modal } from "@/components/ui";

const NAV = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pos", label: "Kasir", icon: ShoppingCart },
  { href: "/products", label: "Produk", icon: Package },
  { href: "/transactions", label: "Transaksi", icon: ClipboardList },
  { href: "/studio", label: "Receipt Studio", icon: Palette },
  { href: "/reports", label: "Laporan", icon: BarChart3 },
  { href: "/settings", label: "Pengaturan", icon: Settings },
];

function useActive() {
  const p = (usePathname() || "/").replace(/\/$/, "") || "/";
  return (href: string) => (href === "/" ? p === "/" : p === href || p.startsWith(href + "/"));
}

function Selectors({ compact = false }: { compact?: boolean }) {
  const { store, stores, cashier, cashiers, setActiveStore, setActiveCashier } = useApp();
  return (
    <div className={`flex ${compact ? "gap-2" : "flex-col gap-2"}`}>
      <select aria-label="Toko aktif" className="input min-h-9 py-1 text-[13px]" value={store.id} onChange={(e) => setActiveStore(e.target.value)}>
        {stores.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      <select aria-label="Kasir aktif" className="input min-h-9 py-1 text-[13px]" value={cashier.id} onChange={(e) => setActiveCashier(e.target.value)}>
        {cashiers.filter((c) => c.active || c.id === cashier.id).map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export function OnlineBadge() {
  const online = useOnline();
  return online ? (
    <span className="badge badge-ok" title="Online"><Wifi size={12} /> Online</span>
  ) : (
    <span className="badge badge-warn" title="Mode offline — data tetap tersimpan di perangkat"><WifiOff size={12} /> Offline</span>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useApp();
  const dark = typeof document !== "undefined" && document.documentElement.dataset.theme === "dark";
  return (
    <button className="btn btn-ghost btn-icon" aria-label="Ganti tema" onClick={() => setTheme(dark ? "light" : "dark")} data-theme-pref={theme}>
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const active = useActive();
  const { store, cashier } = useApp();
  const [more, setMore] = useState(false);
  const current = NAV.find((n) => active(n.href));
  const isPos = active("/pos");

  const mobile = [
    NAV[0], NAV[2], NAV[1], NAV[3],
  ];

  return (
    <div className="app-shell min-h-dvh lg:pl-64">
      {/* Sidebar desktop */}
      <aside className="no-print fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-surface lg:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-brandfg"><ReceiptText size={19} /></div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">POS & Receipt</div>
            <div className="text-xs text-muted">Studio</div>
          </div>
        </div>
        <nav className="flex-1 space-y-0.5 px-3" aria-label="Navigasi utama">
          {NAV.map((n) => {
            const on = active(n.href);
            return (
              <Link key={n.href} href={n.href} className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${on ? "bg-brandsoft text-brand" : "text-muted hover:bg-surface2 hover:text-fg"}`} aria-current={on ? "page" : undefined}>
                <n.icon size={19} /> {n.label}
              </Link>
            );
          })}
          <Link href="/install" className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${active("/install") ? "bg-brandsoft text-brand" : "text-muted hover:bg-surface2 hover:text-fg"}`}>
            <Download size={19} /> Install Aplikasi
          </Link>
        </nav>
        <div className="space-y-2 border-t border-line p-4">
          <Selectors />
          <div className="flex items-center justify-between">
            <OnlineBadge />
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="no-print pt-safe sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur lg:bg-bg/80">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 lg:px-8">
          <div className="min-w-0">
            <div className="truncate text-[15px] font-semibold">{current?.label ?? "POS & Receipt Studio"}</div>
            <div className="truncate text-xs text-muted">
              {store.name} · {cashier.name}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <OnlineBadge />
            <span className="lg:hidden"><ThemeToggle /></span>
          </div>
        </div>
      </header>

      <main className={`app-main mx-auto max-w-[1400px] px-4 pt-4 lg:px-8 lg:pt-6 ${isPos ? "pb-28 lg:pb-8" : "pb-28 lg:pb-10"}`}>{children}</main>

      {/* Bottom nav mobile */}
      <nav className="no-print pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden" aria-label="Navigasi bawah">
        <div className="mx-auto grid max-w-lg grid-cols-5 px-2">
          {mobile.map((n) => {
            const on = active(n.href);
            const pos = n.href === "/pos";
            return (
              <Link key={n.href} href={n.href} aria-current={on ? "page" : undefined} className="flex min-h-[58px] flex-col items-center justify-center gap-0.5 text-[11px] font-medium">
                {pos ? (
                  <span className={`-mt-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[var(--shadow-md)] ${on ? "bg-brand text-brandfg" : "bg-brand text-brandfg"}`}>
                    <n.icon size={22} />
                  </span>
                ) : (
                  <n.icon size={21} className={on ? "text-brand" : "text-muted"} />
                )}
                <span className={on ? "text-brand" : "text-muted"}>{n.label}</span>
              </Link>
            );
          })}
          <button onClick={() => setMore(true)} className="flex min-h-[58px] flex-col items-center justify-center gap-0.5 text-[11px] font-medium text-muted" aria-label="Menu lainnya">
            <Menu size={21} />
            <span>Lainnya</span>
          </button>
        </div>
      </nav>

      <Modal open={more} onClose={() => setMore(false)} title="Menu">
        <div className="grid gap-1">
          {[NAV[4], NAV[5], NAV[6], { href: "/install", label: "Install Aplikasi", icon: Download }].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setMore(false)} className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-[15px] font-medium hover:bg-surface2">
              <n.icon size={20} className="text-brand" /> {n.label}
            </Link>
          ))}
        </div>
        <div className="mt-3 border-t border-line pt-3">
          <div className="label">Toko & Kasir aktif</div>
          <Selectors />
        </div>
      </Modal>
    </div>
  );
}

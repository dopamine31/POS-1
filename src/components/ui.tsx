"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { Inbox, X } from "lucide-react";
import { formatNumber } from "@/utils/money";
import type { CurrencySettings } from "@/types";

export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  if (!open) return null;
  const w = { sm: "md:max-w-sm", md: "md:max-w-lg", lg: "md:max-w-2xl", xl: "md:max-w-4xl" }[size];
  return (
    <div className="no-print fixed inset-0 z-[70] flex items-end justify-center md:items-center" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" onClick={onClose} />
      <div className={`sheet-enter relative flex max-h-[92dvh] w-full flex-col rounded-t-3xl border border-line bg-surface shadow-[var(--shadow-lg)] md:rounded-3xl ${w}`}>
        <div className="flex items-center justify-between gap-3 px-5 pb-2 pt-4">
          <h2 className="text-base font-semibold">{title}</h2>
          <button className="btn btn-ghost btn-icon -mr-2" onClick={onClose} aria-label="Tutup">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 pb-4">{children}</div>
        {footer && <div className="pb-safe flex gap-2 border-t border-line px-5 py-3">{footer}</div>}
      </div>
    </div>
  );
}

export function EmptyState({ icon, title, hint, action }: { icon?: ReactNode; title: string; hint?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-surface2 text-muted">{icon ?? <Inbox size={22} />}</div>
      <div className="font-medium">{title}</div>
      {hint && <div className="max-w-xs text-sm text-muted">{hint}</div>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="h-page">{title}</h1>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Toggle({ checked, onChange, label, hint }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex min-h-11 cursor-pointer items-center justify-between gap-3 py-1">
      <span>
        <span className="block text-sm font-medium">{label}</span>
        {hint && <span className="block text-xs text-muted">{hint}</span>}
      </span>
      <span className="relative inline-flex h-7 w-12 shrink-0 items-center">
        <input id={id} type="checkbox" className="peer sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <span className="absolute inset-0 rounded-full bg-line transition peer-checked:bg-brand" />
        <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

export function Segmented<T extends string | number>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[] }) {
  return (
    <div className="inline-flex w-full rounded-xl bg-surface2 p-1">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          onClick={() => onChange(o.value)}
          className={`min-h-9 flex-1 rounded-lg px-3 text-[13px] font-medium transition ${o.value === value ? "bg-surface text-fg shadow-sm" : "text-muted"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Input angka bulat dengan pemisah ribuan. Nilai selalu integer. */
export function MoneyInput({
  value,
  onChange,
  currency,
  placeholder,
  className = "",
  allowEmpty = false,
  ...rest
}: {
  value: number | undefined;
  onChange: (v: number) => void;
  currency?: CurrencySettings;
  placeholder?: string;
  className?: string;
  allowEmpty?: boolean;
  autoFocus?: boolean;
  "aria-label"?: string;
}) {
  const shown = value === undefined || (allowEmpty && value === 0) ? "" : formatNumber(value, currency ? { ...currency, decimals: 0 } : undefined);
  const [local, setLocal] = useState<string | null>(null);
  return (
    <input
      {...rest}
      className={`input num ${className}`}
      inputMode="numeric"
      placeholder={placeholder ?? "0"}
      value={local ?? shown}
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 12);
        const n = digits ? parseInt(digits, 10) : 0;
        setLocal(digits ? formatNumber(n, currency ? { ...currency, decimals: 0 } : undefined) : "");
        onChange(n);
      }}
      onBlur={() => setLocal(null)}
    />
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

export function Spinner() {
  return <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-label="Memuat" />;
}

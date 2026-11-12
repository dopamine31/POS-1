"use client";

import { useEffect, type ReactNode } from "react";
import { ReceiptText } from "lucide-react";
import { FeedbackProvider, useToast } from "@/components/feedback";
import { PrintHost } from "@/components/PrintHost";
import { AppProvider } from "@/hooks/useApp";
import { AppShell } from "@/layouts/AppShell";
import { registerServiceWorker } from "@/services/pwa";

function Splash() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <div className="flex flex-col items-center gap-3 text-muted">
        <div className="grid h-14 w-14 animate-pulse place-items-center rounded-2xl bg-brand text-brandfg"><ReceiptText size={26} /></div>
        <span className="text-sm">Memuat POS & Receipt Studio…</span>
      </div>
    </div>
  );
}

function Pwa() {
  const toast = useToast();
  useEffect(() => {
    registerServiceWorker((apply) => toast("Versi baru aplikasi tersedia.", "info", { label: "Perbarui", onClick: apply }));
  }, [toast]);
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FeedbackProvider>
      <Pwa />
      <AppProvider fallback={<Splash />}>
        <AppShell>{children}</AppShell>
        <PrintHost />
      </AppProvider>
    </FeedbackProvider>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Download, MoreVertical, PlusSquare, Share, Smartphone } from "lucide-react";
import { PageHeader } from "@/components/ui";

interface BIPEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3"><span className="num grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brandsoft text-sm font-bold text-brand">{n}</span><span className="pt-0.5 text-sm">{children}</span></li>
  );
}

export function InstallPage() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);
  const [standalone, setStandalone] = useState(false);
  const [ios, setIos] = useState(false);
  useEffect(() => {
    const h = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIPEvent);
    };
    window.addEventListener("beforeinstallprompt", h);
    setStandalone(window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true);
    setIos(/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
    return () => window.removeEventListener("beforeinstallprompt", h);
  }, []);

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <PageHeader title="Install Aplikasi" subtitle="Pasang di layar utama agar tampil layar penuh seperti aplikasi asli" />
      {standalone && <div className="rounded-xl bg-successsoft px-4 py-3 text-sm text-success">✓ Aplikasi sudah berjalan sebagai aplikasi terpasang.</div>}
      {evt && !standalone && (
        <button className="btn btn-primary w-full min-h-12" onClick={async () => { await evt.prompt(); setEvt(null); }}><Download size={18} /> Install sekarang</button>
      )}
      <section className={`card p-4 ${ios ? "ring-2 ring-brand" : ""}`}>
        <h2 className="mb-3 flex items-center gap-2 font-semibold"><Smartphone size={18} /> iPhone / iPad {ios && <span className="badge badge-ok">Perangkat Anda</span>}</h2>
        <ol className="space-y-3">
          <Step n={1}>Buka aplikasi ini melalui <b>Safari</b>. (Di iOS, instalasi PWA hanya tersedia dari Safari.)</Step>
          <Step n={2}>Ketuk tombol <b>Share</b> <Share size={14} className="inline" /> di bilah Safari.</Step>
          <Step n={3}>Pilih <b>Add to Home Screen</b> <PlusSquare size={14} className="inline" />.</Step>
          <Step n={4}>Ketuk <b>Add</b>. Buka aplikasi dari ikon di layar utama.</Step>
        </ol>
        <p className="mt-3 text-xs text-muted">Catatan iOS: Web Bluetooth/USB tidak tersedia di Safari. Cetak lewat AirPrint (Cetak Browser) atau Share/PDF. Jika data lokal tidak dipakai lama, iOS dapat membersihkannya — buat backup berkala.</p>
      </section>
      <section className={`card p-4 ${!ios ? "ring-2 ring-brand" : ""}`}>
        <h2 className="mb-3 flex items-center gap-2 font-semibold"><Smartphone size={18} /> Android</h2>
        <ol className="space-y-3">
          <Step n={1}>Buka aplikasi ini melalui <b>Chrome</b>.</Step>
          <Step n={2}>Ketuk menu <MoreVertical size={14} className="inline" /> lalu pilih <b>Install app</b> atau <b>Add to Home screen</b> (atau tombol “Install sekarang” di atas).</Step>
          <Step n={3}>Konfirmasi <b>Install</b>/<b>Add</b>. Ikon muncul di layar utama dan aplikasi terbuka layar penuh.</Step>
        </ol>
      </section>
      <section className="card p-4 text-sm text-muted">
        <h2 className="mb-2 font-semibold text-fg">Desktop</h2>
        Chrome/Edge: klik ikon install di address bar, atau menu → Install POS & Receipt Studio.
      </section>
    </div>
  );
}

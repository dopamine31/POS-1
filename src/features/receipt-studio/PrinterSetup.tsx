"use client";

import { useState } from "react";
import { Bluetooth, FileText, Globe, Plug, Printer, Share2, Usb } from "lucide-react";
import { Field, Toggle } from "@/components/ui";
import { useToast } from "@/components/feedback";
import { useApp } from "@/hooks/useApp";
import type { PrinterSettings, PrintConnection } from "@/types";
import { printerManager, usePrinterState } from "@/features/printer/printerManager";
import { testPrint } from "@/features/printer/printService";

const METHODS: { id: PrintConnection; label: string; icon: React.ReactNode; hint: string }[] = [
  { id: "browser", label: "Cetak Browser", icon: <Globe size={18} />, hint: "Dialog cetak sistem (AirPrint di iPhone, Print Service di Android). Paling kompatibel." },
  { id: "bluetooth", label: "Bluetooth BLE (ESC/POS)", icon: <Bluetooth size={18} />, hint: "Langsung ke printer thermal BLE. Chrome/Edge Android & desktop. Tidak tersedia di Safari/iPhone." },
  { id: "usb", label: "USB (ESC/POS)", icon: <Usb size={18} />, hint: "WebUSB: Chrome/Edge desktop & sebagian Android. Tidak tersedia di Safari/iPhone." },
  { id: "share", label: "Share / PDF", icon: <Share2 size={18} />, hint: "Buat PDF lalu bagikan/cetak lewat aplikasi printer di perangkat (mis. RawBT, Printer Share)." },
];

export function PrinterSetup() {
  const { store, updateStore } = useApp();
  const toast = useToast();
  const st = usePrinterState();
  const [busy, setBusy] = useState(false);
  const p = store.printer;
  const set = (patch: Partial<PrinterSettings>) => updateStore({ printer: { ...p, ...patch } });

  const supported = (id: PrintConnection) => (id === "bluetooth" ? printerManager.supports("bluetooth") : id === "usb" ? printerManager.supports("usb") : true);
  const direct = p.connection === "bluetooth" || p.connection === "usb";
  const connected = direct && printerManager.isConnected(p.connection as "bluetooth" | "usb");

  const connect = async () => {
    setBusy(true);
    try {
      await printerManager.connect(p.connection as "bluetooth" | "usb");
      toast("Printer terhubung", "success");
    } catch (e) {
      if ((e as DOMException)?.name !== "NotFoundError") toast(e instanceof Error ? e.message : "Gagal terhubung", "error");
    } finally {
      setBusy(false);
    }
  };
  const test = async () => {
    setBusy(true);
    try {
      await testPrint(p);
      toast(p.connection === "browser" || p.connection === "share" ? "Test print dibuat (PDF)" : "Test print dikirim", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Test print gagal", "error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="card space-y-3 p-4">
        <h2 className="text-sm font-semibold">Metode cetak</h2>
        <div className="space-y-2">
          {METHODS.map((m) => {
            const ok = supported(m.id);
            return (
              <button key={m.id} disabled={!ok} onClick={() => set({ connection: m.id })} className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition disabled:opacity-50 ${p.connection === m.id ? "border-brand bg-brandsoft" : "border-line"}`}>
                <span className="mt-0.5 text-brand">{m.icon}</span>
                <span>
                  <span className="block text-sm font-medium">{m.label} {!ok && <span className="badge badge-warn ml-1">Tidak didukung browser ini</span>}</span>
                  <span className="block text-xs text-muted">{m.hint}</span>
                </span>
              </button>
            );
          })}
        </div>

        {direct && (
          <div className="rounded-xl bg-surface2 p-3 text-sm">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="font-medium">Status: {connected ? `Terhubung — ${st.name}` : st.status === "connecting" ? "Menghubungkan…" : st.status === "disconnected" ? "Terputus" : "Belum terhubung"}</div>
                {st.error && <div className="text-xs text-danger">{st.error}</div>}
              </div>
              {connected ? <button className="btn btn-sm" onClick={() => printerManager.disconnect()}>Putuskan</button> : <button className="btn btn-primary btn-sm" onClick={connect} disabled={busy || !supported(p.connection)}><Plug size={15} /> Hubungkan</button>}
            </div>
          </div>
        )}
        <button className="btn w-full" onClick={test} disabled={busy}><Printer size={17} /> Test print</button>
      </section>

      <section className="card space-y-4 p-4">
        <h2 className="text-sm font-semibold">Pengaturan kertas & cetak</h2>
        <Field label="Lebar kertas">
          <div className="grid grid-cols-2 gap-2">
            {([58, 80] as const).map((w) => <button key={w} className="chip justify-center" data-active={p.paperWidth === w} onClick={() => set({ paperWidth: w, charCols: w === 58 ? 32 : 48 })}>{w} mm</button>)}
          </div>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Karakter / baris" hint="58mm=32, 80mm=48 (font A)"><input type="number" className="input num" min={16} max={64} value={p.charCols} onChange={(e) => set({ charCols: Number(e.target.value) || 32 })} /></Field>
          <Field label="Salinan"><input type="number" className="input num" min={1} max={5} value={p.copies} onChange={(e) => set({ copies: Math.max(1, Math.min(5, Number(e.target.value) || 1)) })} /></Field>
          <Field label="Ukuran font (cetak browser)"><input type="number" className="input num" min={8} max={20} value={p.fontSize} onChange={(e) => set({ fontSize: Math.max(8, Math.min(20, Number(e.target.value) || 12)) })} /></Field>
          <Field label="Margin (mm)"><input type="number" className="input num" min={0} max={10} value={p.margin} onChange={(e) => set({ margin: Math.max(0, Math.min(10, Number(e.target.value) || 0)) })} /></Field>
          <Field label="Spasi baris"><input type="number" className="input num" step={0.1} min={0.8} max={2} value={p.lineSpacing} onChange={(e) => set({ lineSpacing: Math.max(0.8, Math.min(2, Number(e.target.value) || 1)) })} /></Field>
          <Field label="Kepekatan (jika didukung)">
            <select className="input" value={p.density} onChange={(e) => set({ density: Number(e.target.value) as 0 | 1 | 2 })}><option value={0}>Ringan</option><option value={1}>Normal</option><option value={2}>Gelap</option></select>
          </Field>
        </div>
        <Toggle checked={p.autoCut} onChange={(v) => set({ autoCut: v })} label="Potong kertas otomatis" hint="Hanya printer dengan auto-cutter." />
        <Toggle checked={p.openDrawer} onChange={(v) => set({ openDrawer: v })} label="Buka laci kas" hint="Mengirim pulsa ESC p (jika laci terhubung ke printer)." />
      </section>

      <section className="card p-4 lg:col-span-2">
        <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold"><FileText size={16} /> Panduan uji printer (wajib sebelum dipakai)</h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-muted">
          <li>Nyalakan printer, isi kertas sesuai lebar (58/80 mm), pastikan Bluetooth/USB aktif.</li>
          <li>Android: gunakan <b>Chrome</b>, pilih “Bluetooth BLE”, tekan Hubungkan dan pilih printer. Banyak printer murah hanya Bluetooth Classic (SPP) yang <b>tidak</b> bisa diakses browser — gunakan “Share / PDF” + aplikasi printer, atau “Cetak Browser”.</li>
          <li>iPhone: Safari tidak mendukung Web Bluetooth/USB. Gunakan “Cetak Browser” (AirPrint) atau “Share / PDF”.</li>
          <li>Tekan <b>Test print</b>. Periksa: rata kiri/tengah/kanan, teks tebal, QR terbaca, barcode terbaca, tidak ada baris terpotong.</li>
          <li>Jika teks terpotong/berantakan, ubah “Karakter / baris”. Jika gelap/terang, ubah kepekatan.</li>
          <li>Cetak satu struk transaksi nyata dan catat hasilnya di <code>TESTING.md</code> sebelum mengklaim kompatibel.</li>
        </ol>
      </section>
    </div>
  );
}

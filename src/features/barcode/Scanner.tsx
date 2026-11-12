"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Camera, Keyboard } from "lucide-react";
import { Modal } from "@/components/ui";

type Mode = "starting" | "scanning" | "denied" | "unsupported" | "error";

/**
 * Scanner kamera. Urutan: BarcodeDetector native (Chrome Android) → ZXing (Safari iPhone & lainnya).
 * Selalu tersedia input manual sebagai fallback.
 */
export function ScannerModal({ open, onClose, onDetected, continuous = false }: { open: boolean; onClose: () => void; onDetected: (code: string) => void; continuous?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("starting");
  const [msg, setMsg] = useState("");
  const [manual, setManual] = useState("");
  const cb = useRef(onDetected);
  cb.current = onDetected;
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    let stopped = false;
    let stream: MediaStream | null = null;
    let timer: ReturnType<typeof setInterval> | undefined;
    let zxingControls: { stop: () => void } | undefined;
    let last = "";
    let lastAt = 0;
    setMode("starting");
    setMsg("");

    const hit = (code: string) => {
      const now = Date.now();
      if (code === last && now - lastAt < 2000) return;
      last = code;
      lastAt = now;
      if (navigator.vibrate) navigator.vibrate(60);
      cb.current(code);
      if (!continuous) closeRef.current();
    };

    (async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setMode("unsupported");
        return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      } catch (e) {
        const name = (e as DOMException).name;
        setMode(name === "NotAllowedError" || name === "SecurityError" ? "denied" : "error");
        setMsg(name === "NotFoundError" ? "Kamera tidak ditemukan pada perangkat ini." : "");
        return;
      }
      if (stopped) return stream.getTracks().forEach((t) => t.stop());
      const v = videoRef.current!;
      v.srcObject = stream;
      v.setAttribute("playsinline", "true");
      await v.play().catch(() => undefined);
      setMode("scanning");
      const BD = (window as any).BarcodeDetector;
      if (BD) {
        const det = new BD({ formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128", "code_39", "qr_code", "itf"] });
        timer = setInterval(async () => {
          try {
            const r = await det.detect(v);
            if (r[0]?.rawValue) hit(r[0].rawValue);
          } catch {}
        }, 250);
      } else {
        try {
          const { BrowserMultiFormatReader } = await import("@zxing/browser");
          const reader = new BrowserMultiFormatReader();
          zxingControls = await reader.decodeFromStream(stream, v, (res) => {
            if (res) hit(res.getText());
          });
        } catch {
          setMode("unsupported");
        }
      }
    })();

    return () => {
      stopped = true;
      if (timer) clearInterval(timer);
      zxingControls?.stop();
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [open, continuous]);

  const submitManual = () => {
    const c = manual.trim();
    if (!c) return;
    cb.current(c);
    setManual("");
    if (!continuous) onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Scan Barcode / QR">
      <div className="space-y-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
          <video ref={videoRef} className="h-full w-full object-cover" muted playsInline />
          {mode === "scanning" && <div className="pointer-events-none absolute inset-x-8 top-1/2 h-0.5 -translate-y-1/2 bg-red-500/80 shadow-[0_0_12px_red]" />}
          {mode !== "scanning" && (
            <div className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/85">
              <div>
                <Camera className="mx-auto mb-2" />
                {mode === "starting" && "Membuka kamera…"}
                {mode === "denied" && "Izin kamera ditolak. Aktifkan izin kamera di pengaturan browser/Safari untuk situs ini, atau ketik kode secara manual di bawah."}
                {mode === "unsupported" && "Scan kamera tidak didukung di browser ini. Gunakan input manual atau scanner barcode eksternal (USB/Bluetooth keyboard)."}
                {mode === "error" && (msg || "Kamera tidak dapat dibuka. Gunakan input manual.")}
              </div>
            </div>
          )}
        </div>
        <div>
          <label className="label flex items-center gap-1"><Keyboard size={12} /> Input manual / scanner eksternal</label>
          <div className="flex gap-2">
            <input className="input" value={manual} onChange={(e) => setManual(e.target.value)} placeholder="Ketik atau scan kode lalu Enter" onKeyDown={(e) => e.key === "Enter" && submitManual()} inputMode="text" />
            <button className="btn btn-primary" onClick={submitManual}>OK</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

"use client";

import { useEffect } from "react";
import { usePrintJob, printStore } from "@/features/printer/printStore";
import { ReceiptView } from "@/features/receipt-renderer/ReceiptView";

/**
 * Cetak browser: merender struk (renderer HTML) ke area .print-host,
 * lalu memanggil window.print(). @page diset sesuai lebar kertas.
 */
export function PrintHost() {
  const job = usePrintJob();
  useEffect(() => {
    if (!job) return;
    const root = document.documentElement;
    root.dataset.print = "receipt";
    const done = () => {
      delete root.dataset.print;
      printStore.clear();
    };
    window.addEventListener("afterprint", done, { once: true });
    const t = setTimeout(() => {
      try {
        window.print();
      } catch {
        done();
      }
    }, 150);
    return () => {
      clearTimeout(t);
      window.removeEventListener("afterprint", done);
      delete root.dataset.print;
    };
  }, [job]);
  if (!job) return null;
  return (
    <div className="print-host" aria-hidden>
      <style>{`@media print{@page{size:${job.widthMm}mm auto;margin:0}.print-host .receipt-paper{width:${(job.widthMm / job.fontScale).toFixed(2)}mm !important;zoom:${job.fontScale};line-height:${job.lineSpacing}}}`}</style>
      {Array.from({ length: job.copies }).map((_, i) => (
        <div key={i} style={{ pageBreakAfter: i < job.copies - 1 ? "always" : "auto" }}>
          <ReceiptView template={job.tpl} data={job.data} widthMm={job.widthMm} marginMm={job.marginMm} />
        </div>
      ))}
    </div>
  );
}

# Arsitektur

## Keputusan utama
| Keputusan | Alasan |
|---|---|
| Next.js App Router, semua halaman client-side | Workspace/platform sudah berbasis Next.js. Dengan `STATIC_EXPORT=true` menghasilkan situs statis untuk GitHub Pages — setara SPA Vite. |
| IndexedDB via Dexie | Penyimpanan utama offline, transaksi atomik (`db.transaction`). |
| Nominal integer | Tidak ada floating point (Rupiah tanpa desimal). Pajak dihitung dalam basis-point lalu dibulatkan. |
| ID transaksi = `cart.draftId` | Checkout idempoten: submit ganda mengembalikan transaksi yang sama. |
| Satu sumber konten struk (`blocks.ts`) | Semua renderer memakai pemetaan data→blok yang sama; hanya presentasi berbeda. |
| Tanpa library PDF/barcode/chart | Bundel ringan: Code128, PDF, bar chart, ESC/POS ditulis sendiri. |
| Service worker tulisan tangan | Kontrol penuh basePath GitHub Pages, tanpa dependency. |

## Struktur
```
src/
  app/                 route Next (tipis) + providers + layout (meta PWA/iOS)
  layouts/AppShell     sidebar desktop, bottom-nav mobile, header
  components/          ui.tsx (Modal, Field, MoneyInput…), feedback.tsx (toast/confirm), charts, PrintHost
  features/
    dashboard/ pos/ products/ transactions/ reports/ settings/ backup/
    receipt-studio/    galeri, TemplateBuilder, PrinterSetup
    receipt-renderer/  elements, builtinTemplates (18), blocks, ReceiptView (HTML),
                       textLayout, escpos, pdf, canvasImage (PNG)
    printer/           adapters (BLE/USB), printerManager, printService, ReceiptModal
    barcode/           code128, qr, BarcodeViews, Scanner (kamera), LabelTool
  database/db.ts       skema Dexie + seed
  services/            transactions, products, templates, backup, reports, pwa
  hooks/ utils/ types/
public/                manifest.webmanifest, sw.js, icons/
tests/                 Vitest (utilitas, database, renderer)
```
`src/db` + `src/app/api/health` adalah bawaan starter (healthcheck platform); tidak dipakai aplikasi dan dibuang saat build Pages.

## Alur renderer
`ReceiptTemplate` (JSON, tanpa komponen UI) + `ReceiptData` → `buildBlocks()` →
- `ReceiptView` (HTML: preview & cetak browser)
- `layoutReceipt()` → `Line[]` berbasis kolom karakter → `renderEscPos()` / `renderPdf()` / `renderPng()` / teks WhatsApp

## Printer
`PrinterAdapter` (BluetoothAdapter BLE, UsbAdapter) → `printerManager` (status, disconnect handling) → `printService` (pilih metode, fallback). Bluetooth Classic tidak bisa diakses browser; Safari/iOS tidak punya Web Bluetooth/USB.

## Offline & PWA
`sw.js`: navigasi network-first + fallback cache; `/_next/static` cache-first; sisanya stale-while-revalidate. Halaman memicu `WARM` untuk menyimpan semua rute & aset. Pembaruan SW → toast "Perbarui". Update tidak menyentuh IndexedDB.

## Keterbatasan & jalur pengembangan
- Data per perangkat; tidak ada sinkronisasi. Multi-pengguna lintas perangkat butuh backend + autentikasi aman (profil kasir saat ini hanya label).
- Opsi gratis untuk tahap berikut (butuh persetujuan sebelum implementasi): Supabase (Postgres + Auth + RLS) atau Cloudflare D1/Workers. Rancangan: tambahkan `syncQueue` di Dexie + endpoint push/pull per `updatedAt`; ID sudah UUID sehingga aman di-merge.

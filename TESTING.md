# Pengujian

## Otomatis (dijalankan; `npm test`)
Vitest — 53 tes lulus pada saat penulisan:
- `tests/money.test.ts`: total, diskon, pajak integer, format uang, penomoran, pembayaran tunai/campuran/DP.
- `tests/database.test.ts` (fake-indexeddb): CRUD produk, validasi duplikat, checkout, nomor urut, stok, **double-submit**, batal/retur/DP/pelunasan, audit, laporan, backup→restore (replace/merge), validasi file, template kustom (simpan/duplikat/ekspor/impor/hapus, bawaan terlindungi), seed.
- `tests/receipt.test.tsx` (jsdom + RTL): 18 template (id unik, layout berbeda, render HTML), layout 32 & 48 kolom tidak terpotong, packing slip tanpa harga, struk retur/DP, byte ESC/POS (init, QR, Code128, cut), PDF valid 58/80mm, Code128.

Juga dijalankan: `next typegen`, `tsc --noEmit`, `npm run build`, dan build statis (`STATIC_EXPORT=true`).

## Belum dapat diverifikasi di lingkungan ini (HARUS diuji manual)
| Area | Status | Cara uji |
|---|---|---|
| Printer Bluetooth/USB fisik (58 & 80mm) | **Belum diuji perangkat fisik** | Receipt Studio → Printer → Hubungkan → Test print; cek rata, bold, QR, barcode. Catat model printer & hasil di bawah. |
| Scan kamera (Android Chrome / iPhone Safari) | Belum diuji perangkat | Produk → ikon scan; uji izin ditolak & fallback manual. |
| Instalasi PWA & splash (Android/iOS) | Belum diuji perangkat | Ikuti halaman `/install`. |
| Mode offline nyata | Belum diuji di browser | Buka online sekali → DevTools Network Offline / mode pesawat → reload, buat transaksi. |
| Playwright E2E & responsif visual | Tidak dijalankan (tidak ada browser di sandbox) | Disarankan menambah Playwright. |
| GitHub Pages live | Belum dipublikasikan | Push ke GitHub, aktifkan Pages, buka URL, cek `/manifest.webmanifest` & `/sw.js`. |

## Checklist uji manual responsif
iPhone (375×812, notch/safe-area), Android (360×800), tablet (768), desktop (≥1024): bottom-nav vs sidebar, keranjang mobile, modal bottom-sheet, keyboard virtual tidak menutup tombol bayar.

## Catatan hasil uji printer fisik
(isi: tanggal · model · koneksi · browser/OS · hasil)

# PROJECT GUIDE (untuk pengembang / AI agent berikutnya)

## Status
Versi 1.0.0 — fitur inti selesai dan lulus tes otomatis, typecheck, dan build produksi (server & statis). **Belum** dipublikasikan ke GitHub Pages (butuh akun/repo pengguna). Fitur yang butuh perangkat fisik belum diverifikasi (lihat TESTING.md).

## Fitur selesai
Dashboard (data nyata, grafik 7 hari, terlaris, metode bayar, status online) · Produk/kategori/foto/barcode/stok opsional · Kasir (keranjang, catatan item, diskon %/nominal, pajak, biaya, campuran, DP, hold/resume/cancel, scan) · Transaksi (filter, detail, cetak ulang, duplikat, batal, retur, pelunasan, audit log) · 18 template + Builder + galeri (favorit, duplikat, rename, hapus kustom, impor/ekspor, reset) · renderer HTML/ESC-POS/PDF/PNG/WhatsApp · printer BLE/USB/browser/share · Code128 & QR + label · Laporan + CSV + cetak · Backup/restore · Multi-toko & kasir (label lokal) · PWA (manifest, SW, ikon, install page, notifikasi update) · mode gelap · iOS meta & safe-area.

## Belum / terbatas
- Printer fisik, kamera, instalasi, offline di browser nyata: belum diverifikasi.
- Struk retur hanya retur penuh (belum parsial). Tidak ada sinkronisasi cloud / login sungguhan.
- Bluetooth Classic (SPP) tidak didukung browser; Safari iOS tanpa Web Bluetooth/USB.
- E2E Playwright belum ada. Logo tidak dicetak pada PDF (hanya HTML/ESC-POS/PNG).
- Struk tidak mencetak karakter non-ASCII pada ESC/POS (diubah ke ASCII).

## Teknologi
Next.js 16 (App Router, client-only), React 19, TypeScript, Tailwind v4 (token CSS di `globals.css`), Dexie, lucide-react, qrcode, @zxing/browser (fallback scanner, lazy), Vitest + RTL + fake-indexeddb.

## Cara kerja
- Dev: `npm run dev` · Tes: `npm test` · Build: `npm run build` · Pages: `npm run build:pages` (hapus dulu `src/app/api` secara lokal bila build gagal karena route API; CI melakukannya otomatis) · Ikon: `npm run icons`.
- Env build Pages: `STATIC_EXPORT=true`, `NEXT_PUBLIC_BASE_PATH=/nama-repo` (kosong untuk custom domain).

## Deploy
Lihat README. Tindakan pengguna: buat repo, push ke `main`, Settings → Pages → Source: GitHub Actions. Opsional variabel `CUSTOM_DOMAIN`.

## Keputusan teknis
Lihat ARCHITECTURE.md. Ringkas: Next.js statis menggantikan Vite karena starter; integer money; checkout idempoten via ID draft; satu `buildBlocks` untuk semua renderer; SW tulisan sendiri.

## Kendala & solusi
- Vitest 5 memakai oxc: set `oxc.jsx.runtime = automatic` (bukan esbuild).
- Code128 "PJJ123C" bernilai 54 untuk Start A; kita memakai Start B → 55.
- Teks 2× pada struk thermal yang tak muat satu baris otomatis turun ke ukuran normal.
- Redirect di GitHub Pages: gunakan `trailingSlash` agar cache SW tidak menyimpan respons redirect.

## Langkah terakhir yang berhasil
typegen ✓ · tsc ✓ · 53 tes ✓ · build ✓ (lihat log sesi).

## Langkah berikutnya
1. Push ke GitHub & aktifkan Pages; verifikasi URL, manifest, SW, offline.
2. Uji printer 58/80mm fisik & isi TESTING.md.
3. Tambah Playwright E2E.
4. Retur parsial, laporan per kasir, label massal.
5. (Perlu persetujuan) Backend sinkronisasi gratis (Supabase/Cloudflare).

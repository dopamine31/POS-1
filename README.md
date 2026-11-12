# POS & Receipt Studio

Aplikasi kasir (Point of Sale) + desainer struk, berbentuk **PWA offline-first**. Semua data tersimpan di perangkat (IndexedDB), tanpa server, sehingga bisa dihosting gratis di **GitHub Pages**.

- Kasir: keranjang, diskon (nominal/persen), pajak, biaya tambahan, pembayaran tunai/non-tunai/campuran, DP & pelunasan, tahan/lanjutkan transaksi, scan barcode.
- Produk & kategori, stok opsional, validasi SKU/barcode duplikat.
- Riwayat transaksi: filter, cetak ulang, duplikat, batal & retur (dengan audit log).
- **Receipt Studio**: 18 template bawaan dengan layout berbeda, **Template Builder** (drag & drop, 29 jenis elemen, preview 58/80mm/A4/custom), impor/ekspor JSON.
- Renderer terpisah: HTML (layar/cetak browser), **ESC/POS**, **PDF**, **PNG**, teks (WhatsApp).
- Printer: cetak browser, Web Bluetooth (BLE) & WebUSB ESC/POS, Share/PDF.
- Laporan harian/mingguan/bulanan/custom + ekspor CSV + cetak.
- Backup/restore JSON tervalidasi, multi-toko, multi-kasir (profil lokal), mode gelap, PWA installable.

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
npm test             # Vitest (53 tes)
npm run build        # build server Next.js biasa
npm run build:pages  # build statis ke ./out (GitHub Pages)
```

## Deploy ke GitHub Pages

1. Buat repository di GitHub, lalu push proyek ini ke branch `main`:
   ```bash
   git init && git add . && git commit -m "POS & Receipt Studio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```
2. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` otomatis menjalankan tes, build statis, dan deploy.
4. Aplikasi tersedia di `https://USERNAME.github.io/REPOSITORY/`.

Custom domain: buat repository variable `CUSTOM_DOMAIN` (Settings → Secrets and variables → Actions → Variables) berisi domain Anda, lalu atur DNS & HTTPS di Settings → Pages. Base path otomatis dikosongkan.

> Status deploy: konfigurasi siap, **belum dipublikasikan** — memerlukan akun/repository GitHub Anda. Lihat `PROJECT_GUIDE.md`.

## Catatan teknologi

Starter lingkungan ini berbasis **Next.js (App Router)**, bukan Vite. Aplikasi dibuat 100% client-side (`output: "export"` untuk Pages) sehingga setara dengan SPA statis. Lihat `ARCHITECTURE.md` untuk alasan dan struktur.

Dokumen lain: `PROJECT_GUIDE.md`, `ARCHITECTURE.md`, `TESTING.md`, `CHANGELOG.md`.

/* POS & Receipt Studio — Service Worker (hand-written, no deps).
 * Strategi:
 *  - Navigasi (HTML): network-first → cache → fallback ke shell yang tersimpan (offline).
 *  - /_next/static & ikon: cache-first (nama berhash / immutable).
 *  - Lainnya (same-origin GET): stale-while-revalidate.
 *  - Pesan WARM dari halaman: menyimpan rute & aset yang sudah dimuat agar bisa offline.
 * Data pengguna ada di IndexedDB; update SW TIDAK menyentuh data tersebut.
 * Naikkan VERSION saat mengubah logika SW. */
const VERSION = "v1";
const CACHE = "pos-studio-" + VERSION;
const BASE = self.registration.scope; // mis. https://user.github.io/repo/

self.addEventListener("install", () => {
  // Tidak langsung skipWaiting: pengguna dinotifikasi lalu menekan "Perbarui".
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith("pos-studio-") && k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  const d = event.data || {};
  if (d.type === "SKIP_WAITING") self.skipWaiting();
  if (d.type === "WARM" && Array.isArray(d.urls)) {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE);
        const urls = Array.from(new Set(d.urls));
        await Promise.all(
          urls.map(async (u) => {
            try {
              const url = new URL(u, self.location.origin);
              if (url.origin !== self.location.origin) return;
              const res = await fetch(url.href, { cache: "reload", redirect: "follow" });
              if (res.ok && !res.redirected) await cache.put(url.href, res);
            } catch (_) {
              /* offline saat warm: abaikan */
            }
          }),
        );
        // manifest & ikon
        await Promise.all(
          ["manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/icon.svg"].map(async (p) => {
            try {
              const res = await fetch(new URL(p, BASE).href);
              if (res.ok) await cache.put(new URL(p, BASE).href, res);
            } catch (_) {}
          }),
        );
      })(),
    );
  }
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok && !res.redirected) cache.put(req, res.clone());
    return res;
  } catch (_) {
    const hit = (await cache.match(req, { ignoreSearch: true })) || (await cache.match(BASE)) || (await cache.match(BASE + "index.html"));
    if (hit) return hit;
    return new Response("<h1>Offline</h1><p>Buka aplikasi sekali saat online agar tersimpan untuk penggunaan offline.</p>", { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  const net = fetch(req)
    .then((res) => {
      if (res.ok && !res.redirected) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  return hit || (await net) || new Response("", { status: 504 });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes("/api/")) return;
  if (req.mode === "navigate") return event.respondWith(networkFirst(req));
  if (url.pathname.includes("/_next/static/") || url.pathname.includes("/icons/")) return event.respondWith(cacheFirst(req));
  event.respondWith(staleWhileRevalidate(req));
});

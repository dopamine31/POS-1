import { BASE_PATH } from "@/utils/helpers";

const ROUTES = ["", "pos", "products", "transactions", "studio", "reports", "settings", "install"];
const TRAILING = process.env.NEXT_PUBLIC_EXPORT === "true";

/** Daftarkan service worker (hanya production) + minta SW menyimpan shell & aset yang sudah dimuat. */
export function registerServiceWorker(onUpdate: (apply: () => void) => void) {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  if (process.env.NODE_ENV !== "production") return;
  const scope = `${BASE_PATH}/`;
  navigator.serviceWorker
    .register(`${BASE_PATH}/sw.js`, { scope })
    .then((reg) => {
      const warm = () => {
        const urls = ROUTES.map((r) => `${BASE_PATH}/${r}${r && TRAILING ? "/" : ""}`);
        const assets = performance.getEntriesByType("resource").map((e) => e.name).filter((u) => u.startsWith(location.origin));
        (reg.active ?? navigator.serviceWorker.controller)?.postMessage({ type: "WARM", urls: [...urls, ...assets] });
      };
      if (reg.active) warm();
      navigator.serviceWorker.ready.then(() => setTimeout(warm, 1500));
      const notify = () => {
        if (reg.waiting && navigator.serviceWorker.controller) onUpdate(() => reg.waiting?.postMessage({ type: "SKIP_WAITING" }));
      };
      notify();
      reg.addEventListener("updatefound", () => {
        const w = reg.installing;
        w?.addEventListener("statechange", () => w.state === "installed" && notify());
      });
    })
    .catch(() => undefined);
  let reloaded = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloaded) return;
    reloaded = true;
    location.reload();
  });
}

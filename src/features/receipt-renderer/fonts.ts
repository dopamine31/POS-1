import type { FontFamily } from "@/types";

export type FontCategory = "Monospace" | "Sans-serif" | "Serif" | "Struk / Thermal";

export interface FontDef {
  id: FontFamily;
  label: string;
  category: FontCategory;
  /** nilai CSS font-family lengkap dengan cadangan */
  css: string;
  /** true = di-bundle (jalan offline); false = font sistem, bergantung perangkat */
  bundled: boolean;
  /** nama family untuk document.fonts.load (hanya font bundled) */
  family?: string;
}

const MONO = "ui-monospace, 'Courier New', monospace";
const SANS = "system-ui, -apple-system, 'Segoe UI', Arial, sans-serif";

export const FONTS: FontDef[] = [
  { id: "mono", label: "Monospace (bawaan)", category: "Monospace", css: '"Courier New", ui-monospace, "SF Mono", Menlo, Consolas, monospace', bundled: false },
  { id: "courier-new", label: "Courier New", category: "Monospace", css: "'Courier New', 'Liberation Mono', Courier, monospace", bundled: false },
  { id: "consolas", label: "Consolas", category: "Monospace", css: `Consolas, 'DejaVu Sans Mono', ${MONO}`, bundled: false },
  { id: "roboto-mono", label: "Roboto Mono", category: "Monospace", css: `'Roboto Mono', ${MONO}`, bundled: true, family: "Roboto Mono" },
  { id: "liberation-mono", label: "Liberation Mono", category: "Monospace", css: "'Liberation Mono', 'Courier New', monospace", bundled: false },
  { id: "dejavu-mono", label: "DejaVu Sans Mono", category: "Monospace", css: `'DejaVu Sans Mono', ${MONO}`, bundled: false },
  { id: "ibm-plex-mono", label: "IBM Plex Mono", category: "Monospace", css: `'IBM Plex Mono', ${MONO}`, bundled: true, family: "IBM Plex Mono" },
  { id: "jetbrains-mono", label: "JetBrains Mono", category: "Monospace", css: `'JetBrains Mono', ${MONO}`, bundled: true, family: "JetBrains Mono" },
  { id: "inconsolata", label: "Inconsolata", category: "Monospace", css: `Inconsolata, ${MONO}`, bundled: true, family: "Inconsolata" },

  { id: "sans", label: "Sans-serif (bawaan)", category: "Sans-serif", css: `Inter, ui-sans-serif, ${SANS}`, bundled: true, family: "Inter" },
  { id: "arial", label: "Arial", category: "Sans-serif", css: "Arial, 'Liberation Sans', Helvetica, sans-serif", bundled: false },
  { id: "roboto", label: "Roboto", category: "Sans-serif", css: `Roboto, ${SANS}`, bundled: true, family: "Roboto" },
  { id: "tahoma", label: "Tahoma", category: "Sans-serif", css: "Tahoma, 'DejaVu Sans', Verdana, sans-serif", bundled: false },
  { id: "verdana", label: "Verdana", category: "Sans-serif", css: "Verdana, 'DejaVu Sans', sans-serif", bundled: false },
  { id: "open-sans", label: "Open Sans", category: "Sans-serif", css: `'Open Sans', ${SANS}`, bundled: true, family: "Open Sans" },
  { id: "inter", label: "Inter", category: "Sans-serif", css: `Inter, ${SANS}`, bundled: true, family: "Inter" },

  { id: "serif", label: "Serif (bawaan)", category: "Serif", css: "Georgia, 'Times New Roman', serif", bundled: false },

  { id: "vt323", label: "VT323 (piksel/terminal)", category: "Struk / Thermal", css: `VT323, ${MONO}`, bundled: true, family: "VT323" },
  { id: "share-tech-mono", label: "Share Tech Mono", category: "Struk / Thermal", css: `'Share Tech Mono', ${MONO}`, bundled: true, family: "Share Tech Mono" },
];

const BY_ID = new Map<string, FontDef>(FONTS.map((f) => [f.id, f]));

export function fontDef(id: string): FontDef {
  return BY_ID.get(id) ?? BY_ID.get("mono")!;
}

export function fontCss(id: string): string {
  return fontDef(id).css;
}

export const FONT_CATEGORIES: FontCategory[] = ["Monospace", "Sans-serif", "Serif", "Struk / Thermal"];

/** Pastikan font bundled sudah dimuat sebelum digambar di canvas (mode bitmap / PNG). */
export async function ensureFontsLoaded(ids: string[]): Promise<void> {
  if (typeof document === "undefined" || !document.fonts) return;
  const jobs: Promise<unknown>[] = [];
  for (const id of new Set(ids)) {
    const f = fontDef(id);
    if (f.family) {
      jobs.push(document.fonts.load(`400 16px "${f.family}"`), document.fonts.load(`700 16px "${f.family}"`));
    }
  }
  await Promise.allSettled(jobs);
}

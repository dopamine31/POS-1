import { audit, db, getKV, setKV } from "@/database/db";
import type { ReceiptTemplate, TemplateElement } from "@/types";
import { BUILTIN_IDS, BUILTIN_TEMPLATES } from "@/features/receipt-renderer/builtinTemplates";
import { defaultElement } from "@/features/receipt-renderer/elements";
import { uid } from "@/utils/helpers";

const FAV_KEY = "favBuiltinTemplates";

export function mergeTemplates(custom: ReceiptTemplate[], favs: string[]): ReceiptTemplate[] {
  const built = BUILTIN_TEMPLATES.map((t) => ({ ...t, favorite: favs.includes(t.id) }));
  return [...built, ...custom.sort((a, b) => b.updatedAt - a.updatedAt)];
}

export async function allTemplates(): Promise<ReceiptTemplate[]> {
  return mergeTemplates(await db.templates.toArray(), await getKV<string[]>(FAV_KEY, []));
}

export async function getTemplate(id: string): Promise<ReceiptTemplate> {
  const all = await allTemplates();
  return all.find((t) => t.id === id) ?? all[0];
}

export async function saveTemplate(t: ReceiptTemplate, actor = "system"): Promise<ReceiptTemplate> {
  if (t.builtin || BUILTIN_IDS.has(t.id)) throw new Error("Template bawaan tidak dapat ditimpa. Duplikat dahulu.");
  const name = t.name.trim();
  if (!name) throw new Error("Nama template wajib diisi");
  const rec = { ...t, name, builtin: false, updatedAt: Date.now() };
  await db.templates.put(rec);
  await audit({ action: "template.save", entity: "template", entityId: rec.id, detail: name, actor });
  return rec;
}

export async function duplicateTemplate(t: ReceiptTemplate, name?: string): Promise<ReceiptTemplate> {
  const now = Date.now();
  const copy: ReceiptTemplate = {
    ...structuredClone(t),
    id: uid(),
    name: name ?? `${t.name} (Salinan)`,
    builtin: false,
    favorite: false,
    elements: t.elements.map((e) => ({ ...e, id: uid() })),
    createdAt: now,
    updatedAt: now,
  };
  await db.templates.put(copy);
  return copy;
}

export function blankTemplate(): ReceiptTemplate {
  const now = Date.now();
  const els: TemplateElement[] = [
    defaultElement("storeName"),
    defaultElement("storeAddress"),
    defaultElement("divider"),
    defaultElement("receiptNo"),
    defaultElement("date"),
    defaultElement("divider"),
    defaultElement("items"),
    defaultElement("divider"),
    defaultElement("total"),
    defaultElement("payment"),
    defaultElement("thanks"),
  ];
  return { id: uid(), name: "Template Baru", description: "", builtin: false, favorite: false, paper: { size: "58", customMm: 58 }, elements: els, createdAt: now, updatedAt: now };
}

export async function renameTemplate(id: string, name: string) {
  if (BUILTIN_IDS.has(id)) throw new Error("Template bawaan tidak bisa diganti nama");
  if (!name.trim()) throw new Error("Nama wajib diisi");
  await db.templates.update(id, { name: name.trim(), updatedAt: Date.now() });
}

export async function deleteTemplate(id: string, actor = "system") {
  if (BUILTIN_IDS.has(id)) throw new Error("Template bawaan tidak dapat dihapus");
  await db.templates.delete(id);
  await audit({ action: "template.delete", entity: "template", entityId: id, detail: id, actor });
}

export async function toggleFavorite(t: ReceiptTemplate) {
  if (BUILTIN_IDS.has(t.id)) {
    const favs = await getKV<string[]>(FAV_KEY, []);
    await setKV(FAV_KEY, favs.includes(t.id) ? favs.filter((x) => x !== t.id) : [...favs, t.id]);
  } else await db.templates.update(t.id, { favorite: !t.favorite });
}

/** "Restore default": hapus favorit pada template bawaan (bawaan tidak pernah berubah). */
export async function resetBuiltinState() {
  await setKV(FAV_KEY, []);
}

export function exportTemplateJson(t: ReceiptTemplate): string {
  return JSON.stringify({ app: "pos-receipt-studio", type: "template", version: 1, template: { ...t, builtin: false } }, null, 2);
}

export async function importTemplateJson(text: string): Promise<ReceiptTemplate> {
  let raw: { app?: string; type?: string; template?: Partial<ReceiptTemplate> };
  try {
    raw = JSON.parse(text);
  } catch {
    throw new Error("File bukan JSON yang valid");
  }
  const t = raw.template;
  if (raw.app !== "pos-receipt-studio" || raw.type !== "template" || !t || !Array.isArray(t.elements) || typeof t.name !== "string") throw new Error("File bukan template POS & Receipt Studio");
  const now = Date.now();
  const rec: ReceiptTemplate = {
    id: uid(),
    name: t.name + " (Impor)",
    description: t.description ?? "",
    builtin: false,
    favorite: false,
    paper: t.paper ?? { size: "58", customMm: 58 },
    elements: t.elements.map((e) => ({ ...defaultElement((e as TemplateElement).type ?? "text"), ...(e as TemplateElement), id: uid() })),
    createdAt: now,
    updatedAt: now,
  };
  await db.templates.put(rec);
  return rec;
}

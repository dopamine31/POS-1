import { useSyncExternalStore } from "react";
import type { ReceiptData, ReceiptTemplate } from "@/types";

export interface PrintJob {
  tpl: ReceiptTemplate;
  data: ReceiptData;
  widthMm: number;
  marginMm: number;
  copies: number;
  fontScale: number;
  lineSpacing: number;
}

let job: PrintJob | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const printStore = {
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  get: () => job,
  request(j: PrintJob) {
    job = j;
    emit();
  },
  clear() {
    job = null;
    emit();
  },
};

export function usePrintJob() {
  return useSyncExternalStore(printStore.subscribe, printStore.get, () => null);
}

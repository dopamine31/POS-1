export type SyncState = "idle" | "syncing" | "ok" | "error";

export interface SyncStatus {
  state: SyncState;
  lastOk: number | null;
  error: string | null;
}

let status: SyncStatus = { state: "idle", lastOk: null, error: null };
const subs = new Set<() => void>();

export const getSyncStatus = (): SyncStatus => status;

export function setSyncStatus(p: Partial<SyncStatus>): void {
  status = { ...status, ...p };
  subs.forEach((f) => f());
}

export function subscribeSyncStatus(cb: () => void): () => void {
  subs.add(cb);
  return () => {
    subs.delete(cb);
  };
}

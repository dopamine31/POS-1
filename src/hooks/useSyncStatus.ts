"use client";

import { useSyncExternalStore } from "react";
import { getSyncStatus, subscribeSyncStatus } from "@/database/syncStatus";

export function useSyncStatus() {
  return useSyncExternalStore(subscribeSyncStatus, getSyncStatus, getSyncStatus);
}

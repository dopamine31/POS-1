import { useSyncExternalStore } from "react";
import { BluetoothAdapter, UsbAdapter, type PrinterAdapter } from "./adapters";

export type PrinterStatus = "idle" | "connecting" | "connected" | "disconnected" | "error";
export interface PrinterState {
  status: PrinterStatus;
  kind: "bluetooth" | "usb" | null;
  name: string;
  error: string;
}

class PrinterManager {
  private adapter: PrinterAdapter | null = null;
  private listeners = new Set<() => void>();
  state: PrinterState = { status: "idle", kind: null, name: "", error: "" };

  subscribe = (l: () => void) => {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  };
  getState = () => this.state;
  private set(s: Partial<PrinterState>) {
    this.state = { ...this.state, ...s };
    this.listeners.forEach((l) => l());
  }

  supports(kind: "bluetooth" | "usb") {
    return (kind === "bluetooth" ? new BluetoothAdapter() : new UsbAdapter()).isSupported();
  }

  async connect(kind: "bluetooth" | "usb") {
    if (this.adapter?.isConnected() && this.adapter.kind === kind) return;
    await this.disconnect();
    const a = kind === "bluetooth" ? new BluetoothAdapter() : new UsbAdapter();
    this.set({ status: "connecting", kind, error: "" });
    try {
      const name = await a.connect();
      a.onDisconnect(() => this.set({ status: "disconnected", error: "Printer terputus. Hubungkan ulang." }));
      this.adapter = a;
      this.set({ status: "connected", name, error: "" });
    } catch (e) {
      this.adapter = null;
      this.set({ status: "error", error: e instanceof Error ? e.message : "Gagal terhubung" });
      throw e;
    }
  }

  async disconnect() {
    const a = this.adapter;
    this.adapter = null;
    if (a) await a.disconnect().catch(() => undefined);
    this.set({ status: "idle", kind: null, name: "", error: "" });
  }

  isConnected(kind: "bluetooth" | "usb") {
    return !!this.adapter && this.adapter.kind === kind && this.adapter.isConnected();
  }

  async send(bytes: Uint8Array) {
    if (!this.adapter || !this.adapter.isConnected()) {
      this.set({ status: "disconnected", error: "Printer tidak terhubung" });
      throw new Error("Printer tidak terhubung");
    }
    try {
      await this.adapter.write(bytes);
    } catch (e) {
      this.set({ status: "disconnected", error: "Gagal mengirim data ke printer" });
      throw e;
    }
  }
}

export const printerManager = new PrinterManager();

export function usePrinterState(): PrinterState {
  return useSyncExternalStore(printerManager.subscribe, printerManager.getState, printerManager.getState);
}

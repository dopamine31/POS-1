/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Arsitektur adapter printer.
 * Dukungan browser (jangan diasumsikan):
 *  - Web Bluetooth (BLE): Chrome/Edge Android & desktop. TIDAK ada di Safari/iOS.
 *  - WebUSB: Chrome/Edge desktop & sebagian Android. TIDAK ada di Safari/iOS.
 *  - Bluetooth Classic (SPP) tidak bisa diakses dari browser mana pun.
 *  Fallback: cetak browser (AirPrint/Print Service), PDF, atau Share.
 */
export interface PrinterAdapter {
  readonly kind: "bluetooth" | "usb";
  isSupported(): boolean;
  connect(): Promise<string>;
  write(data: Uint8Array): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  onDisconnect(cb: () => void): void;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const BLE_SERVICES = [
  "000018f0-0000-1000-8000-00805f9b34fb",
  "e7810a71-73ae-499d-8c15-faa9aef0c3f2",
  "49535343-fe7d-4ae5-8fa9-9fafd205e455",
  "0000ff00-0000-1000-8000-00805f9b34fb",
  "0000ffe0-0000-1000-8000-00805f9b34fb",
  "0000fff0-0000-1000-8000-00805f9b34fb",
  "00001101-0000-1000-8000-00805f9b34fb",
];

export class BluetoothAdapter implements PrinterAdapter {
  readonly kind = "bluetooth" as const;
  private device: any = null;
  private char: any = null;
  private cb: (() => void) | null = null;

  isSupported() {
    return typeof navigator !== "undefined" && !!(navigator as any).bluetooth;
  }
  isConnected() {
    return !!this.device?.gatt?.connected && !!this.char;
  }
  onDisconnect(cb: () => void) {
    this.cb = cb;
  }
  async connect(): Promise<string> {
    const bt = (navigator as any).bluetooth;
    if (!bt) throw new Error("Web Bluetooth tidak didukung browser ini (Safari iPhone tidak mendukung). Gunakan Chrome Android, atau metode Cetak Browser/PDF.");
    const device = await bt.requestDevice({ acceptAllDevices: true, optionalServices: BLE_SERVICES });
    device.addEventListener("gattserverdisconnected", () => {
      this.char = null;
      this.cb?.();
    });
    const server = await device.gatt.connect();
    let found: any = null;
    const services = await server.getPrimaryServices();
    for (const s of services) {
      try {
        for (const c of await s.getCharacteristics()) {
          if (c.properties.write || c.properties.writeWithoutResponse) {
            found = c;
            break;
          }
        }
      } catch {
        /* abaikan service yang tidak bisa dibaca */
      }
      if (found) break;
    }
    if (!found) {
      device.gatt.disconnect();
      throw new Error("Perangkat tidak punya karakteristik tulis BLE. Printer mungkin hanya Bluetooth Classic.");
    }
    this.device = device;
    this.char = found;
    return device.name || "Printer BLE";
  }
  async write(data: Uint8Array) {
    if (!this.isConnected()) throw new Error("Printer terputus");
    const chunk = 100;
    for (let i = 0; i < data.length; i += chunk) {
      const part = data.slice(i, i + chunk);
      if (this.char.properties.writeWithoutResponse && this.char.writeValueWithoutResponse) await this.char.writeValueWithoutResponse(part);
      else await this.char.writeValue(part);
      await sleep(25);
    }
  }
  async disconnect() {
    try {
      this.device?.gatt?.disconnect();
    } finally {
      this.char = null;
      this.device = null;
    }
  }
}

export class UsbAdapter implements PrinterAdapter {
  readonly kind = "usb" as const;
  private device: any = null;
  private ep = 0;
  private cb: (() => void) | null = null;

  isSupported() {
    return typeof navigator !== "undefined" && !!(navigator as any).usb;
  }
  isConnected() {
    return !!this.device?.opened;
  }
  onDisconnect(cb: () => void) {
    this.cb = cb;
  }
  async connect(): Promise<string> {
    const usb = (navigator as any).usb;
    if (!usb) throw new Error("WebUSB tidak didukung browser ini. Gunakan Chrome/Edge desktop, atau Cetak Browser/PDF.");
    const device = await usb.requestDevice({ filters: [] });
    await device.open();
    if (!device.configuration) await device.selectConfiguration(1);
    let ifaceNum = -1;
    for (const i of device.configuration.interfaces) {
      for (const a of i.alternates) {
        const out = a.endpoints.find((e: any) => e.direction === "out" && e.type === "bulk");
        if (out && (a.interfaceClass === 7 || ifaceNum < 0)) {
          ifaceNum = i.interfaceNumber;
          this.ep = out.endpointNumber;
        }
      }
    }
    if (ifaceNum < 0) {
      await device.close();
      throw new Error("Endpoint cetak USB tidak ditemukan pada perangkat ini");
    }
    await device.claimInterface(ifaceNum);
    this.device = device;
    usb.addEventListener("disconnect", (e: any) => {
      if (e.device === this.device) {
        this.device = null;
        this.cb?.();
      }
    });
    return device.productName || "Printer USB";
  }
  async write(data: Uint8Array) {
    if (!this.isConnected()) throw new Error("Printer terputus");
    const chunk = 4096;
    for (let i = 0; i < data.length; i += chunk) await this.device.transferOut(this.ep, data.slice(i, i + chunk));
  }
  async disconnect() {
    try {
      await this.device?.close();
    } finally {
      this.device = null;
    }
  }
}

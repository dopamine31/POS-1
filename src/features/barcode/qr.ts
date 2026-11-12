import QRCode from "qrcode";

export interface QRMatrix {
  size: number;
  get(x: number, y: number): boolean;
}

/** Matriks QR (tanpa quiet zone). */
export function qrMatrix(text: string): QRMatrix {
  const q = QRCode.create(text || " ", { errorCorrectionLevel: "M" });
  const size = q.modules.size;
  const data = q.modules.data;
  return { size, get: (x, y) => !!data[y * size + x] };
}

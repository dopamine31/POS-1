"use client";

import { useMemo } from "react";
import { code128Modules } from "./code128";
import { qrMatrix } from "./qr";

export function BarcodeSvg({ value, height = 48, showText = true, color = "#000" }: { value: string; height?: number; showText?: boolean; color?: string }) {
  const mods = useMemo(() => code128Modules(value), [value]);
  const rects = useMemo(() => {
    const r: { x: number; w: number }[] = [];
    let i = 0;
    while (i < mods.length) {
      if (mods[i]) {
        let j = i;
        while (j < mods.length && mods[j]) j++;
        r.push({ x: i, w: j - i });
        i = j;
      } else i++;
    }
    return r;
  }, [mods]);
  return (
    <div style={{ display: "inline-block", maxWidth: "100%", textAlign: "center" }}>
      <svg viewBox={`0 0 ${mods.length} 10`} preserveAspectRatio="none" width="100%" height={height} style={{ display: "block", minWidth: 120 }} shapeRendering="crispEdges" role="img" aria-label={`Barcode ${value}`}>
        {rects.map((r) => (
          <rect key={r.x} x={r.x} y={0} width={r.w} height={10} fill={color} />
        ))}
      </svg>
      {showText && <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: 1, marginTop: 2 }}>{value}</div>}
    </div>
  );
}

export function QrSvg({ value, size = 110, color = "#000" }: { value: string; size?: number; color?: string }) {
  const m = useMemo(() => qrMatrix(value), [value]);
  const path = useMemo(() => {
    let d = "";
    for (let y = 0; y < m.size; y++) for (let x = 0; x < m.size; x++) if (m.get(x, y)) d += `M${x + 2} ${y + 2}h1v1h-1z`;
    return d;
  }, [m]);
  const n = m.size + 4;
  return (
    <svg viewBox={`0 0 ${n} ${n}`} width={size} height={size} shapeRendering="crispEdges" role="img" aria-label={`QR ${value}`} style={{ background: "#fff" }}>
      <path d={path} fill={color} />
    </svg>
  );
}

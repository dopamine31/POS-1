"use client";

/** Grafik batang SVG ringan (tanpa library). */
export function BarChart({ data, format, height = 140 }: { data: { label: string; value: number }[]; format: (n: number) => string; height?: number }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  const n = data.length || 1;
  const bw = 100 / n;
  return (
    <div>
      <svg viewBox={`0 0 100 ${height / 4}`} preserveAspectRatio="none" width="100%" height={height} role="img" aria-label="Grafik penjualan">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={0} x2={100} y1={(height / 4) * g} y2={(height / 4) * g} stroke="var(--line)" strokeWidth={0.3} vectorEffect="non-scaling-stroke" />
        ))}
        {data.map((d, i) => {
          const h = (d.value / max) * (height / 4 - 2);
          return (
            <rect key={d.label + i} x={i * bw + bw * 0.15} y={height / 4 - h} width={bw * 0.7} height={Math.max(h, d.value > 0 ? 0.6 : 0)} rx={0.8} fill="var(--brand)" opacity={d.value > 0 ? 1 : 0.2}>
              <title>{`${d.label}: ${format(d.value)}`}</title>
            </rect>
          );
        })}
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-muted">
        <span>{data[0]?.label}</span>
        <span>puncak {format(max)}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>
    </div>
  );
}

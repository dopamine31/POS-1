"use client";

/* eslint-disable @next/next/no-img-element */
import { memo, useMemo, type CSSProperties, type ReactNode } from "react";
import type { ReceiptData, ReceiptTemplate, TemplateElement } from "@/types";
import { buildBlocks, type Block, type ItemRow } from "./blocks";
import { paperWidthMm } from "./elements";
import { BarcodeSvg, QrSvg } from "@/features/barcode/BarcodeViews";

const FONT: Record<string, string> = {
  mono: '"Courier New", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  sans: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", serif',
};

const DIV_CHAR: Record<string, string> = { stars: "*", equals: "=" };

function elStyle(el: TemplateElement): CSSProperties {
  const w = el.widthPct;
  const s: CSSProperties = {
    fontFamily: FONT[el.font],
    fontSize: el.size,
    fontWeight: el.weight,
    fontStyle: el.italic ? "italic" : "normal",
    textTransform: el.uppercase ? "uppercase" : "none",
    letterSpacing: el.letterSpacing || undefined,
    lineHeight: el.lineHeight,
    textAlign: el.align,
    marginTop: el.marginTop,
    marginBottom: el.marginBottom,
    padding: `${el.paddingY}px ${el.paddingX}px`,
    width: w >= 100 ? undefined : `${w}%`,
    marginLeft: w < 100 ? (el.align === "left" ? 0 : "auto") : undefined,
    marginRight: w < 100 ? (el.align === "right" ? 0 : "auto") : undefined,
    boxSizing: "border-box",
  };
  if (el.border !== "none") s.border = `${el.border === "double" ? 3 : 1}px ${el.border} #000`;
  if (el.invert) {
    s.background = "#000";
    s.color = "#fff";
  }
  return s;
}

function Rule({ el }: { el: TemplateElement }) {
  const ch = DIV_CHAR[el.dividerStyle];
  if (ch) {
    return (
      <div style={{ ...elStyle(el), overflow: "hidden", whiteSpace: "nowrap", textAlign: "center", fontSize: el.size, lineHeight: 1 }} aria-hidden>
        {ch.repeat(120)}
      </div>
    );
  }
  const map: Record<string, string> = { dashed: "1px dashed #000", dotted: "1px dotted #000", solid: "1px solid #000", double: "3px double #000", thick: "3px solid #000" };
  const st = elStyle(el);
  return <div style={{ ...st, padding: 0, borderTop: map[el.dividerStyle], height: 0, fontSize: 0 }} aria-hidden />;
}

function Items({ el, rows, hasPrice }: { el: TemplateElement; rows: ItemRow[]; hasPrice: boolean }) {
  const st = elStyle(el);
  const qtyUnit = (r: ItemRow) => `${r.qty}${r.unit ? ` x ${r.unit}` : ""}`;
  const noteLine = (r: ItemRow) => (r.note ? <div style={{ fontSize: "0.85em", opacity: 0.75, fontStyle: "italic" }}>↳ {r.note}</div> : null);
  const codeOf = (r: ItemRow) => (r.code ? <span style={{ opacity: 0.7 }}>[{r.code}] </span> : null);
  let body: ReactNode;
  switch (el.itemLayout) {
    case "inline":
      body = rows.map((r, i) => (
        <div key={i} style={{ marginBottom: 2 }}>
          <div style={{ display: "flex", gap: 6, justifyContent: "space-between" }}>
            <span>
              {el.showQty && <b>{r.qty}x </b>}
              {codeOf(r)}
              {r.name}
            </span>
            {hasPrice && <span style={{ whiteSpace: "nowrap" }}>{r.total}</span>}
          </div>
          {noteLine(r)}
        </div>
      ));
      break;
    case "compact":
      body = rows.map((r, i) => (
        <div key={i} style={{ display: "flex", gap: 4, justifyContent: "space-between", whiteSpace: "nowrap" }}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {r.name} {el.showQty && <span style={{ opacity: 0.7 }}>×{r.qty}</span>}
          </span>
          {hasPrice && <span>{r.total}</span>}
        </div>
      ));
      break;
    case "table":
      body = (
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "inherit" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #000", textAlign: "left" }}>
              <th style={{ fontWeight: 700, padding: "2px 0" }}>Item</th>
              {el.showQty && <th style={{ fontWeight: 700, textAlign: "center" }}>Qty</th>}
              {hasPrice && el.showUnitPrice && <th style={{ fontWeight: 700, textAlign: "right" }}>Harga</th>}
              {hasPrice && <th style={{ fontWeight: 700, textAlign: "right" }}>Total</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ verticalAlign: "top" }}>
                <td style={{ padding: "2px 4px 2px 0" }}>
                  {codeOf(r)}
                  {r.name}
                  {noteLine(r)}
                </td>
                {el.showQty && <td style={{ textAlign: "center" }}>{r.qty}</td>}
                {hasPrice && el.showUnitPrice && <td style={{ textAlign: "right" }}>{r.unit}</td>}
                {hasPrice && <td style={{ textAlign: "right" }}>{r.total}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    case "detailed":
      body = rows.map((r, i) => (
        <div key={i} style={{ borderBottom: "1px solid #bbb", padding: "4px 0" }}>
          <div style={{ fontWeight: 700 }}>
            {i + 1}. {r.name}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9em" }}>
            <span>
              {r.code && <>Kode {r.code} · </>}
              {el.showQty && <>Qty {r.qty}</>}
              {hasPrice && el.showUnitPrice && <> × {r.unit}</>}
            </span>
            {hasPrice && <b>{r.total}</b>}
          </div>
          {noteLine(r)}
        </div>
      ));
      break;
    default:
      body = rows.map((r, i) => (
        <div key={i} style={{ marginBottom: 3 }}>
          <div style={{ fontWeight: 700 }}>
            {codeOf(r)}
            {r.name}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{el.showQty && qtyUnit(r)}</span>
            {hasPrice && <span>{r.total}</span>}
          </div>
          {noteLine(r)}
        </div>
      ));
  }
  return <div style={st}>{body}</div>;
}

function BlockView({ b }: { b: Block }) {
  const el = b.el;
  const st = elStyle(el);
  switch (b.kind) {
    case "text":
      return (
        <div style={st}>
          {b.lines.map((l, i) => (
            <div key={i}>{l || "\u00A0"}</div>
          ))}
        </div>
      );
    case "pair":
      return (
        <div style={st}>
          <span style={{ opacity: el.invert ? 1 : 0.85 }}>{b.label}</span>
          {b.label ? ": " : ""}
          <span>{b.value}</span>
        </div>
      );
    case "row":
      return (
        <div style={{ ...st, display: "flex", justifyContent: "space-between", gap: 8, textAlign: "left" }}>
          <span>{b.label}</span>
          <span style={{ whiteSpace: "nowrap" }}>{b.value}</span>
        </div>
      );
    case "items":
      return <Items el={el} rows={b.rows} hasPrice={b.hasPrice} />;
    case "divider":
      return <Rule el={el} />;
    case "spacer":
      return <div style={{ height: el.marginTop, marginTop: 0 }} />;
    case "logo":
      return (
        <div style={{ ...st, display: "flex", justifyContent: el.align === "center" ? "center" : el.align === "right" ? "flex-end" : "flex-start" }}>
          <img src={b.src} alt="Logo" style={{ width: el.logoSize, height: "auto", maxWidth: "100%", filter: "grayscale(1) contrast(1.5)" }} />
        </div>
      );
    case "qr":
      return (
        <div style={{ ...st, display: "flex", justifyContent: el.align === "center" ? "center" : el.align === "right" ? "flex-end" : "flex-start" }}>
          <QrSvg value={b.value} size={el.qrSize} />
        </div>
      );
    case "barcode":
      return (
        <div style={{ ...st, display: "flex", justifyContent: el.align === "center" ? "center" : el.align === "right" ? "flex-end" : "flex-start" }}>
          <BarcodeSvg value={b.value} height={el.barcodeHeight} />
        </div>
      );
    case "signature":
      return (
        <div style={st}>
          <div style={{ height: 44 }} />
          <div style={{ borderTop: "1px solid #000", width: "70%", margin: el.align === "center" ? "0 auto" : el.align === "right" ? "0 0 0 auto" : 0, paddingTop: 2 }}>{b.label}</div>
        </div>
      );
  }
}

export interface ReceiptViewProps {
  template: ReceiptTemplate;
  data: ReceiptData;
  /** Override lebar kertas (mm). Default dari template. */
  widthMm?: number;
  /** Padding kiri/kanan/atas/bawah (mm). */
  marginMm?: number;
  /** Skala layar saja (tidak mempengaruhi cetak). */
  className?: string;
}

/** Renderer HTML: dipakai untuk preview layar DAN cetak browser. */
function ReceiptViewBase({ template, data, widthMm, marginMm = 3, className }: ReceiptViewProps) {
  const blocks = useMemo(() => buildBlocks(template, data), [template, data]);
  const w = widthMm ?? paperWidthMm(template.paper);
  return (
    <div className={`receipt-paper ${className ?? ""}`} style={{ width: `${w}mm`, padding: `${marginMm}mm`, fontFamily: FONT.mono, color: "#000", background: "#fff" }} data-testid="receipt-paper">
      {blocks.map((b, i) => (
        <BlockView key={b.el.id + i} b={b} />
      ))}
    </div>
  );
}
export const ReceiptView = memo(ReceiptViewBase);

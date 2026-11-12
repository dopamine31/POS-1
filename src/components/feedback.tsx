"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { Modal } from "./ui";

type ToastKind = "success" | "error" | "info";
interface ToastItem {
  id: number;
  kind: ToastKind;
  text: string;
  action?: { label: string; onClick: () => void };
}
interface ToastApi {
  toast: (text: string, kind?: ToastKind, action?: ToastItem["action"]) => void;
}
interface DialogApi {
  confirm: (o: { title: string; message?: ReactNode; confirmText?: string; danger?: boolean }) => Promise<boolean>;
  prompt: (o: { title: string; label: string; initial?: string; confirmText?: string; required?: boolean; multiline?: boolean }) => Promise<string | null>;
}

const ToastCtx = createContext<ToastApi>({ toast: () => undefined });
const DialogCtx = createContext<DialogApi>({ confirm: async () => false, prompt: async () => null });

export const useToast = () => useContext(ToastCtx).toast;
export const useDialogs = () => useContext(DialogCtx);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const seq = useRef(0);
  const toast = useCallback<ToastApi["toast"]>((text, kind = "info", action) => {
    const id = ++seq.current;
    setToasts((t) => [...t.slice(-3), { id, kind, text, action }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), action ? 12000 : kind === "error" ? 6000 : 3000);
  }, []);

  const [dlg, setDlg] = useState<
    | { type: "confirm"; o: Parameters<DialogApi["confirm"]>[0]; res: (v: boolean) => void }
    | { type: "prompt"; o: Parameters<DialogApi["prompt"]>[0]; res: (v: string | null) => void }
    | null
  >(null);
  const [val, setVal] = useState("");

  const api = useMemo<DialogApi>(
    () => ({
      confirm: (o) => new Promise((res) => setDlg({ type: "confirm", o, res })),
      prompt: (o) =>
        new Promise((res) => {
          setVal(o.initial ?? "");
          setDlg({ type: "prompt", o, res });
        }),
    }),
    [],
  );

  const close = (result: boolean | string | null) => {
    if (!dlg) return;
    if (dlg.type === "confirm") dlg.res(result === true);
    else dlg.res(typeof result === "string" ? result : null);
    setDlg(null);
  };

  const icon = { success: <CheckCircle2 size={18} className="text-success" />, error: <XCircle size={18} className="text-danger" />, info: <Info size={18} className="text-brand" /> };

  return (
    <ToastCtx.Provider value={{ toast }}>
      <DialogCtx.Provider value={api}>
        {children}
        <div className="no-print pointer-events-none fixed inset-x-0 top-0 z-[80] flex flex-col items-center gap-2 px-3 pt-[calc(var(--safe-top)+12px)]" aria-live="polite">
          {toasts.map((t) => (
            <div key={t.id} role="status" className="sheet-enter pointer-events-auto flex w-full max-w-md items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-3 text-sm shadow-[var(--shadow-md)]">
              {icon[t.kind]}
              <span className="flex-1">{t.text}</span>
              {t.action && (
                <button className="font-semibold text-brand" onClick={t.action.onClick}>
                  {t.action.label}
                </button>
              )}
            </div>
          ))}
        </div>
        <Modal
          open={!!dlg}
          onClose={() => close(dlg?.type === "confirm" ? false : null)}
          title={dlg?.o.title ?? ""}
          size="sm"
          footer={
            <>
              <button className="btn flex-1" onClick={() => close(dlg?.type === "confirm" ? false : null)}>
                Batal
              </button>
              <button
                className={`btn flex-1 ${dlg?.type === "confirm" && dlg.o.danger ? "btn-danger" : "btn-primary"}`}
                disabled={dlg?.type === "prompt" && dlg.o.required && !val.trim()}
                onClick={() => close(dlg?.type === "confirm" ? true : val)}
              >
                {dlg?.o.confirmText ?? "OK"}
              </button>
            </>
          }
        >
          {dlg?.type === "confirm" && (
            <div className="flex gap-3">
              {dlg.o.danger && <AlertTriangle className="mt-0.5 shrink-0 text-danger" size={20} />}
              <div className="text-sm text-muted">{dlg.o.message}</div>
            </div>
          )}
          {dlg?.type === "prompt" && (
            <div>
              <label className="label">{dlg.o.label}</label>
              {dlg.o.multiline ? (
                <textarea className="input" rows={3} value={val} onChange={(e) => setVal(e.target.value)} autoFocus />
              ) : (
                <input className="input" value={val} onChange={(e) => setVal(e.target.value)} autoFocus onKeyDown={(e) => e.key === "Enter" && (!dlg.o.required || val.trim()) && close(val)} />
              )}
            </div>
          )}
        </Modal>
      </DialogCtx.Provider>
    </ToastCtx.Provider>
  );
}

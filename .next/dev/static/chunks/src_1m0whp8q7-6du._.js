(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/features/barcode/Scanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScannerModal",
    ()=>ScannerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.mjs [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScannerModal({ open, onClose, onDetected, continuous = false }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("starting");
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [manual, setManual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const cb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onDetected);
    cb.current = onDetected;
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    closeRef.current = onClose;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScannerModal.useEffect": ()=>{
            if (!open) return;
            let stopped = false;
            let stream = null;
            let timer;
            let zxingControls;
            let last = "";
            let lastAt = 0;
            setMode("starting");
            setMsg("");
            const hit = {
                "ScannerModal.useEffect.hit": (code)=>{
                    const now = Date.now();
                    if (code === last && now - lastAt < 2000) return;
                    last = code;
                    lastAt = now;
                    if (navigator.vibrate) navigator.vibrate(60);
                    cb.current(code);
                    if (!continuous) closeRef.current();
                }
            }["ScannerModal.useEffect.hit"];
            ({
                "ScannerModal.useEffect": async ()=>{
                    if (!navigator.mediaDevices?.getUserMedia) {
                        setMode("unsupported");
                        return;
                    }
                    try {
                        stream = await navigator.mediaDevices.getUserMedia({
                            video: {
                                facingMode: {
                                    ideal: "environment"
                                }
                            },
                            audio: false
                        });
                    } catch (e) {
                        const name = e.name;
                        setMode(name === "NotAllowedError" || name === "SecurityError" ? "denied" : "error");
                        setMsg(name === "NotFoundError" ? "Kamera tidak ditemukan pada perangkat ini." : "");
                        return;
                    }
                    if (stopped) return stream.getTracks().forEach({
                        "ScannerModal.useEffect": (t)=>t.stop()
                    }["ScannerModal.useEffect"]);
                    const v = videoRef.current;
                    v.srcObject = stream;
                    v.setAttribute("playsinline", "true");
                    await v.play().catch({
                        "ScannerModal.useEffect": ()=>undefined
                    }["ScannerModal.useEffect"]);
                    setMode("scanning");
                    const BD = window.BarcodeDetector;
                    if (BD) {
                        const det = new BD({
                            formats: [
                                "ean_13",
                                "ean_8",
                                "upc_a",
                                "upc_e",
                                "code_128",
                                "code_39",
                                "qr_code",
                                "itf"
                            ]
                        });
                        timer = setInterval({
                            "ScannerModal.useEffect": async ()=>{
                                try {
                                    const r = await det.detect(v);
                                    if (r[0]?.rawValue) hit(r[0].rawValue);
                                } catch  {}
                            }
                        }["ScannerModal.useEffect"], 250);
                    } else {
                        try {
                            const { BrowserMultiFormatReader } = await Promise.resolve().then(()=>{
                                const e = new Error("Cannot find module '@zxing/browser'");
                                e.code = 'MODULE_NOT_FOUND';
                                throw e;
                            });
                            const reader = new BrowserMultiFormatReader();
                            zxingControls = await reader.decodeFromStream(stream, v, {
                                "ScannerModal.useEffect": (res)=>{
                                    if (res) hit(res.getText());
                                }
                            }["ScannerModal.useEffect"]);
                        } catch  {
                            setMode("unsupported");
                        }
                    }
                }
            })["ScannerModal.useEffect"]();
            return ({
                "ScannerModal.useEffect": ()=>{
                    stopped = true;
                    if (timer) clearInterval(timer);
                    zxingControls?.stop();
                    stream?.getTracks().forEach({
                        "ScannerModal.useEffect": (t)=>t.stop()
                    }["ScannerModal.useEffect"]);
                }
            })["ScannerModal.useEffect"];
        }
    }["ScannerModal.useEffect"], [
        open,
        continuous
    ]);
    const submitManual = ()=>{
        const c = manual.trim();
        if (!c) return;
        cb.current(c);
        setManual("");
        if (!continuous) onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: open,
        onClose: onClose,
        title: "Scan Barcode / QR",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/3] overflow-hidden rounded-2xl bg-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            className: "h-full w-full object-cover",
                            muted: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/Scanner.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        mode === "scanning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-x-8 top-1/2 h-0.5 -translate-y-1/2 bg-red-500/80 shadow-[0_0_12px_red]"
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/Scanner.tsx",
                            lineNumber: 107,
                            columnNumber: 35
                        }, this),
                        mode !== "scanning" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 grid place-items-center p-6 text-center text-sm text-white/85",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "mx-auto mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/barcode/Scanner.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    mode === "starting" && "Membuka kamera…",
                                    mode === "denied" && "Izin kamera ditolak. Aktifkan izin kamera di pengaturan browser/Safari untuk situs ini, atau ketik kode secara manual di bawah.",
                                    mode === "unsupported" && "Scan kamera tidak didukung di browser ini. Gunakan input manual atau scanner barcode eksternal (USB/Bluetooth keyboard).",
                                    mode === "error" && (msg || "Kamera tidak dapat dibuka. Gunakan input manual.")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/barcode/Scanner.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/Scanner.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/barcode/Scanner.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "label flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/features/barcode/Scanner.tsx",
                                    lineNumber: 121,
                                    columnNumber: 60
                                }, this),
                                " Input manual / scanner eksternal"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/barcode/Scanner.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "input",
                                    value: manual,
                                    onChange: (e)=>setManual(e.target.value),
                                    placeholder: "Ketik atau scan kode lalu Enter",
                                    onKeyDown: (e)=>e.key === "Enter" && submitManual(),
                                    inputMode: "text"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/barcode/Scanner.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    onClick: submitManual,
                                    children: "OK"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/barcode/Scanner.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/barcode/Scanner.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/barcode/Scanner.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/barcode/Scanner.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/barcode/Scanner.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(ScannerModal, "WzlSYF+3VtI6FnitX8sGNi4NA8U=");
_c = ScannerModal;
var _c;
__turbopack_context__.k.register(_c, "ScannerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/pos/CartPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartPanel",
    ()=>CartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.mjs [app-client] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.mjs [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transactions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CartPanel({ cart, setCart, onPay, onHold, onClear }) {
    _s();
    const { store, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const { prompt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"])();
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartTotals"])(cart, store);
    const qty = (i, d)=>setCart((c)=>({
                ...c,
                items: c.items.map((it, k)=>k === i ? {
                        ...it,
                        qty: Math.max(1, it.qty + d)
                    } : it)
            }));
    const remove = (i)=>setCart((c)=>({
                ...c,
                items: c.items.filter((_, k)=>k !== i)
            }));
    const note = async (i)=>{
        const v = await prompt({
            title: "Catatan item",
            label: cart.items[i].name,
            initial: cart.items[i].note ?? "",
            confirmText: "Simpan"
        });
        if (v !== null) setCart((c)=>({
                ...c,
                items: c.items.map((it, k)=>k === i ? {
                        ...it,
                        note: v.trim() || undefined
                    } : it)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: cart.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    title: "Keranjang kosong",
                    hint: "Ketuk produk atau scan barcode untuk menambah item."
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-line",
                    children: cart.items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate text-sm font-medium",
                                                    children: it.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "num text-xs text-muted",
                                                    children: fmt(it.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 21
                                                }, this),
                                                it.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 text-xs italic text-muted",
                                                    children: [
                                                        "↳ ",
                                                        it.note
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "num text-sm font-semibold",
                                            children: fmt(it.price * it.qty)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center rounded-xl border border-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "grid h-10 w-11 place-items-center active:bg-surface2",
                                                    onClick: ()=>it.qty === 1 ? remove(i) : qty(i, -1),
                                                    "aria-label": "Kurangi",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "num w-9 text-center text-sm font-semibold",
                                                    "aria-label": "Kuantitas",
                                                    children: it.qty
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "grid h-10 w-11 place-items-center active:bg-surface2",
                                                    onClick: ()=>qty(i, 1),
                                                    "aria-label": "Tambah",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-ghost btn-icon",
                                                    onClick: ()=>note(i),
                                                    "aria-label": "Catatan item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 114
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-ghost btn-icon text-danger",
                                                    onClick: ()=>remove(i),
                                                    "aria-label": "Hapus item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 126
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, it.productId, true, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pos/CartPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 border-t border-line pt-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Subtotal",
                        v: fmt(t.subtotal)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    t.discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Diskon",
                        v: "-" + fmt(t.discountAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 34
                    }, this),
                    t.taxAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: `${store.taxName} ${store.taxRate}%`,
                        v: fmt(t.taxAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 29
                    }, this),
                    t.feeAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Biaya tambahan",
                        v: fmt(t.feeAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num text-2xl font-bold tracking-tight",
                                children: fmt(t.total)
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-sm w-full",
                        onClick: ()=>setDetail(true),
                        children: "Diskon, pajak, biaya & pelanggan"
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-[auto_auto_1fr] gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-icon",
                                onClick: onClear,
                                disabled: !cart.items.length,
                                "aria-label": "Batalkan transaksi",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                    lineNumber: 85,
                                    columnNumber: 124
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-icon",
                                onClick: onHold,
                                disabled: !cart.items.length,
                                "aria-label": "Tahan transaksi",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 120
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary min-h-12 text-base",
                                onClick: onPay,
                                disabled: !cart.items.length,
                                children: [
                                    "Bayar ",
                                    cart.items.length > 0 && fmt(t.total)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pos/CartPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pos/CartPanel.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                open: detail,
                onClose: ()=>setDetail(false),
                title: "Detail transaksi",
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-primary flex-1",
                    onClick: ()=>setDetail(false),
                    children: "Selesai"
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                    lineNumber: 91,
                    columnNumber: 94
                }, this),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Jenis diskon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segmented"], {
                                value: cart.discountType,
                                onChange: (v)=>setCart((c)=>({
                                            ...c,
                                            discountType: v,
                                            discountValue: 0
                                        })),
                                options: [
                                    {
                                        value: "amount",
                                        label: `Nominal (${store.currency.symbol})`
                                    },
                                    {
                                        value: "percent",
                                        label: "Persen (%)"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: cart.discountType === "percent" ? "Diskon (%)" : "Diskon nominal",
                            children: cart.discountType === "percent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "input num",
                                inputMode: "decimal",
                                value: cart.discountValue || "",
                                placeholder: "0",
                                onChange: (e)=>setCart((c)=>({
                                            ...c,
                                            discountValue: Math.min(100, Math.max(0, Number(e.target.value.replace(",", ".")) || 0))
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyInput"], {
                                value: cart.discountValue,
                                onChange: (v)=>setCart((c)=>({
                                            ...c,
                                            discountValue: v
                                        })),
                                currency: store.currency,
                                allowEmpty: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Biaya tambahan (mis. service, kemasan)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyInput"], {
                                value: cart.fee,
                                onChange: (v)=>setCart((c)=>({
                                            ...c,
                                            fee: v
                                        })),
                                currency: store.currency,
                                allowEmpty: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                            checked: cart.taxOn,
                            onChange: (v)=>setCart((c)=>({
                                        ...c,
                                        taxOn: v
                                    })),
                            label: `${store.taxName} ${store.taxRate}%`,
                            hint: "Tarif diatur di Pengaturan → Toko."
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Nama pelanggan (opsional)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "input",
                                value: cart.customer,
                                onChange: (e)=>setCart((c)=>({
                                            ...c,
                                            customer: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                            label: "Catatan transaksi",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "input",
                                rows: 2,
                                value: cart.note,
                                onChange: (e)=>setCart((c)=>({
                                            ...c,
                                            note: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/CartPanel.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/CartPanel.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/CartPanel.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pos/CartPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pos/CartPanel.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(CartPanel, "vebtDMLm5HS0DwOTRwSRYM7VR10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"]
    ];
});
_c = CartPanel;
function Row({ l, v }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-muted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: l
            }, void 0, false, {
                fileName: "[project]/src/features/pos/CartPanel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "num",
                children: v
            }, void 0, false, {
                fileName: "[project]/src/features/pos/CartPanel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pos/CartPanel.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c1 = Row;
var _c, _c1;
__turbopack_context__.k.register(_c, "CartPanel");
__turbopack_context__.k.register(_c1, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/pos/PaymentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentModal",
    ()=>PaymentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/payment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transactions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function suggestions(total) {
    const steps = [
        1000,
        5000,
        10000,
        20000,
        50000,
        100000
    ];
    const set = new Set();
    for (const s of steps){
        const v = Math.ceil(total / s) * s;
        if (v > total) set.add(v);
    }
    return [
        ...set
    ].slice(0, 4);
}
function PaymentModal({ cart, onClose, onDone }) {
    _s();
    const { store, cashier, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PaymentModal.useMemo[totals]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartTotals"])(cart, store)
    }["PaymentModal.useMemo[totals]"], [
        cart,
        store
    ]);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            method: "cash",
            amount: totals.total
        }
    ]);
    const [dp, setDp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PaymentModal.useMemo[result]": ()=>{
            try {
                return {
                    ok: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settlePayments"])(totals.total, lines, {
                        allowDp: dp
                    }),
                    err: ""
                };
            } catch (e) {
                return {
                    ok: null,
                    err: e instanceof Error ? e.message : "Pembayaran tidak valid"
                };
            }
        }
    }["PaymentModal.useMemo[result]"], [
        totals.total,
        lines,
        dp
    ]);
    const sum = lines.reduce((s, l)=>s + l.amount, 0);
    const setLine = (i, p)=>setLines((ls)=>ls.map((l, k)=>k === i ? {
                    ...l,
                    ...p
                } : l));
    const submit = async ()=>{
        if (lock.current || !result.ok) return; // cegah klik ganda
        lock.current = true;
        setBusy(true);
        try {
            const tx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkout"])({
                store,
                cashier,
                cart,
                tendered: lines,
                allowDp: dp
            });
            onDone(tx);
        } catch (e) {
            toast(e instanceof Error ? e.message : "Gagal menyimpan transaksi", "error");
            lock.current = false;
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: true,
        onClose: busy ? ()=>undefined : onClose,
        title: "Pembayaran",
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-primary min-h-12 flex-1 text-base",
            disabled: !result.ok || busy,
            onClick: submit,
            children: busy ? "Menyimpan…" : dp ? "Simpan DP" : "Selesaikan Pembayaran"
        }, void 0, false, {
            fileName: "[project]/src/features/pos/PaymentModal.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl bg-brandsoft p-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium text-brand",
                            children: "Total tagihan"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "num text-3xl font-bold tracking-tight text-brand",
                            children: fmt(totals.total)
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        lines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "input w-32 shrink-0",
                                        value: l.method,
                                        onChange: (e)=>setLine(i, {
                                                method: e.target.value
                                            }),
                                        "aria-label": "Metode",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][m]
                                            }, m, false, {
                                                fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyInput"], {
                                        value: l.amount,
                                        onChange: (v)=>setLine(i, {
                                                amount: v
                                            }),
                                        currency: store.currency,
                                        "aria-label": `Nominal ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][l.method]}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    lines.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-ghost btn-icon",
                                        onClick: ()=>setLines((ls)=>ls.filter((_, k)=>k !== i)),
                                        "aria-label": "Hapus baris",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-sm",
                            onClick: ()=>setLines((ls)=>[
                                        ...ls,
                                        {
                                            method: ls.some((x)=>x.method === "cash") ? "qris" : "cash",
                                            amount: Math.max(0, totals.total - sum)
                                        }
                                    ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                " Pembayaran campuran"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                lines[0]?.method === "cash" && lines.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "chip",
                            onClick: ()=>setLine(0, {
                                    amount: totals.total
                                }),
                            children: "Uang pas"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        suggestions(totals.total).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "chip num",
                                onClick: ()=>setLine(0, {
                                        amount: s
                                    }),
                                children: fmt(s)
                            }, s, false, {
                                fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                    checked: dp,
                    onChange: setDp,
                    label: "Bayar sebagian (DP)",
                    hint: "Sisa tagihan dilunasi nanti dari menu Transaksi."
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 rounded-2xl border border-line p-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted",
                                    children: "Dibayar"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 49
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "num font-medium",
                                    children: fmt(sum)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 92
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        result.ok ? result.ok.status === "dp" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-warning",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sisa tagihan"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 66
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "num font-semibold",
                                    children: fmt(result.ok.balance)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 91
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-success",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Kembalian"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 66
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "num text-lg font-bold",
                                    children: fmt(result.ok.change)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 88
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-danger",
                            children: sum < totals.total ? `Kurang ${fmt(totals.total - sum)}` : result.err
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PaymentModal.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/PaymentModal.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/pos/PaymentModal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/pos/PaymentModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(PaymentModal, "3BLlhMupcLsXGPrt33DTGwSBvDs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = PaymentModal;
var _c;
__turbopack_context__.k.register(_c, "PaymentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/pos/PosPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosPage",
    ()=>PosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-pause.mjs [app-client] (ecmascript) <export default as PauseCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-line.mjs [app-client] (ecmascript) <export default as ScanLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useOnline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$Scanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/Scanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$ReceiptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/ReceiptModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pos$2f$CartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pos/CartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pos$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/pos/PaymentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function PosPage() {
    _s();
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PosInner, {}, store.id, false, {
        fileName: "[project]/src/features/pos/PosPage.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(PosPage, "3O869V/jf1i7543yz1Y2mn4/LL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = PosPage;
function PosInner() {
    _s1();
    const { store, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { confirm, prompt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"])();
    const [cart, setCartRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"])(`cart:${store.id}`, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyCart"]);
    const setCart = (f)=>setCartRaw((c)=>f(c));
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [scan, setScan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pay, setPay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [heldOpen, setHeldOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "PosInner.useLiveQuery[products]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products.where("storeId").equals(store.id).toArray()
    }["PosInner.useLiveQuery[products]"], [
        store.id
    ]);
    const cats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "PosInner.useLiveQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].categories.where("storeId").equals(store.id).toArray()
    }["PosInner.useLiveQuery"], [
        store.id
    ]) ?? [];
    const held = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "PosInner.useLiveQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].held.where("storeId").equals(store.id).toArray()
    }["PosInner.useLiveQuery"], [
        store.id
    ]) ?? [];
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PosInner.useMemo[list]": ()=>{
            const s = q.trim().toLowerCase();
            return (products ?? []).filter({
                "PosInner.useMemo[list]": (p)=>p.active && (cat === "all" || p.categoryId === cat) && (!s || p.name.toLowerCase().includes(s) || p.sku.toLowerCase().includes(s) || p.barcode.includes(s))
            }["PosInner.useMemo[list]"]).sort({
                "PosInner.useMemo[list]": (a, b)=>a.name.localeCompare(b.name)
            }["PosInner.useMemo[list]"]);
        }
    }["PosInner.useMemo[list]"], [
        products,
        q,
        cat
    ]);
    const count = cart.items.reduce((s, i)=>s + i.qty, 0);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartTotals"])(cart, store);
    const add = (p)=>{
        const inCart = cart.items.find((i)=>i.productId === p.id)?.qty ?? 0;
        if (store.stockEnabled && p.trackStock && inCart + 1 > p.stock) {
            toast(`Stok "${p.name}" tidak cukup (sisa ${p.stock})`, "error");
            return;
        }
        setCart((c)=>{
            const exists = c.items.some((i)=>i.productId === p.id);
            return {
                ...c,
                taxOn: c.items.length ? c.taxOn : store.taxEnabled,
                items: exists ? c.items.map((i)=>i.productId === p.id ? {
                        ...i,
                        qty: i.qty + 1
                    } : i) : [
                    ...c.items,
                    {
                        productId: p.id,
                        name: p.name,
                        sku: p.sku,
                        price: p.price,
                        qty: 1
                    }
                ]
            };
        });
    };
    const byCode = (code)=>{
        const c = code.trim();
        const p = (products ?? []).find((x)=>x.active && (x.barcode === c || x.sku.toLowerCase() === c.toLowerCase()));
        if (p) {
            add(p);
            toast(`${p.name} ditambahkan`, "success");
            return true;
        }
        toast(`Kode "${c}" tidak ditemukan`, "error");
        return false;
    };
    const lowStock = (p)=>store.stockEnabled && p.trackStock && p.stock <= p.minStock;
    const clear = async ()=>{
        if (!cart.items.length) return;
        if (await confirm({
            title: "Batalkan transaksi?",
            message: "Seluruh item di keranjang akan dihapus.",
            confirmText: "Ya, batalkan",
            danger: true
        })) {
            setCartRaw((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyCart"])());
            setCartOpen(false);
        }
    };
    const hold = async ()=>{
        const label = await prompt({
            title: "Tahan transaksi",
            label: "Label (mis. nama pelanggan / meja)",
            initial: cart.customer,
            confirmText: "Tahan"
        });
        if (label === null) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["holdCart"])(store.id, cart, label);
            setCartRaw((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyCart"])());
            setCartOpen(false);
            toast("Transaksi ditahan", "success");
        } catch (e) {
            toast(e instanceof Error ? e.message : "Gagal", "error");
        }
    };
    const resume = async (id)=>{
        if (cart.items.length && !await confirm({
            title: "Ganti keranjang?",
            message: "Keranjang saat ini akan diganti transaksi yang ditahan.",
            confirmText: "Lanjutkan"
        })) return;
        const c = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeHeld"])(id);
        if (c) {
            setCartRaw(c);
            setHeldOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:grid lg:grid-cols-[1fr_380px] lg:gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Produk",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-14 z-10 -mx-4 space-y-3 bg-bg px-4 pb-3 pt-1 lg:static lg:mx-0 lg:px-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 17,
                                                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input pl-9",
                                                placeholder: "Cari produk, SKU, atau barcode…",
                                                value: q,
                                                onChange: (e)=>setQ(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter" && q.trim()) {
                                                        const exact = (products ?? []).find((x)=>x.active && (x.barcode === q.trim() || x.sku.toLowerCase() === q.trim().toLowerCase()));
                                                        if (exact) {
                                                            add(exact);
                                                            setQ("");
                                                        } else if (list.length === 1) {
                                                            add(list[0]);
                                                            setQ("");
                                                        }
                                                    }
                                                },
                                                "aria-label": "Cari produk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-icon",
                                        onClick: ()=>setScan(true),
                                        "aria-label": "Scan barcode",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanLine$3e$__["ScanLine"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 140,
                                            columnNumber: 102
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-icon relative",
                                        onClick: ()=>setHeldOpen(true),
                                        "aria-label": "Transaksi ditahan",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$pause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PauseCircle$3e$__["PauseCircle"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            held.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-bold text-brandfg",
                                                children: held.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 143,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "chip",
                                        "data-active": cat === "all",
                                        onClick: ()=>setCat("all"),
                                        children: "Semua"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    cats.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "chip",
                                            "data-active": cat === c.id,
                                            onClick: ()=>setCat(c.id),
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    !products ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4",
                        children: Array.from({
                            length: 8
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skeleton h-28"
                            }, i, false, {
                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                lineNumber: 155,
                                columnNumber: 122
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this) : list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 157,
                            columnNumber: 29
                        }, this),
                        title: products.length ? "Produk tidak ditemukan" : "Belum ada produk",
                        hint: products.length ? "Coba kata kunci atau kategori lain." : "Tambahkan produk di menu Produk untuk mulai berjualan."
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4",
                        children: list.map((p)=>{
                            const qty = cart.items.find((i)=>i.productId === p.id)?.qty ?? 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>add(p),
                                className: "card relative flex min-h-28 flex-col justify-between p-3 text-left transition active:scale-[0.97]",
                                children: [
                                    qty > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "num absolute right-2 top-2 grid h-6 min-w-6 place-items-center rounded-full bg-brand px-1.5 text-xs font-bold text-brandfg",
                                        children: qty
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 164,
                                        columnNumber: 31
                                    }, this),
                                    p.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.image,
                                        alt: "",
                                        className: "mb-2 h-14 w-full rounded-lg object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 165,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 grid h-10 w-10 place-items-center rounded-xl bg-brandsoft text-sm font-bold text-brand",
                                        children: p.name.slice(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 165,
                                        columnNumber: 114
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "line-clamp-2 text-sm font-medium leading-snug",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "num mt-0.5 text-sm font-semibold text-brand",
                                                children: fmt(p.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this),
                                            store.stockEnabled && p.trackStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mt-0.5 text-[11px] ${lowStock(p) ? "font-semibold text-danger" : "text-muted"}`,
                                                children: [
                                                    "Stok ",
                                                    p.stock,
                                                    lowStock(p) ? " · menipis" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                                lineNumber: 169,
                                                columnNumber: 60
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/pos/PosPage.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "card sticky top-20 hidden h-[calc(100dvh-7rem)] p-4 lg:block",
                "aria-label": "Keranjang",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1 text-sm font-semibold",
                        children: [
                            "Keranjang · ",
                            count,
                            " item"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[calc(100%-1.75rem)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pos$2f$CartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartPanel"], {
                            cart: cart,
                            setCart: setCart,
                            onPay: ()=>setPay(true),
                            onHold: hold,
                            onClear: clear
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setCartOpen(true),
                className: "no-print fixed inset-x-3 bottom-[calc(var(--safe-bottom)+70px)] z-30 flex min-h-14 items-center justify-between rounded-2xl bg-brand px-4 text-brandfg shadow-[var(--shadow-lg)] lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/src/features/pos/PosPage.tsx",
                                lineNumber: 192,
                                columnNumber: 73
                            }, this),
                            " ",
                            count,
                            " item · Lihat keranjang"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "num text-base font-bold",
                        children: fmt(totals.total)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                    open: cartOpen,
                    onClose: ()=>setCartOpen(false),
                    title: `Keranjang · ${count} item`,
                    size: "lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[70dvh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pos$2f$CartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartPanel"], {
                            cart: cart,
                            setCart: setCart,
                            onPay: ()=>setPay(true),
                            onHold: hold,
                            onClear: clear
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/pos/PosPage.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/PosPage.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            pay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$pos$2f$PaymentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentModal"], {
                cart: cart,
                onClose: ()=>setPay(false),
                onDone: (tx)=>{
                    setPay(false);
                    setCartOpen(false);
                    setCartRaw((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyCart"])());
                    setDone(tx);
                }
            }, void 0, false, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$ReceiptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptModal"], {
                tx: done,
                onClose: ()=>setDone(null),
                footerExtra: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-success",
                            children: [
                                "✓ Transaksi ",
                                done?.status === "dp" ? "DP " : "",
                                "tersimpan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-sm",
                            onClick: ()=>setDone(null),
                            children: "Transaksi baru"
                        }, void 0, false, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/pos/PosPage.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$Scanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScannerModal"], {
                open: scan,
                onClose: ()=>setScan(false),
                onDetected: byCode,
                continuous: true
            }, void 0, false, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                open: heldOpen,
                onClose: ()=>setHeldOpen(false),
                title: "Transaksi ditahan",
                children: held.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    title: "Tidak ada transaksi ditahan"
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/PosPage.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "divide-y divide-line",
                    children: held.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center justify-between gap-2 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "truncate font-medium",
                                            children: h.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted",
                                            children: [
                                                h.cart.items.length,
                                                " jenis · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDateTime"])(h.createdAt),
                                                " · ",
                                                fmt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartTotals"])(h.cart, store).total)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pos/PosPage.tsx",
                                    lineNumber: 238,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-sm btn-primary",
                                            onClick: ()=>resume(h.id),
                                            children: "Lanjutkan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-sm",
                                            onClick: async ()=>await confirm({
                                                    title: "Hapus transaksi ditahan?",
                                                    danger: true,
                                                    confirmText: "Hapus"
                                                }) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteHeld"])(h.id),
                                            children: "Hapus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/pos/PosPage.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/pos/PosPage.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, h.id, true, {
                            fileName: "[project]/src/features/pos/PosPage.tsx",
                            lineNumber: 237,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/pos/PosPage.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/pos/PosPage.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/pos/PosPage.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s1(PosInner, "uZ0EGaAV6+eRgljJRzuMp9AaqLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useOnline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c1 = PosInner;
var _c, _c1;
__turbopack_context__.k.register(_c, "PosPage");
__turbopack_context__.k.register(_c1, "PosInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/printer/ReceiptModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReceiptModal",
    ()=>ReceiptModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.mjs [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/ReceiptView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function defaultDoc(tx) {
    if (tx.status === "dp") return "dp";
    if (tx.status === "refunded") return "return";
    if (tx.settledAt) return "settlement";
    return "sale";
}
function ReceiptModal({ tx, onClose, footerExtra }) {
    _s();
    const { store, templates, storeTemplate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [doc, setDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tplId, setTplId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const docType = doc ?? (tx ? defaultDoc(tx) : "sale");
    const tpl = templates.find((t)=>t.id === tplId) ?? storeTemplate;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReceiptModal.useMemo[data]": ()=>tx ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receiptDataFromTx"])(tx, store, docType) : null
    }["ReceiptModal.useMemo[data]"], [
        tx,
        store,
        docType
    ]);
    if (!tx || !data) return null;
    const printer = store.printer;
    const widthMm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveWidthMm"])(tpl.paper, printer.paperWidth);
    const run = async (fn, ok)=>{
        if (busy) return;
        setBusy(true);
        try {
            await fn();
            if (ok) toast(ok, "success");
        } catch (e) {
            const m = e instanceof Error ? e.message : "Gagal";
            if (e?.name === "NotFoundError" || /cancel|chosen|No device/i.test(m)) toast("Pemilihan perangkat dibatalkan", "info");
            else toast(`${m} — coba Cetak Browser/PDF.`, "error", {
                label: "Cetak browser",
                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printStore"].request({
                        tpl,
                        data,
                        widthMm,
                        marginMm: printer.margin,
                        copies: printer.copies,
                        fontScale: printer.fontSize / 12,
                        lineSpacing: printer.lineSpacing
                    })
            });
        } finally{
            setBusy(false);
        }
    };
    const doPrint = ()=>run(async ()=>{
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printReceipt"])(tpl, data, printer);
            if (r === "escpos") toast("Dikirim ke printer", "success");
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: true,
        onClose: ()=>{
            setDoc(null);
            setTplId(null);
            onClose();
        },
        title: `Struk ${tx.number}`,
        size: "lg",
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary flex-1",
                            onClick: doPrint,
                            disabled: busy,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                " Cetak"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportPdf"])(tpl, data, printer)),
                            "aria-label": "Ekspor PDF",
                            title: "PDF",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 130
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "PDF"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 153
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportImage"])(tpl, data, printer)),
                            "aria-label": "Ekspor gambar",
                            title: "Gambar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 138
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Gambar"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 162
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareReceiptFile"])(tpl, data, printer, "pdf")),
                            "aria-label": "Bagikan",
                            title: "Bagikan",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                lineNumber: 79,
                                columnNumber: 145
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn",
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappLink"])(tpl, data),
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Kirim WhatsApp",
                            title: "WhatsApp",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                lineNumber: 80,
                                columnNumber: 141
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this),
                footerExtra
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-[1fr_auto]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 md:w-56",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Jenis dokumen"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "input",
                                    value: docType,
                                    onChange: (e)=>setDoc(e.target.value),
                                    children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOC_LABEL"]).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOC_LABEL"][d]
                                        }, d, false, {
                                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "label",
                                    children: "Template"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "input",
                                    value: tpl.id,
                                    onChange: (e)=>setTplId(e.target.value),
                                    children: templates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.id,
                                            children: t.name
                                        }, t.id, false, {
                                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted",
                            children: [
                                "Metode cetak: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: {
                                        browser: "Cetak browser",
                                        bluetooth: "Bluetooth ESC/POS",
                                        usb: "USB ESC/POS",
                                        share: "Share/PDF"
                                    }[printer.connection]
                                }, void 0, false, {
                                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 27
                                }, this),
                                " · ",
                                printer.paperWidth,
                                "mm. Ubah di Receipt Studio → Printer."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center overflow-x-auto rounded-2xl bg-surface2 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptView"], {
                        template: tpl,
                        data: data,
                        widthMm: widthMm,
                        marginMm: printer.margin + 1
                    }, void 0, false, {
                        fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/printer/ReceiptModal.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/printer/ReceiptModal.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/printer/ReceiptModal.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ReceiptModal, "odGnqRZRt93KRNJ+6k3oGQBuABM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ReceiptModal;
var _c;
__turbopack_context__.k.register(_c, "ReceiptModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/printer/adapters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Arsitektur adapter printer.
 * Dukungan browser (jangan diasumsikan):
 *  - Web Bluetooth (BLE): Chrome/Edge Android & desktop. TIDAK ada di Safari/iOS.
 *  - WebUSB: Chrome/Edge desktop & sebagian Android. TIDAK ada di Safari/iOS.
 *  - Bluetooth Classic (SPP) tidak bisa diakses dari browser mana pun.
 *  Fallback: cetak browser (AirPrint/Print Service), PDF, atau Share.
 */ __turbopack_context__.s([
    "BluetoothAdapter",
    ()=>BluetoothAdapter,
    "UsbAdapter",
    ()=>UsbAdapter
]);
const sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));
const BLE_SERVICES = [
    "000018f0-0000-1000-8000-00805f9b34fb",
    "e7810a71-73ae-499d-8c15-faa9aef0c3f2",
    "49535343-fe7d-4ae5-8fa9-9fafd205e455",
    "0000ff00-0000-1000-8000-00805f9b34fb",
    "0000ffe0-0000-1000-8000-00805f9b34fb",
    "0000fff0-0000-1000-8000-00805f9b34fb",
    "00001101-0000-1000-8000-00805f9b34fb"
];
class BluetoothAdapter {
    kind = "bluetooth";
    device = null;
    char = null;
    cb = null;
    isSupported() {
        return typeof navigator !== "undefined" && !!navigator.bluetooth;
    }
    isConnected() {
        return !!this.device?.gatt?.connected && !!this.char;
    }
    onDisconnect(cb) {
        this.cb = cb;
    }
    async connect() {
        const bt = navigator.bluetooth;
        if (!bt) throw new Error("Web Bluetooth tidak didukung browser ini (Safari iPhone tidak mendukung). Gunakan Chrome Android, atau metode Cetak Browser/PDF.");
        const device = await bt.requestDevice({
            acceptAllDevices: true,
            optionalServices: BLE_SERVICES
        });
        device.addEventListener("gattserverdisconnected", ()=>{
            this.char = null;
            this.cb?.();
        });
        const server = await device.gatt.connect();
        let found = null;
        const services = await server.getPrimaryServices();
        for (const s of services){
            try {
                for (const c of (await s.getCharacteristics())){
                    if (c.properties.write || c.properties.writeWithoutResponse) {
                        found = c;
                        break;
                    }
                }
            } catch  {
            /* abaikan service yang tidak bisa dibaca */ }
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
    async write(data) {
        if (!this.isConnected()) throw new Error("Printer terputus");
        const chunk = 100;
        for(let i = 0; i < data.length; i += chunk){
            const part = data.slice(i, i + chunk);
            if (this.char.properties.writeWithoutResponse && this.char.writeValueWithoutResponse) await this.char.writeValueWithoutResponse(part);
            else await this.char.writeValue(part);
            await sleep(25);
        }
    }
    async disconnect() {
        try {
            this.device?.gatt?.disconnect();
        } finally{
            this.char = null;
            this.device = null;
        }
    }
}
class UsbAdapter {
    kind = "usb";
    device = null;
    ep = 0;
    cb = null;
    isSupported() {
        return typeof navigator !== "undefined" && !!navigator.usb;
    }
    isConnected() {
        return !!this.device?.opened;
    }
    onDisconnect(cb) {
        this.cb = cb;
    }
    async connect() {
        const usb = navigator.usb;
        if (!usb) throw new Error("WebUSB tidak didukung browser ini. Gunakan Chrome/Edge desktop, atau Cetak Browser/PDF.");
        const device = await usb.requestDevice({
            filters: []
        });
        await device.open();
        if (!device.configuration) await device.selectConfiguration(1);
        let ifaceNum = -1;
        for (const i of device.configuration.interfaces){
            for (const a of i.alternates){
                const out = a.endpoints.find((e)=>e.direction === "out" && e.type === "bulk");
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
        usb.addEventListener("disconnect", (e)=>{
            if (e.device === this.device) {
                this.device = null;
                this.cb?.();
            }
        });
        return device.productName || "Printer USB";
    }
    async write(data) {
        if (!this.isConnected()) throw new Error("Printer terputus");
        const chunk = 4096;
        for(let i = 0; i < data.length; i += chunk)await this.device.transferOut(this.ep, data.slice(i, i + chunk));
    }
    async disconnect() {
        try {
            await this.device?.close();
        } finally{
            this.device = null;
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/printer/printService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLS_BY_PAPER",
    ()=>COLS_BY_PAPER,
    "exportImage",
    ()=>exportImage,
    "exportPdf",
    ()=>exportPdf,
    "pdfBlob",
    ()=>pdfBlob,
    "pngBlob",
    ()=>pngBlob,
    "printReceipt",
    ()=>printReceipt,
    "sendEscPos",
    ()=>sendEscPos,
    "shareReceiptFile",
    ()=>shareReceiptFile,
    "testPrint",
    ()=>testPrint,
    "whatsappLink",
    ()=>whatsappLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/escpos.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/pdf.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/canvasImage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printerManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printStore.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const COLS_BY_PAPER = {
    58: 32,
    80: 48
};
function colsOf(p) {
    return p.charCols > 0 ? p.charCols : COLS_BY_PAPER[p.paperWidth];
}
async function sendEscPos(lines, p) {
    const prepared = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareImages"])(lines, p.paperWidth === 58 ? 256 : 384);
    const one = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["renderEscPos"])(prepared, p);
    const copies = Math.max(1, Math.min(p.copies, 5));
    for(let i = 0; i < copies; i++)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printerManager"].send(one);
}
async function printReceipt(tpl, data, p) {
    if (p.connection === "bluetooth" || p.connection === "usb") {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printerManager"].isConnected(p.connection)) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printerManager"].connect(p.connection);
        await sendEscPos((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, colsOf(p)), p);
        return "escpos";
    }
    if (p.connection === "share") {
        await shareReceiptFile(tpl, data, p, "pdf");
        return "shared";
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printStore"].request({
        tpl,
        data,
        widthMm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectiveWidthMm"])(tpl.paper, p.paperWidth),
        marginMm: p.margin,
        copies: Math.max(1, Math.min(p.copies, 5)),
        fontScale: p.fontSize / 12,
        lineSpacing: p.lineSpacing
    });
    return "browser";
}
async function testPrint(p) {
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["testPrintLines"])(colsOf(p), p.paperWidth);
    if (p.connection === "bluetooth" || p.connection === "usb") {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printerManager"].isConnected(p.connection)) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["printerManager"].connect(p.connection);
        await sendEscPos(lines, p);
        return;
    }
    const blob = new Blob([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPdf"])(lines, {
            widthMm: p.paperWidth,
            cols: colsOf(p),
            marginMm: p.margin
        })
    ], {
        type: "application/pdf"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["download"])("test-print.pdf", blob);
}
function pdfBlob(tpl, data, p) {
    const widthMm = tpl.paper.size === "58" || tpl.paper.size === "80" ? Number(tpl.paper.size) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paperWidthMm"])(tpl.paper);
    const w = tpl.paper.size === "a4" || tpl.paper.size === "custom" ? widthMm : p.paperWidth;
    const cols = tpl.paper.size === "a4" ? 64 : Math.max(20, Math.round(w / 58 * 32));
    return new Blob([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPdf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, cols), {
            widthMm: w,
            cols,
            marginMm: p.margin
        })
    ], {
        type: "application/pdf"
    });
}
async function pngBlob(tpl, data, p) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPng"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, colsOf(p)), colsOf(p));
}
function exportPdf(tpl, data, p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["download"])(`struk-${data.number}.pdf`, pdfBlob(tpl, data, p), "application/pdf");
}
async function exportImage(tpl, data, p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["download"])(`struk-${data.number}.png`, await pngBlob(tpl, data, p), "image/png");
}
async function shareReceiptFile(tpl, data, p, kind = "pdf") {
    const blob = kind === "pdf" ? pdfBlob(tpl, data, p) : await pngBlob(tpl, data, p);
    const file = new File([
        blob
    ], `struk-${data.number}.${kind}`, {
        type: blob.type
    });
    const nav = navigator;
    if (nav.share && nav.canShare?.({
        files: [
            file
        ]
    })) {
        await nav.share({
            files: [
                file
            ],
            title: `Struk ${data.number}`
        });
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["download"])(file.name, blob, blob.type);
}
function whatsappLink(tpl, data, phone) {
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receiptToPlainText"])(tpl, data, 32);
    const digits = (phone ?? "").replace(/\D/g, "").replace(/^0/, "62");
    return `https://wa.me/${digits}?text=${encodeURIComponent("```\n" + text + "\n```")}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/printer/printerManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "printerManager",
    ()=>printerManager,
    "usePrinterState",
    ()=>usePrinterState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/adapters.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
class PrinterManager {
    adapter = null;
    listeners = new Set();
    state = {
        status: "idle",
        kind: null,
        name: "",
        error: ""
    };
    subscribe = (l)=>{
        this.listeners.add(l);
        return ()=>this.listeners.delete(l);
    };
    getState = ()=>this.state;
    set(s) {
        this.state = {
            ...this.state,
            ...s
        };
        this.listeners.forEach((l)=>l());
    }
    supports(kind) {
        return (kind === "bluetooth" ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BluetoothAdapter"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsbAdapter"]()).isSupported();
    }
    async connect(kind) {
        if (this.adapter?.isConnected() && this.adapter.kind === kind) return;
        await this.disconnect();
        const a = kind === "bluetooth" ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BluetoothAdapter"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsbAdapter"]();
        this.set({
            status: "connecting",
            kind,
            error: ""
        });
        try {
            const name = await a.connect();
            a.onDisconnect(()=>this.set({
                    status: "disconnected",
                    error: "Printer terputus. Hubungkan ulang."
                }));
            this.adapter = a;
            this.set({
                status: "connected",
                name,
                error: ""
            });
        } catch (e) {
            this.adapter = null;
            this.set({
                status: "error",
                error: e instanceof Error ? e.message : "Gagal terhubung"
            });
            throw e;
        }
    }
    async disconnect() {
        const a = this.adapter;
        this.adapter = null;
        if (a) await a.disconnect().catch(()=>undefined);
        this.set({
            status: "idle",
            kind: null,
            name: "",
            error: ""
        });
    }
    isConnected(kind) {
        return !!this.adapter && this.adapter.kind === kind && this.adapter.isConnected();
    }
    async send(bytes) {
        if (!this.adapter || !this.adapter.isConnected()) {
            this.set({
                status: "disconnected",
                error: "Printer tidak terhubung"
            });
            throw new Error("Printer tidak terhubung");
        }
        try {
            await this.adapter.write(bytes);
        } catch (e) {
            this.set({
                status: "disconnected",
                error: "Gagal mengirim data ke printer"
            });
            throw e;
        }
    }
}
const printerManager = new PrinterManager();
function usePrinterState() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(printerManager.subscribe, printerManager.getState, printerManager.getState);
}
_s(usePrinterState, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/receipt-renderer/canvasImage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageToMono",
    ()=>imageToMono,
    "prepareImages",
    ()=>prepareImages,
    "renderPng",
    ()=>renderPng
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/qr.ts [app-client] (ecmascript)");
;
;
function loadImage(src) {
    return new Promise((res, rej)=>{
        const i = new Image();
        i.onload = ()=>res(i);
        i.onerror = ()=>rej(new Error("Gagal memuat gambar"));
        i.src = src;
    });
}
async function imageToMono(src, widthDots) {
    const img = await loadImage(src);
    const w = Math.max(8, Math.floor(widthDots / 8) * 8);
    const h = Math.max(1, Math.round(img.height / img.width * w));
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    const px = ctx.getImageData(0, 0, w, h).data;
    const bpr = w / 8;
    const data = new Uint8Array(bpr * h);
    for(let y = 0; y < h; y++)for(let x = 0; x < w; x++){
        const i = (y * w + x) * 4;
        const lum = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
        if (lum < 140) data[y * bpr + (x >> 3)] |= 0x80 >> (x & 7);
    }
    return {
        w,
        h,
        data
    };
}
async function prepareImages(lines, dots) {
    return Promise.all(lines.map(async (l)=>{
        if (l.kind !== "image") return l;
        try {
            return {
                ...l,
                bitmap: await imageToMono(l.src, dots)
            };
        } catch  {
            return l;
        }
    }));
}
async function renderPng(lines, cols) {
    const charW = 12;
    const lineH = 26;
    const pad = 20;
    const width = cols * charW + pad * 2;
    const heights = await Promise.all(lines.map(async (l)=>{
        if (l.kind === "text") return l.big ? lineH * 2 : lineH;
        if (l.kind === "qr") return 190;
        if (l.kind === "barcode") return l.height + 40;
        if (l.kind === "feed") return lineH * l.n;
        if (l.kind === "image") {
            try {
                const im = await loadImage(l.src);
                return Math.min(160, im.height / im.width * 160) + 10;
            } catch  {
                return 0;
            }
        }
        return 0;
    }));
    const total = heights.reduce((a, b)=>a + b, 0) + pad * 2;
    const scale = 2;
    const c = document.createElement("canvas");
    c.width = width * scale;
    c.height = total * scale;
    const ctx = c.getContext("2d");
    ctx.scale(scale, scale);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, total);
    ctx.fillStyle = "#000";
    ctx.textBaseline = "alphabetic";
    let y = pad;
    const inner = cols * charW;
    for(let i = 0; i < lines.length; i++){
        const l = lines[i];
        const h = heights[i];
        if (l.kind === "text") {
            const k = l.big ? 2 : 1;
            ctx.font = `${l.bold ? "bold " : ""}${20 * k}px "Courier New", Courier, monospace`;
            const w = l.text.length * charW * k;
            const x = l.align === "center" ? pad + (inner - w) / 2 : l.align === "right" ? pad + inner - w : pad;
            ctx.fillText(l.text, x, y + h - 7 * k);
        } else if (l.kind === "qr") {
            const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qrMatrix"])(l.value);
            const s = Math.floor(170 / (m.size + 4));
            const x0 = pad + (inner - s * m.size) / 2;
            for(let r = 0; r < m.size; r++)for(let q = 0; q < m.size; q++)if (m.get(q, r)) ctx.fillRect(x0 + q * s, y + 10 + r * s, s, s);
        } else if (l.kind === "barcode") {
            const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code128Modules"])(l.value);
            const mw = Math.max(1, Math.floor(inner / mods.length));
            const x0 = pad + (inner - mw * mods.length) / 2;
            mods.forEach((on, k)=>on && ctx.fillRect(x0 + k * mw, y + 4, mw, l.height));
            ctx.font = '14px "Courier New", monospace';
            ctx.fillText(l.value, pad + (inner - l.value.length * 8.4) / 2, y + l.height + 24);
        } else if (l.kind === "image" && h > 0) {
            const im = await loadImage(l.src);
            const w = Math.min(160, inner);
            const hh = im.height / im.width * w;
            ctx.filter = "grayscale(1) contrast(1.5)";
            ctx.drawImage(im, pad + (inner - w) / 2, y + 5, w, hh);
            ctx.filter = "none";
        }
        y += h;
    }
    return new Promise((res, rej)=>c.toBlob((b)=>b ? res(b) : rej(new Error("Gagal membuat gambar")), "image/png"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/receipt-renderer/escpos.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EscPosBuilder",
    ()=>EscPosBuilder,
    "renderEscPos",
    ()=>renderEscPos,
    "testPrintLines",
    ()=>testPrintLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-client] (ecmascript)");
;
;
;
const ESC = 0x1b;
const GS = 0x1d;
class EscPosBuilder {
    buf = [];
    raw(...b) {
        this.buf.push(...b);
        return this;
    }
    text(s) {
        for (const c of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAscii"])(s))this.buf.push(c.charCodeAt(0));
        return this;
    }
    init() {
        return this.raw(ESC, 0x40);
    }
    align(a) {
        return this.raw(ESC, 0x61, a === "left" ? 0 : a === "center" ? 1 : 2);
    }
    bold(on) {
        return this.raw(ESC, 0x45, on ? 1 : 0);
    }
    big(on) {
        return this.raw(GS, 0x21, on ? 0x11 : 0x00);
    }
    lineSpacing(n) {
        return this.raw(ESC, 0x33, Math.max(0, Math.min(255, Math.round(n))));
    }
    feed(n) {
        return this.raw(ESC, 0x64, Math.max(0, Math.min(255, n)));
    }
    lf() {
        return this.raw(0x0a);
    }
    cut() {
        return this.raw(GS, 0x56, 0x42, 0x03);
    }
    drawer() {
        return this.raw(ESC, 0x70, 0x00, 0x19, 0xfa);
    }
    density(level) {
        // ESC 7 n1 n2 n3 (heating dots, heating time, interval) — tidak semua printer mendukung
        return this.raw(ESC, 0x37, 7, level === 0 ? 60 : level === 2 ? 140 : 80, 2);
    }
    qr(value, moduleSize) {
        const data = Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAscii"])(value)).map((c)=>c.charCodeAt(0));
        const len = data.length + 3;
        return this.raw(GS, 0x28, 0x6b, 4, 0, 0x31, 0x41, 0x32, 0).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x43, Math.max(1, Math.min(16, moduleSize))).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x45, 0x31).raw(GS, 0x28, 0x6b, len & 0xff, len >> 8, 0x31, 0x50, 0x30, ...data).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x51, 0x30);
    }
    barcode128(value, height) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize128"])(value).slice(0, 40);
        const data = [
            0x7b,
            0x42,
            ...Array.from(s).map((c)=>c.charCodeAt(0))
        ];
        return this.raw(GS, 0x68, height, GS, 0x77, 2, GS, 0x48, 2).raw(GS, 0x6b, 73, data.length, ...data);
    }
    raster(w, h, data) {
        const bytesPerRow = Math.ceil(w / 8);
        this.raw(GS, 0x76, 0x30, 0, bytesPerRow & 0xff, bytesPerRow >> 8, h & 0xff, h >> 8);
        for (const b of data)this.buf.push(b);
        return this;
    }
    build() {
        return Uint8Array.from(this.buf);
    }
}
function renderEscPos(lines, p, opts = {}) {
    const b = new EscPosBuilder().init();
    if (p.density !== 1) b.density(p.density);
    b.lineSpacing(30 * p.lineSpacing);
    for (const l of lines){
        switch(l.kind){
            case "text":
                {
                    b.align(l.align).bold(l.bold).big(l.big).text(l.text).lf();
                    b.bold(false).big(false);
                    break;
                }
            case "qr":
                b.align("center").qr(l.value, l.size).lf();
                break;
            case "barcode":
                b.align("center").barcode128(l.value, l.height).lf();
                break;
            case "image":
                if (l.bitmap) b.align("center").raster(l.bitmap.w, l.bitmap.h, l.bitmap.data).lf();
                break;
            case "feed":
                b.feed(l.n);
                break;
        }
    }
    b.align("left").feed(p.autoCut ? 4 : 3);
    if (opts.cut ?? p.autoCut) b.cut();
    if (p.openDrawer) b.drawer();
    return b.build();
}
function testPrintLines(cols, paper) {
    const rule = "-".repeat(cols);
    const t = (text, o = {})=>({
            kind: "text",
            text,
            align: "left",
            bold: false,
            big: false,
            ...o
        });
    return [
        t("TEST PRINT", {
            align: "center",
            bold: true,
            big: true
        }),
        t("POS & Receipt Studio", {
            align: "center"
        }),
        t(rule),
        t(`Kertas ${paper}mm / ${cols} kolom`),
        t("Rata kiri"),
        t("Rata tengah", {
            align: "center"
        }),
        t("Rata kanan", {
            align: "right"
        }),
        t("Teks tebal", {
            bold: true
        }),
        t("0123456789".repeat(4).slice(0, cols)),
        t(rule),
        {
            kind: "qr",
            value: "https://github.com",
            size: 5
        },
        {
            kind: "barcode",
            value: "TEST-12345",
            height: 50
        },
        t(rule),
        t("Jika semua baris terbaca rapi,", {
            align: "center"
        }),
        t("printer siap digunakan.", {
            align: "center"
        })
    ];
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/receipt-renderer/pdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderPdf",
    ()=>renderPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/qr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-client] (ecmascript)");
;
;
;
const MM = 72 / 25.4;
function renderPdf(lines, opts) {
    const margin = (opts.marginMm ?? 3) * MM;
    const pageW = opts.widthMm * MM;
    const innerW = pageW - margin * 2;
    const fs = innerW / (opts.cols * 0.6);
    const cw = fs * 0.6;
    const lh = fs * 1.25;
    // Hitung tinggi
    const heightOf = (l)=>{
        switch(l.kind){
            case "text":
                return l.big ? lh * 2 : lh;
            case "qr":
                return Math.min(innerW * 0.6, 110) + lh;
            case "barcode":
                return l.height * 0.6 + lh * 1.5;
            case "feed":
                return lh * l.n;
            default:
                return 0;
        }
    };
    const total = lines.reduce((s, l)=>s + heightOf(l), 0) + margin * 2;
    const pageH = Math.max(total, 60);
    const ops = [];
    let y = pageH - margin;
    const esc = (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAscii"])(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    const xFor = (w, a)=>a === "center" ? margin + (innerW - w) / 2 : a === "right" ? margin + innerW - w : margin;
    for (const l of lines){
        const h = heightOf(l);
        if (l.kind === "text") {
            const size = l.big ? fs * 2 : fs;
            const w = l.text.length * size * 0.6;
            y -= h;
            ops.push(`BT /${l.bold ? "F2" : "F1"} ${size.toFixed(2)} Tf ${xFor(w, l.align).toFixed(2)} ${(y + h * 0.22).toFixed(2)} Td (${esc(l.text)}) Tj ET`);
        } else if (l.kind === "qr") {
            const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["qrMatrix"])(l.value);
            const n = m.size + 4;
            const size = Math.min(innerW * 0.6, 110);
            const s = size / n;
            const x0 = margin + (innerW - size) / 2;
            const y0 = y - size;
            for(let r = 0; r < m.size; r++)for(let c = 0; c < m.size; c++)if (m.get(c, r)) ops.push(`${(x0 + (c + 2) * s).toFixed(2)} ${(y0 + (n - 3 - r) * s).toFixed(2)} ${s.toFixed(2)} ${s.toFixed(2)} re f`);
            y -= h;
        } else if (l.kind === "barcode") {
            const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code128Modules"])(l.value);
            const mw = Math.min(innerW / mods.length, 1.6);
            const bw = mods.length * mw;
            const x0 = margin + (innerW - bw) / 2;
            const bh = l.height * 0.6;
            const y0 = y - bh;
            let i = 0;
            while(i < mods.length){
                if (mods[i]) {
                    let j = i;
                    while(j < mods.length && mods[j])j++;
                    ops.push(`${(x0 + i * mw).toFixed(2)} ${y0.toFixed(2)} ${((j - i) * mw).toFixed(2)} ${bh.toFixed(2)} re f`);
                    i = j;
                } else i++;
            }
            const ts = fs * 0.8;
            ops.push(`BT /F1 ${ts.toFixed(2)} Tf ${(margin + (innerW - l.value.length * ts * 0.6) / 2).toFixed(2)} ${(y0 - ts - 2).toFixed(2)} Td (${esc(l.value)}) Tj ET`);
            y -= h;
        } else if (l.kind === "feed") y -= h;
    }
    const stream = ops.join("\n");
    const objs = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(2)} ${pageH.toFixed(2)}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`,
        `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
        "<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold /Encoding /WinAnsiEncoding >>"
    ];
    let pdf = "%PDF-1.4\n";
    const offsets = [];
    objs.forEach((o, i)=>{
        offsets.push(pdf.length);
        pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
    });
    const xref = pdf.length;
    pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
    offsets.forEach((o)=>pdf += `${String(o).padStart(10, "0")} 00000 n \n`);
    pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
    const out = new Uint8Array(pdf.length);
    for(let i = 0; i < pdf.length; i++)out[i] = pdf.charCodeAt(i) & 0xff;
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/receipt-renderer/textLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutReceipt",
    ()=>layoutReceipt,
    "receiptToPlainText",
    ()=>receiptToPlainText,
    "toAscii",
    ()=>toAscii,
    "twoCol",
    ()=>twoCol,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/blocks.ts [app-client] (ecmascript)");
;
const ASCII_MAP = {
    "×": "x",
    "·": ".",
    "↳": ">",
    "–": "-",
    "—": "-",
    "‘": "'",
    "’": "'",
    "“": '"',
    "”": '"',
    "…": "...",
    "•": "*"
};
function toAscii(s) {
    return Array.from(s).map((c)=>{
        if (ASCII_MAP[c]) return ASCII_MAP[c];
        const code = c.charCodeAt(0);
        return code >= 32 && code <= 126 ? c : "?";
    }).join("");
}
function wrap(text, width) {
    const out = [];
    for (const para of text.split("\n")){
        let cur = "";
        for (const word of para.split(" ")){
            let w = word;
            while(w.length > width){
                if (cur) {
                    out.push(cur);
                    cur = "";
                }
                out.push(w.slice(0, width));
                w = w.slice(width);
            }
            if (!cur) cur = w;
            else if (cur.length + 1 + w.length <= width) cur += " " + w;
            else {
                out.push(cur);
                cur = w;
            }
        }
        out.push(cur);
    }
    return out;
}
function twoCol(left, right, width) {
    if (!right) return wrap(left, width);
    if (left.length + right.length + 1 <= width) return [
        left + " ".repeat(width - left.length - right.length) + right
    ];
    const lines = wrap(left, Math.max(8, width - right.length - 1));
    const last = lines[lines.length - 1];
    if (last.length + right.length + 1 <= width) {
        lines[lines.length - 1] = last + " ".repeat(width - last.length - right.length) + right;
        return lines;
    }
    return [
        ...lines,
        " ".repeat(Math.max(0, width - right.length)) + right
    ];
}
const DIV_CHAR = {
    dashed: "-",
    dotted: ".",
    solid: "_",
    double: "=",
    stars: "*",
    equals: "=",
    thick: "="
};
function itemLines(rows, layout, width, showQty, hasPrice) {
    const out = [];
    const totalW = Math.max(0, ...rows.map((r)=>r.total.length)) + 1;
    if (layout === "table") out.push(...twoCol("Item", hasPrice ? "Total" : "Qty", width), "-".repeat(width));
    rows.forEach((r, idx)=>{
        const code = r.code ? `[${r.code}] ` : "";
        const qtyUnit = `${r.qty}${r.unit ? ` x ${r.unit}` : ""}`;
        switch(layout){
            case "inline":
                out.push(...twoCol(`${showQty ? r.qty + "x " : ""}${code}${r.name}`, r.total, width));
                break;
            case "compact":
                out.push(...twoCol(`${r.name}${showQty ? " x" + r.qty : ""}`, r.total, width));
                break;
            case "table":
                {
                    out.push(...wrap(code + r.name, width));
                    const unitW = Math.max(0, width - 5 - totalW);
                    out.push((showQty ? String(r.qty) : "").padEnd(5) + (r.unit || "").padStart(unitW) + (hasPrice ? r.total.padStart(totalW) : ""));
                    break;
                }
            case "detailed":
                out.push(...wrap(`${idx + 1}. ${r.name}`, width));
                if (r.code) out.push("   Kode: " + r.code);
                out.push(...twoCol(`   ${showQty ? "Qty " + qtyUnit : ""}`, r.total, width));
                break;
            default:
                out.push(...wrap(code + r.name, width));
                out.push(...twoCol(showQty ? `  ${qtyUnit}` : "", r.total, width));
        }
        if (r.note) out.push(...wrap(`  > ${r.note}`, width));
    });
    return out;
}
function layoutReceipt(tpl, data, cols) {
    const lines = [];
    for (const b of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$blocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBlocks"])(tpl, data)){
        const el = b.el;
        const big = el.big;
        const width = big ? Math.max(8, Math.floor(cols / 2)) : cols;
        const bold = el.weight >= 700 || el.invert;
        const tx = (s)=>toAscii(el.uppercase ? s.toUpperCase() : s);
        const push = (text, align = el.align)=>lines.push({
                kind: "text",
                text: tx(text),
                align,
                bold,
                big
            });
        switch(b.kind){
            case "text":
                b.lines.forEach((l)=>wrap(tx(l), width).forEach((w)=>push(w)));
                break;
            case "pair":
                wrap(tx(`${b.label}${b.label ? ": " : ""}${b.value}`), width).forEach((w)=>push(w));
                break;
            case "row":
                {
                    const l = tx(b.label);
                    const v = tx(b.value);
                    // teks 2x yang tidak muat satu baris → turun ke ukuran normal agar tidak terpotong
                    if (big && l.length + v.length + 1 > width) {
                        twoCol(l, v, cols).forEach((w)=>lines.push({
                                kind: "text",
                                text: w,
                                align: "left",
                                bold,
                                big: false
                            }));
                    } else twoCol(l, v, width).forEach((w)=>push(w, "left"));
                    break;
                }
            case "items":
                itemLines(b.rows.map((r)=>({
                        ...r,
                        name: tx(r.name),
                        note: tx(r.note)
                    })), el.itemLayout, cols, el.showQty, b.hasPrice).forEach((t)=>lines.push({
                        kind: "text",
                        text: toAscii(t),
                        align: "left",
                        bold: false,
                        big: false
                    }));
                break;
            case "divider":
                {
                    const n = Math.max(4, Math.round(cols * el.widthPct / 100));
                    lines.push({
                        kind: "text",
                        text: DIV_CHAR[el.dividerStyle].repeat(n),
                        align: el.widthPct < 100 ? el.align : "left",
                        bold: false,
                        big: false
                    });
                    break;
                }
            case "qr":
                lines.push({
                    kind: "qr",
                    value: b.value,
                    size: Math.max(3, Math.min(8, Math.round(el.qrSize / 20)))
                });
                break;
            case "barcode":
                lines.push({
                    kind: "barcode",
                    value: b.value,
                    height: Math.max(30, Math.min(150, el.barcodeHeight))
                });
                break;
            case "logo":
                lines.push({
                    kind: "image",
                    src: b.src
                });
                break;
            case "spacer":
                lines.push({
                    kind: "feed",
                    n: 1
                });
                break;
            case "signature":
                lines.push({
                    kind: "feed",
                    n: 3
                });
                lines.push({
                    kind: "text",
                    text: "-".repeat(Math.floor(cols * 0.7)),
                    align: el.align,
                    bold: false,
                    big: false
                });
                lines.push({
                    kind: "text",
                    text: tx(b.label),
                    align: el.align,
                    bold: false,
                    big: false
                });
                break;
        }
    }
    return lines;
}
function receiptToPlainText(tpl, data, cols = 32) {
    const pad = (t, a, big)=>{
        const w = big ? Math.floor(cols / 2) : cols;
        const s = a === "center" ? " ".repeat(Math.max(0, Math.floor((w - t.length) / 2))) + t : a === "right" ? " ".repeat(Math.max(0, w - t.length)) + t : t;
        return s;
    };
    return layoutReceipt(tpl, data, cols).map((l)=>{
        if (l.kind === "text") return pad(l.text, l.align, l.big);
        if (l.kind === "feed") return "\n".repeat(Math.max(0, l.n - 1));
        return null;
    }).filter((l)=>l !== null).join("\n");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/transactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelTransaction",
    ()=>cancelTransaction,
    "cartFromTransaction",
    ()=>cartFromTransaction,
    "cartTotals",
    ()=>cartTotals,
    "checkout",
    ()=>checkout,
    "deleteHeld",
    ()=>deleteHeld,
    "emptyCart",
    ()=>emptyCart,
    "holdCart",
    ()=>holdCart,
    "refundTransaction",
    ()=>refundTransaction,
    "resumeHeld",
    ()=>resumeHeld,
    "settleTransaction",
    ()=>settleTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/money.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/payment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
;
;
;
;
function emptyCart() {
    return {
        draftId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
        items: [],
        discountType: "amount",
        discountValue: 0,
        fee: 0,
        taxOn: false,
        customer: "",
        note: ""
    };
}
function cartTotals(cart, store) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcTotals"])({
        items: cart.items,
        discountType: cart.discountType,
        discountValue: cart.discountValue,
        taxOn: cart.taxOn,
        taxRate: store.taxRate,
        fee: cart.fee
    });
}
async function nextNumber(store, ts) {
    const key = `${store.id}:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["periodKey"])(ts, store.resetPeriod)}`;
    const cur = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].counters.get(key);
    const seq = (cur?.value ?? 0) + 1;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].counters.put({
        key,
        value: seq
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTxNumber"])(store.numberFormat, store.prefix, seq, store.seqPad, ts);
}
async function checkout(args) {
    const { store, cashier, cart } = args;
    if (cart.items.length === 0) throw new Error("Keranjang kosong");
    if (cart.items.some((i)=>!(i.qty > 0) || !Number.isInteger(i.qty))) throw new Error("Kuantitas tidak valid");
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transaction("rw", [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].counters,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].audit
    ], async ()=>{
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.get(cart.draftId);
        if (existing) return existing;
        const ts = Date.now();
        const totals = cartTotals(cart, store);
        if (totals.total <= 0 && !cart.items.length) throw new Error("Total tidak valid");
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settlePayments"])(totals.total, args.tendered, {
            allowDp: args.allowDp
        });
        if (store.stockEnabled) {
            for (const it of cart.items){
                const p = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products.get(it.productId);
                if (p?.trackStock) {
                    if (p.stock < it.qty) throw new Error(`Stok "${p.name}" tidak cukup (sisa ${p.stock})`);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products.update(p.id, {
                        stock: p.stock - it.qty,
                        updatedAt: ts
                    });
                }
            }
        }
        const number = await nextNumber(store, ts);
        const tx = {
            id: cart.draftId,
            number,
            storeId: store.id,
            cashierId: cashier.id,
            cashierName: cashier.name,
            customer: cart.customer.trim(),
            note: cart.note.trim(),
            items: cart.items.map((i)=>({
                    ...i,
                    total: i.price * i.qty
                })),
            subtotal: totals.subtotal,
            discountType: cart.discountType,
            discountValue: cart.discountValue,
            discountAmount: totals.discountAmount,
            taxName: store.taxName,
            taxRate: cart.taxOn ? store.taxRate : 0,
            taxAmount: totals.taxAmount,
            feeAmount: totals.feeAmount,
            total: totals.total,
            payments: res.payments,
            paid: res.paid,
            cashReceived: res.cashReceived,
            change: res.change,
            balance: res.balance,
            status: res.status,
            createdAt: ts,
            updatedAt: ts
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.add(tx);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audit"])({
            action: res.status === "dp" ? "tx.dp" : "tx.create",
            entity: "transaction",
            entityId: tx.id,
            detail: `${number} total ${tx.total}`,
            actor: cashier.name,
            storeId: store.id
        });
        return tx;
    });
}
async function restock(tx, store) {
    if (store && !store.stockEnabled) return;
    for (const it of tx.items){
        const p = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products.get(it.productId);
        if (p?.trackStock) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products.update(p.id, {
            stock: p.stock + it.qty,
            updatedAt: Date.now()
        });
    }
}
async function cancelTransaction(txId, reason, actor) {
    if (!reason.trim()) throw new Error("Alasan pembatalan wajib diisi");
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transaction("rw", [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].stores,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].audit
    ], async ()=>{
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.get(txId);
        if (!tx) throw new Error("Transaksi tidak ditemukan");
        if (tx.status !== "completed" && tx.status !== "dp") throw new Error("Transaksi tidak bisa dibatalkan");
        await restock(tx, await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].stores.get(tx.storeId));
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.update(txId, {
            status: "cancelled",
            cancelReason: reason.trim(),
            cancelledAt: Date.now(),
            updatedAt: Date.now()
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audit"])({
            action: "tx.cancel",
            entity: "transaction",
            entityId: txId,
            detail: `${tx.number}: ${reason}`,
            actor,
            storeId: tx.storeId
        });
    });
}
async function refundTransaction(txId, reason, actor) {
    if (!reason.trim()) throw new Error("Alasan retur wajib diisi");
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transaction("rw", [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].products,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].stores,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].audit
    ], async ()=>{
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.get(txId);
        if (!tx) throw new Error("Transaksi tidak ditemukan");
        if (tx.status !== "completed") throw new Error("Hanya transaksi lunas yang bisa diretur");
        await restock(tx, await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].stores.get(tx.storeId));
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.update(txId, {
            status: "refunded",
            refundReason: reason.trim(),
            refundedAt: Date.now(),
            updatedAt: Date.now()
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audit"])({
            action: "tx.refund",
            entity: "transaction",
            entityId: txId,
            detail: `${tx.number}: ${reason}`,
            actor,
            storeId: tx.storeId
        });
    });
}
async function settleTransaction(txId, tendered, actor) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transaction("rw", [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].audit
    ], async ()=>{
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.get(txId);
        if (!tx || tx.status !== "dp") throw new Error("Transaksi bukan DP");
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settlePayments"])(tx.total, tendered, {
            alreadyPaid: tx.paid
        });
        const merged = [
            ...tx.payments
        ];
        for (const l of res.payments){
            const f = merged.find((m)=>m.method === l.method);
            if (f) f.amount += l.amount;
            else merged.push({
                ...l
            });
        }
        const upd = {
            payments: merged,
            paid: tx.total,
            cashReceived: res.cashReceived,
            change: res.change,
            balance: 0,
            status: "completed",
            settledAt: Date.now(),
            updatedAt: Date.now()
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.update(txId, upd);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audit"])({
            action: "tx.settle",
            entity: "transaction",
            entityId: txId,
            detail: tx.number,
            actor,
            storeId: tx.storeId
        });
        return {
            ...tx,
            ...upd
        };
    });
}
function cartFromTransaction(tx, store) {
    const items = tx.items.map((i)=>({
            productId: i.productId,
            name: i.name,
            sku: i.sku,
            price: i.price,
            qty: i.qty,
            note: i.note
        }));
    return {
        draftId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
        items,
        discountType: tx.discountType,
        discountValue: tx.discountValue,
        fee: tx.feeAmount,
        taxOn: tx.taxAmount > 0 && store.taxEnabled,
        customer: tx.customer,
        note: tx.note
    };
}
async function holdCart(storeId, cart, label) {
    if (cart.items.length === 0) throw new Error("Keranjang kosong");
    const h = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])(),
        storeId,
        label: label.trim() || cart.customer || "Tahan",
        cart,
        createdAt: Date.now()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].held.add(h);
    return h;
}
async function resumeHeld(id) {
    const h = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].held.get(id);
    if (!h) return null;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].held.delete(id);
    return {
        ...h.cart,
        draftId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])()
    };
}
async function deleteHeld(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].held.delete(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1m0whp8q7-6du._.js.map
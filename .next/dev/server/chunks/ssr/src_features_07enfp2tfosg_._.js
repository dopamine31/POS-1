(()=>{"use strict";module.exports = [
"[project]/src/features/barcode/LabelTool.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelTool",
    ()=>LabelTool,
    "buildLabel",
    ()=>buildLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/ReceiptView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/data.ts [app-ssr] (ecmascript)");
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
function buildLabel(kind, value, caption, price) {
    const els = [
        caption ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultElement"])("text", {
            text: caption,
            align: "center",
            weight: 700,
            size: 12
        }) : null,
        kind === "barcode" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultElement"])("barcode", {
            codeSource: "custom",
            text: value,
            barcodeHeight: 56,
            marginTop: 4
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultElement"])("qr", {
            codeSource: "custom",
            text: value,
            qrSize: 130,
            marginTop: 4
        }),
        price ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultElement"])("text", {
            text: price,
            align: "center",
            weight: 700,
            size: 14,
            marginTop: 4
        }) : null
    ].filter(Boolean);
    return {
        tpl: {
            id: "label",
            name: "Label",
            description: "",
            builtin: false,
            favorite: false,
            paper: {
                size: "58",
                customMm: 58
            },
            elements: els,
            createdAt: 0,
            updatedAt: 0
        },
        data: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"],
            number: value
        }
    };
}
function LabelTool({ initial }) {
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("barcode");
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial?.value ?? "");
    const [caption, setCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial?.caption ?? "");
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial?.price ?? "");
    const [copies, setCopies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { tpl, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildLabel(kind, value || "0000000000", caption, price), [
        kind,
        value,
        caption,
        price
    ]);
    const p = store.printer;
    const print = async ()=>{
        if (!value.trim()) return toast("Isi nilai barcode/QR terlebih dahulu", "error");
        setBusy(true);
        try {
            const pp = {
                ...p,
                copies
            };
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printReceipt"])(tpl, data, pp);
            if (r === "escpos") toast("Label dikirim ke printer", "success");
        } catch (e) {
            toast(`${e instanceof Error ? e.message : "Gagal mencetak"} — mencoba cetak browser.`, "error");
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printStore"].request({
                tpl,
                data,
                widthMm: p.paperWidth,
                marginMm: p.margin,
                copies,
                fontScale: 1,
                lineSpacing: 1
            });
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-5 md:grid-cols-[1fr_auto]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                        value: kind,
                        onChange: setKind,
                        options: [
                            {
                                value: "barcode",
                                label: "Barcode (Code 128)"
                            },
                            {
                                value: "qr",
                                label: "QR Code"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        label: kind === "qr" ? "Isi QR (teks / URL)" : "Nilai barcode (ASCII)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "input",
                            value: value,
                            onChange: (e)=>setValue(e.target.value),
                            placeholder: "mis. 8990000000011"
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/LabelTool.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Keterangan atas (opsional)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "input",
                            value: caption,
                            onChange: (e)=>setCaption(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/LabelTool.tsx",
                            lineNumber: 62,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Teks bawah / harga (opsional)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "input",
                            value: price,
                            onChange: (e)=>setPrice(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/LabelTool.tsx",
                            lineNumber: 63,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Jumlah salinan",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "input num",
                            type: "number",
                            min: 1,
                            max: 20,
                            value: copies,
                            onChange: (e)=>setCopies(Math.max(1, Math.min(20, Number(e.target.value) || 1)))
                        }, void 0, false, {
                            fileName: "[project]/src/features/barcode/LabelTool.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary w-full",
                        onClick: print,
                        disabled: busy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/features/barcode/LabelTool.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            " Cetak label (",
                            {
                                browser: "browser",
                                bluetooth: "Bluetooth",
                                usb: "USB",
                                share: "PDF/Share"
                            }[p.connection],
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/barcode/LabelTool.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/barcode/LabelTool.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center rounded-2xl bg-surface2 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReceiptView"], {
                    template: tpl,
                    data: data,
                    widthMm: p.paperWidth,
                    marginMm: 3
                }, void 0, false, {
                    fileName: "[project]/src/features/barcode/LabelTool.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/barcode/LabelTool.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/barcode/LabelTool.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/printer/adapters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/features/printer/printService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/escpos.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/pdf.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/canvasImage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printerManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printStore.ts [app-ssr] (ecmascript)");
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
    const prepared = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareImages"])(lines, p.paperWidth === 58 ? 256 : 384);
    const one = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["renderEscPos"])(prepared, p);
    const copies = Math.max(1, Math.min(p.copies, 5));
    for(let i = 0; i < copies; i++)await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].send(one);
}
async function printReceipt(tpl, data, p) {
    if (p.connection === "bluetooth" || p.connection === "usb") {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].isConnected(p.connection)) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].connect(p.connection);
        await sendEscPos((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, colsOf(p)), p);
        return "escpos";
    }
    if (p.connection === "share") {
        await shareReceiptFile(tpl, data, p, "pdf");
        return "shared";
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printStore"].request({
        tpl,
        data,
        widthMm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectiveWidthMm"])(tpl.paper, p.paperWidth),
        marginMm: p.margin,
        copies: Math.max(1, Math.min(p.copies, 5)),
        fontScale: p.fontSize / 12,
        lineSpacing: p.lineSpacing
    });
    return "browser";
}
async function testPrint(p) {
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$escpos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["testPrintLines"])(colsOf(p), p.paperWidth);
    if (p.connection === "bluetooth" || p.connection === "usb") {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].isConnected(p.connection)) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].connect(p.connection);
        await sendEscPos(lines, p);
        return;
    }
    const blob = new Blob([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderPdf"])(lines, {
            widthMm: p.paperWidth,
            cols: colsOf(p),
            marginMm: p.margin
        })
    ], {
        type: "application/pdf"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])("test-print.pdf", blob);
}
function pdfBlob(tpl, data, p) {
    const widthMm = tpl.paper.size === "58" || tpl.paper.size === "80" ? Number(tpl.paper.size) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperWidthMm"])(tpl.paper);
    const w = tpl.paper.size === "a4" || tpl.paper.size === "custom" ? widthMm : p.paperWidth;
    const cols = tpl.paper.size === "a4" ? 64 : Math.max(20, Math.round(w / 58 * 32));
    return new Blob([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$pdf$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderPdf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, cols), {
            widthMm: w,
            cols,
            marginMm: p.margin
        })
    ], {
        type: "application/pdf"
    });
}
async function pngBlob(tpl, data, p) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$canvasImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderPng"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutReceipt"])(tpl, data, colsOf(p)), colsOf(p));
}
function exportPdf(tpl, data, p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])(`struk-${data.number}.pdf`, pdfBlob(tpl, data, p), "application/pdf");
}
async function exportImage(tpl, data, p) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])(`struk-${data.number}.png`, await pngBlob(tpl, data, p), "image/png");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])(file.name, blob, blob.type);
}
function whatsappLink(tpl, data, phone) {
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["receiptToPlainText"])(tpl, data, 32);
    const digits = (phone ?? "").replace(/\D/g, "").replace(/^0/, "62");
    return `https://wa.me/${digits}?text=${encodeURIComponent("```\n" + text + "\n```")}`;
}
}),
"[project]/src/features/printer/printerManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "printerManager",
    ()=>printerManager,
    "usePrinterState",
    ()=>usePrinterState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/adapters.ts [app-ssr] (ecmascript)");
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
        return (kind === "bluetooth" ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BluetoothAdapter"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsbAdapter"]()).isSupported();
    }
    async connect(kind) {
        if (this.adapter?.isConnected() && this.adapter.kind === kind) return;
        await this.disconnect();
        const a = kind === "bluetooth" ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BluetoothAdapter"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$adapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsbAdapter"]();
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(printerManager.subscribe, printerManager.getState, printerManager.getState);
}
}),
"[project]/src/features/receipt-renderer/canvasImage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageToMono",
    ()=>imageToMono,
    "prepareImages",
    ()=>prepareImages,
    "renderPng",
    ()=>renderPng
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/qr.ts [app-ssr] (ecmascript)");
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
            const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qrMatrix"])(l.value);
            const s = Math.floor(170 / (m.size + 4));
            const x0 = pad + (inner - s * m.size) / 2;
            for(let r = 0; r < m.size; r++)for(let q = 0; q < m.size; q++)if (m.get(q, r)) ctx.fillRect(x0 + q * s, y + 10 + r * s, s, s);
        } else if (l.kind === "barcode") {
            const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code128Modules"])(l.value);
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
}),
"[project]/src/features/receipt-renderer/escpos.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EscPosBuilder",
    ()=>EscPosBuilder,
    "renderEscPos",
    ()=>renderEscPos,
    "testPrintLines",
    ()=>testPrintLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-ssr] (ecmascript)");
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
        for (const c of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAscii"])(s))this.buf.push(c.charCodeAt(0));
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
        const data = Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAscii"])(value)).map((c)=>c.charCodeAt(0));
        const len = data.length + 3;
        return this.raw(GS, 0x28, 0x6b, 4, 0, 0x31, 0x41, 0x32, 0).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x43, Math.max(1, Math.min(16, moduleSize))).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x45, 0x31).raw(GS, 0x28, 0x6b, len & 0xff, len >> 8, 0x31, 0x50, 0x30, ...data).raw(GS, 0x28, 0x6b, 3, 0, 0x31, 0x51, 0x30);
    }
    barcode128(value, height) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitize128"])(value).slice(0, 40);
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
}),
"[project]/src/features/receipt-renderer/pdf.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderPdf",
    ()=>renderPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/code128.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/qr.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/textLayout.ts [app-ssr] (ecmascript)");
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
    const esc = (s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$textLayout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAscii"])(s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    const xFor = (w, a)=>a === "center" ? margin + (innerW - w) / 2 : a === "right" ? margin + innerW - w : margin;
    for (const l of lines){
        const h = heightOf(l);
        if (l.kind === "text") {
            const size = l.big ? fs * 2 : fs;
            const w = l.text.length * size * 0.6;
            y -= h;
            ops.push(`BT /${l.bold ? "F2" : "F1"} ${size.toFixed(2)} Tf ${xFor(w, l.align).toFixed(2)} ${(y + h * 0.22).toFixed(2)} Td (${esc(l.text)}) Tj ET`);
        } else if (l.kind === "qr") {
            const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$qr$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qrMatrix"])(l.value);
            const n = m.size + 4;
            const size = Math.min(innerW * 0.6, 110);
            const s = size / n;
            const x0 = margin + (innerW - size) / 2;
            const y0 = y - size;
            for(let r = 0; r < m.size; r++)for(let c = 0; c < m.size; c++)if (m.get(c, r)) ops.push(`${(x0 + (c + 2) * s).toFixed(2)} ${(y0 + (n - 3 - r) * s).toFixed(2)} ${s.toFixed(2)} ${s.toFixed(2)} re f`);
            y -= h;
        } else if (l.kind === "barcode") {
            const mods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$code128$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code128Modules"])(l.value);
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
}),
"[project]/src/features/receipt-renderer/textLayout.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/blocks.ts [app-ssr] (ecmascript)");
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
    for (const b of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$blocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildBlocks"])(tpl, data)){
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
}),
"[project]/src/features/receipt-studio/PrinterSetup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrinterSetup",
    ()=>PrinterSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.mjs [app-ssr] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.mjs [app-ssr] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$usb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Usb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/usb.mjs [app-ssr] (ecmascript) <export default as Usb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printerManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/printService.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const METHODS = [
    {
        id: "browser",
        label: "Cetak Browser",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
            lineNumber: 13,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0)),
        hint: "Dialog cetak sistem (AirPrint di iPhone, Print Service di Android). Paling kompatibel."
    },
    {
        id: "bluetooth",
        label: "Bluetooth BLE (ESC/POS)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
            lineNumber: 14,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0)),
        hint: "Langsung ke printer thermal BLE. Chrome/Edge Android & desktop. Tidak tersedia di Safari/iPhone."
    },
    {
        id: "usb",
        label: "USB (ESC/POS)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$usb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Usb$3e$__["Usb"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
            lineNumber: 15,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0)),
        hint: "WebUSB: Chrome/Edge desktop & sebagian Android. Tidak tersedia di Safari/iPhone."
    },
    {
        id: "share",
        label: "Share / PDF",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
            lineNumber: 16,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0)),
        hint: "Buat PDF lalu bagikan/cetak lewat aplikasi printer di perangkat (mis. RawBT, Printer Share)."
    }
];
function PrinterSetup() {
    const { store, updateStore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrinterState"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const p = store.printer;
    const set = (patch)=>updateStore({
            printer: {
                ...p,
                ...patch
            }
        });
    const supported = (id)=>id === "bluetooth" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].supports("bluetooth") : id === "usb" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].supports("usb") : true;
    const direct = p.connection === "bluetooth" || p.connection === "usb";
    const connected = direct && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].isConnected(p.connection);
    const connect = async ()=>{
        setBusy(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].connect(p.connection);
            toast("Printer terhubung", "success");
        } catch (e) {
            if (e?.name !== "NotFoundError") toast(e instanceof Error ? e.message : "Gagal terhubung", "error");
        } finally{
            setBusy(false);
        }
    };
    const test = async ()=>{
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testPrint"])(p);
            toast(p.connection === "browser" || p.connection === "share" ? "Test print dibuat (PDF)" : "Test print dikirim", "success");
        } catch (e) {
            toast(e instanceof Error ? e.message : "Test print gagal", "error");
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 lg:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card space-y-3 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold",
                        children: "Metode cetak"
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: METHODS.map((m)=>{
                            const ok = supported(m.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !ok,
                                onClick: ()=>set({
                                        connection: m.id
                                    }),
                                className: `flex w-full items-start gap-3 rounded-xl border p-3 text-left transition disabled:opacity-50 ${p.connection === m.id ? "border-brand bg-brandsoft" : "border-line"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 text-brand",
                                        children: m.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-sm font-medium",
                                                children: [
                                                    m.label,
                                                    " ",
                                                    !ok && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "badge badge-warn ml-1",
                                                        children: "Tidak didukung browser ini"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 81
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs text-muted",
                                                children: m.hint
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, m.id, true, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    direct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-surface2 p-3 text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: [
                                                "Status: ",
                                                connected ? `Terhubung — ${st.name}` : st.status === "connecting" ? "Menghubungkan…" : st.status === "disconnected" ? "Terputus" : "Belum terhubung"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        st.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-danger",
                                            children: st.error
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 78,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-sm",
                                    onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$printerManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printerManager"].disconnect(),
                                    children: "Putuskan"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 80,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary btn-sm",
                                    onClick: connect,
                                    disabled: busy || !supported(p.connection),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 80,
                                            columnNumber: 228
                                        }, this),
                                        " Hubungkan"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 80,
                                    columnNumber: 123
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn w-full",
                        onClick: test,
                        disabled: busy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 84,
                                columnNumber: 71
                            }, this),
                            " Test print"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card space-y-4 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold",
                        children: "Pengaturan kertas & cetak"
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Lebar kertas",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                58,
                                80
                            ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "chip justify-center",
                                    "data-active": p.paperWidth === w,
                                    onClick: ()=>set({
                                            paperWidth: w,
                                            charCols: w === 58 ? 32 : 48
                                        }),
                                    children: [
                                        w,
                                        " mm"
                                    ]
                                }, w, true, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 91,
                                    columnNumber: 45
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Karakter / baris",
                                hint: "58mm=32, 80mm=48 (font A)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "input num",
                                    min: 16,
                                    max: 64,
                                    value: p.charCols,
                                    onChange: (e)=>set({
                                            charCols: Number(e.target.value) || 32
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 95,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Salinan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "input num",
                                    min: 1,
                                    max: 5,
                                    value: p.copies,
                                    onChange: (e)=>set({
                                            copies: Math.max(1, Math.min(5, Number(e.target.value) || 1))
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 96,
                                    columnNumber: 34
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Ukuran font (cetak browser)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "input num",
                                    min: 8,
                                    max: 20,
                                    value: p.fontSize,
                                    onChange: (e)=>set({
                                            fontSize: Math.max(8, Math.min(20, Number(e.target.value) || 12))
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 97,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Margin (mm)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "input num",
                                    min: 0,
                                    max: 10,
                                    value: p.margin,
                                    onChange: (e)=>set({
                                            margin: Math.max(0, Math.min(10, Number(e.target.value) || 0))
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 98,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Spasi baris",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "input num",
                                    step: 0.1,
                                    min: 0.8,
                                    max: 2,
                                    value: p.lineSpacing,
                                    onChange: (e)=>set({
                                            lineSpacing: Math.max(0.8, Math.min(2, Number(e.target.value) || 1))
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 99,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Kepekatan (jika didukung)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "input",
                                    value: p.density,
                                    onChange: (e)=>set({
                                            density: Number(e.target.value)
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 0,
                                            children: "Ringan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 101,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 1,
                                            children: "Normal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 101,
                                            columnNumber: 162
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 2,
                                            children: "Gelap"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                            lineNumber: 101,
                                            columnNumber: 195
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                        checked: p.autoCut,
                        onChange: (v)=>set({
                                autoCut: v
                            }),
                        label: "Potong kertas otomatis",
                        hint: "Hanya printer dengan auto-cutter."
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                        checked: p.openDrawer,
                        onChange: (v)=>set({
                                openDrawer: v
                            }),
                        label: "Buka laci kas",
                        hint: "Mengirim pulsa ESC p (jika laci terhubung ke printer)."
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card p-4 lg:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2 flex items-center gap-2 text-sm font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 109,
                                columnNumber: 76
                            }, this),
                            " Panduan uji printer (wajib sebelum dipakai)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal space-y-1 pl-5 text-sm text-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Nyalakan printer, isi kertas sesuai lebar (58/80 mm), pastikan Bluetooth/USB aktif."
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Android: gunakan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Chrome"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 112,
                                        columnNumber: 32
                                    }, this),
                                    ", pilih “Bluetooth BLE”, tekan Hubungkan dan pilih printer. Banyak printer murah hanya Bluetooth Classic (SPP) yang ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "tidak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 112,
                                        columnNumber: 161
                                    }, this),
                                    " bisa diakses browser — gunakan “Share / PDF” + aplikasi printer, atau “Cetak Browser”."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "iPhone: Safari tidak mendukung Web Bluetooth/USB. Gunakan “Cetak Browser” (AirPrint) atau “Share / PDF”."
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Tekan ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Test print"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, this),
                                    ". Periksa: rata kiri/tengah/kanan, teks tebal, QR terbaca, barcode terbaca, tidak ada baris terpotong."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Jika teks terpotong/berantakan, ubah “Karakter / baris”. Jika gelap/terang, ubah kepekatan."
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Cetak satu struk transaksi nyata dan catat hasilnya di ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "TESTING.md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                        lineNumber: 116,
                                        columnNumber: 70
                                    }, this),
                                    " sebelum mengklaim kompatibel."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/receipt-studio/PrinterSetup.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/receipt-studio/StudioPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioPage",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.mjs [app-ssr] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.mjs [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/ReceiptView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/templates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$LabelTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/barcode/LabelTool.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$studio$2f$TemplateBuilder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-studio/TemplateBuilder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$studio$2f$PrinterSetup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-studio/PrinterSetup.tsx [app-ssr] (ecmascript)");
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
function StudioPage() {
    const { store, templates, updateStore, cashier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { confirm, prompt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogs"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("template");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sampleData = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"],
        store: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].store,
            name: store.name,
            address: store.address,
            phone: store.phone,
            logo: store.logo,
            currency: store.currency,
            footer: store.footer || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].store.footer
        }
    };
    const list = templates.filter((t)=>filter === "all" ? true : filter === "fav" ? t.favorite : !t.builtin).sort((a, b)=>Number(b.favorite) - Number(a.favorite));
    const run = async (fn, ok)=>{
        try {
            await fn();
            if (ok) toast(ok, "success");
        } catch (e) {
            toast(e instanceof Error ? e.message : "Gagal", "error");
        }
    };
    const edit = async (t)=>{
        if (t.builtin) {
            if (!await confirm({
                title: "Edit template bawaan",
                message: "Template bawaan tidak bisa diubah. Salinan baru akan dibuat dan dibuka di editor.",
                confirmText: "Buat salinan & edit"
            })) return;
            setEditing(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["duplicateTemplate"])(t));
        } else setEditing(t);
    };
    if (editing) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$studio$2f$TemplateBuilder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TemplateBuilder"], {
        template: editing,
        onClose: ()=>setEditing(null)
    }, void 0, false, {
        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
        lineNumber: 53,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Receipt Studio",
                subtitle: "Template struk, printer thermal, dan label barcode"
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                    value: tab,
                    onChange: setTab,
                    options: [
                        {
                            value: "template",
                            label: "Template"
                        },
                        {
                            value: "printer",
                            label: "Printer"
                        },
                        {
                            value: "label",
                            label: "Barcode & QR"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                    lineNumber: 58,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            tab === "printer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$studio$2f$PrinterSetup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrinterSetup"], {}, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 60,
                columnNumber: 29
            }, this),
            tab === "label" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$barcode$2f$LabelTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelTool"], {}, void 0, false, {
                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                    lineNumber: 61,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 61,
                columnNumber: 27
            }, this),
            tab === "template" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-scrollbar flex gap-2 overflow-x-auto",
                                children: [
                                    [
                                        "all",
                                        `Semua (${templates.length})`
                                    ],
                                    [
                                        "fav",
                                        "Favorit"
                                    ],
                                    [
                                        "custom",
                                        "Kustom"
                                    ]
                                ].map(([k, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "chip",
                                        "data-active": filter === k,
                                        onClick: ()=>setFilter(k),
                                        children: l
                                    }, k, false, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 67,
                                        columnNumber: 126
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-sm",
                                        onClick: ()=>fileRef.current?.click(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 70,
                                                columnNumber: 87
                                            }, this),
                                            " Impor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-sm",
                                        onClick: async ()=>await confirm({
                                                title: "Kembalikan default?",
                                                message: "Menghapus tanda favorit pada template bawaan dan mengatur template default toko ke Minimalist. Template kustom tidak dihapus.",
                                                confirmText: "Kembalikan"
                                            }) && run(async ()=>{
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetBuiltinState"])();
                                                await updateStore({
                                                    defaultTemplateId: "minimalist"
                                                });
                                            }, "Pengaturan template dikembalikan"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 71,
                                                columnNumber: 426
                                            }, this),
                                            " Reset default"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary btn-sm",
                                        onClick: ()=>setEditing((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blankTemplate"])()),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 72,
                                                columnNumber: 102
                                            }, this),
                                            " Template baru"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileRef,
                                        type: "file",
                                        accept: "application/json,.json",
                                        className: "sr-only",
                                        onChange: async (e)=>{
                                            const f = e.target.files?.[0];
                                            e.target.value = "";
                                            if (f) await run(async ()=>{
                                                setEditing(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importTemplateJson"])(await f.text()));
                                            }, "Template diimpor");
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                            title: "Tidak ada template",
                            hint: "Buat template baru atau ubah filter."
                        }, void 0, false, {
                            fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                            lineNumber: 78,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4",
                        "data-testid": "template-grid",
                        children: list.map((t)=>{
                            const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperWidthMm"])(t.paper);
                            const scale = w <= 58 ? 0.6 : w <= 80 ? 0.5 : 0.28;
                            const isDefault = store.defaultTemplateId === t.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `card relative flex flex-col overflow-hidden ${isDefault ? "ring-2 ring-brand" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "relative block h-56 overflow-hidden bg-surface2 pt-3",
                                        onClick: ()=>setPreview(t),
                                        "aria-label": `Pratinjau ${t.name}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto",
                                                style: {
                                                    width: `${w * 3.78 * scale}px`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        transform: `scale(${scale})`,
                                                        transformOrigin: "top left",
                                                        width: `${w}mm`
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReceiptView"], {
                                                        template: t,
                                                        data: sampleData
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface-2)] to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 93,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-1 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate text-sm font-semibold",
                                                                children: t.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 27
                                                            }, this),
                                                            t.builtin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "badge badge-muted",
                                                                children: "Bawaan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 40
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "badge badge-ok",
                                                                children: "Kustom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 92
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "line-clamp-2 text-xs text-muted",
                                                        children: t.description || `${t.paper.size === "custom" ? t.paper.customMm + "mm" : t.paper.size.toUpperCase() + (t.paper.size === "a4" ? "" : "mm")}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 25
                                                    }, this),
                                                    isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex items-center gap-1 text-xs font-medium text-brand",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 116
                                                            }, this),
                                                            " Default toko"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 96,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-ghost btn-icon h-9 w-9 min-h-9",
                                                        "aria-label": t.favorite ? "Hapus favorit" : "Favoritkan",
                                                        onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"])(t)),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 17,
                                                            className: t.favorite ? "fill-current text-warning" : ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 186
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn btn-ghost btn-icon h-9 w-9 min-h-9",
                                                                "aria-label": "Menu template",
                                                                onClick: ()=>setMenu(menu === t.id ? null : t.id),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                    size: 17
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 166
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 27
                                                            }, this),
                                                            menu === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "fixed inset-0 z-40",
                                                                        onClick: ()=>setMenu(null)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute right-0 z-50 mt-1 w-48 overflow-hidden rounded-xl border border-line bg-surface py-1 text-sm shadow-[var(--shadow-md)]",
                                                                        onClick: ()=>setMenu(null),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 112,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                label: "Pratinjau",
                                                                                onClick: ()=>setPreview(t)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 112,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 113,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                label: "Jadikan default toko",
                                                                                onClick: ()=>run(()=>updateStore({
                                                                                            defaultTemplateId: t.id
                                                                                        }), `${t.name} jadi default`)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 114,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                label: "Edit",
                                                                                onClick: ()=>edit(t)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 114,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 115,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                label: "Duplikat",
                                                                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["duplicateTemplate"])(t), "Template diduplikat")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 115,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            !t.builtin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 116,
                                                                                    columnNumber: 60
                                                                                }, this),
                                                                                label: "Ganti nama",
                                                                                onClick: async ()=>{
                                                                                    const n = await prompt({
                                                                                        title: "Ganti nama template",
                                                                                        label: "Nama",
                                                                                        initial: t.name,
                                                                                        required: true
                                                                                    });
                                                                                    if (n) run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renameTemplate"])(t.id, n));
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 116,
                                                                                columnNumber: 48
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 117,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                label: "Ekspor JSON",
                                                                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])(`template-${t.name.replace(/\W+/g, "-").toLowerCase()}.json`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportTemplateJson"])(t), "application/json")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 117,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            !t.builtin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                                                danger: true,
                                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    size: 15
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                    lineNumber: 118,
                                                                                    columnNumber: 67
                                                                                }, this),
                                                                                label: "Hapus",
                                                                                onClick: async ()=>{
                                                                                    if (await confirm({
                                                                                        title: `Hapus "${t.name}"?`,
                                                                                        danger: true,
                                                                                        confirmText: "Hapus"
                                                                                    })) {
                                                                                        if (store.defaultTemplateId === t.id) await updateStore({
                                                                                            defaultTemplateId: "minimalist"
                                                                                        });
                                                                                        run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteTemplate"])(t.id, cashier.name), "Template dihapus");
                                                                                    }
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                                lineNumber: 118,
                                                                                columnNumber: 48
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                                lineNumber: 104,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                lineNumber: 86,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                open: !!preview,
                onClose: ()=>setPreview(null),
                title: preview ? `Pratinjau · ${preview.name}` : "",
                size: "md",
                footer: preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn flex-1",
                            onClick: ()=>{
                                const t = preview;
                                setPreview(null);
                                edit(t);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                                    lineNumber: 134,
                                    columnNumber: 127
                                }, this),
                                " Edit"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                            lineNumber: 134,
                            columnNumber: 30
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary flex-1",
                            onClick: ()=>{
                                run(()=>updateStore({
                                        defaultTemplateId: preview.id
                                    }), `${preview.name} jadi default`);
                                setPreview(null);
                            },
                            children: "Jadikan default"
                        }, void 0, false, {
                            fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                            lineNumber: 134,
                            columnNumber: 161
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                    lineNumber: 134,
                    columnNumber: 28
                }, this),
                children: preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center overflow-x-auto rounded-2xl bg-surface2 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReceiptView"], {
                        template: preview,
                        data: sampleData,
                        widthMm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectiveWidthMm"])(preview.paper, store.printer.paperWidth)
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                        lineNumber: 135,
                        columnNumber: 102
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                    lineNumber: 135,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function Item({ icon, label, onClick, danger }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `flex min-h-10 w-full items-center gap-2.5 px-3 text-left hover:bg-surface2 ${danger ? "text-danger" : ""}`,
        onClick: onClick,
        children: [
            icon,
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/receipt-studio/StudioPage.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/receipt-studio/TemplateBuilder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TemplateBuilder",
    ()=>TemplateBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.mjs [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/ReceiptView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/receipt-renderer/elements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/templates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-ssr] (ecmascript)");
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
const LABELED = [
    "receiptNo",
    "date",
    "time",
    "cashier",
    "customer",
    "storePhone",
    "note"
];
const ROW = [
    "subtotal",
    "discount",
    "tax",
    "fee",
    "total",
    "payment",
    "cashReceived",
    "change",
    "balance"
];
const CONTENT = [
    "text",
    "thanks",
    "footer",
    "title",
    "signature"
];
function Num({ label, value, onChange, min = 0, max = 100, step = 1 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
        label: `${label}: ${value}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            className: "w-full accent-[var(--brand)]",
            min: min,
            max: max,
            step: step,
            value: value,
            onChange: (e)=>onChange(Number(e.target.value))
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function Sel({ label, value, onChange, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
        label: label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "input",
            value: value,
            onChange: (e)=>onChange(typeof value === "number" ? Number(e.target.value) : e.target.value),
            children: options.map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: v,
                    children: l
                }, String(v), false, {
                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                    lineNumber: 30,
                    columnNumber: 34
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function TemplateBuilder({ template, onClose }) {
    const { store, cashier } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { confirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogs"])();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(template);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(template));
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(template.elements[0]?.id ?? null);
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("elements");
    const [addOpen, setAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [doc, setDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sale");
    const [dragIdx, setDragIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [heightMm, setHeightMm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dirty = JSON.stringify(draft) !== saved;
    const selected = draft.elements.find((e)=>e.id === sel) ?? null;
    const widthMm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperWidthMm"])(draft.paper);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"],
            docType: doc,
            store: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].store,
                name: store.name,
                address: store.address,
                phone: store.phone,
                logo: store.logo,
                currency: store.currency,
                footer: store.footer || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].store.footer
            },
            balance: doc === "dp" ? 40000 : 0,
            payments: doc === "dp" ? [
                {
                    method: "cash",
                    amount: 50000
                }
            ] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].payments,
            cashReceived: doc === "dp" ? 50000 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].cashReceived,
            change: doc === "dp" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAMPLE_DATA"].change
        }), [
        store,
        doc
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = previewRef.current;
        if (el) setHeightMm(Math.round(el.offsetHeight * 25.4 / 96 * 10) / 10);
    }, [
        draft,
        doc,
        widthMm
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = (e)=>{
            if (dirty) e.preventDefault();
        };
        window.addEventListener("beforeunload", h);
        return ()=>window.removeEventListener("beforeunload", h);
    }, [
        dirty
    ]);
    const upd = (id, patch)=>setDraft((d)=>({
                ...d,
                elements: d.elements.map((e)=>e.id === id ? {
                        ...e,
                        ...patch
                    } : e)
            }));
    const move = (from, to)=>setDraft((d)=>{
            if (to < 0 || to >= d.elements.length || from === to) return d;
            const els = [
                ...d.elements
            ];
            const [it] = els.splice(from, 1);
            els.splice(to, 0, it);
            return {
                ...d,
                elements: els
            };
        });
    const add = (type)=>{
        const el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newElement"])(type);
        setDraft((d)=>{
            const idx = selected ? d.elements.findIndex((e)=>e.id === selected.id) + 1 : d.elements.length;
            const els = [
                ...d.elements
            ];
            els.splice(idx, 0, el);
            return {
                ...d,
                elements: els
            };
        });
        setSel(el.id);
        setAddOpen(false);
        setPanel("props");
    };
    const dup = (e)=>{
        const c = {
            ...e,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])()
        };
        setDraft((d)=>{
            const i = d.elements.findIndex((x)=>x.id === e.id);
            const els = [
                ...d.elements
            ];
            els.splice(i + 1, 0, c);
            return {
                ...d,
                elements: els
            };
        });
        setSel(c.id);
    };
    const remove = (id)=>{
        setDraft((d)=>({
                ...d,
                elements: d.elements.filter((e)=>e.id !== id)
            }));
        if (sel === id) setSel(null);
    };
    const save = async ()=>{
        try {
            const rec = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveTemplate"])(draft, cashier.name);
            setSaved(JSON.stringify(rec));
            setDraft(rec);
            toast("Template disimpan", "success");
        } catch (e) {
            toast(e instanceof Error ? e.message : "Gagal menyimpan", "error");
        }
    };
    const back = async ()=>{
        if (dirty && !await confirm({
            title: "Perubahan belum disimpan",
            message: "Keluar tanpa menyimpan?",
            confirmText: "Keluar",
            danger: true
        })) return;
        onClose();
    };
    const el = selected;
    const set = (patch)=>el && upd(el.id, patch);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-icon",
                        onClick: back,
                        "aria-label": "Kembali",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 19
                        }, void 0, false, {
                            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                            lineNumber: 128,
                            columnNumber: 78
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input max-w-xs flex-1",
                        value: draft.name,
                        onChange: (e)=>setDraft({
                                ...draft,
                                name: e.target.value
                            }),
                        "aria-label": "Nama template"
                    }, void 0, false, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-icon",
                                "aria-label": "Ekspor",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["download"])(`template-${draft.name.replace(/\W+/g, "-").toLowerCase()}.json`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportTemplateJson"])(draft), "application/json"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                    lineNumber: 131,
                                    columnNumber: 202
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: save,
                                disabled: !dirty,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 132,
                                        columnNumber: 80
                                    }, this),
                                    " ",
                                    dirty ? "Simpan" : "Tersimpan"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                    value: panel,
                    onChange: setPanel,
                    options: [
                        {
                            value: "elements",
                            label: "Elemen"
                        },
                        {
                            value: "preview",
                            label: "Preview"
                        },
                        {
                            value: "props",
                            label: "Properti"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                    lineNumber: 136,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-[280px_1fr_300px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `card p-3 ${panel === "elements" ? "" : "hidden lg:block"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold",
                                        children: [
                                            "Elemen (",
                                            draft.elements.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary btn-sm",
                                        onClick: ()=>setAddOpen(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 143,
                                                columnNumber: 89
                                            }, this),
                                            " Tambah"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "max-h-[70dvh] space-y-1 overflow-y-auto",
                                "data-testid": "element-list",
                                children: draft.elements.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        draggable: true,
                                        onDragStart: ()=>setDragIdx(i),
                                        onDragOver: (ev)=>ev.preventDefault(),
                                        onDrop: ()=>{
                                            if (dragIdx !== null) move(dragIdx, i);
                                            setDragIdx(null);
                                        },
                                        className: `flex items-center gap-1 rounded-xl border px-1.5 py-1 ${sel === e.id ? "border-brand bg-brandsoft" : "border-transparent hover:bg-surface2"} ${e.visible ? "" : "opacity-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                size: 16,
                                                className: "shrink-0 cursor-grab text-muted",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "min-h-9 flex-1 truncate text-left text-sm",
                                                onClick: ()=>{
                                                    setSel(e.id);
                                                    setPanel("props");
                                                },
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_LABEL"][e.type],
                                                    CONTENT.includes(e.type) || e.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1 text-xs text-muted",
                                                        children: e.text.slice(0, 14)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 68
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-icon h-8 min-h-8 w-8",
                                                "aria-label": "Naik",
                                                onClick: ()=>move(i, i - 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 125
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-icon h-8 min-h-8 w-8",
                                                "aria-label": "Turun",
                                                onClick: ()=>move(i, i + 1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 126
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-icon h-8 min-h-8 w-8",
                                                "aria-label": e.visible ? "Sembunyikan" : "Tampilkan",
                                                onClick: ()=>upd(e.id, {
                                                        visible: !e.visible
                                                    }),
                                                children: e.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 193
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 213
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-icon h-8 min-h-8 w-8",
                                                "aria-label": "Duplikat",
                                                onClick: ()=>dup(e),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 121
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-ghost btn-icon h-8 min-h-8 w-8 text-danger",
                                                "aria-label": "Hapus",
                                                onClick: ()=>remove(e.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 136
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${panel === "preview" ? "" : "hidden lg:block"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card mb-3 space-y-3 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                                        children: [
                                            [
                                                "58",
                                                "58 mm"
                                            ],
                                            [
                                                "80",
                                                "80 mm"
                                            ],
                                            [
                                                "a4",
                                                "A4"
                                            ],
                                            [
                                                "custom",
                                                "Custom"
                                            ]
                                        ].map(([k, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "chip justify-center",
                                                "data-active": draft.paper.size === k,
                                                onClick: ()=>setDraft({
                                                        ...draft,
                                                        paper: {
                                                            ...draft.paper,
                                                            size: k
                                                        }
                                                    }),
                                                children: l
                                            }, k, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 168,
                                                columnNumber: 130
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    draft.paper.size === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        label: `Lebar custom: ${draft.paper.customMm} mm`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: 30,
                                            max: 300,
                                            className: "w-full accent-[var(--brand)]",
                                            value: draft.paper.customMm,
                                            onChange: (e)=>setDraft({
                                                    ...draft,
                                                    paper: {
                                                        ...draft.paper,
                                                        customMm: Number(e.target.value)
                                                    }
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                            lineNumber: 170,
                                            columnNumber: 105
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 170,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "input w-auto",
                                                value: doc,
                                                onChange: (e)=>setDoc(e.target.value),
                                                "aria-label": "Jenis dokumen",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "sale",
                                                        children: "Struk penjualan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "packing",
                                                        children: "Packing slip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 62
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "dp",
                                                        children: "Struk DP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 107
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "return",
                                                        children: "Struk retur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 143
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "settlement",
                                                        children: "Pelunasan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 186
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "num text-xs text-muted",
                                                children: [
                                                    widthMm,
                                                    " × ≈",
                                                    heightMm,
                                                    " mm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-auto rounded-2xl bg-surface2 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-fit",
                                    ref: previewRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$ReceiptView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReceiptView"], {
                                        template: draft,
                                        data: data,
                                        widthMm: widthMm,
                                        marginMm: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `card max-h-[80dvh] space-y-3 overflow-y-auto p-3 ${panel === "props" ? "" : "hidden lg:block"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold",
                                children: el ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_LABEL"][el.type] : "Properti"
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            !el ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: "Pilih elemen di daftar untuk mengubah propertinya."
                            }, void 0, false, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 188,
                                columnNumber: 18
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    (CONTENT.includes(el.type) || LABELED.includes(el.type) || ROW.includes(el.type)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        label: CONTENT.includes(el.type) ? el.type === "title" ? "Teks judul (kosong = otomatis)" : el.type === "footer" ? "Teks footer (kosong = footer toko)" : "Teks" : "Label",
                                        children: el.type === "text" || el.type === "footer" || el.type === "thanks" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "input",
                                            rows: 3,
                                            value: el.text,
                                            onChange: (e)=>set({
                                                    text: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                            lineNumber: 192,
                                            columnNumber: 89
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "input",
                                            value: el.text,
                                            onChange: (e)=>set({
                                                    text: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                            lineNumber: 192,
                                            columnNumber: 195
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    LABELED.includes(el.type) && el.type !== "note" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                        checked: el.showLabel,
                                        onChange: (v)=>set({
                                                showLabel: v
                                            }),
                                        label: "Tampilkan label"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 195,
                                        columnNumber: 67
                                    }, this),
                                    (el.type === "barcode" || el.type === "qr") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                                label: "Sumber nilai",
                                                value: el.codeSource,
                                                onChange: (v)=>set({
                                                        codeSource: v
                                                    }),
                                                options: [
                                                    [
                                                        "number",
                                                        "Nomor struk"
                                                    ],
                                                    [
                                                        "custom",
                                                        "Teks kustom"
                                                    ]
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            el.codeSource === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "Nilai / URL",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    value: el.text,
                                                    onChange: (e)=>set({
                                                            text: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 77
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 199,
                                                columnNumber: 50
                                            }, this),
                                            el.type === "barcode" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Tinggi barcode",
                                                value: el.barcodeHeight,
                                                min: 24,
                                                max: 120,
                                                onChange: (v)=>set({
                                                        barcodeHeight: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 200,
                                                columnNumber: 44
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Ukuran QR",
                                                value: el.qrSize,
                                                min: 60,
                                                max: 200,
                                                onChange: (v)=>set({
                                                        qrSize: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 200,
                                                columnNumber: 165
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    el.type === "logo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                        label: "Ukuran logo",
                                        value: el.logoSize,
                                        min: 24,
                                        max: 200,
                                        onChange: (v)=>set({
                                                logoSize: v
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 203,
                                        columnNumber: 38
                                    }, this),
                                    el.type === "signature" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted",
                                        children: "Teks = keterangan di bawah garis tanda tangan."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 204,
                                        columnNumber: 43
                                    }, this),
                                    el.type === "divider" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                        label: "Gaya garis",
                                        value: el.dividerStyle,
                                        onChange: (v)=>set({
                                                dividerStyle: v
                                            }),
                                        options: [
                                            [
                                                "dashed",
                                                "Putus-putus"
                                            ],
                                            [
                                                "dotted",
                                                "Titik"
                                            ],
                                            [
                                                "solid",
                                                "Solid"
                                            ],
                                            [
                                                "double",
                                                "Ganda"
                                            ],
                                            [
                                                "thick",
                                                "Tebal"
                                            ],
                                            [
                                                "stars",
                                                "Bintang ***"
                                            ],
                                            [
                                                "equals",
                                                "Sama dengan ==="
                                            ]
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 205,
                                        columnNumber: 41
                                    }, this),
                                    el.type === "items" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                                label: "Layout item",
                                                value: el.itemLayout,
                                                onChange: (v)=>set({
                                                        itemLayout: v
                                                    }),
                                                options: [
                                                    [
                                                        "stacked",
                                                        "Bertumpuk"
                                                    ],
                                                    [
                                                        "inline",
                                                        "Satu baris (qty depan)"
                                                    ],
                                                    [
                                                        "table",
                                                        "Tabel"
                                                    ],
                                                    [
                                                        "compact",
                                                        "Ringkas"
                                                    ],
                                                    [
                                                        "detailed",
                                                        "Detail"
                                                    ]
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.showCode,
                                                onChange: (v)=>set({
                                                        showCode: v
                                                    }),
                                                label: "Kode item (SKU)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.showQty,
                                                onChange: (v)=>set({
                                                        showQty: v
                                                    }),
                                                label: "Kuantitas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.showUnitPrice,
                                                onChange: (v)=>set({
                                                        showUnitPrice: v
                                                    }),
                                                label: "Harga satuan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.showNote,
                                                onChange: (v)=>set({
                                                        showNote: v
                                                    }),
                                                label: "Catatan item"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this),
                                    el.type !== "spacer" && el.type !== "divider" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "pt-1 text-xs font-semibold uppercase tracking-wide text-muted",
                                                children: "Teks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                                label: "Font",
                                                value: el.font,
                                                onChange: (v)=>set({
                                                        font: v
                                                    }),
                                                options: [
                                                    [
                                                        "mono",
                                                        "Monospace"
                                                    ],
                                                    [
                                                        "sans",
                                                        "Sans-serif"
                                                    ],
                                                    [
                                                        "serif",
                                                        "Serif"
                                                    ]
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Ukuran font",
                                                value: el.size,
                                                min: 7,
                                                max: 36,
                                                step: 0.5,
                                                onChange: (v)=>set({
                                                        size: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                                label: "Ketebalan",
                                                value: el.weight,
                                                onChange: (v)=>set({
                                                        weight: v
                                                    }),
                                                options: [
                                                    [
                                                        400,
                                                        "Normal"
                                                    ],
                                                    [
                                                        500,
                                                        "Medium"
                                                    ],
                                                    [
                                                        700,
                                                        "Tebal"
                                                    ],
                                                    [
                                                        900,
                                                        "Sangat tebal"
                                                    ]
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "Rata",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Segmented"], {
                                                    value: el.align,
                                                    onChange: (v)=>set({
                                                            align: v
                                                        }),
                                                    options: [
                                                        {
                                                            value: "left",
                                                            label: "Kiri"
                                                        },
                                                        {
                                                            value: "center",
                                                            label: "Tengah"
                                                        },
                                                        {
                                                            value: "right",
                                                            label: "Kanan"
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 39
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.italic,
                                                onChange: (v)=>set({
                                                        italic: v
                                                    }),
                                                label: "Miring"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.uppercase,
                                                onChange: (v)=>set({
                                                        uppercase: v
                                                    }),
                                                label: "HURUF KAPITAL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.invert,
                                                onChange: (v)=>set({
                                                        invert: v
                                                    }),
                                                label: "Teks putih di blok hitam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toggle"], {
                                                checked: el.big,
                                                onChange: (v)=>set({
                                                        big: v
                                                    }),
                                                label: "Teks 2× di printer thermal",
                                                hint: "Berlaku pada ESC/POS/PDF/gambar."
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Jarak huruf",
                                                value: el.letterSpacing,
                                                min: 0,
                                                max: 6,
                                                step: 0.5,
                                                onChange: (v)=>set({
                                                        letterSpacing: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Spasi baris",
                                                value: el.lineHeight,
                                                min: 1,
                                                max: 2.2,
                                                step: 0.05,
                                                onChange: (v)=>set({
                                                        lineHeight: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "pt-1 text-xs font-semibold uppercase tracking-wide text-muted",
                                        children: "Tata letak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                        label: "Margin atas",
                                        value: el.marginTop,
                                        max: 60,
                                        onChange: (v)=>set({
                                                marginTop: v
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    el.type !== "spacer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                        label: "Margin bawah",
                                        value: el.marginBottom,
                                        max: 60,
                                        onChange: (v)=>set({
                                                marginBottom: v
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 233,
                                        columnNumber: 40
                                    }, this),
                                    el.type !== "spacer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Padding vertikal",
                                                value: el.paddingY,
                                                max: 30,
                                                onChange: (v)=>set({
                                                        paddingY: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Padding horizontal",
                                                value: el.paddingX,
                                                max: 30,
                                                onChange: (v)=>set({
                                                        paddingX: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Num, {
                                                label: "Lebar elemen (%)",
                                                value: el.widthPct,
                                                min: 10,
                                                max: 100,
                                                onChange: (v)=>set({
                                                        widthPct: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sel, {
                                                label: "Border",
                                                value: el.border,
                                                onChange: (v)=>set({
                                                        border: v
                                                    }),
                                                options: [
                                                    [
                                                        "none",
                                                        "Tanpa"
                                                    ],
                                                    [
                                                        "solid",
                                                        "Solid"
                                                    ],
                                                    [
                                                        "dashed",
                                                        "Putus"
                                                    ],
                                                    [
                                                        "dotted",
                                                        "Titik"
                                                    ],
                                                    [
                                                        "double",
                                                        "Ganda"
                                                    ]
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                open: addOpen,
                onClose: ()=>setAddOpen(false),
                title: "Tambah elemen",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADDABLE_ELEMENTS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn justify-start",
                            onClick: ()=>add(t),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 15,
                                    className: "text-brand"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                                    lineNumber: 249,
                                    columnNumber: 109
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$receipt$2d$renderer$2f$elements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ELEMENT_LABEL"][t]
                            ]
                        }, t, true, {
                            fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                            lineNumber: 249,
                            columnNumber: 40
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/receipt-studio/TemplateBuilder.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
];})()

//# sourceMappingURL=src_features_07enfp2tfosg_._.js.map
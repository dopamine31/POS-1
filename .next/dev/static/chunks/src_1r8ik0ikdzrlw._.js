(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BarChart({ data, format, height = 140 }) {
    const max = Math.max(1, ...data.map((d)=>d.value));
    const n = data.length || 1;
    const bw = 100 / n;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 100 ${height / 4}`,
                preserveAspectRatio: "none",
                width: "100%",
                height: height,
                role: "img",
                "aria-label": "Grafik penjualan",
                children: [
                    [
                        0.25,
                        0.5,
                        0.75
                    ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 0,
                            x2: 100,
                            y1: height / 4 * g,
                            y2: height / 4 * g,
                            stroke: "var(--line)",
                            strokeWidth: 0.3,
                            vectorEffect: "non-scaling-stroke"
                        }, g, false, {
                            fileName: "[project]/src/components/charts.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)),
                    data.map((d, i)=>{
                        const h = d.value / max * (height / 4 - 2);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: i * bw + bw * 0.15,
                            y: height / 4 - h,
                            width: bw * 0.7,
                            height: Math.max(h, d.value > 0 ? 0.6 : 0),
                            rx: 0.8,
                            fill: "var(--brand)",
                            opacity: d.value > 0 ? 1 : 0.2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: `${d.label}: ${format(d.value)}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/charts.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this)
                        }, d.label + i, false, {
                            fileName: "[project]/src/components/charts.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex justify-between text-[10px] text-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data[0]?.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "puncak ",
                            format(max)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data[data.length - 1]?.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/charts.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/charts.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/charts.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = BarChart;
var _c;
__turbopack_context__.k.register(_c, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/dashboard/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.mjs [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/charts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reports.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/payment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$transactions$2f$TransactionsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/transactions/TransactionsPage.tsx [app-client] (ecmascript)");
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
;
;
function Dashboard() {
    _s();
    const { store, cashier, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const now = Date.now();
    const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Dashboard.useLiveQuery[week]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.where("createdAt").between((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(now - 6 * 86400000), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(now), true, true).filter({
                "Dashboard.useLiveQuery[week]": (t)=>t.storeId === store.id
            }["Dashboard.useLiveQuery[week]"]).toArray()
    }["Dashboard.useLiveQuery[week]"], [
        store.id
    ]);
    const today = (week ?? []).filter((t)=>t.createdAt >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(now));
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarize"])(today);
    const sw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarize"])(week ?? []);
    const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reports$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillDays"])(sw.daily, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(now - 6 * 86400000), now).map((d)=>({
            label: d.day.slice(5),
            value: d.total
        }));
    const recent = [
        ...week ?? []
    ].sort((a, b)=>b.createdAt - a.createdAt).slice(0, 5);
    const payEntries = Object.entries(s.payments).filter(([, v])=>v > 0);
    const payTotal = payEntries.reduce((a, [, v])=>a + v, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Dashboard",
                subtitle: new Date().toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }),
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/pos",
                    className: "btn btn-primary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                            lineNumber: 34,
                            columnNumber: 211
                        }, this),
                        " Buka Kasir"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                    lineNumber: 34,
                    columnNumber: 165
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                size: 15,
                                className: "text-muted"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 37,
                                columnNumber: 53
                            }, this),
                            " ",
                            store.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 15,
                                className: "text-muted"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 38,
                                columnNumber: 53
                            }, this),
                            " ",
                            cashier.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnlineBadge"], {}, void 0, false, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/install",
                        className: "ml-auto flex items-center gap-1 text-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 40,
                                columnNumber: 86
                            }, this),
                            " Install aplikasi"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            !week ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 lg:grid-cols-3",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-24"
                    }, i, false, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 44,
                        columnNumber: 86
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card col-span-2 p-4 lg:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-medium text-muted",
                                children: "Penjualan hari ini"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num mt-1 text-3xl font-bold tracking-tight",
                                children: fmt(s.sales)
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-medium text-muted",
                                children: "Transaksi"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 51,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num mt-1 text-2xl font-bold",
                                children: s.count
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 51,
                                columnNumber: 100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-medium text-muted",
                                children: "Rata-rata"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 52,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num mt-1 text-2xl font-bold",
                                children: fmt(s.average)
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 52,
                                columnNumber: 100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card p-4 lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Penjualan 7 hari terakhir"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            sw.count === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 47
                                }, this),
                                title: "Belum ada penjualan",
                                hint: "Grafik muncul setelah transaksi pertama.",
                                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "btn btn-primary",
                                    href: "/pos",
                                    children: "Mulai berjualan"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 154
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 59,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: chart,
                                format: fmt
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 59,
                                columnNumber: 229
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Metode pembayaran (hari ini)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            payEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-6 text-center text-sm text-muted",
                                children: "Belum ada pembayaran."
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 63,
                                columnNumber: 38
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3",
                                children: payEntries.map(([m, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][m]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 70
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "num font-medium",
                                                        children: fmt(v)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 101
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 rounded-full bg-surface2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full bg-brand",
                                                    style: {
                                                        width: `${v / payTotal * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 67
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, m, true, {
                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-2 text-sm font-semibold",
                                children: "Produk terlaris (7 hari)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            sw.topProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-6 text-center text-sm text-muted",
                                children: "Belum ada data."
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 79,
                                columnNumber: 42
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "divide-y divide-line",
                                children: sw.topProducts.slice(0, 5).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between py-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "num grid h-6 w-6 place-items-center rounded-lg bg-surface2 text-xs font-semibold",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 135
                                                    }, this),
                                                    p.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 82,
                                                columnNumber: 93
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "num text-muted",
                                                children: [
                                                    p.qty,
                                                    " terjual"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 82,
                                                columnNumber: 263
                                            }, this)
                                        ]
                                    }, p.name, true, {
                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold",
                                        children: "Transaksi terbaru"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 67
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/transactions",
                                        className: "flex items-center gap-1 text-xs text-brand",
                                        children: [
                                            "Semua ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 88,
                                                columnNumber: 215
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "py-6 text-center text-sm text-muted",
                                children: "Belum ada transaksi."
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 89,
                                columnNumber: 34
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y divide-line",
                                children: recent.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between gap-2 py-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "num font-medium",
                                                        children: t.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtTime"])(t.createdAt),
                                                            " · ",
                                                            t.cashierName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 73
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "num font-semibold",
                                                        children: fmt(t.total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 47
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$transactions$2f$TransactionsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_CLASS"][t.status]}`,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$transactions$2f$TransactionsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_LABEL"][t.status]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 102
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/Dashboard.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/dashboard/Dashboard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "YFP1NmI4kI1pdr5NwL36VWUBtgE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
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
"[project]/src/features/transactions/TransactionsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATUS_CLASS",
    ()=>STATUS_CLASS,
    "STATUS_LABEL",
    ()=>STATUS_LABEL,
    "TransactionsPage",
    ()=>TransactionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.mjs [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy-plus.mjs [app-client] (ecmascript) <export default as CopyPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.mjs [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.mjs [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/payment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$ReceiptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/printer/ReceiptModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
const STATUS_LABEL = {
    completed: "Lunas",
    dp: "DP",
    cancelled: "Dibatalkan",
    refunded: "Diretur"
};
const STATUS_CLASS = {
    completed: "badge-ok",
    dp: "badge-warn",
    cancelled: "badge-muted",
    refunded: "badge-bad"
};
function TransactionsPage() {
    _s();
    const { store, cashiers, cashier, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { prompt, confirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"])();
    const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "TransactionsPage.useLiveQuery[all]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].transactions.where("storeId").equals(store.id).toArray()
    }["TransactionsPage.useLiveQuery[all]"], [
        store.id
    ]);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cashierF, setCashierF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [payF, setPayF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [statusF, setStatusF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [receipt, setReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [settle, setSettle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransactionsPage.useMemo[list]": ()=>{
            const s = q.trim().toLowerCase();
            const f = from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseInputDate"])(from) : 0;
            const t = to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseInputDate"])(to, true) : Infinity;
            return (all ?? []).filter({
                "TransactionsPage.useMemo[list]": (x)=>(!s || x.number.toLowerCase().includes(s) || x.customer.toLowerCase().includes(s)) && x.createdAt >= f && x.createdAt <= t && (cashierF === "all" || x.cashierId === cashierF) && (payF === "all" || x.payments.some({
                        "TransactionsPage.useMemo[list]": (p)=>p.method === payF
                    }["TransactionsPage.useMemo[list]"])) && (statusF === "all" || x.status === statusF)
            }["TransactionsPage.useMemo[list]"]).sort({
                "TransactionsPage.useMemo[list]": (a, b)=>b.createdAt - a.createdAt
            }["TransactionsPage.useMemo[list]"]);
        }
    }["TransactionsPage.useMemo[list]"], [
        all,
        q,
        from,
        to,
        cashierF,
        payF,
        statusF
    ]);
    const open = (all ?? []).find((x)=>x.id === openId) ?? null;
    const act = async (fn, ok)=>{
        try {
            await fn();
            toast(ok, "success");
        } catch (e) {
            toast(e instanceof Error ? e.message : "Gagal", "error");
        }
    };
    const duplicate = (tx)=>{
        localStorage.setItem(`cart:${store.id}`, JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cartFromTransaction"])(tx, store)));
        toast("Item disalin ke keranjang kasir", "success");
        router.push("/pos");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Transaksi",
                subtitle: all ? `${list.length} dari ${all.length} transaksi` : " "
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card mb-4 space-y-3 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 17,
                                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                            }, void 0, false, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "input pl-9",
                                placeholder: "Cari nomor transaksi atau pelanggan…",
                                value: q,
                                onChange: (e)=>setQ(e.target.value),
                                "aria-label": "Cari transaksi"
                            }, void 0, false, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 md:grid-cols-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "input",
                                value: from,
                                onChange: (e)=>setFrom(e.target.value),
                                "aria-label": "Dari tanggal"
                            }, void 0, false, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "input",
                                value: to,
                                onChange: (e)=>setTo(e.target.value),
                                "aria-label": "Sampai tanggal"
                            }, void 0, false, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "input",
                                value: cashierF,
                                onChange: (e)=>setCashierF(e.target.value),
                                "aria-label": "Kasir",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Semua kasir"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    cashiers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                            lineNumber: 82,
                                            columnNumber: 34
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "input",
                                value: payF,
                                onChange: (e)=>setPayF(e.target.value),
                                "aria-label": "Pembayaran",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Semua pembayaran"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][m]
                                        }, m, false, {
                                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                            lineNumber: 86,
                                            columnNumber: 41
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "input col-span-2 md:col-span-1",
                                value: statusF,
                                onChange: (e)=>setStatusF(e.target.value),
                                "aria-label": "Status",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Semua status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    Object.keys(STATUS_LABEL).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s,
                                            children: STATUS_LABEL[s]
                                        }, s, false, {
                                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                            lineNumber: 90,
                                            columnNumber: 67
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            !all ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-16"
                    }, i, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 96,
                        columnNumber: 58
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this) : list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 98,
                        columnNumber: 49
                    }, this),
                    title: all.length ? "Tidak ada transaksi yang cocok" : "Belum ada transaksi",
                    hint: all.length ? "Ubah filter pencarian." : "Transaksi dari menu Kasir akan muncul di sini."
                }, void 0, false, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 98,
                    columnNumber: 31
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "card divide-y divide-line overflow-hidden",
                children: list.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex w-full items-center justify-between gap-3 p-3 text-left active:bg-surface2",
                            onClick: ()=>setOpenId(t.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "num truncate text-sm font-semibold",
                                                    children: t.number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `badge ${STATUS_CLASS[t.status]}`,
                                                    children: STATUS_LABEL[t.status]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "truncate text-xs text-muted",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDateTime"])(t.createdAt),
                                                " · ",
                                                t.cashierName,
                                                t.customer ? ` · ${t.customer}` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `num text-sm font-semibold ${t.status === "cancelled" || t.status === "refunded" ? "text-muted line-through" : ""}`,
                                    children: fmt(t.total)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    }, t.id, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                open: !!open,
                onClose: ()=>setOpenId(null),
                title: open ? `Transaksi ${open.number}` : "",
                size: "lg",
                footer: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary sm:flex-1",
                            onClick: ()=>setReceipt(open),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 121,
                                    columnNumber: 92
                                }, this),
                                " Cetak ulang"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn sm:flex-1",
                            onClick: ()=>duplicate(open),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyPlus$3e$__["CopyPlus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 122,
                                    columnNumber: 79
                                }, this),
                                " Duplikat"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        open.status === "dp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn sm:flex-1",
                            onClick: ()=>setSettle(open),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 123,
                                    columnNumber: 104
                                }, this),
                                " Lunasi"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 123,
                            columnNumber: 38
                        }, this),
                        open.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn sm:flex-1",
                            onClick: async ()=>{
                                const r = await prompt({
                                    title: "Retur / refund transaksi",
                                    label: "Alasan retur",
                                    required: true,
                                    multiline: true,
                                    confirmText: "Proses retur"
                                });
                                if (r) await act(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refundTransaction"])(open.id, r, cashier.name), "Transaksi diretur");
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 128,
                                    columnNumber: 18
                                }, this),
                                " Retur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this),
                        (open.status === "completed" || open.status === "dp") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn text-danger sm:flex-1",
                            onClick: async ()=>{
                                const r = await prompt({
                                    title: "Batalkan transaksi",
                                    label: "Alasan pembatalan",
                                    required: true,
                                    multiline: true,
                                    confirmText: "Batalkan transaksi"
                                });
                                if (r && await confirm({
                                    title: "Yakin membatalkan?",
                                    message: "Transaksi tidak dihapus, hanya ditandai dibatalkan dan tercatat di audit log.",
                                    danger: true,
                                    confirmText: "Ya, batalkan"
                                })) await act(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelTransaction"])(open.id, r, cashier.name), "Transaksi dibatalkan");
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                    lineNumber: 134,
                                    columnNumber: 18
                                }, this),
                                " Batalkan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                    tx: open
                }, void 0, false, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 139,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$printer$2f$ReceiptModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReceiptModal"], {
                tx: receipt && (all ?? []).find((x)=>x.id === receipt.id) ? (all ?? []).find((x)=>x.id === receipt.id) : receipt,
                onClose: ()=>setReceipt(null)
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            settle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettleModal, {
                tx: settle,
                onClose: ()=>setSettle(null),
                onDone: (t)=>{
                    setSettle(null);
                    setReceipt(t);
                }
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 143,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(TransactionsPage, "sov3BnL5/bEKS2RmmL/GjFdVioU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c = TransactionsPage;
function Detail({ tx }) {
    _s1();
    const { fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const logs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Detail.useLiveQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].audit.where("entity").equals("transaction").toArray()).filter({
                "Detail.useLiveQuery": (l)=>l.entityId === tx.id
            }["Detail.useLiveQuery"]).reverse()
    }["Detail.useLiveQuery"], [
        tx.id
    ]) ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `badge ${STATUS_CLASS[tx.status]}`,
                        children: STATUS_LABEL[tx.status]
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-muted",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDateTime"])(tx.createdAt),
                            " · Kasir ",
                            tx.cashierName,
                            tx.customer ? ` · ${tx.customer}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "divide-y divide-line rounded-xl border border-line",
                children: tx.items.map((i, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex justify-between gap-3 px-3 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: i.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                        lineNumber: 160,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "num text-xs text-muted",
                                        children: [
                                            i.qty,
                                            " × ",
                                            fmt(i.price),
                                            i.note ? ` · ${i.note}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                        lineNumber: 160,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "num font-medium",
                                children: fmt(i.total)
                            }, void 0, false, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k, true, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Subtotal",
                        v: fmt(tx.subtotal)
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    tx.discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Diskon",
                        v: "-" + fmt(tx.discountAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 167,
                        columnNumber: 35
                    }, this),
                    tx.taxAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: `${tx.taxName} ${tx.taxRate}%`,
                        v: fmt(tx.taxAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 168,
                        columnNumber: 30
                    }, this),
                    tx.feeAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Biaya tambahan",
                        v: fmt(tx.feeAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 169,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Total",
                        v: fmt(tx.total),
                        b: true
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    tx.payments.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                            l: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][p.method],
                            v: fmt(p.amount)
                        }, i, false, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 171,
                            columnNumber: 36
                        }, this)),
                    tx.change > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Kembalian",
                        v: fmt(tx.change)
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 172,
                        columnNumber: 27
                    }, this),
                    tx.balance > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                        l: "Sisa tagihan",
                        v: fmt(tx.balance),
                        b: true
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 173,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            tx.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl bg-surface2 p-3 text-sm",
                children: [
                    "Catatan: ",
                    tx.note
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 175,
                columnNumber: 19
            }, this),
            (tx.cancelReason || tx.refundReason) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl bg-dangersoft p-3 text-sm text-danger",
                children: tx.cancelReason ? `Dibatalkan: ${tx.cancelReason}` : `Diretur: ${tx.refundReason}`
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 176,
                columnNumber: 48
            }, this),
            logs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "label",
                        children: "Audit log"
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1 text-xs text-muted",
                        children: logs.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtDateTime"])(l.at),
                                    " · ",
                                    l.action,
                                    " · ",
                                    l.actor
                                ]
                            }, l.id, true, {
                                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                                lineNumber: 180,
                                columnNumber: 73
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s1(Detail, "fxEvsgYjQzbFQKL1vI59vVYmTJE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c1 = Detail;
function Row({ l, v, b }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-between ${b ? "text-base font-bold" : "text-sm"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: b ? "" : "text-muted",
                children: l
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 189,
                columnNumber: 86
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "num",
                children: v
            }, void 0, false, {
                fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                lineNumber: 189,
                columnNumber: 136
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c2 = Row;
function SettleModal({ tx, onClose, onDone }) {
    _s2();
    const { store, cashier, fmt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cash");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tx.balance);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        open: true,
        onClose: onClose,
        title: `Pelunasan ${tx.number}`,
        size: "sm",
        footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-primary flex-1",
            disabled: busy || amount < tx.balance,
            onClick: async ()=>{
                setBusy(true);
                try {
                    onDone(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settleTransaction"])(tx.id, [
                        {
                            method,
                            amount
                        }
                    ], cashier.name));
                    toast("Transaksi dilunasi", "success");
                } catch (e) {
                    toast(e instanceof Error ? e.message : "Gagal", "error");
                    setBusy(false);
                }
            },
            children: [
                "Lunasi ",
                fmt(tx.balance)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
            lineNumber: 201,
            columnNumber: 7
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl bg-warningsoft p-3 text-center text-warning",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs",
                            children: "Sisa tagihan"
                        }, void 0, false, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 208,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "num text-2xl font-bold",
                            children: fmt(tx.balance)
                        }, void 0, false, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 208,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "input",
                    value: method,
                    onChange: (e)=>setMethod(e.target.value),
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_METHODS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: m,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$payment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_LABEL"][m]
                        }, m, false, {
                            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                            lineNumber: 209,
                            columnNumber: 139
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoneyInput"], {
                    value: amount,
                    onChange: setAmount,
                    currency: store.currency
                }, void 0, false, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                amount > tx.balance && method === "cash" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-success",
                    children: [
                        "Kembalian ",
                        fmt(amount - tx.balance)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 211,
                    columnNumber: 54
                }, this),
                amount < tx.balance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-danger",
                    children: "Nominal kurang dari sisa tagihan."
                }, void 0, false, {
                    fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
                    lineNumber: 212,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/transactions/TransactionsPage.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s2(SettleModal, "FKfC4X4IPg0SQm8lbtimQ/gbwAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c3 = SettleModal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TransactionsPage");
__turbopack_context__.k.register(_c1, "Detail");
__turbopack_context__.k.register(_c2, "Row");
__turbopack_context__.k.register(_c3, "SettleModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/reports.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillDays",
    ()=>fillDays,
    "summarize",
    ()=>summarize,
    "toCsv",
    ()=>toCsv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helpers.ts [app-client] (ecmascript)");
;
const zeroPay = ()=>({
        cash: 0,
        qris: 0,
        debit: 0,
        transfer: 0,
        ewallet: 0
    });
function summarize(txs) {
    const s = {
        sales: 0,
        count: 0,
        average: 0,
        discount: 0,
        tax: 0,
        fee: 0,
        refundTotal: 0,
        refundCount: 0,
        cancelledTotal: 0,
        cancelledCount: 0,
        dpCount: 0,
        dpOutstanding: 0,
        payments: zeroPay(),
        topProducts: [],
        daily: []
    };
    const prod = new Map();
    const days = new Map();
    for (const t of txs){
        if (t.status === "cancelled") {
            s.cancelledCount++;
            s.cancelledTotal += t.total;
            continue;
        }
        if (t.status === "refunded") {
            s.refundCount++;
            s.refundTotal += t.total;
            continue;
        }
        if (t.status === "dp") {
            s.dpCount++;
            s.dpOutstanding += t.balance;
        }
        for (const p of t.payments)s.payments[p.method] += p.amount;
        if (t.status !== "completed") continue;
        s.count++;
        s.sales += t.total;
        s.discount += t.discountAmount;
        s.tax += t.taxAmount;
        s.fee += t.feeAmount;
        for (const i of t.items){
            const k = i.productId || i.name;
            const cur = prod.get(k) ?? {
                name: i.name,
                qty: 0,
                revenue: 0
            };
            cur.qty += i.qty;
            cur.revenue += i.total;
            prod.set(k, cur);
        }
        const dk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKey"])(t.createdAt);
        const d = days.get(dk) ?? {
            total: 0,
            count: 0
        };
        d.total += t.total;
        d.count++;
        days.set(dk, d);
    }
    s.average = s.count ? Math.round(s.sales / s.count) : 0;
    s.topProducts = [
        ...prod.values()
    ].sort((a, b)=>b.qty - a.qty || b.revenue - a.revenue).slice(0, 10);
    s.daily = [
        ...days.entries()
    ].sort((a, b)=>a[0].localeCompare(b[0])).map(([day, v])=>({
            day,
            ...v
        }));
    return s;
}
function fillDays(daily, from, to) {
    const map = new Map(daily.map((d)=>[
            d.day,
            d
        ]));
    const out = [];
    const cur = new Date(from);
    cur.setHours(0, 0, 0, 0);
    let guard = 0;
    while(cur.getTime() <= to && guard++ < 400){
        const k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKey"])(cur.getTime());
        out.push(map.get(k) ?? {
            day: k,
            total: 0,
            count: 0
        });
        cur.setDate(cur.getDate() + 1);
    }
    return out;
}
function toCsv(rows) {
    return rows.map((r)=>r.map((c)=>`"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
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

//# sourceMappingURL=src_1r8ik0ikdzrlw._.js.map
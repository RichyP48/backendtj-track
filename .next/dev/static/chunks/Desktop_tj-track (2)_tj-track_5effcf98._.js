(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/tj-track (2)/tj-track/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/hooks/use-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryKeys",
    ()=>queryKeys,
    "useAddRole",
    ()=>useAddRole,
    "useAjouterArticleMerchant",
    ()=>useAjouterArticleMerchant,
    "useAjouterArticleSupplier",
    ()=>useAjouterArticleSupplier,
    "useAjouterAuPanier",
    ()=>useAjouterAuPanier,
    "useAjouterProduitMerchant",
    ()=>useAjouterProduitMerchant,
    "useAjusterStock",
    ()=>useAjusterStock,
    "useAjusterStockArticle",
    ()=>useAjusterStockArticle,
    "useAjusterStockMerchant",
    ()=>useAjusterStockMerchant,
    "useAjusterStockSupplier",
    ()=>useAjusterStockSupplier,
    "useAllCategories",
    ()=>useAllCategories,
    "useAllUsers",
    ()=>useAllUsers,
    "useApproveUser",
    ()=>useApproveUser,
    "useArticle",
    ()=>useArticle,
    "useArticles",
    ()=>useArticles,
    "useArticlesByCategorie",
    ()=>useArticlesByCategorie,
    "useArticlesPopulaires",
    ()=>useArticlesPopulaires,
    "useBannierePrincipale",
    ()=>useBannierePrincipale,
    "useCalculerTarif",
    ()=>useCalculerTarif,
    "useCarrouselAccueil",
    ()=>useCarrouselAccueil,
    "useCatalogue",
    ()=>useCatalogue,
    "useCategorie",
    ()=>useCategorie,
    "useCategories",
    ()=>useCategories,
    "useChiffreAffaires",
    ()=>useChiffreAffaires,
    "useClient",
    ()=>useClient,
    "useClients",
    ()=>useClients,
    "useCommandeClient",
    ()=>useCommandeClient,
    "useCommandeClientByCode",
    ()=>useCommandeClientByCode,
    "useCommandeClientLignes",
    ()=>useCommandeClientLignes,
    "useCommandeFournisseur",
    ()=>useCommandeFournisseur,
    "useCommandeFournisseurByCode",
    ()=>useCommandeFournisseurByCode,
    "useCommandeFournisseurLignes",
    ()=>useCommandeFournisseurLignes,
    "useCommandesClient",
    ()=>useCommandesClient,
    "useCommandesFournisseur",
    ()=>useCommandesFournisseur,
    "useCommandesMerchant",
    ()=>useCommandesMerchant,
    "useCreateArticle",
    ()=>useCreateArticle,
    "useCreateCategorie",
    ()=>useCreateCategorie,
    "useCreateClient",
    ()=>useCreateClient,
    "useCreateCommandeClient",
    ()=>useCreateCommandeClient,
    "useCreateEntreprise",
    ()=>useCreateEntreprise,
    "useCreateFournisseur",
    ()=>useCreateFournisseur,
    "useCreateVente",
    ()=>useCreateVente,
    "useCreerCampagne",
    ()=>useCreerCampagne,
    "useCreerCommande",
    ()=>useCreerCommande,
    "useDeleteArticle",
    ()=>useDeleteArticle,
    "useDeleteCategorie",
    ()=>useDeleteCategorie,
    "useDeleteClient",
    ()=>useDeleteClient,
    "useDeleteCommandeClient",
    ()=>useDeleteCommandeClient,
    "useDeleteCommandeFournisseur",
    ()=>useDeleteCommandeFournisseur,
    "useDeleteEntreprise",
    ()=>useDeleteEntreprise,
    "useDeleteFournisseur",
    ()=>useDeleteFournisseur,
    "useDeleteVente",
    ()=>useDeleteVente,
    "useEcommerceStats",
    ()=>useEcommerceStats,
    "useEnregistrerPaiement",
    ()=>useEnregistrerPaiement,
    "useEntreprise",
    ()=>useEntreprise,
    "useEntreprises",
    ()=>useEntreprises,
    "useExpedierCommande",
    ()=>useExpedierCommande,
    "useFavorisProduit",
    ()=>useFavorisProduit,
    "useFournisseur",
    ()=>useFournisseur,
    "useFournisseurs",
    ()=>useFournisseurs,
    "useFournisseursActifs",
    ()=>useFournisseursActifs,
    "useGenererFacture",
    ()=>useGenererFacture,
    "useIncrementerClics",
    ()=>useIncrementerClics,
    "useIncrementerVues",
    ()=>useIncrementerVues,
    "useInventoryDashboard",
    ()=>useInventoryDashboard,
    "useIsAuthenticated",
    ()=>useIsAuthenticated,
    "useLikeProduit",
    ()=>useLikeProduit,
    "useLogin",
    ()=>useLogin,
    "useLowStockArticles",
    ()=>useLowStockArticles,
    "useMerchantArticles",
    ()=>useMerchantArticles,
    "useMerchantCalculerTarif",
    ()=>useMerchantCalculerTarif,
    "useMerchantOrders",
    ()=>useMerchantOrders,
    "useMerchantProduits",
    ()=>useMerchantProduits,
    "useMerchantStockFaible",
    ()=>useMerchantStockFaible,
    "useMesCampagnes",
    ()=>useMesCampagnes,
    "useModifierPanier",
    ()=>useModifierPanier,
    "useModifierVisibiliteProduit",
    ()=>useModifierVisibiliteProduit,
    "useMouvementsByArticle",
    ()=>useMouvementsByArticle,
    "useMouvementsByPeriode",
    ()=>useMouvementsByPeriode,
    "useMouvementsStock",
    ()=>useMouvementsStock,
    "useNouveautes",
    ()=>useNouveautes,
    "useOutOfStockArticles",
    ()=>useOutOfStockArticles,
    "usePanier",
    ()=>usePanier,
    "usePayerCommande",
    ()=>usePayerCommande,
    "usePendingUsers",
    ()=>usePendingUsers,
    "useProduitDetail",
    ()=>useProduitDetail,
    "useProduitsEnAvant",
    ()=>useProduitsEnAvant,
    "useProfile",
    ()=>useProfile,
    "usePubliciteProduitsEnAvant",
    ()=>usePubliciteProduitsEnAvant,
    "usePubliciteProduitsEnAvantParType",
    ()=>usePubliciteProduitsEnAvantParType,
    "useRegister",
    ()=>useRegister,
    "useRegisterOtp",
    ()=>useRegisterOtp,
    "useRejectUser",
    ()=>useRejectUser,
    "useReleaseStock",
    ()=>useReleaseStock,
    "useReserveStock",
    ()=>useReserveStock,
    "useResetPassword",
    ()=>useResetPassword,
    "useSearchFournisseurs",
    ()=>useSearchFournisseurs,
    "useSendOtp",
    ()=>useSendOtp,
    "useSendResetOtp",
    ()=>useSendResetOtp,
    "useShipCommandeFournisseur",
    ()=>useShipCommandeFournisseur,
    "useStockStats",
    ()=>useStockStats,
    "useSupplierArticles",
    ()=>useSupplierArticles,
    "useSupplierCommandesMerchants",
    ()=>useSupplierCommandesMerchants,
    "useSupplierOrders",
    ()=>useSupplierOrders,
    "useSupprimerDuPanier",
    ()=>useSupprimerDuPanier,
    "useUnreadAlerts",
    ()=>useUnreadAlerts,
    "useUpdateArticle",
    ()=>useUpdateArticle,
    "useUpdateCategorie",
    ()=>useUpdateCategorie,
    "useUpdateCommandeStatus",
    ()=>useUpdateCommandeStatus,
    "useUpdateFournisseur",
    ()=>useUpdateFournisseur,
    "useVente",
    ()=>useVente,
    "useVenteByCode",
    ()=>useVenteByCode,
    "useVentes",
    ()=>useVentes,
    "useVerifyOtp",
    ()=>useVerifyOtp,
    "useViderPanier",
    ()=>useViderPanier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature(), _s22 = __turbopack_context__.k.signature(), _s23 = __turbopack_context__.k.signature(), _s24 = __turbopack_context__.k.signature(), _s25 = __turbopack_context__.k.signature(), _s26 = __turbopack_context__.k.signature(), _s27 = __turbopack_context__.k.signature(), _s28 = __turbopack_context__.k.signature(), _s29 = __turbopack_context__.k.signature(), _s30 = __turbopack_context__.k.signature(), _s31 = __turbopack_context__.k.signature(), _s32 = __turbopack_context__.k.signature(), _s33 = __turbopack_context__.k.signature(), _s34 = __turbopack_context__.k.signature(), _s35 = __turbopack_context__.k.signature(), _s36 = __turbopack_context__.k.signature(), _s37 = __turbopack_context__.k.signature(), _s38 = __turbopack_context__.k.signature(), _s39 = __turbopack_context__.k.signature(), _s40 = __turbopack_context__.k.signature(), _s41 = __turbopack_context__.k.signature(), _s42 = __turbopack_context__.k.signature(), _s43 = __turbopack_context__.k.signature(), _s44 = __turbopack_context__.k.signature(), _s45 = __turbopack_context__.k.signature(), _s46 = __turbopack_context__.k.signature(), _s47 = __turbopack_context__.k.signature(), _s48 = __turbopack_context__.k.signature(), _s49 = __turbopack_context__.k.signature(), _s50 = __turbopack_context__.k.signature(), _s51 = __turbopack_context__.k.signature(), _s52 = __turbopack_context__.k.signature(), _s53 = __turbopack_context__.k.signature(), _s54 = __turbopack_context__.k.signature(), _s55 = __turbopack_context__.k.signature(), _s56 = __turbopack_context__.k.signature(), _s57 = __turbopack_context__.k.signature(), _s58 = __turbopack_context__.k.signature(), _s59 = __turbopack_context__.k.signature(), _s60 = __turbopack_context__.k.signature(), _s61 = __turbopack_context__.k.signature(), _s62 = __turbopack_context__.k.signature(), _s63 = __turbopack_context__.k.signature(), _s64 = __turbopack_context__.k.signature(), _s65 = __turbopack_context__.k.signature(), _s66 = __turbopack_context__.k.signature(), _s67 = __turbopack_context__.k.signature(), _s68 = __turbopack_context__.k.signature(), _s69 = __turbopack_context__.k.signature(), _s70 = __turbopack_context__.k.signature(), _s71 = __turbopack_context__.k.signature(), _s72 = __turbopack_context__.k.signature(), _s73 = __turbopack_context__.k.signature(), _s74 = __turbopack_context__.k.signature(), _s75 = __turbopack_context__.k.signature(), _s76 = __turbopack_context__.k.signature(), _s77 = __turbopack_context__.k.signature(), _s78 = __turbopack_context__.k.signature(), _s79 = __turbopack_context__.k.signature(), _s80 = __turbopack_context__.k.signature(), _s81 = __turbopack_context__.k.signature(), _s82 = __turbopack_context__.k.signature(), _s83 = __turbopack_context__.k.signature(), _s84 = __turbopack_context__.k.signature(), _s85 = __turbopack_context__.k.signature(), _s86 = __turbopack_context__.k.signature(), _s87 = __turbopack_context__.k.signature(), _s88 = __turbopack_context__.k.signature(), _s89 = __turbopack_context__.k.signature(), _s90 = __turbopack_context__.k.signature(), _s91 = __turbopack_context__.k.signature(), _s92 = __turbopack_context__.k.signature(), _s93 = __turbopack_context__.k.signature(), _s94 = __turbopack_context__.k.signature(), _s95 = __turbopack_context__.k.signature(), _s96 = __turbopack_context__.k.signature(), _s97 = __turbopack_context__.k.signature(), _s98 = __turbopack_context__.k.signature(), _s99 = __turbopack_context__.k.signature(), _s100 = __turbopack_context__.k.signature(), _s101 = __turbopack_context__.k.signature(), _s102 = __turbopack_context__.k.signature(), _s103 = __turbopack_context__.k.signature(), _s104 = __turbopack_context__.k.signature(), _s105 = __turbopack_context__.k.signature(), _s106 = __turbopack_context__.k.signature(), _s107 = __turbopack_context__.k.signature(), _s108 = __turbopack_context__.k.signature(), _s109 = __turbopack_context__.k.signature(), _s110 = __turbopack_context__.k.signature(), _s111 = __turbopack_context__.k.signature(), _s112 = __turbopack_context__.k.signature(), _s113 = __turbopack_context__.k.signature();
"use client";
;
;
const queryKeys = {
    articles: [
        "articles"
    ],
    article: (id)=>[
            "articles",
            id
        ],
    categories: [
        "categories"
    ],
    catalogue: (params)=>[
            "catalogue",
            params
        ],
    produit: (id)=>[
            "produit",
            id
        ],
    panier: (userEmail)=>[
            "panier",
            userEmail
        ],
    lowStock: [
        "lowStock"
    ],
    outOfStock: [
        "outOfStock"
    ],
    alerts: [
        "alerts"
    ],
    stockStats: [
        "stockStats"
    ],
    ecommerceStats: [
        "ecommerceStats"
    ],
    commandesFournisseur: [
        "commandesFournisseur"
    ],
    fournisseurs: [
        "fournisseurs"
    ],
    fournisseursActifs: [
        "fournisseursActifs"
    ],
    mouvements: [
        "mouvements"
    ],
    ventes: [
        "ventes"
    ],
    produitsEnAvant: [
        "produitsEnAvant"
    ],
    carrousel: [
        "carrousel"
    ],
    articlesPopulaires: [
        "articlesPopulaires"
    ],
    nouveautes: [
        "nouveautes"
    ],
    profile: (email)=>[
            "profile",
            email
        ],
    pendingUsers: [
        "pendingUsers"
    ],
    allUsers: [
        "allUsers"
    ],
    clients: [
        "clients"
    ],
    client: (id)=>[
            "clients",
            id
        ],
    entreprises: [
        "entreprises"
    ],
    entreprise: (id)=>[
            "entreprises",
            id
        ],
    commandesClient: [
        "commandesClient"
    ],
    commandeClient: (id)=>[
            "commandesClient",
            id
        ],
    factures: [
        "factures"
    ],
    banniereprincipale: [
        "bannierePrincipale"
    ],
    campagnes: (userId)=>[
            "campagnes",
            userId
        ],
    tarifs: [
        "tarifs"
    ],
    merchantProduits: (userId)=>[
            "merchantProduits",
            userId
        ],
    merchantArticles: (userId)=>[
            "merchantArticles",
            userId
        ],
    supplierArticles: (userId)=>[
            "supplierArticles",
            userId
        ],
    supplierCommandes: (userId)=>[
            "supplierCommandes",
            userId
        ],
    fournisseurOrders: (id)=>[
            "fournisseurOrders",
            id
        ],
    merchantOrders: (id)=>[
            "merchantOrders",
            id
        ],
    commandeFournisseurLignes: (id)=>[
            "commandeFournisseurLignes",
            id
        ],
    mouvementsByArticle: (articleId)=>[
            "mouvements",
            "article",
            articleId
        ],
    mouvementsByPeriode: (debut, fin)=>[
            "mouvements",
            "periode",
            debut,
            fin
        ]
};
function useCatalogue(params) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.catalogue(params),
        queryFn: {
            "useCatalogue.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/articles", params)
        }["useCatalogue.useQuery"]
    });
}
_s(useCatalogue, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useArticlesPopulaires() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.articlesPopulaires,
        queryFn: {
            "useArticlesPopulaires.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/articles/populaires")
        }["useArticlesPopulaires.useQuery"]
    });
}
_s1(useArticlesPopulaires, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useNouveautes() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.nouveautes,
        queryFn: {
            "useNouveautes.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/articles/nouveautes")
        }["useNouveautes.useQuery"]
    });
}
_s2(useNouveautes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProduitsEnAvant() {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.produitsEnAvant,
        queryFn: {
            "useProduitsEnAvant.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/produits-en-avant")
        }["useProduitsEnAvant.useQuery"]
    });
}
_s3(useProduitsEnAvant, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCarrouselAccueil() {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.carrousel,
        queryFn: {
            "useCarrouselAccueil.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/carrousel-accueil")
        }["useCarrouselAccueil.useQuery"]
    });
}
_s4(useCarrouselAccueil, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProduitDetail(id, userId) {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.produit(id),
        queryFn: {
            "useProduitDetail.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/catalogue/produits/${id}`, {
                    userId
                })
        }["useProduitDetail.useQuery"],
        enabled: id > 0
    });
}
_s5(useProduitDetail, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCategories() {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.categories,
        queryFn: {
            "useCategories.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/categories")
        }["useCategories.useQuery"]
    });
}
_s6(useCategories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useBannierePrincipale() {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.banniereprincipale,
        queryFn: {
            "useBannierePrincipale.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/catalogue/banniere-principale")
        }["useBannierePrincipale.useQuery"]
    });
}
_s7(useBannierePrincipale, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePanier(userEmail) {
    _s8();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.panier(userEmail),
        queryFn: {
            "usePanier.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/panier", {
                    userEmail
                })
        }["usePanier.useQuery"],
        enabled: !!userEmail
    });
}
_s8(usePanier, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjouterAuPanier() {
    _s9();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjouterAuPanier.useMutation": ({ userEmail, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/panier/ajouter", data, {
                    userEmail
                })
        }["useAjouterAuPanier.useMutation"],
        onSuccess: {
            "useAjouterAuPanier.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.panier(variables.userEmail)
                });
            }
        }["useAjouterAuPanier.useMutation"]
    });
}
_s9(useAjouterAuPanier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useModifierPanier() {
    _s10();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useModifierPanier.useMutation": ({ userEmail, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put("/panier/modifier", data, {
                    userEmail
                })
        }["useModifierPanier.useMutation"],
        onSuccess: {
            "useModifierPanier.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.panier(variables.userEmail)
                });
            }
        }["useModifierPanier.useMutation"]
    });
}
_s10(useModifierPanier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSupprimerDuPanier() {
    _s11();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSupprimerDuPanier.useMutation": ({ userEmail, articleId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/panier/supprimer/${articleId}`, {
                    userEmail
                })
        }["useSupprimerDuPanier.useMutation"],
        onSuccess: {
            "useSupprimerDuPanier.useMutation": (_, variables)=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.panier(variables.userEmail)
                });
            }
        }["useSupprimerDuPanier.useMutation"]
    });
}
_s11(useSupprimerDuPanier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useViderPanier() {
    _s12();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useViderPanier.useMutation": (userEmail)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete("/panier/vider", {
                    userEmail
                })
        }["useViderPanier.useMutation"],
        onSuccess: {
            "useViderPanier.useMutation": (_, userEmail)=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.panier(userEmail)
                });
            }
        }["useViderPanier.useMutation"]
    });
}
_s12(useViderPanier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLikeProduit() {
    _s13();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLikeProduit.useMutation": ({ id, userId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/catalogue/produits/${id}/like`, undefined, {
                    userId
                })
        }["useLikeProduit.useMutation"]
    });
}
_s13(useLikeProduit, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useFavorisProduit() {
    _s14();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useFavorisProduit.useMutation": ({ id, userId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/catalogue/produits/${id}/favoris`, undefined, {
                    userId
                })
        }["useFavorisProduit.useMutation"]
    });
}
_s14(useFavorisProduit, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCreerCommande() {
    _s15();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreerCommande.useMutation": ({ userId, adresseLivraison, modePaiement })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/commandes/creer", {
                    adresseLivraison,
                    modePaiement
                }, {
                    userId
                })
        }["useCreerCommande.useMutation"],
        onSuccess: {
            "useCreerCommande.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandes"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandesMerchant"
                    ]
                });
            }
        }["useCreerCommande.useMutation"]
    });
}
_s15(useCreerCommande, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useLowStockArticles() {
    _s16();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.lowStock,
        queryFn: {
            "useLowStockArticles.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/inventory/alerts/low-stock")
        }["useLowStockArticles.useQuery"]
    });
}
_s16(useLowStockArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useOutOfStockArticles() {
    _s17();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.outOfStock,
        queryFn: {
            "useOutOfStockArticles.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/inventory/alerts/out-of-stock")
        }["useOutOfStockArticles.useQuery"]
    });
}
_s17(useOutOfStockArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUnreadAlerts() {
    _s18();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.alerts,
        queryFn: {
            "useUnreadAlerts.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/inventory/alerts/unread")
        }["useUnreadAlerts.useQuery"]
    });
}
_s18(useUnreadAlerts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStockStats() {
    _s19();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.stockStats,
        queryFn: {
            "useStockStats.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/inventory/dashboard")
        }["useStockStats.useQuery"]
    });
}
_s19(useStockStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useInventoryDashboard() {
    _s20();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "inventoryDashboard"
        ],
        queryFn: {
            "useInventoryDashboard.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/inventory/dashboard")
        }["useInventoryDashboard.useQuery"]
    });
}
_s20(useInventoryDashboard, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useEcommerceStats() {
    _s21();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.ecommerceStats,
        queryFn: {
            "useEcommerceStats.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/ecommerce/stats")
        }["useEcommerceStats.useQuery"]
    });
}
_s21(useEcommerceStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjusterStock() {
    _s22();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjusterStock.useMutation": (params)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/inventory/adjust-stock", undefined, {
                    articleId: params.articleId,
                    quantity: params.quantity,
                    reason: params.reason,
                    userId: params.userId
                })
        }["useAjusterStock.useMutation"],
        onSuccess: {
            "useAjusterStock.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.lowStock
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.outOfStock
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.stockStats
                });
            }
        }["useAjusterStock.useMutation"]
    });
}
_s22(useAjusterStock, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useReserveStock() {
    _s23();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useReserveStock.useMutation": ({ articleId, quantity })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/inventory/reserve-stock", undefined, {
                    articleId,
                    quantity
                })
        }["useReserveStock.useMutation"],
        onSuccess: {
            "useReserveStock.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.stockStats
                });
            }
        }["useReserveStock.useMutation"]
    });
}
_s23(useReserveStock, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useReleaseStock() {
    _s24();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useReleaseStock.useMutation": ({ articleId, quantity })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/inventory/release-stock", undefined, {
                    articleId,
                    quantity
                })
        }["useReleaseStock.useMutation"],
        onSuccess: {
            "useReleaseStock.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.stockStats
                });
            }
        }["useReleaseStock.useMutation"]
    });
}
_s24(useReleaseStock, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useArticles() {
    _s25();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.articles,
        queryFn: {
            "useArticles.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/articles")
        }["useArticles.useQuery"]
    });
}
_s25(useArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useArticle(id) {
    _s26();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.article(id),
        queryFn: {
            "useArticle.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/articles/${id}`)
        }["useArticle.useQuery"],
        enabled: id > 0
    });
}
_s26(useArticle, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateArticle() {
    _s27();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateArticle.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/articles", data)
        }["useCreateArticle.useMutation"],
        onSuccess: {
            "useCreateArticle.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
            }
        }["useCreateArticle.useMutation"]
    });
}
_s27(useCreateArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateArticle() {
    _s28();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateArticle.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/stock/articles/${id}`, data)
        }["useUpdateArticle.useMutation"],
        onSuccess: {
            "useUpdateArticle.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
            }
        }["useUpdateArticle.useMutation"]
    });
}
_s28(useUpdateArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteArticle() {
    _s29();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteArticle.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/stock/articles/${id}`)
        }["useDeleteArticle.useMutation"],
        onSuccess: {
            "useDeleteArticle.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
            }
        }["useDeleteArticle.useMutation"]
    });
}
_s29(useDeleteArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useArticlesByCategorie(categorieId) {
    _s30();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "articles",
            "categorie",
            categorieId
        ],
        queryFn: {
            "useArticlesByCategorie.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/articles/categorie/${categorieId}`)
        }["useArticlesByCategorie.useQuery"],
        enabled: categorieId > 0
    });
}
_s30(useArticlesByCategorie, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjusterStockArticle() {
    _s31();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjusterStockArticle.useMutation": ({ id, utilisateur, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/stock/articles/${id}/ajuster-stock`, data, {
                    utilisateur
                })
        }["useAjusterStockArticle.useMutation"],
        onSuccess: {
            "useAjusterStockArticle.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.articles
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.lowStock
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.stockStats
                });
            }
        }["useAjusterStockArticle.useMutation"]
    });
}
_s31(useAjusterStockArticle, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMouvementsStock() {
    _s32();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.mouvements,
        queryFn: {
            "useMouvementsStock.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/mouvements")
        }["useMouvementsStock.useQuery"]
    });
}
_s32(useMouvementsStock, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMouvementsByArticle(articleId) {
    _s33();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.mouvementsByArticle(articleId),
        queryFn: {
            "useMouvementsByArticle.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/mouvements/article/${articleId}`)
        }["useMouvementsByArticle.useQuery"],
        enabled: articleId > 0
    });
}
_s33(useMouvementsByArticle, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMouvementsByPeriode(dateDebut, dateFin) {
    _s34();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.mouvementsByPeriode(dateDebut, dateFin),
        queryFn: {
            "useMouvementsByPeriode.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/mouvements/periode", {
                    dateDebut,
                    dateFin
                })
        }["useMouvementsByPeriode.useQuery"],
        enabled: !!dateDebut && !!dateFin
    });
}
_s34(useMouvementsByPeriode, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFournisseurs() {
    _s35();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.fournisseurs,
        queryFn: {
            "useFournisseurs.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/fournisseurs")
        }["useFournisseurs.useQuery"]
    });
}
_s35(useFournisseurs, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFournisseursActifs() {
    _s36();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.fournisseursActifs,
        queryFn: {
            "useFournisseursActifs.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/fournisseurs/active")
        }["useFournisseursActifs.useQuery"]
    });
}
_s36(useFournisseursActifs, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useFournisseur(id) {
    _s37();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "fournisseur",
            id
        ],
        queryFn: {
            "useFournisseur.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/fournisseurs/${id}`)
        }["useFournisseur.useQuery"],
        enabled: id > 0
    });
}
_s37(useFournisseur, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSearchFournisseurs(nom) {
    _s38();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "fournisseurs",
            "search",
            nom
        ],
        queryFn: {
            "useSearchFournisseurs.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/fournisseurs/search", {
                    nom
                })
        }["useSearchFournisseurs.useQuery"],
        enabled: !!nom
    });
}
_s38(useSearchFournisseurs, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateFournisseur() {
    _s39();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateFournisseur.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/fournisseurs", data)
        }["useCreateFournisseur.useMutation"],
        onSuccess: {
            "useCreateFournisseur.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.fournisseurs
                });
            }
        }["useCreateFournisseur.useMutation"]
    });
}
_s39(useCreateFournisseur, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateFournisseur() {
    _s40();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateFournisseur.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/stock/fournisseurs/${id}`, data)
        }["useUpdateFournisseur.useMutation"],
        onSuccess: {
            "useUpdateFournisseur.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.fournisseurs
                });
            }
        }["useUpdateFournisseur.useMutation"]
    });
}
_s40(useUpdateFournisseur, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteFournisseur() {
    _s41();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteFournisseur.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/stock/fournisseurs/${id}`)
        }["useDeleteFournisseur.useMutation"],
        onSuccess: {
            "useDeleteFournisseur.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.fournisseurs
                });
            }
        }["useDeleteFournisseur.useMutation"]
    });
}
_s41(useDeleteFournisseur, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSupplierOrders(supplierId) {
    _s42();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.fournisseurOrders(supplierId),
        queryFn: {
            "useSupplierOrders.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/fournisseurs/supplier/${supplierId}/orders`)
        }["useSupplierOrders.useQuery"],
        enabled: supplierId > 0
    });
}
_s42(useSupplierOrders, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMerchantOrders(merchantId) {
    _s43();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.merchantOrders(merchantId),
        queryFn: {
            "useMerchantOrders.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/fournisseurs/merchant/${merchantId}/orders`)
        }["useMerchantOrders.useQuery"],
        enabled: merchantId > 0
    });
}
_s43(useMerchantOrders, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandesFournisseur() {
    _s44();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.commandesFournisseur,
        queryFn: {
            "useCommandesFournisseur.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/commandes-fournisseur")
        }["useCommandesFournisseur.useQuery"]
    });
}
_s44(useCommandesFournisseur, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeFournisseur(id) {
    _s45();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "commandeFournisseur",
            id
        ],
        queryFn: {
            "useCommandeFournisseur.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/commandes-fournisseur/${id}`)
        }["useCommandeFournisseur.useQuery"],
        enabled: id > 0
    });
}
_s45(useCommandeFournisseur, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeFournisseurByCode(code) {
    _s46();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "commandeFournisseur",
            "code",
            code
        ],
        queryFn: {
            "useCommandeFournisseurByCode.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/commandes-fournisseur/code/${code}`)
        }["useCommandeFournisseurByCode.useQuery"],
        enabled: !!code
    });
}
_s46(useCommandeFournisseurByCode, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeFournisseurLignes(id) {
    _s47();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.commandeFournisseurLignes(id),
        queryFn: {
            "useCommandeFournisseurLignes.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/commandes-fournisseur/${id}/lignes`)
        }["useCommandeFournisseurLignes.useQuery"],
        enabled: id > 0
    });
}
_s47(useCommandeFournisseurLignes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useShipCommandeFournisseur() {
    _s48();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useShipCommandeFournisseur.useMutation": ({ id, dateLivraison })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/stock/commandes-fournisseur/${id}/ship`, {
                    dateLivraison
                })
        }["useShipCommandeFournisseur.useMutation"],
        onSuccess: {
            "useShipCommandeFournisseur.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.commandesFournisseur
                });
            }
        }["useShipCommandeFournisseur.useMutation"]
    });
}
_s48(useShipCommandeFournisseur, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteCommandeFournisseur() {
    _s49();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteCommandeFournisseur.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/stock/commandes-fournisseur/${id}`)
        }["useDeleteCommandeFournisseur.useMutation"],
        onSuccess: {
            "useDeleteCommandeFournisseur.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.commandesFournisseur
                });
            }
        }["useDeleteCommandeFournisseur.useMutation"]
    });
}
_s49(useDeleteCommandeFournisseur, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useVentes() {
    _s50();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.ventes,
        queryFn: {
            "useVentes.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/v1.0/ventes")
        }["useVentes.useQuery"]
    });
}
_s50(useVentes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useVente(id) {
    _s51();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "vente",
            id
        ],
        queryFn: {
            "useVente.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/ventes/${id}`)
        }["useVente.useQuery"],
        enabled: id > 0
    });
}
_s51(useVente, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useVenteByCode(code) {
    _s52();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "vente",
            "code",
            code
        ],
        queryFn: {
            "useVenteByCode.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/ventes/code/${code}`)
        }["useVenteByCode.useQuery"],
        enabled: !!code
    });
}
_s52(useVenteByCode, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateVente() {
    _s53();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateVente.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/v1.0/ventes", data)
        }["useCreateVente.useMutation"],
        onSuccess: {
            "useCreateVente.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.ventes
                });
            }
        }["useCreateVente.useMutation"]
    });
}
_s53(useCreateVente, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteVente() {
    _s54();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteVente.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/v1.0/ventes/${id}`)
        }["useDeleteVente.useMutation"],
        onSuccess: {
            "useDeleteVente.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.ventes
                });
            }
        }["useDeleteVente.useMutation"]
    });
}
_s54(useDeleteVente, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useChiffreAffaires(debut, fin) {
    _s55();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "ca",
            debut,
            fin
        ],
        queryFn: {
            "useChiffreAffaires.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/finance/factures/ca", {
                    debut,
                    fin
                })
        }["useChiffreAffaires.useQuery"],
        enabled: !!debut && !!fin
    });
}
_s55(useChiffreAffaires, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGenererFacture() {
    _s56();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGenererFacture.useMutation": (commandeId)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/finance/factures/generer/${commandeId}`)
        }["useGenererFacture.useMutation"]
    });
}
_s56(useGenererFacture, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEnregistrerPaiement() {
    _s57();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useEnregistrerPaiement.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/finance/factures/${id}/paiement`, data)
        }["useEnregistrerPaiement.useMutation"]
    });
}
_s57(useEnregistrerPaiement, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useClients() {
    _s58();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.clients,
        queryFn: {
            "useClients.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/v1.0/clients")
        }["useClients.useQuery"]
    });
}
_s58(useClients, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useClient(id) {
    _s59();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.client(id),
        queryFn: {
            "useClient.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/clients/${id}`)
        }["useClient.useQuery"],
        enabled: id > 0
    });
}
_s59(useClient, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateClient() {
    _s60();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateClient.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/v1.0/clients", data)
        }["useCreateClient.useMutation"],
        onSuccess: {
            "useCreateClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.clients
                });
            }
        }["useCreateClient.useMutation"]
    });
}
_s60(useCreateClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteClient() {
    _s61();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteClient.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/v1.0/clients/${id}`)
        }["useDeleteClient.useMutation"],
        onSuccess: {
            "useDeleteClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.clients
                });
            }
        }["useDeleteClient.useMutation"]
    });
}
_s61(useDeleteClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useEntreprises() {
    _s62();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.entreprises,
        queryFn: {
            "useEntreprises.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/v1.0/entreprises")
        }["useEntreprises.useQuery"]
    });
}
_s62(useEntreprises, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useEntreprise(id) {
    _s63();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.entreprise(id),
        queryFn: {
            "useEntreprise.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/entreprises/${id}`)
        }["useEntreprise.useQuery"],
        enabled: id > 0
    });
}
_s63(useEntreprise, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateEntreprise() {
    _s64();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateEntreprise.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/v1.0/entreprises", data)
        }["useCreateEntreprise.useMutation"],
        onSuccess: {
            "useCreateEntreprise.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.entreprises
                });
            }
        }["useCreateEntreprise.useMutation"]
    });
}
_s64(useCreateEntreprise, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteEntreprise() {
    _s65();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteEntreprise.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/v1.0/entreprises/${id}`)
        }["useDeleteEntreprise.useMutation"],
        onSuccess: {
            "useDeleteEntreprise.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.entreprises
                });
            }
        }["useDeleteEntreprise.useMutation"]
    });
}
_s65(useDeleteEntreprise, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCommandesClient() {
    _s66();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.commandesClient,
        queryFn: {
            "useCommandesClient.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/v1.0/commandes-client")
        }["useCommandesClient.useQuery"]
    });
}
_s66(useCommandesClient, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeClient(id) {
    _s67();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.commandeClient(id),
        queryFn: {
            "useCommandeClient.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/commandes-client/${id}`)
        }["useCommandeClient.useQuery"],
        enabled: id > 0
    });
}
_s67(useCommandeClient, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeClientByCode(code) {
    _s68();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "commandeClient",
            "code",
            code
        ],
        queryFn: {
            "useCommandeClientByCode.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/commandes-client/code/${code}`)
        }["useCommandeClientByCode.useQuery"],
        enabled: !!code
    });
}
_s68(useCommandeClientByCode, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCommandeClientLignes(id) {
    _s69();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "commandeClientLignes",
            id
        ],
        queryFn: {
            "useCommandeClientLignes.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/v1.0/commandes-client/${id}/lignes`)
        }["useCommandeClientLignes.useQuery"],
        enabled: id > 0
    });
}
_s69(useCommandeClientLignes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateCommandeClient() {
    _s70();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateCommandeClient.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/v1.0/commandes-client", data)
        }["useCreateCommandeClient.useMutation"],
        onSuccess: {
            "useCreateCommandeClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.commandesClient
                });
            }
        }["useCreateCommandeClient.useMutation"]
    });
}
_s70(useCreateCommandeClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteCommandeClient() {
    _s71();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteCommandeClient.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/api/v1.0/commandes-client/${id}`)
        }["useDeleteCommandeClient.useMutation"],
        onSuccess: {
            "useDeleteCommandeClient.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.commandesClient
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandesMerchant"
                    ]
                });
            }
        }["useDeleteCommandeClient.useMutation"]
    });
}
_s71(useDeleteCommandeClient, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function usePayerCommande() {
    _s72();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "usePayerCommande.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/commandes/${id}/payer`, data)
        }["usePayerCommande.useMutation"],
        onSuccess: {
            "usePayerCommande.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandes"
                    ]
                });
            }
        }["usePayerCommande.useMutation"]
    });
}
_s72(usePayerCommande, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useExpedierCommande() {
    _s73();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useExpedierCommande.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/commandes/${id}/expedier`)
        }["useExpedierCommande.useMutation"],
        onSuccess: {
            "useExpedierCommande.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandes"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandesMerchant"
                    ]
                });
            }
        }["useExpedierCommande.useMutation"]
    });
}
_s73(useExpedierCommande, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateCommandeStatus() {
    _s74();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateCommandeStatus.useMutation": ({ id, statut })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/commandes/${id}/statut`, {
                    statut
                })
        }["useUpdateCommandeStatus.useMutation"],
        onSuccess: {
            "useUpdateCommandeStatus.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandes"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "commandesMerchant"
                    ]
                });
            }
        }["useUpdateCommandeStatus.useMutation"]
    });
}
_s74(useUpdateCommandeStatus, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCommandesMerchant(merchantUserId) {
    _s75();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "commandesMerchant",
            merchantUserId
        ],
        queryFn: {
            "useCommandesMerchant.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/commandes/merchant", {
                    merchantUserId
                });
                console.log('Merchant orders API response:', JSON.stringify(response, null, 2));
                return response;
            }
        }["useCommandesMerchant.useQuery"],
        enabled: !!merchantUserId
    });
}
_s75(useCommandesMerchant, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLogin() {
    _s76();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useLogin.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/login", data)
        }["useLogin.useMutation"]
    });
}
_s76(useLogin, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRegister() {
    _s77();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRegister.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/register", data)
        }["useRegister.useMutation"]
    });
}
_s77(useRegister, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useVerifyOtp() {
    _s78();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useVerifyOtp.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/verify-otp", data)
        }["useVerifyOtp.useMutation"]
    });
}
_s78(useVerifyOtp, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRegisterOtp() {
    _s79();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRegisterOtp.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/register-otp", data)
        }["useRegisterOtp.useMutation"]
    });
}
_s79(useRegisterOtp, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSendOtp() {
    _s80();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendOtp.useMutation": (email)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/send-otp", undefined, {
                    email
                })
        }["useSendOtp.useMutation"]
    });
}
_s80(useSendOtp, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSendResetOtp() {
    _s81();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSendResetOtp.useMutation": (email)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/send-reset-otp", undefined, {
                    email
                })
        }["useSendResetOtp.useMutation"]
    });
}
_s81(useSendResetOtp, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useResetPassword() {
    _s82();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useResetPassword.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/reset-password", data)
        }["useResetPassword.useMutation"]
    });
}
_s82(useResetPassword, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useIsAuthenticated(email) {
    _s83();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "isAuthenticated",
            email
        ],
        queryFn: {
            "useIsAuthenticated.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/is-authenticated", {
                    email
                })
        }["useIsAuthenticated.useQuery"],
        enabled: !!email
    });
}
_s83(useIsAuthenticated, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProfile(email) {
    _s84();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.profile(email),
        queryFn: {
            "useProfile.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/profile", {
                    email
                })
        }["useProfile.useQuery"],
        enabled: !!email
    });
}
_s84(useProfile, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePendingUsers() {
    _s85();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.pendingUsers,
        queryFn: {
            "usePendingUsers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/admin/pending-users")
        }["usePendingUsers.useQuery"]
    });
}
_s85(usePendingUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAllUsers() {
    _s86();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.allUsers,
        queryFn: {
            "useAllUsers.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/admin/all-users")
        }["useAllUsers.useQuery"]
    });
}
_s86(useAllUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useApproveUser() {
    _s87();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useApproveUser.useMutation": ({ userId, approvedBy })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/admin/approve-user/${userId}`, undefined, {
                    approvedBy
                })
        }["useApproveUser.useMutation"],
        onSuccess: {
            "useApproveUser.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.pendingUsers
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.allUsers
                });
            }
        }["useApproveUser.useMutation"]
    });
}
_s87(useApproveUser, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useRejectUser() {
    _s88();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useRejectUser.useMutation": ({ userId, rejectedBy })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/admin/reject-user/${userId}`, undefined, {
                    rejectedBy
                })
        }["useRejectUser.useMutation"],
        onSuccess: {
            "useRejectUser.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.pendingUsers
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.allUsers
                });
            }
        }["useRejectUser.useMutation"]
    });
}
_s88(useRejectUser, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useCategorie(id) {
    _s89();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "categorie",
            id
        ],
        queryFn: {
            "useCategorie.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/stock/categories/${id}`)
        }["useCategorie.useQuery"],
        enabled: id > 0
    });
}
_s89(useCategorie, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAllCategories() {
    _s90();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "allCategories"
        ],
        queryFn: {
            "useAllCategories.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/stock/categories")
        }["useAllCategories.useQuery"]
    });
}
_s90(useAllCategories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateCategorie() {
    _s91();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateCategorie.useMutation": (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/stock/categories", data)
        }["useCreateCategorie.useMutation"],
        onSuccess: {
            "useCreateCategorie.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.categories
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "allCategories"
                    ]
                });
            }
        }["useCreateCategorie.useMutation"]
    });
}
_s91(useCreateCategorie, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateCategorie() {
    _s92();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateCategorie.useMutation": ({ id, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/stock/categories/${id}`, data)
        }["useUpdateCategorie.useMutation"],
        onSuccess: {
            "useUpdateCategorie.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.categories
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "allCategories"
                    ]
                });
            }
        }["useUpdateCategorie.useMutation"]
    });
}
_s92(useUpdateCategorie, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteCategorie() {
    _s93();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteCategorie.useMutation": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/stock/categories/${id}`)
        }["useDeleteCategorie.useMutation"],
        onSuccess: {
            "useDeleteCategorie.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: queryKeys.categories
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "allCategories"
                    ]
                });
            }
        }["useDeleteCategorie.useMutation"]
    });
}
_s93(useDeleteCategorie, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMerchantProduits(merchantUserId) {
    _s94();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.merchantProduits(merchantUserId),
        queryFn: {
            "useMerchantProduits.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/merchant/produits", {
                    merchantUserId
                })
        }["useMerchantProduits.useQuery"],
        enabled: !!merchantUserId
    });
}
_s94(useMerchantProduits, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjouterProduitMerchant() {
    _s95();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjouterProduitMerchant.useMutation": async ({ produitDto, images, merchantUserId })=>{
                const token = localStorage.getItem("token");
                const formData = new FormData();
                // Ajouter chaque champ du DTO séparément
                formData.append("nom", produitDto.nom || "");
                formData.append("description", produitDto.description || "");
                formData.append("descriptionLongue", produitDto.descriptionLongue || "");
                formData.append("prix", produitDto.prix?.toString() || "0");
                formData.append("quantite", produitDto.quantite?.toString() || "0");
                formData.append("categorieId", produitDto.categorieId?.toString() || "1");
                formData.append("visibleEnLigne", produitDto.visibleEnLigne?.toString() || "true");
                formData.append("merchantUserId", merchantUserId);
                images.forEach({
                    "useAjouterProduitMerchant.useMutation": (img)=>formData.append("images", img)
                }["useAjouterProduitMerchant.useMutation"]);
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api/v1.0")}/merchant/produits`, {
                    method: "POST",
                    headers: {
                        "Authorization": token ? `Bearer ${token}` : ""
                    },
                    body: formData
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }
                return response.json();
            }
        }["useAjouterProduitMerchant.useMutation"],
        onSuccess: {
            "useAjouterProduitMerchant.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "merchantProduits"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.stockStats
                });
            }
        }["useAjouterProduitMerchant.useMutation"]
    });
}
_s95(useAjouterProduitMerchant, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useModifierVisibiliteProduit() {
    _s96();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useModifierVisibiliteProduit.useMutation": ({ id, visible, merchantUserId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/merchant/produits/${id}/visibilite`, undefined, {
                    visible,
                    merchantUserId
                })
        }["useModifierVisibiliteProduit.useMutation"],
        onSuccess: {
            "useModifierVisibiliteProduit.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "merchantProduits"
                    ]
                });
            }
        }["useModifierVisibiliteProduit.useMutation"]
    });
}
_s96(useModifierVisibiliteProduit, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMerchantArticles(userId) {
    _s97();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.merchantArticles(userId),
        queryFn: {
            "useMerchantArticles.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/merchant/stock/articles", {
                    userId
                })
        }["useMerchantArticles.useQuery"],
        enabled: !!userId
    });
}
_s97(useMerchantArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMerchantStockFaible(userId) {
    _s98();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "merchantStockFaible",
            userId
        ],
        queryFn: {
            "useMerchantStockFaible.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/merchant/stock/articles/stock-faible", {
                    userId
                })
        }["useMerchantStockFaible.useQuery"],
        enabled: !!userId
    });
}
_s98(useMerchantStockFaible, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjouterArticleMerchant() {
    _s99();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjouterArticleMerchant.useMutation": ({ userId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/merchant/stock/articles", data, {
                    userId
                })
        }["useAjouterArticleMerchant.useMutation"],
        onSuccess: {
            "useAjouterArticleMerchant.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "merchantArticles"
                    ]
                });
            }
        }["useAjouterArticleMerchant.useMutation"]
    });
}
_s99(useAjouterArticleMerchant, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useAjusterStockMerchant() {
    _s100();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjusterStockMerchant.useMutation": ({ id, quantite, motif, userId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/merchant/stock/articles/${id}/stock`, undefined, {
                    quantite,
                    motif,
                    userId
                })
        }["useAjusterStockMerchant.useMutation"],
        onSuccess: {
            "useAjusterStockMerchant.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "merchantArticles"
                    ]
                });
            }
        }["useAjusterStockMerchant.useMutation"]
    });
}
_s100(useAjusterStockMerchant, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSupplierArticles(userId) {
    _s101();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.supplierArticles(userId),
        queryFn: {
            "useSupplierArticles.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/supplier/stock/articles", {
                    userId
                })
        }["useSupplierArticles.useQuery"],
        enabled: !!userId
    });
}
_s101(useSupplierArticles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAjouterArticleSupplier() {
    _s102();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjouterArticleSupplier.useMutation": ({ userId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/supplier/stock/articles", data, {
                    userId
                })
        }["useAjouterArticleSupplier.useMutation"],
        onSuccess: {
            "useAjouterArticleSupplier.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "supplierArticles"
                    ]
                });
            }
        }["useAjouterArticleSupplier.useMutation"]
    });
}
_s102(useAjouterArticleSupplier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useAjusterStockSupplier() {
    _s103();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAjusterStockSupplier.useMutation": ({ id, quantite, motif, userId })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/supplier/stock/articles/${id}/stock`, undefined, {
                    quantite,
                    motif,
                    userId
                })
        }["useAjusterStockSupplier.useMutation"],
        onSuccess: {
            "useAjusterStockSupplier.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "supplierArticles"
                    ]
                });
            }
        }["useAjusterStockSupplier.useMutation"]
    });
}
_s103(useAjusterStockSupplier, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useSupplierCommandesMerchants(userId) {
    _s104();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.supplierCommandes(userId),
        queryFn: {
            "useSupplierCommandesMerchants.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/supplier/stock/commandes-merchants", {
                    userId
                })
        }["useSupplierCommandesMerchants.useQuery"],
        enabled: !!userId
    });
}
_s104(useSupplierCommandesMerchants, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePubliciteProduitsEnAvant() {
    _s105();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "publiciteProduitsEnAvant"
        ],
        queryFn: {
            "usePubliciteProduitsEnAvant.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/publicite/produits-en-avant")
        }["usePubliciteProduitsEnAvant.useQuery"]
    });
}
_s105(usePubliciteProduitsEnAvant, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePubliciteProduitsEnAvantParType(type) {
    _s106();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "publiciteProduitsEnAvant",
            type
        ],
        queryFn: {
            "usePubliciteProduitsEnAvantParType.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/api/publicite/produits-en-avant/${type}`)
        }["usePubliciteProduitsEnAvantParType.useQuery"],
        enabled: !!type
    });
}
_s106(usePubliciteProduitsEnAvantParType, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCalculerTarif(type, periode) {
    _s107();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "tarif",
            type,
            periode
        ],
        queryFn: {
            "useCalculerTarif.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/publicite/tarif", {
                    type,
                    periode
                })
        }["useCalculerTarif.useQuery"],
        enabled: !!type && !!periode
    });
}
_s107(useCalculerTarif, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useIncrementerVues() {
    _s108();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useIncrementerVues.useMutation": (campagneId)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/publicite/campagne/${campagneId}/vue`)
        }["useIncrementerVues.useMutation"]
    });
}
_s108(useIncrementerVues, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useIncrementerClics() {
    _s109();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useIncrementerClics.useMutation": (campagneId)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/api/publicite/campagne/${campagneId}/clic`)
        }["useIncrementerClics.useMutation"]
    });
}
_s109(useIncrementerClics, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useMesCampagnes(userId) {
    _s110();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: queryKeys.campagnes(userId),
        queryFn: {
            "useMesCampagnes.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/merchant/publicite/mes-campagnes", {
                    userId
                })
        }["useMesCampagnes.useQuery"],
        enabled: !!userId
    });
}
_s110(useMesCampagnes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useMerchantCalculerTarif(type, periode) {
    _s111();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "merchantTarif",
            type,
            periode
        ],
        queryFn: {
            "useMerchantCalculerTarif.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/merchant/publicite/tarifs", {
                    type,
                    periode
                })
        }["useMerchantCalculerTarif.useQuery"],
        enabled: !!type && !!periode
    });
}
_s111(useMerchantCalculerTarif, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreerCampagne() {
    _s112();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreerCampagne.useMutation": ({ userId, data })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/merchant/publicite/campagne", data, {
                    userId
                })
        }["useCreerCampagne.useMutation"],
        onSuccess: {
            "useCreerCampagne.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "campagnes"
                    ]
                });
            }
        }["useCreerCampagne.useMutation"]
    });
}
_s112(useCreerCampagne, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useAddRole() {
    _s113();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useAddRole.useMutation": (name)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/roles", name)
        }["useAddRole.useMutation"]
    });
}
_s113(useAddRole, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommandesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/hooks/use-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/contexts/auth-context.tsx [app-client] (ecmascript)");
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
const statutStyles = {
    EN_ATTENTE: {
        label: "En attente",
        variant: "secondary",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    CONFIRMEE: {
        label: "Confirmée",
        variant: "default",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    EN_PREPARATION: {
        label: "En préparation",
        variant: "default",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
    },
    EXPEDIEE: {
        label: "Expédiée",
        variant: "default",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
    },
    LIVREE: {
        label: "Livrée",
        variant: "default",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    ANNULEE: {
        label: "Annulée",
        variant: "destructive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"]
    }
};
const paiementStyles = {
    EN_ATTENTE: {
        label: "En attente",
        className: "bg-amber-500/10 text-amber-500"
    },
    PAYE: {
        label: "Payé",
        className: "bg-emerald-500/10 text-emerald-500"
    },
    ECHEC: {
        label: "Échec",
        className: "bg-red-500/10 text-red-500"
    },
    REMBOURSE: {
        label: "Remboursé",
        className: "bg-blue-500/10 text-blue-500"
    }
};
function CommandesPage() {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statutFilter, setStatutFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedCommande, setSelectedCommande] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { data: commandesResponse, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCommandesMerchant"])(user?.userId || "");
    const deleteCommandeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteCommandeClient"])();
    const expedierCommandeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpedierCommande"])();
    const updateStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateCommandeStatus"])();
    const commandesData = Array.isArray(commandesResponse?.data) ? commandesResponse.data : [];
    // Map API response to expected format
    const commandes = commandesData.map((cmd)=>{
        const c = cmd;
        console.log('Raw command data:', JSON.stringify(c, null, 2));
        console.log('AdresseLivraison structure:', JSON.stringify(c.adresseLivraison, null, 2));
        return {
            id: Number(c.id) || 0,
            numeroCommande: String(c.code || c.numeroCommande || `CMD-${c.id}`),
            client: String(c.client?.name || ""),
            email: String(c.client?.email || ""),
            telephone: String(c.adresseLivraison?.telephone || c.client?.telephone || c.client?.phoneNumber || c.telephone || "N/A"),
            ville: String(c.adresseLivraison?.ville || c.client?.ville || c.client?.town || c.ville || "N/A"),
            adresse: String(c.adresseLivraison?.adresse || c.adresseLivraison?.adresse1 || c.client?.adresse || c.client?.address || c.adresse || "N/A"),
            codePostal: String(c.adresseLivraison?.codePostal || c.adresseLivraison?.code_postal || c.codePostal || c.code_postal || ""),
            modePaiement: String(c.modePaiement || ""),
            dateCommande: String(c.dateCommande || new Date().toISOString()),
            statut: String(c.statut || "EN_ATTENTE"),
            statutPaiement: String(c.statutPaiement || "EN_ATTENTE"),
            montantTotal: Number(c.montantTotal || c.totalTtc) || 0,
            fraisLivraison: Number(c.fraisLivraison) || 0,
            articles: c.items?.length || 0,
            items: c.items || []
        };
    });
    const filteredCommandes = commandes.filter((cmd)=>{
        const matchSearch = cmd.numeroCommande.toLowerCase().includes(search.toLowerCase()) || cmd.client.toLowerCase().includes(search.toLowerCase());
        const matchStatut = statutFilter === "all" || cmd.statut === statutFilter;
        return matchSearch && matchStatut;
    });
    const totalPages = Math.ceil(filteredCommandes.length / itemsPerPage);
    const paginatedCommandes = filteredCommandes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handleDeleteCommande = async (id)=>{
        if (confirm("Êtes-vous sûr de vouloir supprimer cette commande ?")) {
            try {
                await deleteCommandeMutation.mutateAsync(id);
                refetch();
            } catch (error) {
                console.error("Erreur lors de la suppression:", error);
            }
        }
    };
    const handleExpedierCommande = async (id)=>{
        try {
            await expedierCommandeMutation.mutateAsync(id);
            refetch();
        } catch (error) {
            console.error("Erreur lors de l'expédition:", error);
        }
    };
    const handleUpdateStatus = async (id, statut)=>{
        try {
            await updateStatusMutation.mutateAsync({
                id,
                statut
            });
            refetch();
        } catch (error) {
            console.error("Erreur lors de la mise à jour:", error);
        }
    };
    const handleSendNotification = (id)=>{
        // TODO: Implement customer notification
        console.log("Sending notification for order:", id);
    };
    const handlePreparerCommande = async (id)=>{
        try {
            await updateStatusMutation.mutateAsync({
                id,
                statut: "EN_PREPARATION"
            });
            refetch();
        } catch (error) {
            console.error("Erreur lors de la préparation:", error);
        }
    };
    const handlePrintInvoice = (commande)=>{
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;
        const invoiceHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Facture ${commande.numeroCommande}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .items-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .items-table th, .items-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .items-table th { background-color: #f2f2f2; }
            .total-section { text-align: right; margin-top: 20px; }
            .total-line { margin: 5px 0; }
            .final-total { font-weight: bold; font-size: 18px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>TJ-Track</h1>
            <h2>FACTURE</h2>
            <p>N° ${commande.numeroCommande}</p>
          </div>
          
          <div class="invoice-details">
            <div>
              <h3>Facturé à:</h3>
              <p><strong>${commande.client}</strong></p>
              <p>${commande.email}</p>
              <p>${commande.telephone}</p>
              <p>${commande.adresse}</p>
              <p>${commande.ville} ${commande.codePostal}</p>
            </div>
            <div>
              <p><strong>Date:</strong> ${new Date(commande.dateCommande).toLocaleDateString('fr-FR')}</p>
              <p><strong>Statut:</strong> ${statutStyles[commande.statut]?.label}</p>
              <p><strong>Paiement:</strong> ${paiementStyles[commande.statutPaiement]?.label}</p>
            </div>
          </div>
          
          <table class="items-table">
            <thead>
              <tr>
                <th>Article</th>
                <th>Quantité</th>
                <th>Prix unitaire</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${commande.items?.map((item)=>`
                <tr>
                  <td>${item.article.designation}</td>
                  <td>${item.quantite}</td>
                  <td>${item.prixUnitaire.toLocaleString('fr-FR')} FCFA</td>
                  <td>${item.sousTotal.toLocaleString('fr-FR')} FCFA</td>
                </tr>
              `).join('') || ''}
            </tbody>
          </table>
          
          <div class="total-section">
            <div class="total-line">Sous-total: ${(commande.montantTotal - commande.fraisLivraison).toLocaleString('fr-FR')} FCFA</div>
            <div class="total-line">Frais de livraison: ${commande.fraisLivraison.toLocaleString('fr-FR')} FCFA</div>
            <div class="total-line final-total">Total: ${commande.montantTotal.toLocaleString('fr-FR')} FCFA</div>
          </div>
          
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `;
        printWindow.document.write(invoiceHTML);
        printWindow.document.close();
    };
    // Stats
    const stats = {
        total: commandes.length,
        enAttente: commandes.filter((c)=>c.statut === "EN_ATTENTE").length,
        enCours: commandes.filter((c)=>[
                "CONFIRMEE",
                "EN_PREPARATION",
                "EXPEDIEE"
            ].includes(c.statut)).length,
        livrees: commandes.filter((c)=>c.statut === "LIVREE").length
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-64 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-destructive",
                    children: "Erreur lors du chargement des commandes"
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>refetch(),
                    children: "Réessayer"
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
            lineNumber: 304,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-foreground",
                            children: "Commandes Clients"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Gérez et suivez les commandes de vos clients"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Total Commandes"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold",
                                    children: stats.total
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "En Attente"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-amber-500",
                                    children: stats.enAttente
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "En Cours"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-primary",
                                    children: stats.enCours
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Livrées"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-emerald-500",
                                    children: stats.livrees
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Rechercher par numéro ou client...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "pl-10"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: statutFilter,
                        onValueChange: setStatutFilter,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full sm:w-48",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Statut"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "all",
                                        children: "Tous les statuts"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "EN_ATTENTE",
                                        children: "En attente"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "CONFIRMEE",
                                        children: "Confirmée"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "EN_PREPARATION",
                                        children: "En préparation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "EXPEDIEE",
                                        children: "Expédiée"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "LIVREE",
                                        children: "Livrée"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "ANNULEE",
                                        children: "Annulée"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "glass-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Commande"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Client"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Statut"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Paiement"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Montant"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "w-12",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: paginatedCommandes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            colSpan: 8,
                                            className: "text-center text-muted-foreground py-8",
                                            children: "Aucune commande trouvée"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this) : paginatedCommandes.map((commande)=>{
                                        const statut = statutStyles[commande.statut] || statutStyles.EN_ATTENTE;
                                        const paiement = paiementStyles[commande.statutPaiement] || paiementStyles.EN_ATTENTE;
                                        const StatutIcon = statut.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: String(commande.numeroCommande)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                String(commande.articles),
                                                                " article(s)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: String(commande.client)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: String(commande.email)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "Tel: ",
                                                                    String(commande.telephone) || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "Ville: ",
                                                                    String(commande.ville) || "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: new Date(commande.dateCommande).toLocaleDateString("fr-FR", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: statut.variant,
                                                        className: "gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatutIcon, {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 27
                                                            }, this),
                                                            statut.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${paiement.className}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 27
                                                            }, this),
                                                            paiement.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right font-medium",
                                                    children: [
                                                        commande.montantTotal.toLocaleString("fr-FR"),
                                                        " XAF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                className: "h-8 w-8",
                                                                onClick: ()=>setSelectedCommande(commande),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 468,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "icon",
                                                                            className: "h-8 w-8",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 473,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                        align: "end",
                                                                        children: [
                                                                            commande.statut === "EN_ATTENTE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                        onClick: ()=>handleUpdateStatus(commande.id, "CONFIRMEE"),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                                className: "h-4 w-4 mr-2"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                                lineNumber: 480,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            "Accepter"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 479,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                        onClick: ()=>handleUpdateStatus(commande.id, "ANNULEE"),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                                                className: "h-4 w-4 mr-2"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                                lineNumber: 484,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            "Rejeter"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 483,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true),
                                                                            commande.statut === "CONFIRMEE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                onClick: ()=>handleUpdateStatus(commande.id, "EN_PREPARATION"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                                        className: "h-4 w-4 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 491,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Préparer"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            commande.statut === "EN_PREPARATION" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                onClick: ()=>handleUpdateStatus(commande.id, "EXPEDIEE"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                                        className: "h-4 w-4 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 497,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Expédier"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 496,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            commande.statut === "EXPEDIEE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                onClick: ()=>handleUpdateStatus(commande.id, "LIVREE"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                        className: "h-4 w-4 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 503,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Marquer livrée"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 502,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                onClick: ()=>handleSendNotification(commande.id),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                        className: "h-4 w-4 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 508,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    "Contacter client"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 507,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                className: "text-destructive",
                                                                                onClick: ()=>handleDeleteCommande(commande.id),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "h-4 w-4 mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                        lineNumber: 515,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    "Supprimer"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 511,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, commande.id, true, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        filteredCommandes.length,
                                        " commande(s)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                            disabled: currentPage === 1,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: [
                                                "Page ",
                                                currentPage,
                                                " sur ",
                                                totalPages || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                            disabled: currentPage === totalPages || totalPages === 0,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 530,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedCommande,
                onOpenChange: ()=>setSelectedCommande(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                className: "text-xl",
                                                children: "Détails de la commande"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                className: "text-lg font-medium",
                                                children: selectedCommande?.numeroCommande
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>selectedCommande && handlePrintInvoice(selectedCommande),
                                        className: "gap-2",
                                        variant: "outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            "Imprimer la facture"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                lineNumber: 561,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this),
                        selectedCommande && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                    className: "h-5 w-5 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Statut commande"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: statutStyles[selectedCommande.statut]?.variant || "secondary",
                                                                            className: "gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(statutStyles[selectedCommande.statut]?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    className: "h-3 w-3"
                                                                                }),
                                                                                statutStyles[selectedCommande.statut]?.label
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                    className: "h-5 w-5 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Statut paiement"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            className: paiementStyles[selectedCommande.statutPaiement]?.className,
                                                                            children: paiementStyles[selectedCommande.statutPaiement]?.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 604,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Informations client"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Nom complet"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: String(selectedCommande.client) || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 625,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Email"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 628,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: String(selectedCommande.email) || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 627,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Téléphone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 632,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: String(selectedCommande.telephone) || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Ville"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 636,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: String(selectedCommande.ville) || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Adresse de livraison"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 641,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: String(selectedCommande.adresse) || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedCommande.codePostal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "Code postal: ",
                                                                        String(selectedCommande.codePostal)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 644,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 654,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Articles commandés"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: selectedCommande.items?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center p-3 bg-muted/30 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-medium",
                                                                                children: item.article.designation
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-muted-foreground",
                                                                                children: [
                                                                                    item.quantite,
                                                                                    " x ",
                                                                                    item.prixUnitaire.toLocaleString("fr-FR"),
                                                                                    " FCFA"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 662,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold",
                                                                        children: [
                                                                            item.sousTotal.toLocaleString("fr-FR"),
                                                                            " FCFA"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 668,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, this)) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-center py-4",
                                                            children: "Aucun article disponible"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-lg",
                                                    children: "Résumé de la commande"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "Date de commande"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: new Date(selectedCommande.dateCommande).toLocaleDateString("fr-FR")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 688,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "Nombre d'articles"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 691,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: selectedCommande.articles
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "Méthode de paiement"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: String(selectedCommande.modePaiement) || "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 696,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t pt-4 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "Sous-total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            (selectedCommande.montantTotal - selectedCommande.fraisLivraison).toLocaleString("fr-FR"),
                                                                            " FCFA"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "Frais de livraison"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            selectedCommande.fraisLivraison.toLocaleString("fr-FR"),
                                                                            " FCFA"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 707,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-lg font-bold border-t pt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 710,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-primary",
                                                                        children: [
                                                                            selectedCommande.montantTotal.toLocaleString("fr-FR"),
                                                                            " FCFA"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                        lineNumber: 711,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 space-y-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>handlePrintInvoice(selectedCommande),
                                                            className: "w-full gap-2",
                                                            variant: "outline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Imprimer la facture"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                                    lineNumber: 679,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                    lineNumber: 559,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/app/dashboard/commandes/page.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
_s(CommandesPage, "j5E3LJ3jI8HNwItqm43vpRrwdWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCommandesMerchant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteCommandeClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpedierCommande"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateCommandeStatus"]
    ];
});
_c = CommandesPage;
var _c;
__turbopack_context__.k.register(_c, "CommandesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_tj-track%20%282%29_tj-track_5effcf98._.js.map
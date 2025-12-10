(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__11b6f363._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/e-Commerce/next/tj-track/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Protected routes that require authentication
    const protectedRoutes = [
        '/dashboard'
    ];
    // Auth routes that should redirect if already authenticated
    const authRoutes = [
        '/connexion',
        '/inscription'
    ];
    // Check if user has token
    const token = request.cookies.get('tj-track-token')?.value || request.headers.get('authorization')?.replace('Bearer ', '');
    const isAuthenticated = !!token;
    // Redirect unauthenticated users from protected routes
    if (protectedRoutes.some((route)=>pathname.startsWith(route)) && !isAuthenticated) {
        const redirectUrl = new URL('/connexion', request.url);
        redirectUrl.searchParams.set('redirect', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // Redirect authenticated users from auth routes
    if (authRoutes.some((route)=>pathname.startsWith(route)) && isAuthenticated) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/dashboard', request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__11b6f363._.js.map
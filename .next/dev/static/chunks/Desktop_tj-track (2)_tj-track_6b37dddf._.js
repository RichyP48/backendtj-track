(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/tj-track (2)/tj-track/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8080/api/v1.0") || "http://localhost:8080/api/v1.0";
const API_TIMEOUT = parseInt(("TURBOPACK compile-time value", "30000") || '30000');
class ApiClient {
    baseUrl;
    token = null;
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    setToken(token) {
        this.token = token;
    }
    buildUrl(endpoint, params) {
        const url = new URL(`${this.baseUrl}${endpoint}`);
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                if (value !== undefined) {
                    url.searchParams.append(key, String(value));
                }
            });
        }
        return url.toString();
    }
    async request(endpoint, config = {}, retries = 3) {
        const { params, ...fetchConfig } = config;
        const url = this.buildUrl(endpoint, params);
        const headers = {
            "Content-Type": "application/json",
            ...config.headers
        };
        if (this.token) {
            ;
            headers["Authorization"] = `Bearer ${this.token}`;
        }
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), API_TIMEOUT);
        try {
            const response = await fetch(url, {
                ...fetchConfig,
                headers,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                const error = await response.json().catch(()=>({
                        message: `Erreur HTTP: ${response.status}`,
                        status: response.status
                    }));
                // Retry on server errors (5xx) or network issues
                if (response.status >= 500 && retries > 0) {
                    console.warn(`Retrying request to ${endpoint}, attempts left: ${retries - 1}`);
                    await new Promise((resolve)=>setTimeout(resolve, 1000)); // Wait 1s before retry
                    return this.request(endpoint, config, retries - 1);
                }
                throw new Error(error.message || `Erreur HTTP: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error('Timeout: La requête a pris trop de temps');
            }
            // Retry on network errors
            if (retries > 0 && error instanceof TypeError) {
                console.warn(`Network error, retrying ${endpoint}, attempts left: ${retries - 1}`);
                await new Promise((resolve)=>setTimeout(resolve, 1000));
                return this.request(endpoint, config, retries - 1);
            }
            throw error;
        }
    }
    async get(endpoint, params) {
        return this.request(endpoint, {
            method: "GET",
            params
        });
    }
    async post(endpoint, data, params) {
        return this.request(endpoint, {
            method: "POST",
            body: data ? JSON.stringify(data) : undefined,
            params
        });
    }
    async put(endpoint, data, params) {
        return this.request(endpoint, {
            method: "PUT",
            body: data ? JSON.stringify(data) : undefined,
            params
        });
    }
    async delete(endpoint, params) {
        return this.request(endpoint, {
            method: "DELETE",
            params
        });
    }
}
const apiClient = new ApiClient(API_BASE_URL);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/contexts/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check for existing session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const token = localStorage.getItem("tj-track-token");
            const savedUser = localStorage.getItem("tj-track-user");
            console.log('Auth init - token:', !!token, 'savedUser:', !!savedUser);
            if (token && savedUser) {
                try {
                    const parsedUser = JSON.parse(savedUser);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setToken(token);
                    setUser(parsedUser);
                    document.cookie = `tj-track-token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
                    console.log('Auth restored:', parsedUser);
                } catch  {
                    localStorage.removeItem("tj-track-token");
                    localStorage.removeItem("tj-track-user");
                    document.cookie = 'tj-track-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    console.log('Auth restore failed');
                }
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    // Debug: Log user state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            console.log('Auth state changed - user:', user ? 'logged in' : 'not logged in', 'isAuthenticated:', !!user);
        }
    }["AuthProvider.useEffect"], [
        user
    ]);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (credentials)=>{
            setIsLoading(true);
            console.log("Login attempt with:", credentials.email);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/login", credentials);
                if (response.token) {
                    const user = {
                        userId: response.email,
                        name: response.name,
                        email: response.email,
                        isAccountVerified: true,
                        isApproved: true,
                        roles: response.roles
                    };
                    localStorage.setItem("tj-track-token", response.token);
                    localStorage.setItem("tj-track-user", JSON.stringify(user));
                    document.cookie = `tj-track-token=${response.token}; path=/; max-age=${7 * 24 * 60 * 60}`;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setToken(response.token);
                    setUser(user);
                }
            } catch (error) {
                console.error("Login error:", error);
                throw error;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[login]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[register]": async (data)=>{
            setIsLoading(true);
            console.log("Register attempt:", data.email, data.role);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/register", data);
            } catch (error) {
                console.error("Register error:", error);
                throw error;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[register]"], []);
    const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[verifyOtp]": async (email, otp)=>{
            setIsLoading(true);
            console.log("Verify OTP for:", email);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/login-verify-otp", {
                    email,
                    otp
                });
                if (response.token) {
                    const user = {
                        userId: response.email,
                        name: response.name,
                        email: response.email,
                        isAccountVerified: true,
                        isApproved: true,
                        roles: response.roles
                    };
                    localStorage.setItem("tj-track-token", response.token);
                    localStorage.setItem("tj-track-user", JSON.stringify(user));
                    document.cookie = `tj-track-token=${response.token}; path=/; max-age=${7 * 24 * 60 * 60}`;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setToken(response.token);
                    setUser(user);
                }
            } catch (error) {
                console.error("Verify OTP error:", error);
                throw error;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[verifyOtp]"], []);
    const sendResetOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[sendResetOtp]": async (email)=>{
            console.log("Send reset OTP to:", email);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/send-reset-otp", undefined, {
                email
            });
        }
    }["AuthProvider.useCallback[sendResetOtp]"], []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[resetPassword]": async (email, otp, newPassword)=>{
            console.log("Reset password for:", email);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/reset-password", {
                email,
                otp,
                newPassword
            });
        }
    }["AuthProvider.useCallback[resetPassword]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            console.log("Logout");
            localStorage.removeItem("tj-track-token");
            localStorage.removeItem("tj-track-user");
            document.cookie = 'tj-track-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].setToken(null);
            setUser(null);
            if ("TURBOPACK compile-time truthy", 1) {
                window.location.href = '/';
            }
        }
    }["AuthProvider.useCallback[logout]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            isLoading,
            login,
            register,
            logout,
            verifyOtp,
            sendResetOtp,
            resetPassword
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/contexts/auth-context.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "VTZnjwvtza/YnO6mNpXwmnFqFwo=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/contexts/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/contexts/auth-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LOCAL_CART_KEY = "tj-track-cart";
function CartProvider({ children }) {
    _s();
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [localItems, setLocalItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const refreshCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[refreshCart]": async ()=>{
            if (!isAuthenticated || !user?.email) {
                setLocalItems([]);
                return;
            }
            setIsLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/panier", {
                    userEmail: user.email
                });
                if (data?.items) {
                    setLocalItems(data.items);
                } else {
                    setLocalItems([]);
                }
            } catch (error) {
                // If user not found (400 error), work offline
                if (error?.message?.includes('400')) {
                    console.warn('User not found in database, working offline');
                    setLocalItems([]);
                    return;
                }
                console.warn('Backend non disponible, utilisation du cache local:', error);
                try {
                    const cached = localStorage.getItem(LOCAL_CART_KEY);
                    if (cached) {
                        const cachedItems = JSON.parse(cached);
                        setLocalItems(cachedItems);
                    } else {
                        setLocalItems([]);
                    }
                } catch  {
                    setLocalItems([]);
                }
            } finally{
                setIsLoading(false);
            }
        }
    }["CartProvider.useCallback[refreshCart]"], [
        isAuthenticated,
        user?.email
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (isAuthenticated && user?.email) {
                refreshCart();
            } else {
                setLocalItems([]);
                localStorage.removeItem(LOCAL_CART_KEY);
            }
        }
    }["CartProvider.useEffect"], [
        isAuthenticated,
        user?.email,
        refreshCart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(localItems));
            }
        }
    }["CartProvider.useEffect"], [
        localItems
    ]);
    const items = localItems;
    const totalItems = localItems.reduce((sum, item)=>sum + item.quantite, 0);
    const totalAmount = localItems.reduce((sum, item)=>sum + item.sousTotal, 0);
    const montantHT = totalAmount * 0.8095;
    const montantTVA = totalAmount * 0.1905;
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addItem]": async (articleIdOrItem, quantite, productInfo)=>{
            if (!isAuthenticated || !user?.email) {
                throw new Error('Vous devez être connecté pour ajouter au panier');
            }
            // Handle object parameter (PanierItemDto)
            if (typeof articleIdOrItem === 'object') {
                const item = articleIdOrItem;
                if (!item.articleId || !item.quantite || !item.prixUnitaire) {
                    throw new Error('Données article incomplètes');
                }
                const previousItems = [
                    ...localItems
                ];
                setLocalItems({
                    "CartProvider.useCallback[addItem]": (prev)=>{
                        const existingIndex = prev.findIndex({
                            "CartProvider.useCallback[addItem].existingIndex": (i)=>i.articleId === item.articleId
                        }["CartProvider.useCallback[addItem].existingIndex"]);
                        if (existingIndex >= 0) {
                            const updated = [
                                ...prev
                            ];
                            const newQuantite = updated[existingIndex].quantite + item.quantite;
                            updated[existingIndex] = {
                                ...updated[existingIndex],
                                quantite: newQuantite,
                                sousTotal: newQuantite * item.prixUnitaire
                            };
                            return updated;
                        }
                        return [
                            ...prev,
                            {
                                ...item,
                                id: Date.now()
                            }
                        ];
                    }
                }["CartProvider.useCallback[addItem]"]);
                try {
                    const request = {
                        articleId: item.articleId,
                        quantite: item.quantite
                    };
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/panier/ajouter", request, {
                        userEmail: user.email
                    });
                } catch (error) {
                    if (error?.message?.includes('400')) {
                        console.warn('User not found, working offline');
                        return; // Keep local changes
                    }
                    console.error('Erreur ajout panier:', error);
                    setLocalItems(previousItems);
                    throw error;
                }
                return;
            }
            // Handle separate parameters
            const articleId = articleIdOrItem;
            if (!quantite || !productInfo || quantite <= 0) {
                throw new Error("Quantité et informations produit requises");
            }
            const previousItems = [
                ...localItems
            ];
            const newItem = {
                id: Date.now(),
                articleId,
                articleCode: `ART-${articleId}`,
                articleNom: productInfo.name,
                articlePhoto: productInfo.image,
                quantite,
                prixUnitaire: productInfo.price,
                sousTotal: quantite * productInfo.price,
                stockDisponible: 100,
                disponible: true
            };
            setLocalItems({
                "CartProvider.useCallback[addItem]": (prev)=>{
                    const existingIndex = prev.findIndex({
                        "CartProvider.useCallback[addItem].existingIndex": (i)=>i.articleId === articleId
                    }["CartProvider.useCallback[addItem].existingIndex"]);
                    if (existingIndex >= 0) {
                        const updated = [
                            ...prev
                        ];
                        const newQuantite = updated[existingIndex].quantite + quantite;
                        updated[existingIndex] = {
                            ...updated[existingIndex],
                            quantite: newQuantite,
                            sousTotal: newQuantite * productInfo.price
                        };
                        return updated;
                    }
                    return [
                        ...prev,
                        newItem
                    ];
                }
            }["CartProvider.useCallback[addItem]"]);
            try {
                const request = {
                    articleId,
                    quantite
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/panier/ajouter", request, {
                    userEmail: user.email
                });
            } catch (error) {
                if (error?.message?.includes('400')) {
                    console.warn('User not found, working offline');
                    return; // Keep local changes
                }
                console.error('Erreur ajout panier:', error);
                setLocalItems(previousItems);
                throw error;
            }
        }
    }["CartProvider.useCallback[addItem]"], [
        isAuthenticated,
        user?.email,
        localItems
    ]);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeItem]": async (articleId)=>{
            if (!isAuthenticated || !user?.email) {
                throw new Error('Vous devez être connecté');
            }
            const previousItems = [
                ...localItems
            ];
            setLocalItems({
                "CartProvider.useCallback[removeItem]": (prev)=>prev.filter({
                        "CartProvider.useCallback[removeItem]": (i)=>i.articleId !== articleId
                    }["CartProvider.useCallback[removeItem]"])
            }["CartProvider.useCallback[removeItem]"]);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/panier/supprimer/${articleId}`, {
                    userEmail: user.email
                });
            } catch (error) {
                console.error('Erreur suppression article:', error);
                setLocalItems(previousItems);
                throw error;
            }
        }
    }["CartProvider.useCallback[removeItem]"], [
        isAuthenticated,
        user?.email,
        localItems
    ]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": async (articleId, quantite)=>{
            if (quantite <= 0) {
                return removeItem(articleId);
            }
            if (!isAuthenticated || !user?.email) {
                throw new Error('Vous devez être connecté');
            }
            const previousItems = [
                ...localItems
            ];
            setLocalItems({
                "CartProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "CartProvider.useCallback[updateQuantity]": (item)=>item.articleId === articleId ? {
                                ...item,
                                quantite,
                                sousTotal: quantite * item.prixUnitaire
                            } : item
                    }["CartProvider.useCallback[updateQuantity]"])
            }["CartProvider.useCallback[updateQuantity]"]);
            try {
                const request = {
                    articleId,
                    quantite
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put("/panier/modifier", request, {
                    userEmail: user.email
                });
            } catch (error) {
                console.error('Erreur modification quantité:', error);
                setLocalItems(previousItems);
                throw error;
            }
        }
    }["CartProvider.useCallback[updateQuantity]"], [
        isAuthenticated,
        user?.email,
        localItems,
        removeItem
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": async ()=>{
            setLocalItems([]);
            localStorage.removeItem(LOCAL_CART_KEY);
            if (isAuthenticated && user?.email) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete("/panier/vider", {
                        userEmail: user.email
                    });
                } catch (error) {
                // API sync failed
                }
            }
        }
    }["CartProvider.useCallback[clearCart]"], [
        isAuthenticated,
        user?.email
    ]);
    const openCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[openCart]": ()=>setIsOpen(true)
    }["CartProvider.useCallback[openCart]"], []);
    const closeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[closeCart]": ()=>setIsOpen(false)
    }["CartProvider.useCallback[closeCart]"], []);
    const toggleCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[toggleCart]": ()=>setIsOpen({
                "CartProvider.useCallback[toggleCart]": (prev)=>!prev
            }["CartProvider.useCallback[toggleCart]"])
    }["CartProvider.useCallback[toggleCart]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            isOpen,
            isLoading,
            totalItems,
            totalAmount,
            montantHT,
            montantTVA,
            addItem,
            updateQuantity,
            removeItem,
            clearCart,
            openCart,
            closeCart,
            toggleCart,
            refreshCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/contexts/cart-context.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "9LAucmDEn4fdkctSVMMlB2SswXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm opacity-90', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current', {
    variants: {
        variant: {
            default: 'bg-card text-card-foreground',
            destructive: 'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiErrorBoundary",
    ()=>ApiErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
"use client";
;
;
;
;
;
class ApiErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('API Error Boundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                variant: "destructive",
                className: "m-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                        children: "Erreur de connexion API"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                        className: "mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3",
                                children: "Une erreur s'est produite lors de la communication avec le serveur."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mb-3",
                                children: this.state.error?.message || "Erreur inconnue"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>{
                                    this.setState({
                                        hasError: false,
                                        error: undefined
                                    });
                                    window.location.reload();
                                },
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    "Réessayer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/lib/query-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            retry: (failureCount, error)=>{
                // Don't retry on 4xx errors (client errors)
                if (error instanceof Error && error.message.includes('HTTP: 4')) {
                    return false;
                }
                // Retry up to 3 times for other errors
                return failureCount < 3;
            },
            retryDelay: (attemptIndex)=>Math.min(1000 * 2 ** attemptIndex, 30000),
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true
        },
        mutations: {
            retry: (failureCount, error)=>{
                // Don't retry mutations on client errors
                if (error instanceof Error && error.message.includes('HTTP: 4')) {
                    return false;
                }
                return failureCount < 2;
            },
            onError: (error)=>{
                console.error('Mutation error:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Une erreur s'est produite lors de l'opération");
            }
        }
    }
});
// Global error handler for queries
queryClient.setMutationDefaults([
    '*'
], {
    onError: (error)=>{
        console.error('Query error:', error);
        if (error instanceof Error && !error.message.includes('HTTP: 4')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Erreur de connexion au serveur");
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/contexts/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/ui/toaster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$api$2d$error$2d$boundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/components/api-error-boundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tj-track (2)/tj-track/lib/query-client.ts [app-client] (ecmascript)");
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
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$lib$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$api$2d$error$2d$boundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiErrorBoundary"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                        children: [
                            children,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                                position: "top-right",
                                richColors: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tj$2d$track__$28$2$292f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {}, void 0, false, {
                fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
                lineNumber: 26,
                columnNumber: 50
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tj-track (2)/tj-track/components/providers.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_tj-track%20%282%29_tj-track_6b37dddf._.js.map
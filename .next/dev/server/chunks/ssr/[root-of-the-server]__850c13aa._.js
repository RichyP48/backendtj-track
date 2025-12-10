module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/e-Commerce/next/tj-track/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEMO_MODE",
    ()=>DEMO_MODE,
    "apiClient",
    ()=>apiClient
]);
const DEMO_MODE = true // Set to true for demo/development without backend
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1.0";
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
    async request(endpoint, config = {}) {
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
        const response = await fetch(url, {
            ...fetchConfig,
            headers
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    message: "Erreur réseau"
                }));
            throw new Error(error.message || `Erreur HTTP: ${response.status}`);
        }
        return response.json();
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
}),
"[project]/Desktop/e-Commerce/next/tj-track/contexts/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const demoUsers = {
    "client@demo.com": {
        password: "password123",
        user: {
            userId: "demo-client-1",
            name: "Client Demo",
            email: "client@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "CLIENT"
            ],
            phoneNumber: "+237600000001",
            town: "Douala",
            address: "Akwa"
        }
    },
    "merchant@demo.com": {
        password: "password123",
        user: {
            userId: "demo-merchant-1",
            name: "Marchand Demo",
            email: "merchant@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "COMMERCANT"
            ],
            phoneNumber: "+237600000002",
            enterpriseName: "Ma Boutique Demo",
            town: "Yaoundé",
            address: "Centre-ville"
        }
    },
    "admin@demo.com": {
        password: "password123",
        user: {
            userId: "demo-admin-1",
            name: "Admin Demo",
            email: "admin@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "ADMIN"
            ],
            phoneNumber: "+237600000003",
            town: "Douala",
            address: "Bonanjo"
        }
    },
    "supplier@demo.com": {
        password: "password123",
        user: {
            userId: "demo-supplier-1",
            name: "Fournisseur Demo",
            email: "supplier@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "FOURNISSEUR"
            ],
            phoneNumber: "+237600000004",
            enterpriseName: "Fournitures Pro SARL",
            town: "Douala",
            address: "Zone Industrielle Bassa"
        }
    },
    "livreur@demo.com": {
        password: "password123",
        user: {
            userId: "demo-livreur-1",
            name: "Livreur Demo",
            email: "livreur@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "LIVREUR"
            ],
            phoneNumber: "+237600000005",
            town: "Yaoundé",
            address: "Mvan"
        }
    },
    "gestionnaire@demo.com": {
        password: "password123",
        user: {
            userId: "demo-gestionnaire-1",
            name: "Gestionnaire Stock Demo",
            email: "gestionnaire@demo.com",
            isAccountVerified: true,
            isApproved: true,
            roles: [
                "GESTIONNAIRE_STOCK"
            ],
            phoneNumber: "+237600000006",
            town: "Douala",
            address: "Bonapriso"
        }
    }
};
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check for existing session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem("tj-track-token");
        const savedUser = localStorage.getItem("tj-track-user");
        if (token && savedUser) {
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(token);
                setUser(JSON.parse(savedUser));
            } catch  {
                localStorage.removeItem("tj-track-token");
                localStorage.removeItem("tj-track-user");
            }
        }
        setIsLoading(false);
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (credentials)=>{
        setIsLoading(true);
        console.log("[v0] Login attempt with:", credentials.email);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) {
                await new Promise((resolve)=>setTimeout(resolve, 800)); // Simule latence réseau
                const demoUser = demoUsers[credentials.email];
                if (demoUser && demoUser.password === credentials.password) {
                    const token = "demo-token-" + Date.now();
                    localStorage.setItem("tj-track-token", token);
                    localStorage.setItem("tj-track-user", JSON.stringify(demoUser.user));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(token);
                    setUser(demoUser.user);
                    console.log("[v0] Demo login successful");
                    return;
                }
                // Permet aussi de se connecter avec n'importe quel email en mode démo
                if (credentials.password.length >= 8) {
                    const newUser = {
                        userId: "user-" + Date.now(),
                        name: credentials.email.split("@")[0],
                        email: credentials.email,
                        isAccountVerified: true,
                        isApproved: true,
                        roles: [
                            "CLIENT"
                        ]
                    };
                    const token = "demo-token-" + Date.now();
                    localStorage.setItem("tj-track-token", token);
                    localStorage.setItem("tj-track-user", JSON.stringify(newUser));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(token);
                    setUser(newUser);
                    console.log("[v0] Demo login with new user successful");
                    return;
                }
                throw new Error("Email ou mot de passe incorrect");
            }
            // Mode production - appel API réel
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/login", credentials);
            if (response.token) {
                localStorage.setItem("tj-track-token", response.token);
                localStorage.setItem("tj-track-user", JSON.stringify(response.user));
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(response.token);
                setUser(response.user);
            }
        } catch (error) {
            console.error("[v0] Login error:", error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        setIsLoading(true);
        console.log("[v0] Register attempt:", data.email, data.role);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) {
                await new Promise((resolve)=>setTimeout(resolve, 800));
                console.log("[v0] Demo registration successful, OTP sent");
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/register", data);
        } catch (error) {
            console.error("[v0] Register error:", error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, otp)=>{
        setIsLoading(true);
        console.log("[v0] Verify OTP for:", email);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) {
                await new Promise((resolve)=>setTimeout(resolve, 800));
                if (otp.length === 6) {
                    const newUser = {
                        userId: "user-" + Date.now(),
                        name: email.split("@")[0],
                        email: email,
                        isAccountVerified: true,
                        isApproved: true,
                        roles: [
                            "CLIENT"
                        ]
                    };
                    const token = "demo-token-" + Date.now();
                    localStorage.setItem("tj-track-token", token);
                    localStorage.setItem("tj-track-user", JSON.stringify(newUser));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(token);
                    setUser(newUser);
                    console.log("[v0] Demo OTP verification successful");
                    return;
                }
                throw new Error("Code OTP invalide");
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/verify-otp", {
                email,
                otp
            });
            if (response.token) {
                localStorage.setItem("tj-track-token", response.token);
                localStorage.setItem("tj-track-user", JSON.stringify(response.user));
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(response.token);
                setUser(response.user);
            }
        } catch (error) {
            console.error("[v0] Verify OTP error:", error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const sendResetOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email)=>{
        console.log("[v0] Send reset OTP to:", email);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) {
            await new Promise((resolve)=>setTimeout(resolve, 800));
            console.log("[v0] Demo reset OTP sent");
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/send-reset-otp", undefined, {
            email
        });
    }, []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, otp, newPassword)=>{
        console.log("[v0] Reset password for:", email);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) {
            await new Promise((resolve)=>setTimeout(resolve, 800));
            console.log("[v0] Demo password reset successful");
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/reset-password", {
            email,
            otp,
            newPassword
        });
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log("[v0] Logout");
        localStorage.removeItem("tj-track-token");
        localStorage.removeItem("tj-track-user");
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setToken(null);
        setUser(null);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/contexts/auth-context.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/Desktop/e-Commerce/next/tj-track/contexts/cart-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/contexts/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LOCAL_CART_KEY = "tj-track-cart";
function CartProvider({ children }) {
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [localItems, setLocalItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        localItems
    ]);
    const items = localItems;
    const totalItems = localItems.reduce((sum, item)=>sum + item.quantite, 0);
    const totalAmount = localItems.reduce((sum, item)=>sum + item.sousTotal, 0);
    const montantHT = totalAmount * 0.8095;
    const montantTVA = totalAmount * 0.1905;
    const refreshCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // In demo mode, cart is already in localStorage
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"]) return;
        if (!isAuthenticated || !user?.email) return;
        setIsLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/panier", {
                userEmail: user.email
            });
            if (data?.items) {
                setLocalItems(data.items);
            }
        } catch (error) {
        // Silently fail - use local cart
        } finally{
            setIsLoading(false);
        }
    }, [
        isAuthenticated,
        user?.email
    ]);
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (articleId, quantite, productInfo)=>{
        if (!productInfo) {
            throw new Error("Product info required");
        }
        setLocalItems((prev)=>{
            const existingIndex = prev.findIndex((i)=>i.articleId === articleId);
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
                {
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
                }
            ];
        });
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"] && isAuthenticated && user?.email) {
            try {
                const request = {
                    articleId,
                    quantite
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/panier/ajouter", request, {
                    userEmail: user.email
                });
            } catch (error) {
            // API sync failed, but local cart is updated
            }
        }
    }, [
        isAuthenticated,
        user?.email
    ]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (articleId, quantite)=>{
        if (quantite <= 0) {
            return removeItem(articleId);
        }
        setLocalItems((prev)=>prev.map((item)=>item.articleId === articleId ? {
                    ...item,
                    quantite,
                    sousTotal: quantite * item.prixUnitaire
                } : item));
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"] && isAuthenticated && user?.email) {
            try {
                const request = {
                    articleId,
                    quantite
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put("/panier/modifier", request, {
                    userEmail: user.email
                });
            } catch (error) {
            // API sync failed
            }
        }
    }, [
        isAuthenticated,
        user?.email
    ]);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (articleId)=>{
        setLocalItems((prev)=>prev.filter((i)=>i.articleId !== articleId));
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"] && isAuthenticated && user?.email) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`/panier/supprimer/${articleId}`, {
                    userEmail: user.email
                });
            } catch (error) {
            // API sync failed
            }
        }
    }, [
        isAuthenticated,
        user?.email
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLocalItems([]);
        localStorage.removeItem(LOCAL_CART_KEY);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_MODE"] && isAuthenticated && user?.email) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete("/panier/vider", {
                    userEmail: user.email
                });
            } catch (error) {
            // API sync failed
            }
        }
    }, [
        isAuthenticated,
        user?.email
    ]);
    const openCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(true), []);
    const closeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(false), []);
    const toggleCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen((prev)=>!prev), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
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
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/contexts/cart-context.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
}),
"[project]/Desktop/e-Commerce/next/tj-track/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
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
;
}),
"[project]/Desktop/e-Commerce/next/tj-track/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
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
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm opacity-90', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/components/ui/toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/e-Commerce/next/tj-track/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/contexts/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/e-Commerce/next/tj-track/components/ui/toaster.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Providers({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                    refetchOnWindowFocus: false
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartProvider"], {
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$e$2d$Commerce$2f$next$2f$tj$2d$track$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/providers.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/providers.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/providers.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/e-Commerce/next/tj-track/components/providers.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__850c13aa._.js.map
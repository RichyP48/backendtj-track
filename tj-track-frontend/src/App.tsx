import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { useAuthStore } from './store/authStore'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Pages publiques
import LandingPage from './pages/public/LandingPage'
import CataloguePage from './pages/public/CataloguePage'
import ProductDetailPage from './pages/public/ProductDetailPage'
import CategoriesPage from './pages/public/CategoriesPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import VerifyOtpPage from './pages/auth/VerifyOtpPage'

// Pages client
import ClientDashboard from './pages/client/ClientDashboard'
import CartPage from './pages/client/CartPage'
import CheckoutPage from './pages/client/CheckoutPage'
import OrdersPage from './pages/client/OrdersPage'
import OrderDetailPage from './pages/client/OrderDetailPage'
import FavoritesPage from './pages/client/FavoritesPage'
import ProfilePage from './pages/client/ProfilePage'

// Pages merchant
import MerchantDashboard from './pages/merchant/MerchantDashboard'
import MerchantProductsPage from './pages/merchant/MerchantProductsPage'
import MerchantStockPage from './pages/merchant/MerchantStockPage'
import MerchantOrdersPage from './pages/merchant/MerchantOrdersPage'
import MerchantAdvertisingPage from './pages/merchant/MerchantAdvertisingPage'
import MerchantStatsPage from './pages/merchant/MerchantStatsPage'

// Pages supplier
import SupplierDashboard from './pages/supplier/SupplierDashboard'
import SupplierArticlesPage from './pages/supplier/SupplierArticlesPage'
import SupplierOrdersPage from './pages/supplier/SupplierOrdersPage'

// Pages admin
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminPendingUsersPage from './pages/admin/AdminPendingUsersPage'
import AdminEnterprisesPage from './pages/admin/AdminEnterprisesPage'
import AdminFinancePage from './pages/admin/AdminFinancePage'

// Composants de protection des routes
import ProtectedRoute from './components/common/ProtectedRoute'
import { UserRole } from './types/api'

// Configuration React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="catalogue" element={<CataloguePage />} />
              <Route path="catalogue/:id" element={<ProductDetailPage />} />
              <Route path="categories" element={<CategoriesPage />} />
            </Route>

            {/* Routes d'authentification */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="reset-password" element={<ResetPasswordPage />} />
              <Route path="verify-otp" element={<VerifyOtpPage />} />
            </Route>

            {/* Routes protégées - Client */}
            <Route path="/dashboard" element={
              <ProtectedRoute roles={[UserRole.CLIENT]}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<ClientDashboard />} />
              <Route path="panier" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="commandes" element={<OrdersPage />} />
              <Route path="commandes/:id" element={<OrderDetailPage />} />
              <Route path="favoris" element={<FavoritesPage />} />
              <Route path="profil" element={<ProfilePage />} />
            </Route>

            {/* Routes protégées - Merchant */}
            <Route path="/merchant" element={
              <ProtectedRoute roles={[UserRole.COMMERCANT]}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<MerchantDashboard />} />
              <Route path="produits" element={<MerchantProductsPage />} />
              <Route path="stock" element={<MerchantStockPage />} />
              <Route path="commandes" element={<MerchantOrdersPage />} />
              <Route path="publicite" element={<MerchantAdvertisingPage />} />
              <Route path="statistiques" element={<MerchantStatsPage />} />
            </Route>

            {/* Routes protégées - Supplier */}
            <Route path="/supplier" element={
              <ProtectedRoute roles={[UserRole.FOURNISSEUR]}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<SupplierDashboard />} />
              <Route path="articles" element={<SupplierArticlesPage />} />
              <Route path="commandes" element={<SupplierOrdersPage />} />
            </Route>

            {/* Routes protégées - Admin */}
            <Route path="/admin" element={
              <ProtectedRoute roles={[UserRole.ADMIN]}>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="utilisateurs" element={<AdminUsersPage />} />
              <Route path="utilisateurs/pending" element={<AdminPendingUsersPage />} />
              <Route path="entreprises" element={<AdminEnterprisesPage />} />
              <Route path="finance" element={<AdminFinancePage />} />
            </Route>

            {/* Redirection par défaut */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Notifications globales */}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
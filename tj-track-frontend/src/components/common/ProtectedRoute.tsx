import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { UserRole } from '../../types/api'

interface ProtectedRouteProps {
  children: React.ReactNode
  roles?: UserRole[]
  requireApproval?: boolean
}

export default function ProtectedRoute({ 
  children, 
  roles = [], 
  requireApproval = true 
}: ProtectedRouteProps) {
  const { isAuthenticated, user, hasRole } = useAuthStore()
  const location = useLocation()

  // Rediriger vers login si non authentifié
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  // Vérifier si le compte est vérifié
  if (!user.isAccountVerified) {
    return <Navigate to="/auth/verify-otp" state={{ from: location }} replace />
  }

  // Vérifier si le compte est approuvé (pour certains rôles)
  if (requireApproval && !user.isApproved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md mx-auto text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Compte en attente d'approbation
          </h2>
          <p className="text-muted-foreground mb-4">
            Votre compte a été créé avec succès mais doit être approuvé par un administrateur avant que vous puissiez accéder à la plateforme.
          </p>
          <p className="text-sm text-muted-foreground">
            Vous recevrez un email de confirmation une fois votre compte approuvé.
          </p>
          <button
            onClick={() => useAuthStore.getState().logout()}
            className="mt-4 px-4 py-2 text-sm text-primary hover:text-primary/80 underline"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    )
  }

  // Vérifier les rôles requis
  if (roles.length > 0) {
    const hasRequiredRole = roles.some(role => hasRole(role))
    
    if (!hasRequiredRole) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md mx-auto text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Accès non autorisé
            </h2>
            <p className="text-muted-foreground mb-4">
              Vous n'avez pas les permissions nécessaires pour accéder à cette page.
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      )
    }
  }

  return <>{children}</>
}
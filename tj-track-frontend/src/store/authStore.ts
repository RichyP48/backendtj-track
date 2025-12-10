import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserRole, ProfileResponse } from '../types/api'

interface AuthState {
  user: ProfileResponse | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  login: (user: ProfileResponse, token: string) => void
  logout: () => void
  updateUser: (user: Partial<ProfileResponse>) => void
  setLoading: (loading: boolean) => void
  
  // Getters
  hasRole: (role: UserRole) => boolean
  isAdmin: () => boolean
  isMerchant: () => boolean
  isSupplier: () => boolean
  isClient: () => boolean
  isDelivery: () => boolean
  isManager: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: (user: ProfileResponse, token: string) => {
        localStorage.setItem('token', token)
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        })
      },

      logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        })
      },

      updateUser: (userData: Partial<ProfileResponse>) => {
        const { user } = get()
        if (user) {
          set({
            user: { ...user, ...userData },
          })
        }
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },

      hasRole: (role: UserRole) => {
        const { user } = get()
        return user?.roles?.includes(role) || false
      },

      isAdmin: () => {
        const { hasRole } = get()
        return hasRole(UserRole.ADMIN)
      },

      isMerchant: () => {
        const { hasRole } = get()
        return hasRole(UserRole.COMMERCANT)
      },

      isSupplier: () => {
        const { hasRole } = get()
        return hasRole(UserRole.FOURNISSEUR)
      },

      isClient: () => {
        const { hasRole } = get()
        return hasRole(UserRole.CLIENT)
      },

      isDelivery: () => {
        const { hasRole } = get()
        return hasRole(UserRole.LIVREUR)
      },

      isManager: () => {
        const { hasRole } = get()
        return hasRole(UserRole.MANAGER)
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
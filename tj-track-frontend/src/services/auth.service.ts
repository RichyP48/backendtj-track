import api from '../lib/axios'
import { AuthRequest, ProfileRequest, ProfileResponse, ResetPasswordRequest } from '../types/api'
import { mockUsers, isDevelopmentMode } from '../lib/mockData'

export const authService = {
  // Connexion
  async login(credentials: AuthRequest) {
    // Mode développement avec données mockées
    if (isDevelopmentMode) {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simuler délai réseau
      
      const mockUser = mockUsers[credentials.email as keyof typeof mockUsers]
      if (mockUser && mockUser.password === credentials.password) {
        return {
          success: true,
          message: 'Connexion réussie',
          data: {
            user: mockUser.user,
            token: mockUser.token
          }
        }
      } else {
        throw new Error('Email ou mot de passe incorrect')
      }
    }
    
    // Mode production avec API réelle
    const response = await api.post('/login', credentials)
    return response.data
  },

  // Inscription
  async register(userData: ProfileRequest) {
    const response = await api.post('/register', userData)
    return response.data
  },

  // Vérification OTP d'inscription
  async verifyRegistration(data: { email: string; otp: string }) {
    const response = await api.post('/register-otp', data)
    return response.data
  },

  // Vérification email
  async verifyEmail(data: { email: string; otp: string }) {
    try {
      const response = await api.post('/verify-otp', data)
      return response.data
    } catch (error: any) {
      console.error('Verify OTP error:', error.response?.data || error.message)
      throw error
    }
  },

  // Envoi OTP de vérification
  async sendVerifyOtp(email: string) {
    const response = await api.post('/send-otp', null, {
      params: { email }
    })
    return response.data
  },

  // Envoi OTP de reset password
  async sendResetOtp(email: string) {
    const response = await api.post('/send-reset-otp', null, {
      params: { email }
    })
    return response.data
  },

  // Reset password
  async resetPassword(data: ResetPasswordRequest) {
    const response = await api.post('/reset-password', data)
    return response.data
  },

  // Vérifier si l'utilisateur est authentifié
  async isAuthenticated(email: string) {
    const response = await api.get('/is-authenticated', {
      params: { email }
    })
    return response.data
  },

  // Test endpoint public
  async testPublic() {
    const response = await api.get('/test-public')
    return response.data
  },

  // Refresh token (si implémenté côté backend)
  async refreshToken(refreshToken: string) {
    const response = await api.post('/auth/refresh', { refreshToken })
    return response.data
  },

  // Logout (côté client principalement)
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
  }
}
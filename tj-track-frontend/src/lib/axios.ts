import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'sonner'

// Configuration de base d'Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1.0',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Intercepteur de requête pour ajouter le token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Intercepteur de réponse pour gérer les erreurs
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any

    // Gestion du token expiré (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        // Tentative de refresh du token
        const refreshToken = localStorage.getItem('refreshToken')
        if (refreshToken) {
          const response = await axios.post('/auth/refresh', {
            refreshToken
          })
          
          const { token } = response.data
          localStorage.setItem('token', token)
          
          // Retry la requête originale
          originalRequest.headers.Authorization = `Bearer ${token}`
          return api(originalRequest)
        }
      } catch (refreshError) {
        // Échec du refresh, rediriger vers login
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    // Gestion des autres erreurs
    const errorMessage = getErrorMessage(error)
    
    // Afficher une notification d'erreur
    if (error.response?.status !== 401) {
      toast.error(errorMessage)
    }

    return Promise.reject(error)
  }
)

// Fonction pour extraire le message d'erreur
function getErrorMessage(error: AxiosError): string {
  if (error.response?.data) {
    const data = error.response.data as any
    
    // Si l'API retourne un message d'erreur structuré
    if (data.error) return data.error
    if (data.message) return data.message
    
    // Messages d'erreur par code de statut
    switch (error.response.status) {
      case 400:
        return 'Données invalides'
      case 401:
        return 'Non autorisé'
      case 403:
        return 'Accès interdit'
      case 404:
        return 'Ressource non trouvée'
      case 409:
        return 'Conflit de données'
      case 422:
        return 'Données non valides'
      case 500:
        return 'Erreur serveur interne'
      default:
        return 'Une erreur est survenue'
    }
  }
  
  if (error.request) {
    return 'Erreur de connexion au serveur'
  }
  
  return error.message || 'Une erreur inattendue est survenue'
}

export default api
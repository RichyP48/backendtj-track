import api from '../lib/axios'
import { ArticleDto, CategorieDto, ProduitDetailDto, ApiResponse } from '../types/api'

export const catalogueService = {
  // Récupérer tous les articles avec pagination et filtres
  async getArticles(params?: {
    page?: number
    size?: number
    sortBy?: string
    sortDir?: string
    categorieId?: number
    search?: string
  }) {
    const response = await api.get<ArticleDto[]>('/catalogue/articles', { params })
    return response.data
  },

  // Récupérer les articles populaires
  async getArticlesPopulaires() {
    const response = await api.get<ArticleDto[]>('/catalogue/articles/populaires')
    return response.data
  },

  // Récupérer les nouveautés
  async getNouveautes() {
    const response = await api.get<ArticleDto[]>('/catalogue/articles/nouveautes')
    return response.data
  },

  // Récupérer le détail d'un produit
  async getProduitDetail(id: number, userId: string) {
    const response = await api.get<ProduitDetailDto>(`/catalogue/produits/${id}`, {
      params: { userId }
    })
    return response.data
  },

  // Récupérer les produits en avant
  async getProduitsEnAvant() {
    const response = await api.get<ApiResponse<any[]>>('/catalogue/produits-en-avant')
    return response.data
  },

  // Récupérer les catégories
  async getCategories() {
    const response = await api.get<CategorieDto[]>('/catalogue/categories')
    return response.data
  },

  // Récupérer le carrousel d'accueil
  async getCarrouselAccueil() {
    const response = await api.get<ApiResponse<any[]>>('/catalogue/carrousel-accueil')
    return response.data
  },

  // Récupérer la bannière principale
  async getBannierePrincipale() {
    const response = await api.get<ApiResponse<any[]>>('/catalogue/banniere-principale')
    return response.data
  },

  // Ajouter un like à un produit
  async ajouterLike(id: number, userId: string) {
    const response = await api.post(`/catalogue/produits/${id}/like`, null, {
      params: { userId }
    })
    return response.data
  },

  // Ajouter aux favoris
  async ajouterAuxFavoris(id: number, userId: string) {
    const response = await api.post(`/catalogue/produits/${id}/favoris`, null, {
      params: { userId }
    })
    return response.data
  },

  // Recherche de produits
  async searchProduits(query: string, filters?: {
    categorieId?: number
    prixMin?: number
    prixMax?: number
    sortBy?: string
  }) {
    const params = {
      search: query,
      ...filters
    }
    const response = await api.get<ArticleDto[]>('/catalogue/articles', { params })
    return response.data
  },

  // Récupérer les produits par catégorie
  async getProduitsByCategorie(categorieId: number, params?: {
    page?: number
    size?: number
    sortBy?: string
    sortDir?: string
  }) {
    const response = await api.get<ArticleDto[]>('/catalogue/articles', {
      params: { categorieId, ...params }
    })
    return response.data
  }
}
import api from '../lib/axios'
import { PanierDto, PanierRequest, ApiResponse } from '../types/api'

export const panierService = {
  // Récupérer le panier de l'utilisateur
  async getPanier(userEmail: string) {
    const response = await api.get<PanierDto>('/panier', {
      params: { userEmail }
    })
    return response.data
  },

  // Ajouter un article au panier
  async ajouterArticle(userEmail: string, item: PanierRequest) {
    const response = await api.post<ApiResponse<PanierDto>>('/panier/ajouter', item, {
      params: { userEmail }
    })
    return response.data
  },

  // Modifier la quantité d'un article
  async modifierQuantite(userEmail: string, item: PanierRequest) {
    const response = await api.put<ApiResponse<PanierDto>>('/panier/modifier', item, {
      params: { userEmail }
    })
    return response.data
  },

  // Supprimer un article du panier
  async supprimerArticle(userEmail: string, articleId: number) {
    const response = await api.delete<PanierDto>(`/panier/supprimer/${articleId}`, {
      params: { userEmail }
    })
    return response.data
  },

  // Vider le panier
  async viderPanier(userEmail: string) {
    const response = await api.delete('/panier/vider', {
      params: { userEmail }
    })
    return response.data
  },

  // Calculer les totaux du panier (utilitaire côté client)
  calculateTotals(panier: PanierDto) {
    if (!panier.items || panier.items.length === 0) {
      return {
        totalItems: 0,
        montantHT: 0,
        montantTVA: 0,
        montantTotal: 0
      }
    }

    const totalItems = panier.items.reduce((sum, item) => sum + item.quantite, 0)
    const montantTotal = panier.items.reduce((sum, item) => sum + (item.sousTotal || 0), 0)
    
    // Calcul approximatif HT/TVA (20% par défaut)
    const montantHT = montantTotal / 1.2
    const montantTVA = montantTotal - montantHT

    return {
      totalItems,
      montantHT: Math.round(montantHT * 100) / 100,
      montantTVA: Math.round(montantTVA * 100) / 100,
      montantTotal: Math.round(montantTotal * 100) / 100
    }
  },

  // Vérifier la disponibilité des articles du panier
  async verifierDisponibilite(panier: PanierDto) {
    // Cette fonction pourrait faire des appels API pour vérifier le stock
    // Pour l'instant, on utilise les données déjà présentes
    return panier.items?.map(item => ({
      ...item,
      disponible: (item.stockDisponible || 0) >= item.quantite
    })) || []
  }
}
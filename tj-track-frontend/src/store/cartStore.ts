import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PanierDto, PanierItemDto } from '../types/api'
import { calculateTTC, calculateHT, calculateTVA } from '../lib/utils'

interface CartState {
  cart: PanierDto | null
  isLoading: boolean
  
  // Actions
  setCart: (cart: PanierDto) => void
  addItem: (item: PanierItemDto) => void
  updateItemQuantity: (articleId: number, quantity: number) => void
  removeItem: (articleId: number) => void
  clearCart: () => void
  setLoading: (loading: boolean) => void
  
  // Getters
  getTotalItems: () => number
  getTotalPrice: () => number
  getItemQuantity: (articleId: number) => number
  isItemInCart: (articleId: number) => boolean
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      isLoading: false,

      setCart: (cart: PanierDto) => {
        set({ cart })
      },

      addItem: (newItem: PanierItemDto) => {
        const { cart } = get()
        
        if (!cart) {
          set({
            cart: {
              items: [newItem],
              totalItems: newItem.quantite,
              montantHT: calculateHT(newItem.sousTotal || 0),
              montantTVA: calculateTVA(calculateHT(newItem.sousTotal || 0)),
              montantTotal: newItem.sousTotal || 0,
            }
          })
          return
        }

        const existingItemIndex = cart.items?.findIndex(
          item => item.articleId === newItem.articleId
        )

        let updatedItems: PanierItemDto[]

        if (existingItemIndex !== undefined && existingItemIndex >= 0) {
          // Mettre à jour l'item existant
          updatedItems = cart.items?.map((item, index) => 
            index === existingItemIndex 
              ? { 
                  ...item, 
                  quantite: item.quantite + newItem.quantite,
                  sousTotal: (item.quantite + newItem.quantite) * (item.prixUnitaire || 0)
                }
              : item
          ) || []
        } else {
          // Ajouter un nouvel item
          updatedItems = [...(cart.items || []), newItem]
        }

        // Recalculer les totaux
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantite, 0)
        const montantTotal = updatedItems.reduce((sum, item) => sum + (item.sousTotal || 0), 0)
        const montantHT = calculateHT(montantTotal)
        const montantTVA = calculateTVA(montantHT)

        set({
          cart: {
            ...cart,
            items: updatedItems,
            totalItems,
            montantHT,
            montantTVA,
            montantTotal,
          }
        })
      },

      updateItemQuantity: (articleId: number, quantity: number) => {
        const { cart } = get()
        if (!cart?.items) return

        if (quantity <= 0) {
          get().removeItem(articleId)
          return
        }

        const updatedItems = cart.items.map(item => 
          item.articleId === articleId 
            ? { 
                ...item, 
                quantite: quantity,
                sousTotal: quantity * (item.prixUnitaire || 0)
              }
            : item
        )

        // Recalculer les totaux
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantite, 0)
        const montantTotal = updatedItems.reduce((sum, item) => sum + (item.sousTotal || 0), 0)
        const montantHT = calculateHT(montantTotal)
        const montantTVA = calculateTVA(montantHT)

        set({
          cart: {
            ...cart,
            items: updatedItems,
            totalItems,
            montantHT,
            montantTVA,
            montantTotal,
          }
        })
      },

      removeItem: (articleId: number) => {
        const { cart } = get()
        if (!cart?.items) return

        const updatedItems = cart.items.filter(item => item.articleId !== articleId)

        if (updatedItems.length === 0) {
          set({ cart: null })
          return
        }

        // Recalculer les totaux
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantite, 0)
        const montantTotal = updatedItems.reduce((sum, item) => sum + (item.sousTotal || 0), 0)
        const montantHT = calculateHT(montantTotal)
        const montantTVA = calculateTVA(montantHT)

        set({
          cart: {
            ...cart,
            items: updatedItems,
            totalItems,
            montantHT,
            montantTVA,
            montantTotal,
          }
        })
      },

      clearCart: () => {
        set({ cart: null })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },

      getTotalItems: () => {
        const { cart } = get()
        return cart?.totalItems || 0
      },

      getTotalPrice: () => {
        const { cart } = get()
        return cart?.montantTotal || 0
      },

      getItemQuantity: (articleId: number) => {
        const { cart } = get()
        const item = cart?.items?.find(item => item.articleId === articleId)
        return item?.quantite || 0
      },

      isItemInCart: (articleId: number) => {
        const { cart } = get()
        return cart?.items?.some(item => item.articleId === articleId) || false
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        cart: state.cart,
      }),
    }
  )
)
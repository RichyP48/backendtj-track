import { Badge } from "../ui/Badge"
import { StatutCommande, StatutPaiement } from "../../types/api"
import { getStatusColor } from "../../lib/utils"

interface StatusBadgeProps {
  status: string
  type?: 'order' | 'payment' | 'stock' | 'user'
}

export function StatusBadge({ status, type = 'order' }: StatusBadgeProps) {
  const getStatusInfo = (status: string, type: string) => {
    switch (type) {
      case 'order':
        return getOrderStatusInfo(status as StatutCommande)
      case 'payment':
        return getPaymentStatusInfo(status as StatutPaiement)
      case 'stock':
        return getStockStatusInfo(status)
      case 'user':
        return getUserStatusInfo(status)
      default:
        return { label: status, variant: 'outline' as const }
    }
  }

  const { label, variant } = getStatusInfo(status, type)

  return (
    <Badge variant={variant} className="font-medium">
      {label}
    </Badge>
  )
}

function getOrderStatusInfo(status: StatutCommande) {
  switch (status) {
    case StatutCommande.EN_ATTENTE:
      return { label: 'En attente', variant: 'warning' as const }
    case StatutCommande.CONFIRMEE:
      return { label: 'Confirmée', variant: 'info' as const }
    case StatutCommande.EN_PREPARATION:
      return { label: 'En préparation', variant: 'info' as const }
    case StatutCommande.EXPEDIEE:
      return { label: 'Expédiée', variant: 'info' as const }
    case StatutCommande.LIVREE:
      return { label: 'Livrée', variant: 'success' as const }
    case StatutCommande.ANNULEE:
      return { label: 'Annulée', variant: 'destructive' as const }
    default:
      return { label: status, variant: 'outline' as const }
  }
}

function getPaymentStatusInfo(status: StatutPaiement) {
  switch (status) {
    case StatutPaiement.EN_ATTENTE:
      return { label: 'En attente', variant: 'warning' as const }
    case StatutPaiement.PAYE:
      return { label: 'Payé', variant: 'success' as const }
    case StatutPaiement.PARTIEL:
      return { label: 'Partiel', variant: 'warning' as const }
    case StatutPaiement.ECHUE:
      return { label: 'Échue', variant: 'destructive' as const }
    case StatutPaiement.ECHEC:
      return { label: 'Échec', variant: 'destructive' as const }
    case StatutPaiement.REMBOURSE:
      return { label: 'Remboursé', variant: 'secondary' as const }
    default:
      return { label: status, variant: 'outline' as const }
  }
}

function getStockStatusInfo(status: string) {
  switch (status.toLowerCase()) {
    case 'en_stock':
    case 'high':
      return { label: 'En stock', variant: 'success' as const }
    case 'stock_faible':
    case 'low':
      return { label: 'Stock faible', variant: 'warning' as const }
    case 'rupture':
    case 'out':
      return { label: 'Rupture', variant: 'destructive' as const }
    case 'medium':
      return { label: 'Stock moyen', variant: 'info' as const }
    default:
      return { label: status, variant: 'outline' as const }
  }
}

function getUserStatusInfo(status: string) {
  switch (status.toLowerCase()) {
    case 'actif':
    case 'active':
    case 'verified':
      return { label: 'Actif', variant: 'success' as const }
    case 'inactif':
    case 'inactive':
      return { label: 'Inactif', variant: 'secondary' as const }
    case 'pending':
    case 'en_attente':
      return { label: 'En attente', variant: 'warning' as const }
    case 'suspended':
    case 'suspendu':
      return { label: 'Suspendu', variant: 'destructive' as const }
    default:
      return { label: status, variant: 'outline' as const }
  }
}

// Composants spécialisés
export function OrderStatusBadge({ status }: { status: StatutCommande }) {
  return <StatusBadge status={status} type="order" />
}

export function PaymentStatusBadge({ status }: { status: StatutPaiement }) {
  return <StatusBadge status={status} type="payment" />
}

export function StockStatusBadge({ 
  stock, 
  seuil = 10 
}: { 
  stock: number
  seuil?: number 
}) {
  let status: string
  if (stock === 0) status = 'out'
  else if (stock <= seuil) status = 'low'
  else if (stock <= seuil * 2) status = 'medium'
  else status = 'high'

  return <StatusBadge status={status} type="stock" />
}
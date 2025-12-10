import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency = '€'): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateTTC(ht: number, tva: number = 20): number {
  return ht * (1 + tva / 100)
}

export function calculateHT(ttc: number, tva: number = 20): number {
  return ttc / (1 + tva / 100)
}

export function calculateTVA(ht: number, tva: number = 20): number {
  return ht * (tva / 100)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[0-9]{8,15}$/
  return phoneRegex.test(phone)
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    'EN_ATTENTE': 'bg-yellow-100 text-yellow-800',
    'CONFIRMEE': 'bg-blue-100 text-blue-800',
    'EN_PREPARATION': 'bg-orange-100 text-orange-800',
    'EXPEDIEE': 'bg-purple-100 text-purple-800',
    'LIVREE': 'bg-green-100 text-green-800',
    'ANNULEE': 'bg-red-100 text-red-800',
    'PAYE': 'bg-green-100 text-green-800',
    'ECHEC': 'bg-red-100 text-red-800',
    'ACTIF': 'bg-green-100 text-green-800',
    'INACTIF': 'bg-gray-100 text-gray-800',
  }
  return statusColors[status] || 'bg-gray-100 text-gray-800'
}

export function getStockStatus(stock: number, seuil: number = 10): {
  status: 'high' | 'medium' | 'low' | 'out';
  color: string;
  label: string;
} {
  if (stock === 0) {
    return { status: 'out', color: 'text-red-600', label: 'Rupture' }
  }
  if (stock <= seuil) {
    return { status: 'low', color: 'text-orange-600', label: 'Stock faible' }
  }
  if (stock <= seuil * 2) {
    return { status: 'medium', color: 'text-yellow-600', label: 'Stock moyen' }
  }
  return { status: 'high', color: 'text-green-600', label: 'En stock' }
}
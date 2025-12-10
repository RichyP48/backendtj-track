import { AlertTriangle } from 'lucide-react'
import { isDevelopmentMode } from '../../lib/mockData'

export function DevBanner() {
  if (!isDevelopmentMode) return null

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm text-yellow-800">
        <AlertTriangle className="w-4 h-4" />
        <span className="font-medium">Mode Développement</span>
        <span>•</span>
        <span>Backend non connecté - Données de démonstration</span>
      </div>
    </div>
  )
}
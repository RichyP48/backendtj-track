import { formatPrice } from "../../lib/utils"
import { cn } from "../../lib/utils"

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  currency?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCurrency?: boolean
  className?: string
}

export function PriceDisplay({
  price,
  originalPrice,
  currency = '€',
  size = 'md',
  showCurrency = true,
  className
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const hasDiscount = originalPrice && originalPrice > price
  const discountPercentage = hasDiscount 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className={cn(
        "font-semibold text-foreground",
        sizeClasses[size]
      )}>
        {showCurrency ? formatPrice(price, currency) : price.toFixed(2)}
      </span>
      
      {hasDiscount && (
        <>
          <span className={cn(
            "text-muted-foreground line-through",
            size === 'sm' ? 'text-xs' : 
            size === 'md' ? 'text-sm' :
            size === 'lg' ? 'text-base' : 'text-lg'
          )}>
            {showCurrency ? formatPrice(originalPrice, currency) : originalPrice.toFixed(2)}
          </span>
          <span className="text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-medium">
            -{discountPercentage}%
          </span>
        </>
      )}
    </div>
  )
}

interface PriceSummaryProps {
  subtotal: number
  tax?: number
  shipping?: number
  discount?: number
  total: number
  currency?: string
  className?: string
}

export function PriceSummary({
  subtotal,
  tax = 0,
  shipping = 0,
  discount = 0,
  total,
  currency = '€',
  className
}: PriceSummaryProps) {
  return (
    <div className={cn("space-y-2 text-sm", className)}>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Sous-total HT</span>
        <span>{formatPrice(subtotal, currency)}</span>
      </div>
      
      {tax > 0 && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">TVA</span>
          <span>{formatPrice(tax, currency)}</span>
        </div>
      )}
      
      {shipping > 0 && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">Frais de livraison</span>
          <span>{formatPrice(shipping, currency)}</span>
        </div>
      )}
      
      {discount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Remise</span>
          <span>-{formatPrice(discount, currency)}</span>
        </div>
      )}
      
      <div className="border-t pt-2">
        <div className="flex justify-between font-semibold text-base">
          <span>Total TTC</span>
          <span>{formatPrice(total, currency)}</span>
        </div>
      </div>
    </div>
  )
}

interface PriceRangeProps {
  minPrice: number
  maxPrice: number
  currency?: string
  className?: string
}

export function PriceRange({
  minPrice,
  maxPrice,
  currency = '€',
  className
}: PriceRangeProps) {
  if (minPrice === maxPrice) {
    return (
      <span className={cn("font-semibold", className)}>
        {formatPrice(minPrice, currency)}
      </span>
    )
  }

  return (
    <span className={cn("font-semibold", className)}>
      {formatPrice(minPrice, currency)} - {formatPrice(maxPrice, currency)}
    </span>
  )
}

interface CompactPriceProps {
  price: number
  currency?: string
  size?: 'xs' | 'sm' | 'md'
  className?: string
}

export function CompactPrice({
  price,
  currency = '€',
  size = 'sm',
  className
}: CompactPriceProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base'
  }

  // Formatage compact pour les grands nombres
  const formatCompactPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`
    }
    if (price >= 1000) {
      return `${(price / 1000).toFixed(1)}k`
    }
    return price.toFixed(0)
  }

  return (
    <span className={cn(
      "font-medium text-foreground",
      sizeClasses[size],
      className
    )}>
      {formatCompactPrice(price)}{currency}
    </span>
  )
}
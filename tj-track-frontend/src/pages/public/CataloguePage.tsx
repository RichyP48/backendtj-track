import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Card, CardContent } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { ProductGridSkeleton } from '../../components/common/LoadingSkeleton'
import { EmptySearch } from '../../components/common/EmptyState'
import { PriceDisplay } from '../../components/common/PriceDisplay'
import { motion } from 'framer-motion'

export default function CataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  
  const searchQuery = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''
  const sortBy = searchParams.get('sort') || 'name'

  // Données de démonstration
  const [products] = useState([
    {
      id: 1,
      nom: "Smartphone Galaxy Pro",
      prix: 899.99,
      prixOriginal: 999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      categorie: "Électronique",
      noteMoyenne: 4.5,
      nombreEvaluations: 128,
      enStock: true,
      description: "Smartphone haut de gamme avec écran OLED"
    },
    {
      id: 2,
      nom: "Casque Audio Bluetooth",
      prix: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      categorie: "Audio",
      noteMoyenne: 4.2,
      nombreEvaluations: 89,
      enStock: true,
      description: "Casque sans fil avec réduction de bruit"
    },
    {
      id: 3,
      nom: "Ordinateur Portable Gaming",
      prix: 1299.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      categorie: "Informatique",
      noteMoyenne: 4.7,
      nombreEvaluations: 45,
      enStock: false,
      description: "PC portable haute performance pour gaming"
    }
  ])

  const [categories] = useState([
    "Électronique", "Informatique", "Audio", "Téléphonie", "Gaming"
  ])

  useEffect(() => {
    // Simuler le chargement
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [searchQuery, category, sortBy])

  const handleSearch = (query: string) => {
    const newParams = new URLSearchParams(searchParams)
    if (query) {
      newParams.set('search', query)
    } else {
      newParams.delete('search')
    }
    setSearchParams(newParams)
  }

  const handleCategoryFilter = (cat: string) => {
    const newParams = new URLSearchParams(searchParams)
    if (cat && cat !== category) {
      newParams.set('category', cat)
    } else {
      newParams.delete('category')
    }
    setSearchParams(newParams)
  }

  const handleSort = (sort: string) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('sort', sort)
    setSearchParams(newParams)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-8 bg-muted rounded w-48 mb-4" />
          <div className="h-4 bg-muted rounded w-32" />
        </div>
        <ProductGridSkeleton count={8} />
      </div>
    )
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchQuery || 
      product.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = !category || product.categorie === category
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Catalogue Produits
          </h1>
          <p className="text-muted-foreground">
            Découvrez notre sélection de {products.length} produits
          </p>
        </motion.div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Recherche */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Rechercher des produits..."
                defaultValue={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>

            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background text-sm"
            >
              <option value="name">Nom A-Z</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Mieux notés</option>
            </select>

            <div className="flex border border-input rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!category ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryFilter('')}
            >
              Toutes les catégories
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtres actifs */}
        {(searchQuery || category) && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Filtres actifs:</span>
            {searchQuery && (
              <Badge variant="secondary">
                Recherche: "{searchQuery}"
              </Badge>
            )}
            {category && (
              <Badge variant="secondary">
                Catégorie: {category}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchParams({})}
              className="text-xs"
            >
              Effacer tout
            </Button>
          </div>
        )}
      </div>

      {/* Résultats */}
      {filteredProducts.length === 0 ? (
        <EmptySearch query={searchQuery || category} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-sm text-muted-foreground">
            {filteredProducts.length} produit(s) trouvé(s)
          </div>

          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {viewMode === 'grid' ? (
                  <ProductCard product={product} />
                ) : (
                  <ProductListItem product={product} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="group hover:shadow-elegant-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.nom}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.enStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Rupture de stock</Badge>
            </div>
          )}
          {product.prixOriginal && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              Promo
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {product.nom}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              {product.categorie}
            </Badge>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="text-yellow-500 mr-1">★</span>
              {product.noteMoyenne} ({product.nombreEvaluations})
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <PriceDisplay 
              price={product.prix}
              originalPrice={product.prixOriginal}
              size="md"
            />
            
            <Button size="sm" disabled={!product.enStock}>
              {product.enStock ? 'Ajouter' : 'Indisponible'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProductListItem({ product }: { product: any }) {
  return (
    <Card className="hover:shadow-elegant transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <img
              src={product.image}
              alt={product.nom}
              className="w-full h-full object-cover rounded-md"
            />
            {!product.enStock && (
              <div className="absolute inset-0 bg-black/50 rounded-md flex items-center justify-center">
                <Badge variant="destructive" className="text-xs">
                  Rupture
                </Badge>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0 mr-4">
                <h3 className="font-semibold text-foreground mb-1">
                  {product.nom}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Badge variant="outline" className="text-xs">
                    {product.categorie}
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <span className="text-yellow-500 mr-1">★</span>
                    {product.noteMoyenne} ({product.nombreEvaluations})
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <PriceDisplay 
                  price={product.prix}
                  originalPrice={product.prixOriginal}
                  size="lg"
                  className="mb-2"
                />
                <Button size="sm" disabled={!product.enStock}>
                  {product.enStock ? 'Ajouter au panier' : 'Indisponible'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
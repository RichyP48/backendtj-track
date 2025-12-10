import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { DevBanner } from '../components/common/DevBanner'
import { useAuthStore } from '../store/authStore'
import { useCartStore } from '../store/cartStore'
import { cn } from '../lib/utils'

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const { isAuthenticated, user } = useAuthStore()
  const { getTotalItems } = useCartStore()
  
  const cartItemsCount = getTotalItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/catalogue?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Banner de développement */}
      <DevBanner />
      
      {/* Header */}
      <header className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300",
        "top-0", // Ajusté pour le banner de dev
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TJ</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                TJ-Track
              </span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/catalogue" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Catalogue
              </Link>
              <Link 
                to="/categories" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Catégories
              </Link>
            </nav>

            {/* Barre de recherche */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Recherche mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => {/* Ouvrir modal de recherche */}}
              >
                <Search className="w-5 h-5" />
              </Button>

              {isAuthenticated ? (
                <>
                  {/* Favoris */}
                  <Link to="/dashboard/favoris">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </Link>

                  {/* Panier */}
                  <Link to="/dashboard/panier" className="relative">
                    <Button variant="ghost" size="icon">
                      <ShoppingCart className="w-5 h-5" />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {cartItemsCount > 99 ? '99+' : cartItemsCount}
                        </span>
                      )}
                    </Button>
                  </Link>

                  {/* Profil */}
                  <Link to="/dashboard">
                    <Button variant="ghost" size="icon">
                      <User className="w-5 h-5" />
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/auth/login">
                    <Button variant="ghost">
                      Connexion
                    </Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button>
                      Inscription
                    </Button>
                  </Link>
                </>
              )}

              {/* Menu mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Menu mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
              <nav className="py-4 space-y-2">
                <Link 
                  to="/catalogue" 
                  className="block px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Catalogue
                </Link>
                <Link 
                  to="/categories" 
                  className="block px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Catégories
                </Link>
                
                {/* Recherche mobile */}
                <form onSubmit={handleSearch} className="px-4 py-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </form>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contenu principal */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">TJ</span>
                </div>
                <span className="font-heading font-bold text-xl">TJ-Track</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Votre plateforme e-commerce B2B/B2C de confiance pour tous vos besoins commerciaux.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Catalogue</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/catalogue" className="hover:text-foreground transition-colors">Tous les produits</Link></li>
                <li><Link to="/categories" className="hover:text-foreground transition-colors">Catégories</Link></li>
                <li><Link to="/catalogue?sort=nouveautes" className="hover:text-foreground transition-colors">Nouveautés</Link></li>
                <li><Link to="/catalogue?sort=populaires" className="hover:text-foreground transition-colors">Populaires</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Compte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {isAuthenticated ? (
                  <>
                    <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Mon compte</Link></li>
                    <li><Link to="/dashboard/commandes" className="hover:text-foreground transition-colors">Mes commandes</Link></li>
                    <li><Link to="/dashboard/favoris" className="hover:text-foreground transition-colors">Mes favoris</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/auth/login" className="hover:text-foreground transition-colors">Connexion</Link></li>
                    <li><Link to="/auth/register" className="hover:text-foreground transition-colors">Inscription</Link></li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 TJ-Track. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
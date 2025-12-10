import { Outlet, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="min-h-screen flex">
        {/* Section gauche - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600" />
          
          {/* Motifs décoratifs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full" />
            <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full" />
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-white rounded-full" />
          </div>
          
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-lg">TJ</span>
                </div>
                <span className="font-heading font-bold text-2xl">TJ-Track</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-6 leading-tight">
                Votre plateforme e-commerce nouvelle génération
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Connectez-vous à un écosystème complet pour gérer vos ventes, 
                votre stock et développer votre activité commerciale.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">Gestion complète des stocks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">Plateforme multi-rôles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">Analytics avancées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">Interface moderne et intuitive</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section droite - Formulaire */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-12">
          <div className="w-full max-w-md mx-auto">
            {/* Logo mobile */}
            <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">TJ</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                TJ-Track
              </span>
            </div>

            {/* Contenu du formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Outlet />
            </motion.div>

            {/* Lien retour accueil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Retour à l'accueil
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
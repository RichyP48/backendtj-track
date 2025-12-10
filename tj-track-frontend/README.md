# TJ-Track Frontend

Frontend React + Vite ultra-moderne pour la plateforme e-commerce B2B/B2C TJ-Track.

## 🚀 Technologies

- **Framework**: React 18+ avec Vite
- **Routing**: React Router v6
- **State Management**: Zustand
- **Styling**: TailwindCSS + shadcn/ui
- **HTTP Client**: Axios avec intercepteurs
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Notifications**: Sonner
- **Internationalisation**: i18next (FR/EN)

## 🏗️ Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (Button, Input, etc.)
│   ├── common/         # Composants communs (LoadingSkeleton, EmptyState, etc.)
│   ├── layout/         # Composants de layout
│   ├── product/        # Composants liés aux produits
│   ├── cart/           # Composants du panier
│   ├── order/          # Composants des commandes
│   ├── stock/          # Composants de gestion stock
│   └── charts/         # Composants de graphiques
├── pages/              # Pages de l'application
│   ├── public/         # Pages publiques
│   ├── auth/           # Pages d'authentification
│   ├── client/         # Pages client
│   ├── merchant/       # Pages commerçant
│   ├── supplier/       # Pages fournisseur
│   └── admin/          # Pages admin
├── layouts/            # Layouts principaux
├── services/           # Services API
├── store/              # État global (Zustand)
├── hooks/              # Hooks personnalisés
├── types/              # Types TypeScript
├── utils/              # Utilitaires
└── lib/                # Configuration des librairies
```

## 🎯 Fonctionnalités

### Authentification & Rôles
- 6 rôles distincts : CLIENT, COMMERCANT, FOURNISSEUR, LIVREUR, MANAGER, ADMIN
- Inscription multi-étapes avec sélection de rôle
- Vérification OTP par email
- Connexion avec remember me
- Reset password avec OTP
- Refresh token automatique
- Protected routes par rôle

### Modules Principaux

#### Module Public
- Landing page moderne avec hero, features, témoignages
- Catalogue produits avec filtres, recherche, pagination
- Page produit détaillée (images, avis, produits similaires)
- Navigation par catégories

#### Module Client
- Tableau de bord avec commandes récentes
- Panier avec calcul temps réel (HT, TVA, TTC)
- Tunnel de commande (adresse, paiement)
- Historique commandes avec statuts visuels
- Gestion des favoris
- Édition profil + adresses

#### Module Commerçant
- KPIs : ventes, revenus, produits populaires
- CRUD produits avec upload images multiples
- Gestion stock avec alertes visuelles
- Commandes clients reçues
- Gestion campagnes publicitaires
- Analytics détaillées

#### Module Fournisseur
- Vue d'ensemble activité
- Gestion catalogue articles
- Commandes reçues des merchants
- Gestion stock et expéditions

#### Module Admin
- Métriques globales plateforme
- Gestion utilisateurs et validation comptes
- Gestion entreprises
- Suivi financier et chiffre d'affaires

## 🎨 Design System

### Thème
- Mode clair/sombre avec toggle
- Palette de couleurs personnalisable
- Typographie : Inter pour UI, Geist pour titres
- Border radius moderne (8-12px)
- Shadows subtiles et layered

### Composants UI
- Système de design cohérent basé sur shadcn/ui
- Composants accessibles avec support clavier
- Animations fluides avec Framer Motion
- États de chargement élégants
- Gestion d'erreurs avec notifications

## 🚀 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd tj-track-frontend

# Installer les dépendances
npm install --legacy-peer-deps

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🔧 Configuration

### Variables d'environnement
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
VITE_APP_NAME=TJ-Track
```

### API Backend
L'application se connecte à l'API TJ-Track sur `http://localhost:8080/api/v1.0`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation adaptative avec menu hamburger
- Grilles responsives pour les produits
- Optimisé pour tous les écrans

## 🔐 Sécurité

- Authentification JWT Bearer Token
- Protection des routes par rôle
- Validation côté client avec Zod
- Sanitisation des données
- Gestion sécurisée des tokens

## 🌐 Internationalisation

Support multilingue avec i18next :
- Français (par défaut)
- Anglais
- Changement de langue dynamique

## 📊 Performance

- Code splitting par route
- Lazy loading des images avec placeholder blur
- Virtual scrolling pour les longues listes
- Memoization des composants lourds
- Optimisation des bundles avec Vite

## ♿ Accessibilité

- Navigation clavier complète
- ARIA labels appropriés
- Focus management pour les modals
- Annonces screen reader
- Contraste respectant WCAG 2.1

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📦 Déploiement

```bash
# Build de production
npm run build

# Preview du build
npm run preview
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour toute question ou problème :
- Créer une issue sur GitHub
- Contacter l'équipe de développement
- Consulter la documentation API

---

**TJ-Track** - Votre plateforme e-commerce nouvelle génération 🚀
# 📦 GESTION DE STOCK SÉPARÉE - COMMERÇANTS & FOURNISSEURS

## 🏪 COMMERÇANTS (Merchants)

### Endpoints Disponibles
```
GET    /api/v1.0/merchant/stock/articles           - Mes articles
POST   /api/v1.0/merchant/stock/articles           - Ajouter article
PUT    /api/v1.0/merchant/stock/articles/{id}/stock - Ajuster stock
GET    /api/v1.0/merchant/stock/articles/stock-faible - Stock faible
```

### Fonctionnalités
- ✅ **Gestion propre** : Chaque commerçant voit uniquement ses articles
- ✅ **Code unique** : `MCH-{merchantId}-{timestamp}`
- ✅ **Ajustements stock** : Entrées/sorties avec motif
- ✅ **Alertes** : Articles en stock faible
- ✅ **Sécurité** : Vérification propriétaire avant modification

## 🏭 FOURNISSEURS (Suppliers)

### Endpoints Disponibles
```
GET    /api/v1.0/supplier/stock/articles           - Mes articles
POST   /api/v1.0/supplier/stock/articles           - Ajouter article
PUT    /api/v1.0/supplier/stock/articles/{id}/stock - Ajuster stock
GET    /api/v1.0/supplier/commandes-merchants      - Commandes reçues
```

### Fonctionnalités
- ✅ **Catalogue fournisseur** : Articles disponibles pour vente
- ✅ **Code unique** : `SUP-{supplierId}-{timestamp}`
- ✅ **Gestion stock** : Suivi des quantités disponibles
- ✅ **Commandes B2B** : Réception commandes des commerçants

## 🔐 SÉCURITÉ & AUTORISATIONS

### Règles d'Accès
```java
.requestMatchers("/merchant/**").hasRole("COMMERCANT")
.requestMatchers("/supplier/**").hasRole("FOURNISSEUR")
```

### Validation Propriétaire
```java
// Vérification que l'article appartient au commerçant/fournisseur
if (!article.getEntreprise().getId().equals(merchant.getId())) {
    throw new RuntimeException("Article non autorisé");
}
```

## 📊 WORKFLOW COMPLET

### 1. COMMERÇANT
1. **Ajoute ses produits** → Stock initial
2. **Vend aux clients** → Stock diminue automatiquement
3. **Reçoit alertes** → Stock faible
4. **Commande chez fournisseur** → Réapprovisionnement
5. **Ajuste stock** → Entrée marchandise

### 2. FOURNISSEUR
1. **Catalogue produits** → Articles disponibles
2. **Reçoit commandes** → Des commerçants
3. **Prépare livraison** → Stock diminue
4. **Réapprovisionne** → Ajustement stock

## 🎯 AVANTAGES

- **Isolation complète** : Chaque acteur gère son stock
- **Traçabilité** : Mouvements enregistrés avec motifs
- **Sécurité** : Accès restreint par rôle
- **Évolutivité** : Système extensible pour autres acteurs
- **Intégration** : Compatible avec e-commerce et finance

Chaque commerçant et fournisseur dispose maintenant de son propre système de gestion de stock sécurisé et isolé.
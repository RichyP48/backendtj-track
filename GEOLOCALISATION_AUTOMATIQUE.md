# 📍 GÉOLOCALISATION AUTOMATIQUE INTÉGRÉE

## ✅ DÉPENDANCES AJOUTÉES

### Maven Dependencies
```xml
<!-- WebFlux pour appels API externes -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>

<!-- Google Maps API -->
<dependency>
    <groupId>com.google.maps</groupId>
    <artifactId>google-maps-services</artifactId>
    <version>2.2.0</version>
</dependency>

<!-- WebSocket pour suivi temps réel -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

## 🔧 SERVICES CRÉÉS

### 1. GeocodingService
```java
// Conversion adresse → coordonnées GPS
getCoordinatesFromAddress(String address) → {lat, lon}

// Conversion coordonnées → adresse
getAddressFromCoordinates(double lat, double lon) → String

// Support Google Maps + OpenStreetMap (fallback)
```

### 2. LocationUpdateService
```java
// Mise à jour automatique positions
updateClientLocation(Long clientId, String address)
updateDeliveryLocation(Long deliveryId, double lat, double lon)
updateMerchantLocation(Long merchantId, String address)

// Détection automatique par type utilisateur
autoDetectAndUpdateLocation(Long userId, String userType, String address)
```

## 🌐 APIS INTÉGRÉES

### Google Maps Geocoding API
- **Avantage** : Précision maximale, données riches
- **Configuration** : `google.maps.api.key=${GOOGLE_MAPS_API_KEY:}`
- **Usage** : Si clé API fournie

### OpenStreetMap Nominatim (Gratuit)
- **Avantage** : Gratuit, pas de limite stricte
- **Fallback** : Utilisé si pas de clé Google Maps
- **Précision** : Bonne pour la plupart des cas

## 🎯 ENDPOINTS AUTOMATIQUES

### Mise à Jour par Adresse
```
POST /api/v1.0/delivery/update-location
Params: userId, userType, address
→ Géocode automatiquement l'adresse et met à jour les coordonnées
```

### Mise à Jour GPS Directe
```
POST /api/v1.0/delivery/update-gps
Params: deliveryId, lat, lon
→ Met à jour position GPS temps réel du livreur
```

## 🔄 WORKFLOW AUTOMATIQUE

### 1. INSCRIPTION UTILISATEUR
```java
// Lors de l'inscription, géocode automatiquement l'adresse
String address = "123 Rue de la Paix, Paris";
Map<String, Double> coords = geocodingService.getCoordinatesFromAddress(address);
user.setLatitude(coords.get("latitude"));
user.setLongitude(coords.get("longitude"));
```

### 2. SUIVI LIVREUR TEMPS RÉEL
```java
// App mobile livreur envoie position GPS
POST /delivery/update-gps?deliveryId=1&lat=48.8566&lon=2.3522
→ Position mise à jour automatiquement
→ ETA recalculé pour le client
```

### 3. CHANGEMENT D'ADRESSE
```java
// Client change d'adresse
POST /delivery/update-location?userId=1&userType=CLIENT&address=nouvelle_adresse
→ Géocodage automatique
→ Coordonnées mises à jour en base
```

## 🛠️ CONFIGURATION

### Variables d'Environnement
```properties
# Optionnel - pour précision maximale
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Si pas de clé Google, utilise OpenStreetMap automatiquement
```

### Fallback Intelligent
```java
public Map<String, Double> getCoordinatesFromAddress(String address) {
    if (googleApiKey != null && !googleApiKey.isEmpty()) {
        return getCoordinatesFromGoogle(address);  // Précision max
    } else {
        return getCoordinatesFromOpenStreetMap(address);  // Gratuit
    }
}
```

## 🎯 FONCTIONNALITÉS AUTOMATIQUES

- ✅ **Géocodage automatique** : Adresse → GPS
- ✅ **Géocodage inverse** : GPS → Adresse
- ✅ **Fallback intelligent** : Google Maps → OpenStreetMap
- ✅ **Mise à jour temps réel** : Position livreurs
- ✅ **Détection type utilisateur** : Client/Merchant/Delivery
- ✅ **Persistance automatique** : Sauvegarde en base
- ✅ **API REST complète** : Endpoints pour toutes opérations

Le système détecte maintenant **AUTOMATIQUEMENT** les positions des utilisateurs via géocodage d'adresses et GPS temps réel.
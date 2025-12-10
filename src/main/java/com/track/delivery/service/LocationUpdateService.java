package com.track.delivery.service;

import com.track.entity.ClientProfile;
import com.track.entity.DeliveryProfile;
import com.track.entity.MerchantProfile;
import com.track.repository.ClientProfileRepository;
import com.track.repository.DeliveryProfileRepository;
import com.track.repository.MerchantProfileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class LocationUpdateService {
    
    private final ClientProfileRepository clientRepository;
    private final DeliveryProfileRepository deliveryRepository;
    private final MerchantProfileRepository merchantRepository;
    private final GeocodingService geocodingService;
    
    public void updateClientLocation(Long clientId, String address) {
        ClientProfile client = clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client non trouvé"));
        
        Map<String, Double> coords = geocodingService.getCoordinatesFromAddress(address);
        if (coords != null) {
            client.setLatitude(coords.get("latitude"));
            client.setLongitude(coords.get("longitude"));
            client.setAddress(address);
            clientRepository.save(client);
            log.info("Position client {} mise à jour: {}, {}", 
                    clientId, coords.get("latitude"), coords.get("longitude"));
        }
    }
    
    public void updateDeliveryLocation(Long deliveryId, double lat, double lon) {
        DeliveryProfile delivery = deliveryRepository.findById(deliveryId)
                .orElseThrow(() -> new RuntimeException("Livreur non trouvé"));
        
        delivery.setLatitude(lat);
        delivery.setLongitude(lon);
        deliveryRepository.save(delivery);
        
        // Mettre à jour aussi la position temps réel
        DeliveryTrackingService trackingService = new DeliveryTrackingService(deliveryRepository, new GeolocationService());
        trackingService.updateDeliveryPosition(deliveryId, lat, lon);
        
        log.info("Position livreur {} mise à jour: {}, {}", deliveryId, lat, lon);
    }
    
    public void updateMerchantLocation(Long merchantId, String address) {
        MerchantProfile merchant = merchantRepository.findById(merchantId)
                .orElseThrow(() -> new RuntimeException("Commerçant non trouvé"));
        
        Map<String, Double> coords = geocodingService.getCoordinatesFromAddress(address);
        if (coords != null) {
            merchant.setLatitude(coords.get("latitude"));
            merchant.setLongitude(coords.get("longitude"));
            merchant.setAddress(address);
            merchantRepository.save(merchant);
            log.info("Position commerçant {} mise à jour: {}, {}", 
                    merchantId, coords.get("latitude"), coords.get("longitude"));
        }
    }
    
    public void autoDetectAndUpdateLocation(Long userId, String userType, String address) {
        switch (userType.toUpperCase()) {
            case "CLIENT":
                updateClientLocation(userId, address);
                break;
            case "DELIVERY":
                // Pour les livreurs, on utilise plutôt les coordonnées GPS directes
                Map<String, Double> coords = geocodingService.getCoordinatesFromAddress(address);
                if (coords != null) {
                    updateDeliveryLocation(userId, coords.get("latitude"), coords.get("longitude"));
                }
                break;
            case "MERCHANT":
                updateMerchantLocation(userId, address);
                break;
            default:
                throw new IllegalArgumentException("Type utilisateur non supporté: " + userType);
        }
    }
}
package com.track.delivery.service;

import com.track.entity.DeliveryProfile;
import com.track.entity.ClientProfile;
import com.track.entity.MerchantProfile;
import com.track.repository.DeliveryProfileRepository;
import com.track.repository.ClientProfileRepository;
import com.track.repository.MerchantProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DeliveryAssignmentService {
    
    private final DeliveryProfileRepository deliveryRepository;
    private final ClientProfileRepository clientRepository;
    private final MerchantProfileRepository merchantRepository;
    private final GeolocationService geolocationService;
    
    public Optional<DeliveryProfile> findNearestDeliveryPerson(Long clientId, Long merchantId) {
        ClientProfile client = clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client non trouvé"));
        
        MerchantProfile merchant = merchantRepository.findById(merchantId)
                .orElseThrow(() -> new RuntimeException("Commerçant non trouvé"));
        
        if (client.getLatitude() == null || merchant.getLatitude() == null) {
            throw new RuntimeException("Coordonnées GPS manquantes");
        }
        
        List<DeliveryProfile> deliveryPersons = deliveryRepository.findAll();
        
        return deliveryPersons.stream()
                .filter(d -> d.getLatitude() != null && d.getLongitude() != null)
                .min((d1, d2) -> {
                    double dist1 = calculateAverageDistance(d1, client, merchant);
                    double dist2 = calculateAverageDistance(d2, client, merchant);
                    return Double.compare(dist1, dist2);
                });
    }
    
    private double calculateAverageDistance(DeliveryProfile delivery, ClientProfile client, MerchantProfile merchant) {
        double distToMerchant = geolocationService.calculateDistance(
                delivery.getLatitude(), delivery.getLongitude(),
                merchant.getLatitude(), merchant.getLongitude()
        );
        
        double distToClient = geolocationService.calculateDistance(
                delivery.getLatitude(), delivery.getLongitude(),
                client.getLatitude(), client.getLongitude()
        );
        
        return (distToMerchant + distToClient) / 2;
    }
    
    public List<DeliveryProfile> findDeliveryPersonsInRadius(double lat, double lon, double radiusKm) {
        return deliveryRepository.findAll().stream()
                .filter(d -> d.getLatitude() != null && d.getLongitude() != null)
                .filter(d -> geolocationService.isWithinRadius(lat, lon, d.getLatitude(), d.getLongitude(), radiusKm))
                .toList();
    }
}
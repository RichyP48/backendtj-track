package com.track.delivery.service;

import com.track.entity.DeliveryProfile;
import com.track.repository.DeliveryProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
public class DeliveryTrackingService {
    
    private final DeliveryProfileRepository deliveryRepository;
    private final GeolocationService geolocationService;
    
    // Stockage temporaire des positions en temps réel
    private final Map<Long, DeliveryPosition> livePositions = new ConcurrentHashMap<>();
    
    public void updateDeliveryPosition(Long deliveryId, double lat, double lon) {
        DeliveryPosition position = DeliveryPosition.builder()
                .deliveryId(deliveryId)
                .latitude(lat)
                .longitude(lon)
                .timestamp(LocalDateTime.now())
                .build();
        
        livePositions.put(deliveryId, position);
    }
    
    public DeliveryPosition getCurrentPosition(Long deliveryId) {
        return livePositions.get(deliveryId);
    }
    
    public double calculateETA(Long deliveryId, double destLat, double destLon) {
        DeliveryPosition currentPos = livePositions.get(deliveryId);
        if (currentPos == null) {
            return -1; // Position inconnue
        }
        
        double distance = geolocationService.calculateDistance(
                currentPos.getLatitude(), currentPos.getLongitude(),
                destLat, destLon
        );
        
        // Estimation : 30 km/h en moyenne
        return (distance / 30.0) * 60; // minutes
    }
    
    @lombok.Data
    @lombok.Builder
    public static class DeliveryPosition {
        private Long deliveryId;
        private Double latitude;
        private Double longitude;
        private LocalDateTime timestamp;
    }
}
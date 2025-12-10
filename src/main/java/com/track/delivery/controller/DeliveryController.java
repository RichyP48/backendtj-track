package com.track.delivery.controller;

import com.track.delivery.service.DeliveryAssignmentService;
import com.track.delivery.service.GeolocationService;
import com.track.delivery.service.LocationUpdateService;
import com.track.delivery.dto.DeliveryAssignmentDto;
import com.track.dto.ApiResponse;
import com.track.entity.DeliveryProfile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/delivery")
@RequiredArgsConstructor
public class DeliveryController {
    
    private final DeliveryAssignmentService assignmentService;
    private final GeolocationService geolocationService;
    private final LocationUpdateService locationUpdateService;
    
    @GetMapping("/nearest")
    public ResponseEntity<ApiResponse<DeliveryAssignmentDto>> findNearestDelivery(
            @RequestParam Long clientId,
            @RequestParam Long merchantId) {
        
        var delivery = assignmentService.findNearestDeliveryPerson(clientId, merchantId);
        
        if (delivery.isEmpty()) {
            return ResponseEntity.ok(ApiResponse.error("Aucun livreur disponible"));
        }
        
        DeliveryAssignmentDto dto = DeliveryAssignmentDto.builder()
                .deliveryPersonId(delivery.get().getId())
                .deliveryPersonName(delivery.get().getUser().getName())
                .phoneNumber(delivery.get().getPhoneNumber())
                .latitude(delivery.get().getLatitude())
                .longitude(delivery.get().getLongitude())
                .status("AVAILABLE")
                .build();
        
        return ResponseEntity.ok(ApiResponse.success(dto));
    }
    
    @GetMapping("/in-radius")
    public ResponseEntity<ApiResponse<List<DeliveryProfile>>> findDeliveryInRadius(
            @RequestParam double lat,
            @RequestParam double lon,
            @RequestParam(defaultValue = "10") double radius) {
        
        List<DeliveryProfile> deliveries = assignmentService.findDeliveryPersonsInRadius(lat, lon, radius);
        return ResponseEntity.ok(ApiResponse.success(deliveries));
    }
    
    @GetMapping("/distance")
    public ResponseEntity<ApiResponse<Map<String, Double>>> calculateDistance(
            @RequestParam double lat1,
            @RequestParam double lon1,
            @RequestParam double lat2,
            @RequestParam double lon2) {
        
        double distance = geolocationService.calculateDistance(lat1, lon1, lat2, lon2);
        
        return ResponseEntity.ok(ApiResponse.success(Map.of(
            "distance_km", distance,
            "distance_m", distance * 1000
        )));
    }
    
    @PostMapping("/update-location")
    public ResponseEntity<ApiResponse<String>> updateLocation(
            @RequestParam Long userId,
            @RequestParam String userType,
            @RequestParam String address) {
        
        locationUpdateService.autoDetectAndUpdateLocation(userId, userType, address);
        return ResponseEntity.ok(ApiResponse.success("Position mise à jour"));
    }
    
    @PostMapping("/update-gps")
    public ResponseEntity<ApiResponse<String>> updateGPSLocation(
            @RequestParam Long deliveryId,
            @RequestParam double lat,
            @RequestParam double lon) {
        
        locationUpdateService.updateDeliveryLocation(deliveryId, lat, lon);
        return ResponseEntity.ok(ApiResponse.success("Position GPS mise à jour"));
    }
}
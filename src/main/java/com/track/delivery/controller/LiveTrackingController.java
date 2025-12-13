package com.track.delivery.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class LiveTrackingController {
    
    private final SimpMessagingTemplate messagingTemplate;
    
    @MessageMapping("/delivery/location")
    @SendTo("/topic/delivery")
    public Map<String, Object> updateDeliveryLocation(Map<String, Object> locationData) {
        return Map.of(
            "livreurId", locationData.get("livreurId"),
            "latitude", locationData.get("latitude"),
            "longitude", locationData.get("longitude"),
            "timestamp", System.currentTimeMillis(),
            "status", "EN_ROUTE"
        );
    }
    
    @PostMapping("/api/delivery/track/{commandeId}")
    @ResponseBody
    public Map<String, Object> trackDelivery(@PathVariable Long commandeId,
                                           @RequestParam double lat,
                                           @RequestParam double lon) {
        
        Map<String, Object> trackingData = Map.of(
            "commandeId", commandeId,
            "latitude", lat,
            "longitude", lon,
            "timestamp", System.currentTimeMillis()
        );
        
        // Diffuser la position à tous les clients connectés
        messagingTemplate.convertAndSend("/topic/delivery/" + commandeId, trackingData);
        
        return Map.of("success", true, "message", "Position mise à jour");
    }
}
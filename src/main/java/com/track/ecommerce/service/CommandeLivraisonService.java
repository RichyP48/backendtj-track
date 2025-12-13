package com.track.ecommerce.service;

import com.track.delivery.service.DeliveryAssignmentService;
import com.track.ecommerce.entity.Commande;
import com.track.ecommerce.repository.CommandeRepository;
import com.track.entity.DeliveryProfile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CommandeLivraisonService {
    
    private final CommandeRepository commandeRepository;
    private final DeliveryAssignmentService deliveryService;
    
    @Transactional
    public Map<String, Object> assignerLivreur(Long commandeId, Long clientId, Long merchantId) {
        Commande commande = commandeRepository.findById(commandeId)
                .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        
        var livreur = deliveryService.findNearestDeliveryPerson(clientId, merchantId);
        
        if (livreur.isEmpty()) {
            throw new RuntimeException("Aucun livreur disponible");
        }
        
        commande.setStatut(Commande.StatutCommande.EXPEDIEE);
        commande.setDateLivraisonPrevue(LocalDateTime.now().plusHours(1));
        commandeRepository.save(commande);
        
        Map<String, Object> result = new java.util.HashMap<>();
        result.put("commandeId", commandeId);
        result.put("livreurId", livreur.get().getId());
        result.put("livreurNom", livreur.get().getUser().getName());
        result.put("telephone", livreur.get().getPhoneNumber());
        result.put("tempsEstime", "45-60 min");
        return result;
    }
    
    public List<Map<String, Object>> getLivreursDisponibles(double lat, double lon) {
        return deliveryService.findDeliveryPersonsInRadius(lat, lon, 15.0)
                .stream()
                .map(d -> {
                    Map<String, Object> map = new java.util.HashMap<>();
                    map.put("id", d.getId());
                    map.put("nom", d.getUser().getName());
                    map.put("telephone", d.getPhoneNumber());
                    map.put("latitude", d.getLatitude());
                    map.put("longitude", d.getLongitude());
                    map.put("distance", calculateDistance(lat, lon, d.getLatitude(), d.getLongitude()));
                    return map;
                })
                .collect(java.util.stream.Collectors.toList());
    }
    
    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double earthRadius = 6371;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                   Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * 
                   Math.sin(dLon/2) * Math.sin(dLon/2);
        return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }
}
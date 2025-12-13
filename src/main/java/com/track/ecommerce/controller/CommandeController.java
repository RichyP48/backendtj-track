package com.track.ecommerce.controller;

import com.track.dto.ApiResponse;
import com.track.ecommerce.entity.Commande;
import com.track.ecommerce.service.CommandeService;
import com.track.ecommerce.service.CommandeLivraisonService;
import com.track.finance.entity.Paiement;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/commandes")
@RequiredArgsConstructor
public class CommandeController {
    
    private final CommandeService commandeService;
    private final CommandeLivraisonService commandeLivraisonService;
    
    @PostMapping("/creer")
    public ResponseEntity<ApiResponse<Commande>> creerCommande(
            @RequestParam(required = false) String userId,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        try {
            String userEmail = userId != null ? userId : currentUser;
            if (userEmail == null || userEmail.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(ApiResponse.error("Utilisateur non authentifié"));
            }
            Commande commande = commandeService.creerCommandeDepuisPanier(userEmail);
            return ResponseEntity.ok(ApiResponse.success("Commande créée", commande));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/{id}/payer")
    public ResponseEntity<ApiResponse<Commande>> payerCommande(
            @PathVariable Long id,
            @RequestBody PaiementRequest request) {
        try {
            Commande commande = commandeService.traiterPaiement(id, request.getMode(), request.getReference());
            return ResponseEntity.ok(ApiResponse.success("Paiement traité", commande));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/{id}/expedier")
    public ResponseEntity<ApiResponse<Commande>> expedierCommande(@PathVariable Long id) {
        try {
            Commande commande = commandeService.expedierCommande(id);
            return ResponseEntity.ok(ApiResponse.success("Commande expédiée", commande));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PutMapping("/{id}/statut")
    public ResponseEntity<ApiResponse<Commande>> updateStatutCommande(
            @PathVariable Long id,
            @RequestBody StatutUpdateRequest request) {
        try {
            Commande commande = commandeService.updateStatut(id, request.getStatut());
            return ResponseEntity.ok(ApiResponse.success("Statut mis à jour", commande));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @GetMapping("/merchant")
    public ResponseEntity<ApiResponse<List<Commande>>> getCommandesMerchant(
            @CurrentSecurityContext(expression = "authentication?.name") String merchantUserId) {
        try {
            List<Commande> commandes = commandeService.getCommandesByMerchant(merchantUserId);
            return ResponseEntity.ok(ApiResponse.success("Commandes récupérées", commandes));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @GetMapping("/livreurs-disponibles")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getLivreursDisponibles(
            @RequestParam double lat, @RequestParam double lon) {
        try {
            var livreurs = commandeLivraisonService.getLivreursDisponibles(lat, lon);
            return ResponseEntity.ok(ApiResponse.success("Livreurs disponibles", livreurs));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/{id}/assigner-livreur")
    public ResponseEntity<ApiResponse<Map<String, Object>>> assignerLivreur(
            @PathVariable Long id,
            @RequestParam Long clientId,
            @RequestParam Long merchantId) {
        try {
            var result = commandeLivraisonService.assignerLivreur(id, clientId, merchantId);
            return ResponseEntity.ok(ApiResponse.success("Livreur assigné", result));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @Data
    public static class PaiementRequest {
        private Paiement.ModePaiement mode;
        private String reference;
    }
    
    @Data
    public static class StatutUpdateRequest {
        private String statut;
    }
}
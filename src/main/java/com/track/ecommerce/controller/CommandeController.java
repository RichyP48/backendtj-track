package com.track.ecommerce.controller;

import com.track.dto.ApiResponse;
import com.track.ecommerce.entity.Commande;
import com.track.ecommerce.service.CommandeService;
import com.track.finance.entity.Paiement;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commandes")
@RequiredArgsConstructor
public class CommandeController {
    
    private final CommandeService commandeService;
    
    @PostMapping("/creer")
    public ResponseEntity<ApiResponse<Commande>> creerCommande(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        try {
            Commande commande = commandeService.creerCommandeDepuisPanier(userId);
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
    
    @Data
    public static class PaiementRequest {
        private Paiement.ModePaiement mode;
        private String reference;
    }
}
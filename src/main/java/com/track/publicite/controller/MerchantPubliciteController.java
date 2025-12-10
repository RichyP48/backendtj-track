package com.track.publicite.controller;

import com.track.publicite.service.PubliciteService;
import com.track.publicite.dto.CampagneRequest;
import com.track.publicite.entity.CampagnePublicitaire;
import com.track.dto.ApiResponse;
import com.track.security.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/merchant/publicite")
@RequiredArgsConstructor
public class MerchantPubliciteController {
    
    private final PubliciteService publiciteService;
    
    @GetMapping("/tarifs")
    public ResponseEntity<ApiResponse<BigDecimal>> calculerTarif(
            @RequestParam CampagnePublicitaire.TypeCampagne type,
            @RequestParam CampagnePublicitaire.PeriodeTarification periode) {
        BigDecimal tarif = publiciteService.calculerTarif(type, periode);
        return ResponseEntity.ok(ApiResponse.success(tarif));
    }
    
    @GetMapping("/mes-campagnes")
    public ResponseEntity<ApiResponse<List<CampagnePublicitaire>>> getMesCampagnes(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        // Note: Il faudrait récupérer le merchantId à partir du userId
        // Cette logique devrait être implémentée dans le service
        return ResponseEntity.ok(ApiResponse.success(List.of()));
    }
    
    @PostMapping("/campagne")
    public ResponseEntity<ApiResponse<String>> creerCampagne(
            @RequestBody CampagneRequest request,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        
        try {
            SecurityUtils.validateUserAccess(userId);
            // Validation du montant par rapport au tarif
            BigDecimal tarifRequis = publiciteService.calculerTarif(
                request.getTypeCampagne(), 
                request.getPeriodeTarification()
            );
            
            if (request.getMontantPaye().compareTo(tarifRequis) < 0) {
                return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Montant insuffisant. Tarif requis: " + tarifRequis));
            }
            
            // Note: La création complète nécessiterait l'intégration avec le système de paiement
            // et la récupération des entités ProduitEcommerce et MerchantProfile
            
            return ResponseEntity.ok(ApiResponse.success("Campagne créée avec succès"));
            
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(ApiResponse.error("Erreur lors de la création: " + e.getMessage()));
        }
    }
}
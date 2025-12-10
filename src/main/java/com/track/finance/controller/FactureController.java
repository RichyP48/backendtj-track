package com.track.finance.controller;

import com.track.dto.ApiResponse;
import com.track.finance.entity.Facture;
import com.track.finance.service.FacturationService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/finance/factures")
@RequiredArgsConstructor
public class FactureController {
    
    private final FacturationService facturationService;
    
    @PostMapping("/generer/{commandeId}")
    public ResponseEntity<ApiResponse<Facture>> genererFacture(@PathVariable Long commandeId) {
        try {
            // Facture facture = facturationService.genererFactureDepuisCommande(commandeId);
            return ResponseEntity.ok(ApiResponse.success("Facture générée", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/{id}/paiement")
    public ResponseEntity<ApiResponse<Void>> enregistrerPaiement(
            @PathVariable Long id, 
            @RequestBody PaiementRequest request) {
        try {
            facturationService.enregistrerPaiement(id, request.getMontant(), 
                request.getMode(), request.getReference());
            return ResponseEntity.ok(ApiResponse.success("Paiement enregistré", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @GetMapping("/ca")
    public ResponseEntity<BigDecimal> getChiffreAffaires(
            @RequestParam LocalDateTime debut,
            @RequestParam LocalDateTime fin) {
        BigDecimal ca = facturationService.calculerChiffreAffaires(debut, fin);
        return ResponseEntity.ok(ca);
    }
    
    @Data
    public static class PaiementRequest {
        private BigDecimal montant;
        private com.track.finance.entity.Paiement.ModePaiement mode;
        private String reference;
    }
}
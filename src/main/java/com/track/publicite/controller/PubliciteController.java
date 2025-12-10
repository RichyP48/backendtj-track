package com.track.publicite.controller;

import com.track.publicite.service.PubliciteService;
import com.track.publicite.entity.CampagnePublicitaire;
import com.track.ecommerce.entity.ProduitEcommerce;
import com.track.dto.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/publicite")
@RequiredArgsConstructor
public class PubliciteController {
    
    private final PubliciteService publiciteService;
    
    @GetMapping("/produits-en-avant")
    public ResponseEntity<ApiResponse<List<ProduitEcommerce>>> getProduitsEnAvant() {
        List<ProduitEcommerce> produits = publiciteService.getProduitsEnAvant();
        return ResponseEntity.ok(ApiResponse.success(produits));
    }
    
    @GetMapping("/produits-en-avant/{type}")
    public ResponseEntity<ApiResponse<List<ProduitEcommerce>>> getProduitsEnAvantParType(
            @PathVariable CampagnePublicitaire.TypeCampagne type) {
        List<ProduitEcommerce> produits = publiciteService.getProduitsEnAvantParType(type);
        return ResponseEntity.ok(ApiResponse.success(produits));
    }
    
    @GetMapping("/tarif")
    public ResponseEntity<ApiResponse<BigDecimal>> calculerTarif(
            @RequestParam CampagnePublicitaire.TypeCampagne type,
            @RequestParam CampagnePublicitaire.PeriodeTarification periode) {
        BigDecimal tarif = publiciteService.calculerTarif(type, periode);
        return ResponseEntity.ok(ApiResponse.success(tarif));
    }
    
    @PostMapping("/campagne/{campagneId}/vue")
    public ResponseEntity<ApiResponse<Void>> incrementerVues(@PathVariable Long campagneId) {
        publiciteService.incrementerVues(campagneId);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
    
    @PostMapping("/campagne/{campagneId}/clic")
    public ResponseEntity<ApiResponse<Void>> incrementerClics(@PathVariable Long campagneId) {
        publiciteService.incrementerClics(campagneId);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}
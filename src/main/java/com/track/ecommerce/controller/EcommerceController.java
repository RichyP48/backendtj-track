package com.track.ecommerce.controller;

import com.track.ecommerce.dto.ProduitEcommerceDto;
import com.track.ecommerce.service.ProduitEcommerceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ecommerce")
@RequiredArgsConstructor
public class EcommerceController {
    
    private final ProduitEcommerceService produitService;

    @GetMapping("/produits")
    public ResponseEntity<List<ProduitEcommerceDto>> getProduitsVisibles() {
        return ResponseEntity.ok(produitService.getProduitsVisibles());
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getEcommerceStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalCommandes", 0);
        stats.put("commandesEnCours", 0);
        stats.put("chiffreAffaires", 0);
        stats.put("panierMoyen", 0);
        stats.put("tauxConversion", 0.0);
        
        return ResponseEntity.ok(stats);
    }
}
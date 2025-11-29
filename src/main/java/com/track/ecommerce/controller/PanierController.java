package com.track.ecommerce.controller;

import com.track.ecommerce.dto.PanierDto;
import com.track.ecommerce.service.PanierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/panier")
@RequiredArgsConstructor
public class PanierController {
    
    private final PanierService panierService;
    
    @GetMapping
    public ResponseEntity<PanierDto> getPanier(
            @CurrentSecurityContext(expression = "authentication?.name") String userEmail) {
        PanierDto panier = panierService.getPanier(userEmail);
        return ResponseEntity.ok(panier);
    }
    
    @PostMapping("/ajouter")
    public ResponseEntity<PanierDto> ajouterArticle(
            @RequestBody Map<String, Object> request,
            @CurrentSecurityContext(expression = "authentication?.name") String userEmail) {
        try {
            Long articleId = Long.valueOf(request.get("articleId").toString());
            Integer quantite = Integer.valueOf(request.get("quantite").toString());
            
            PanierDto panier = panierService.ajouterArticle(userEmail, articleId, quantite);
            return ResponseEntity.ok(panier);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/modifier")
    public ResponseEntity<PanierDto> modifierQuantite(
            @RequestBody Map<String, Object> request,
            @CurrentSecurityContext(expression = "authentication?.name") String userEmail) {
        try {
            Long articleId = Long.valueOf(request.get("articleId").toString());
            Integer quantite = Integer.valueOf(request.get("quantite").toString());
            
            PanierDto panier = panierService.modifierQuantite(userEmail, articleId, quantite);
            return ResponseEntity.ok(panier);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/supprimer/{articleId}")
    public ResponseEntity<PanierDto> supprimerArticle(
            @PathVariable Long articleId,
            @CurrentSecurityContext(expression = "authentication?.name") String userEmail) {
        try {
            PanierDto panier = panierService.supprimerArticle(userEmail, articleId);
            return ResponseEntity.ok(panier);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/vider")
    public ResponseEntity<Void> viderPanier(
            @CurrentSecurityContext(expression = "authentication?.name") String userEmail) {
        panierService.viderPanier(userEmail);
        return ResponseEntity.ok().build();
    }
}
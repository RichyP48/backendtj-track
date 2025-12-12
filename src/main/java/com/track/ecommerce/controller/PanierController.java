package com.track.ecommerce.controller;

import com.track.dto.ApiResponse;
import com.track.ecommerce.dto.PanierDto;
import com.track.ecommerce.dto.PanierRequest;
import com.track.ecommerce.service.PanierService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/panier")
@RequiredArgsConstructor
public class PanierController {
    
    private final PanierService panierService;
    
    @GetMapping
    public ResponseEntity<PanierDto> getPanier(
            @RequestParam(required = false) String userEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        try {
            String userId = userEmail != null ? userEmail : currentUser;
            if (userId == null || userId.trim().isEmpty()) {
                return ResponseEntity.ok(PanierDto.builder().items(java.util.List.of()).totalItems(0).montantTotal(java.math.BigDecimal.ZERO).build());
            }
            PanierDto panier = panierService.getPanier(userId);
            return ResponseEntity.ok(panier);
        } catch (Exception e) {
            return ResponseEntity.ok(PanierDto.builder().items(java.util.List.of()).totalItems(0).montantTotal(java.math.BigDecimal.ZERO).build());
        }
    }
    
    @PostMapping("/ajouter")
    public ResponseEntity<ApiResponse<PanierDto>> ajouterArticle(
            @Valid @RequestBody PanierRequest request,
            @RequestParam(required = false) String userEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        try {
            String userId = userEmail != null ? userEmail : currentUser;
            
            if (userId == null || userId.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(ApiResponse.error("Utilisateur non authentifié"));
            }
            
            PanierDto panier = panierService.ajouterArticle(userId, request.getArticleId(), request.getQuantite());
            return ResponseEntity.ok(ApiResponse.success("Article ajouté au panier", panier));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(ApiResponse.error("Erreur interne du serveur"));
        }
    }
    
    @PutMapping("/modifier")
    public ResponseEntity<ApiResponse<PanierDto>> modifierQuantite(
            @Valid @RequestBody PanierRequest request,
            @RequestParam(required = false) String userEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        try {
            String userId = userEmail != null ? userEmail : currentUser;
            
            if (userId == null || userId.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(ApiResponse.error("Utilisateur non authentifié"));
            }
            
            PanierDto panier = panierService.modifierQuantite(userId, request.getArticleId(), request.getQuantite());
            return ResponseEntity.ok(ApiResponse.success("Quantité modifiée", panier));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(ApiResponse.error("Erreur interne du serveur"));
        }
    }
    
    @DeleteMapping("/supprimer/{articleId}")
    public ResponseEntity<PanierDto> supprimerArticle(
            @PathVariable Long articleId,
            @RequestParam(required = false) String userEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        try {
            String userId = userEmail != null ? userEmail : currentUser;
            PanierDto panier = panierService.supprimerArticle(userId, articleId);
            return ResponseEntity.ok(panier);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/vider")
    public ResponseEntity<Void> viderPanier(
            @RequestParam(required = false) String userEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String currentUser) {
        String userId = userEmail != null ? userEmail : currentUser;
        panierService.viderPanier(userId);
        return ResponseEntity.ok().build();
    }
}
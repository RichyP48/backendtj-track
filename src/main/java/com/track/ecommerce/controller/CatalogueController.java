package com.track.ecommerce.controller;

import com.track.dto.ApiResponse;
import com.track.ecommerce.dto.ProduitDetailDto;
import com.track.ecommerce.service.ProduitDetailService;
import com.track.ecommerce.entity.ProduitEcommerce;
import com.track.publicite.service.PubliciteService;
import com.track.publicite.entity.CampagnePublicitaire;
import com.track.stock.dto.ArticleDto;
import com.track.stock.dto.CategorieDto;
import com.track.stock.service.ArticleService;
import com.track.stock.service.CategorieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/catalogue")
@RequiredArgsConstructor
public class CatalogueController {
    
    private final ArticleService articleService;
    private final CategorieService categorieService;
    private final ProduitDetailService produitDetailService;
    private final PubliciteService publiciteService;
    
    @GetMapping("/articles")
    public ResponseEntity<List<ArticleDto>> getArticles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "designation") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir,
            @RequestParam(required = false) Long categorieId,
            @RequestParam(required = false) String search) {
        
        List<ArticleDto> articles;
        
        if (categorieId != null) {
            articles = articleService.getArticlesByCategorie(categorieId);
        } else if (search != null && !search.trim().isEmpty()) {
            articles = articleService.rechercherArticles(search);
        } else {
            articles = articleService.getAllArticles();
        }
        
        // Filtrer seulement les articles en stock pour le catalogue public
        articles = articles.stream()
                .filter(article -> article.getQuantiteStock() > 0)
                .toList();
        
        return ResponseEntity.ok(articles);
    }
    
    @GetMapping("/produits/{id}")
    public ResponseEntity<ProduitDetailDto> getProduitDetail(
            @PathVariable Long id,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        try {
            ProduitDetailDto produit = produitDetailService.getProduitDetail(id, userId);
            return ResponseEntity.ok(produit);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/produits/{id}/like")
    public ResponseEntity<ApiResponse<Void>> ajouterLike(
            @PathVariable Long id,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        try {
            produitDetailService.ajouterLike(id, userId);
            return ResponseEntity.ok(ApiResponse.success("Like ajouté", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/produits/{id}/favoris")
    public ResponseEntity<ApiResponse<Void>> ajouterAuxFavoris(
            @PathVariable Long id,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        try {
            produitDetailService.ajouterAuxFavoris(id, userId);
            return ResponseEntity.ok(ApiResponse.success("Ajouté aux favoris", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @GetMapping("/categories")
    public ResponseEntity<List<CategorieDto>> getCategories() {
        List<CategorieDto> categories = categorieService.getAllCategories();
        return ResponseEntity.ok(categories);
    }
    
    @GetMapping("/articles/populaires")
    public ResponseEntity<List<ArticleDto>> getArticlesPopulaires() {
        // Pour l'instant, retourne les articles avec le plus de stock
        List<ArticleDto> articles = articleService.getAllArticles().stream()
                .filter(article -> article.getQuantiteStock() > 0)
                .sorted((a, b) -> b.getQuantiteStock().compareTo(a.getQuantiteStock()))
                .limit(10)
                .toList();
        
        return ResponseEntity.ok(articles);
    }
    
    @GetMapping("/articles/nouveautes")
    public ResponseEntity<List<ArticleDto>> getNouveautes() {
        // Pour l'instant, retourne les derniers articles ajoutés
        List<ArticleDto> articles = articleService.getAllArticles().stream()
                .filter(article -> article.getQuantiteStock() > 0)
                .limit(10)
                .toList();
        
        return ResponseEntity.ok(articles);
    }
    
    @GetMapping("/produits-en-avant")
    public ResponseEntity<ApiResponse<List<ProduitEcommerce>>> getProduitsEnAvant() {
        List<ProduitEcommerce> produits = publiciteService.getProduitsEnAvant();
        return ResponseEntity.ok(ApiResponse.success(produits));
    }
    
    @GetMapping("/banniere-principale")
    public ResponseEntity<ApiResponse<List<ProduitEcommerce>>> getBannierePrincipale() {
        List<ProduitEcommerce> produits = publiciteService.getProduitsEnAvantParType(
            CampagnePublicitaire.TypeCampagne.BANNIERE_PRINCIPALE);
        return ResponseEntity.ok(ApiResponse.success(produits));
    }
    
    @GetMapping("/carrousel-accueil")
    public ResponseEntity<ApiResponse<List<ProduitEcommerce>>> getCarrouselAccueil() {
        List<ProduitEcommerce> produits = publiciteService.getProduitsEnAvantParType(
            CampagnePublicitaire.TypeCampagne.CARROUSEL_ACCUEIL);
        return ResponseEntity.ok(ApiResponse.success(produits));
    }
}
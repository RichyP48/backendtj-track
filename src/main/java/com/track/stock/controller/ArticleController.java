package com.track.stock.controller;

import com.track.dto.ApiResponse;
import com.track.stock.dto.ArticleDto;
import com.track.stock.service.ArticleService;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/stock/articles")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('COMMERCANT')")
@Slf4j
public class ArticleController {
    
    private final ArticleService articleService;
    
    @PostMapping
    public ResponseEntity<ArticleDto> createArticle(@Valid @RequestBody ArticleDto articleDto) {
        log.info("Création d'un nouvel article: {}", articleDto.getCodeArticle());
        ArticleDto created = articleService.createArticle(articleDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ArticleDto> updateArticle(@PathVariable Long id, @Valid @RequestBody ArticleDto articleDto) {
        log.info("Mise à jour de l'article avec l'ID: {}", id);
        ArticleDto updated = articleService.updateArticle(id, articleDto);
        return ResponseEntity.ok(updated);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        log.info("Suppression de l'article avec l'ID: {}", id);
        articleService.deleteArticle(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ArticleDto> getArticleById(@PathVariable Long id) {
        log.debug("Récupération de l'article avec l'ID: {}", id);
        ArticleDto article = articleService.getArticleById(id);
        return ResponseEntity.ok(article);
    }
    
    @GetMapping
    public ResponseEntity<List<ArticleDto>> getAllArticles() {
        List<ArticleDto> articles = articleService.getAllArticles();
        return ResponseEntity.ok(articles);
    }
    
    @GetMapping("/categorie/{categorieId}")
    public ResponseEntity<List<ArticleDto>> getArticlesByCategorie(@PathVariable Long categorieId) {
        List<ArticleDto> articles = articleService.getArticlesByCategorie(categorieId);
        return ResponseEntity.ok(articles);
    }
    
    @GetMapping("/stock-faible")
    public ResponseEntity<List<ArticleDto>> getArticlesStockFaible() {
        List<ArticleDto> articles = articleService.getArticlesStockFaible();
        return ResponseEntity.ok(articles);
    }
    
    @PostMapping("/{id}/ajuster-stock")
    public ResponseEntity<ApiResponse<Void>> ajusterStock(
            @PathVariable Long id,
            @RequestBody StockAdjustmentRequest request,
            @CurrentSecurityContext(expression = "authentication?.name") String utilisateur) {
        try {
            articleService.ajusterStock(id, request.getQuantite(), request.getMotif(), utilisateur);
            return ResponseEntity.ok(ApiResponse.success("Stock ajusté avec succès", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @Data
    public static class StockAdjustmentRequest {
        private Integer quantite;
        private String motif;
    }
}
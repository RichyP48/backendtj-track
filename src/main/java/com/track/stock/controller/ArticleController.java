package com.track.stock.controller;

import com.track.stock.dto.ArticleDto;
import com.track.stock.service.ArticleService;
import lombok.RequiredArgsConstructor;
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
public class ArticleController {
    
    private final ArticleService articleService;
    
    @PostMapping
    public ResponseEntity<ArticleDto> createArticle(@RequestBody ArticleDto articleDto) {
        try {
            ArticleDto created = articleService.createArticle(articleDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ArticleDto> updateArticle(@PathVariable Long id, @RequestBody ArticleDto articleDto) {
        try {
            ArticleDto updated = articleService.updateArticle(id, articleDto);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        try {
            articleService.deleteArticle(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ArticleDto> getArticleById(@PathVariable Long id) {
        try {
            ArticleDto article = articleService.getArticleById(id);
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
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
    public ResponseEntity<?> ajusterStock(
            @PathVariable Long id,
            @RequestBody Map<String, Object> request,
            @CurrentSecurityContext(expression = "authentication?.name") String utilisateur) {
        try {
            Integer quantite = (Integer) request.get("quantite");
            String motif = (String) request.get("motif");
            
            articleService.ajusterStock(id, quantite, motif, utilisateur);
            return ResponseEntity.ok(Map.of("success", true, "message", "Stock ajusté avec succès"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
}
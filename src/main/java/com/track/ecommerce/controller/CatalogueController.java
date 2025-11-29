package com.track.ecommerce.controller;

import com.track.stock.dto.ArticleDto;
import com.track.stock.dto.CategorieDto;
import com.track.stock.service.ArticleService;
import com.track.stock.service.CategorieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/catalogue")
@RequiredArgsConstructor
public class CatalogueController {
    
    private final ArticleService articleService;
    private final CategorieService categorieService;
    
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
    
    @GetMapping("/articles/{id}")
    public ResponseEntity<ArticleDto> getArticleDetail(@PathVariable Long id) {
        try {
            ArticleDto article = articleService.getArticleById(id);
            if (article.getQuantiteStock() <= 0) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(article);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
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
}
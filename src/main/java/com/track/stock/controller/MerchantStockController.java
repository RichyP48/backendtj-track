package com.track.stock.controller;

import com.track.dto.ApiResponse;
import com.track.stock.dto.ArticleDto;
import com.track.stock.service.MerchantStockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/merchant/stock")
@RequiredArgsConstructor
public class MerchantStockController {
    
    private final MerchantStockService merchantStockService;
    
    @GetMapping("/articles")
    public ResponseEntity<ApiResponse<List<ArticleDto>>> getMesArticles(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        List<ArticleDto> articles = merchantStockService.getArticlesByMerchant(userId);
        return ResponseEntity.ok(ApiResponse.success(articles));
    }
    
    @PostMapping("/articles")
    public ResponseEntity<ApiResponse<ArticleDto>> ajouterArticle(
            @RequestBody ArticleDto articleDto,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        ArticleDto article = merchantStockService.ajouterArticle(userId, articleDto);
        return ResponseEntity.ok(ApiResponse.success(article));
    }
    
    @PutMapping("/articles/{id}/stock")
    public ResponseEntity<ApiResponse<Void>> ajusterStock(
            @PathVariable Long id,
            @RequestParam Integer quantite,
            @RequestParam String motif,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        merchantStockService.ajusterStock(userId, id, quantite, motif);
        return ResponseEntity.ok(ApiResponse.success("Stock ajusté", null));
    }
    
    @GetMapping("/articles/stock-faible")
    public ResponseEntity<ApiResponse<List<ArticleDto>>> getStockFaible(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        List<ArticleDto> articles = merchantStockService.getArticlesStockFaible(userId);
        return ResponseEntity.ok(ApiResponse.success(articles));
    }
}
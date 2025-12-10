package com.track.stock.controller;

import com.track.dto.ApiResponse;
import com.track.stock.dto.ArticleDto;
import com.track.stock.service.SupplierStockService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier/stock")
@RequiredArgsConstructor
public class SupplierStockController {
    
    private final SupplierStockService supplierStockService;
    
    @GetMapping("/articles")
    public ResponseEntity<ApiResponse<List<ArticleDto>>> getMesArticles(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        List<ArticleDto> articles = supplierStockService.getArticlesBySupplier(userId);
        return ResponseEntity.ok(ApiResponse.success(articles));
    }
    
    @PostMapping("/articles")
    public ResponseEntity<ApiResponse<ArticleDto>> ajouterArticle(
            @RequestBody ArticleDto articleDto,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        ArticleDto article = supplierStockService.ajouterArticle(userId, articleDto);
        return ResponseEntity.ok(ApiResponse.success(article));
    }
    
    @PutMapping("/articles/{id}/stock")
    public ResponseEntity<ApiResponse<Void>> ajusterStock(
            @PathVariable Long id,
            @RequestParam Integer quantite,
            @RequestParam String motif,
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        supplierStockService.ajusterStock(userId, id, quantite, motif);
        return ResponseEntity.ok(ApiResponse.success("Stock ajusté", null));
    }
    
    @GetMapping("/commandes-merchants")
    public ResponseEntity<ApiResponse<List<Object>>> getCommandesMerchants(
            @CurrentSecurityContext(expression = "authentication?.name") String userId) {
        // Commandes reçues des commerçants
        return ResponseEntity.ok(ApiResponse.success(List.of()));
    }
}
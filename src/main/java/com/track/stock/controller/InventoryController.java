package com.track.stock.controller;

import com.track.dto.ApiResponse;
import com.track.stock.entity.Article;
import com.track.stock.entity.AlerteStock;
import com.track.stock.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/stock/inventory")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class InventoryController {
    
    private final InventoryService inventoryService;
    
    @GetMapping("/dashboard")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = inventoryService.getDashboardStats();
        System.out.println("Dashboard stats: " + stats);
        return ResponseEntity.ok(stats);
    }
    
    @GetMapping("/alerts/low-stock")
    public ResponseEntity<List<Article>> getLowStockArticles() {
        return ResponseEntity.ok(inventoryService.getArticlesStockFaible());
    }
    
    @GetMapping("/alerts/out-of-stock")
    public ResponseEntity<List<Article>> getOutOfStockArticles() {
        return ResponseEntity.ok(inventoryService.getArticlesRuptureStock());
    }
    
    @GetMapping("/alerts/unread")
    public ResponseEntity<List<AlerteStock>> getUnreadAlerts() {
        return ResponseEntity.ok(inventoryService.getAlertesNonLues());
    }
    
    @PostMapping("/adjust-stock")
    public ResponseEntity<ApiResponse<Void>> adjustStock(
            @RequestParam Long articleId,
            @RequestParam Integer quantity,
            @RequestParam String reason,
            @RequestParam Long userId) {
        try {
            inventoryService.ajusterStock(articleId, quantity, reason, userId);
            return ResponseEntity.ok(ApiResponse.success("Stock ajusté avec succès", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/reserve-stock")
    public ResponseEntity<ApiResponse<Void>> reserveStock(
            @RequestParam Long articleId,
            @RequestParam Integer quantity) {
        try {
            inventoryService.reserverStock(articleId, quantity);
            return ResponseEntity.ok(ApiResponse.success("Stock réservé avec succès", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/release-stock")
    public ResponseEntity<ApiResponse<Void>> releaseStock(
            @RequestParam Long articleId,
            @RequestParam Integer quantity) {
        try {
            inventoryService.libererStock(articleId, quantity);
            return ResponseEntity.ok(ApiResponse.success("Stock libéré avec succès", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
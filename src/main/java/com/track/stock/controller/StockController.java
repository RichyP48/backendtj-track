package com.track.stock.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/stock")
@RequiredArgsConstructor
public class StockController {

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStockStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalArticles", 0);
        stats.put("valeurStock", 0);
        stats.put("articlesEnAlerte", 0);
        stats.put("articlesRupture", 0);
        stats.put("mouvementsJour", 0);
        
        return ResponseEntity.ok(stats);
    }
}
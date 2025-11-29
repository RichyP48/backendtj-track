package com.track.stock.controller;

import com.track.stock.dto.MouvementStockDto;
import com.track.stock.service.MouvementStockService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/stock/mouvements")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('COMMERCANT')")
public class MouvementStockController {
    
    private final MouvementStockService mouvementStockService;
    
    @GetMapping
    public ResponseEntity<List<MouvementStockDto>> getAllMouvements() {
        List<MouvementStockDto> mouvements = mouvementStockService.getAllMouvements();
        return ResponseEntity.ok(mouvements);
    }
    
    @GetMapping("/article/{articleId}")
    public ResponseEntity<List<MouvementStockDto>> getMouvementsByArticle(@PathVariable Long articleId) {
        List<MouvementStockDto> mouvements = mouvementStockService.getMouvementsByArticle(articleId);
        return ResponseEntity.ok(mouvements);
    }
    
    @GetMapping("/periode")
    public ResponseEntity<List<MouvementStockDto>> getMouvementsByPeriode(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dateDebut,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dateFin) {
        List<MouvementStockDto> mouvements = mouvementStockService.getMouvementsByPeriode(dateDebut, dateFin);
        return ResponseEntity.ok(mouvements);
    }
}
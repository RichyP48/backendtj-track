package com.track.stock.service;

import com.track.stock.entity.*;
import com.track.stock.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
class InventoryServiceIntegrationTest {

    @Autowired private InventoryService inventoryService;
    @Autowired private ArticleRepository articleRepository;
    @Autowired private MouvementStockRepository mouvementStockRepository;
    @Autowired private AlerteStockRepository alerteStockRepository;

    @Test
    void testStockManagementFlow_Integration() {
        Article article = Article.builder()
                .codeArticle("INT001")
                .designation("Integration Test Article")
                .prixUnitaireHt(BigDecimal.valueOf(50.00))
                .quantiteStock(100)
                .seuilAlerte(20)
                .stockMax(500)
                .statut(Article.StatutArticle.ACTIF)
                .build();
        
        article = articleRepository.save(article);

        // Test stock adjustment
        inventoryService.ajusterStock(article.getId(), 150, "Réception", 1L);
        
        Article updatedArticle = articleRepository.findById(article.getId()).orElseThrow();
        assertEquals(150, updatedArticle.getQuantiteStock());

        // Verify movement was created
        var movements = mouvementStockRepository.findByArticleIdOrderByDateMouvementDesc(article.getId());
        assertFalse(movements.isEmpty());
        assertEquals(MouvementStock.TypeMouvement.ENTREE, movements.get(0).getTypeMouvement());
        assertEquals(50, movements.get(0).getQuantite());

        // Test stock reservation
        inventoryService.reserverStock(article.getId(), 30);
        
        updatedArticle = articleRepository.findById(article.getId()).orElseThrow();
        assertEquals(30, updatedArticle.getStockReserve());
        assertEquals(120, updatedArticle.getStockDisponible());

        // Test low stock alert
        inventoryService.ajusterStock(article.getId(), 15, "Correction", 1L);
        
        final Long articleId = article.getId();
        var alerts = alerteStockRepository.findByLuFalseOrderByCreatedAtDesc();
        assertTrue(alerts.stream().anyMatch(a -> 
            a.getType() == AlerteStock.TypeAlerte.STOCK_FAIBLE && 
            a.getArticle().getId().equals(articleId)
        ));
    }

    @Test
    void testStockValidation_ShouldPreventNegativeStock() {
        Article article = Article.builder()
                .codeArticle("VAL001")
                .designation("Validation Test")
                .prixUnitaireHt(BigDecimal.valueOf(25.00))
                .quantiteStock(10)
                .seuilAlerte(5)
                .build();
        
        article = articleRepository.save(article);
        final Long articleId = article.getId();

        assertThrows(RuntimeException.class, () -> 
            inventoryService.reserverStock(articleId, 15)
        );
    }
}
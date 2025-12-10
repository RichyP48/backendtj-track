package com.track.stock.service;

import com.track.stock.entity.*;
import com.track.stock.repository.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ImprovedInventoryServiceTest {

    @Mock private ArticleRepository articleRepository;
    @Mock private MouvementStockRepository mouvementStockRepository;
    @Mock private AlerteStockRepository alerteStockRepository;
    
    @InjectMocks private ImprovedInventoryService inventoryService;

    private Article testArticle;

    @BeforeEach
    void setUp() {
        testArticle = Article.builder()
                .id(1L)
                .codeArticle("ART001")
                .designation("Test Article")
                .prixUnitaireHt(BigDecimal.valueOf(100.00))
                .quantiteStock(50)
                .stockReserve(0)
                .seuilAlerte(10)
                .build();
    }

    @Test
    void testProcessStockMovement_EntryType_ShouldIncreaseStock() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.processStockMovement(1L, 25, MouvementStock.TypeMouvement.ENTREE, 
                                            "Réception", "user1");

        verify(articleRepository).save(argThat(article -> 
            article.getQuantiteStock().equals(75)
        ));
        verify(mouvementStockRepository).save(any(MouvementStock.class));
    }

    @Test
    void testProcessStockMovement_ExitType_WithSufficientStock_ShouldDecreaseStock() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.processStockMovement(1L, 20, MouvementStock.TypeMouvement.SORTIE, 
                                            "Vente", "user1");

        verify(articleRepository).save(argThat(article -> 
            article.getQuantiteStock().equals(30)
        ));
        verify(mouvementStockRepository).save(any(MouvementStock.class));
    }

    @Test
    void testProcessStockMovement_ExitType_WithInsufficientStock_ShouldThrowException() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            inventoryService.processStockMovement(1L, 60, MouvementStock.TypeMouvement.SORTIE, 
                                                "Vente", "user1")
        );
        
        assertEquals("Stock insuffisant pour l'opération", exception.getMessage());
        verify(articleRepository, never()).save(any());
        verify(mouvementStockRepository, never()).save(any());
    }

    @Test
    void testReserveStockForOrder_WithSufficientStock_ShouldReserve() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.reserveStockForOrder(1L, 20, "ORDER123");

        verify(articleRepository).save(argThat(article -> 
            article.getStockReserve().equals(20)
        ));
        verify(mouvementStockRepository).save(argThat(movement ->
            movement.getMotif().contains("ORDER123")
        ));
    }

    @Test
    void testReserveStockForOrder_WithInsufficientStock_ShouldThrowException() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            inventoryService.reserveStockForOrder(1L, 60, "ORDER123")
        );
        
        assertEquals("Stock insuffisant pour la réservation", exception.getMessage());
    }

    @Test
    void testConfirmOrderAndReduceStock_ShouldReduceBothStocks() {
        testArticle.setStockReserve(20);
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.confirmOrderAndReduceStock(1L, 20, "ORDER123");

        verify(articleRepository).save(argThat(article -> 
            article.getQuantiteStock().equals(30) && 
            article.getStockReserve().equals(0)
        ));
        verify(mouvementStockRepository).save(any(MouvementStock.class));
    }

    @Test
    void testStockMovement_CreatingLowStockAlert_ShouldCreateAlert() {
        testArticle.setQuantiteStock(15);
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.processStockMovement(1L, 10, MouvementStock.TypeMouvement.SORTIE, 
                                            "Vente", "user1");

        verify(alerteStockRepository).save(argThat(alert ->
            alert.getType() == AlerteStock.TypeAlerte.STOCK_FAIBLE &&
            alert.getArticle().getId().equals(1L)
        ));
    }

    @Test
    void testCompleteOrderFlow_ShouldMaintainStockConsistency() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        // Step 1: Reserve stock
        inventoryService.reserveStockForOrder(1L, 25, "ORDER456");
        
        // Step 2: Confirm order
        testArticle.setStockReserve(25); // Simulate the reservation
        inventoryService.confirmOrderAndReduceStock(1L, 25, "ORDER456");

        // Verify complete flow
        verify(articleRepository, times(2)).save(any(Article.class));
        verify(mouvementStockRepository, times(2)).save(any(MouvementStock.class));
    }
}
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
class StockManagementFlowTest {

    @Mock private ArticleRepository articleRepository;
    @Mock private MouvementStockRepository mouvementStockRepository;
    @Mock private AlerteStockRepository alerteStockRepository;
    @Mock private CategorieRepository categorieRepository;
    
    @InjectMocks private InventoryService inventoryService;
    @InjectMocks private ArticleService articleService;
    @InjectMocks private MouvementStockService mouvementStockService;

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
                .stockMax(200)
                .statut(Article.StatutArticle.ACTIF)
                .build();
    }

    @Test
    void testStockAdjustment_ShouldCreateMovementAndUpdateStock() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);
        when(mouvementStockRepository.save(any(MouvementStock.class))).thenReturn(new MouvementStock());

        inventoryService.ajusterStock(1L, 75, "Ajustement inventaire", 1L);

        verify(articleRepository).save(argThat(article -> 
            article.getQuantiteStock().equals(75)
        ));
        verify(mouvementStockRepository).save(argThat(mouvement ->
            mouvement.getTypeMouvement() == MouvementStock.TypeMouvement.ENTREE &&
            mouvement.getQuantite().equals(25)
        ));
    }

    @Test
    void testStockReservation_WithSufficientStock_ShouldReserveStock() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        inventoryService.reserverStock(1L, 20);

        verify(articleRepository).save(argThat(article -> 
            article.getStockReserve().equals(20) &&
            article.getStockDisponible().equals(30)
        ));
    }

    @Test
    void testStockReservation_WithInsufficientStock_ShouldThrowException() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            inventoryService.reserverStock(1L, 60)
        );
        assertEquals("Stock insuffisant", exception.getMessage());
        verify(articleRepository, never()).save(any());
    }

    @Test
    void testLowStockAlert_ShouldCreateAlert() {
        testArticle.setQuantiteStock(5);
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);
        when(mouvementStockRepository.save(any(MouvementStock.class))).thenReturn(new MouvementStock());

        inventoryService.ajusterStock(1L, 5, "Test low stock", 1L);

        verify(alerteStockRepository).save(argThat(alerte ->
            alerte.getType() == AlerteStock.TypeAlerte.STOCK_FAIBLE &&
            alerte.getStockActuel().equals(5)
        ));
    }

    @Test
    void testStockReduction_WithInsufficientStock_ShouldThrowException() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            articleService.reduireStock(1L, 60, "Vente", "user1")
        );
        assertEquals("Stock insuffisant", exception.getMessage());
        verify(articleRepository, never()).save(any());
    }

    @Test
    void testCompleteStockFlow_OrderToDelivery() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);
        when(mouvementStockRepository.save(any(MouvementStock.class))).thenReturn(new MouvementStock());

        inventoryService.reserverStock(1L, 20);
        articleService.reduireStock(1L, 20, "Commande confirmée", "system");
        inventoryService.libererStock(1L, 20);

        verify(articleRepository, times(3)).save(any(Article.class));
        verify(mouvementStockService).enregistrerMouvement(
            eq(1L), 
            eq(MouvementStock.TypeMouvement.SORTIE), 
            eq(20), 
            eq("Commande confirmée"), 
            eq("system")
        );
    }
}
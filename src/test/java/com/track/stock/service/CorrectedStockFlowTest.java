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
class CorrectedStockFlowTest {

    @Mock private ArticleRepository articleRepository;
    @Mock private MouvementStockRepository mouvementStockRepository;
    @Mock private AlerteStockRepository alerteStockRepository;
    
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
                .stockReserve(10)
                .seuilAlerte(15)
                .build();
    }

    @Test
    void testStockReduction_UsesAvailableStock() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);

        // Should use available stock (50-10=40), not total stock
        articleService.reduireStock(1L, 35, "Vente", "user1");

        verify(articleRepository).save(argThat(article -> 
            article.getQuantiteStock().equals(15)
        ));
    }

    @Test
    void testStockReduction_ExceedsAvailable_ThrowsException() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        // Available stock is 40, trying to reduce by 45
        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            articleService.reduireStock(1L, 45, "Vente", "user1")
        );
        
        assertEquals("Stock disponible insuffisant", exception.getMessage());
    }

    @Test
    void testStockReservation_CreatesMovement() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);
        when(mouvementStockRepository.save(any(MouvementStock.class))).thenReturn(new MouvementStock());

        inventoryService.reserverStock(1L, 20);

        verify(mouvementStockRepository).save(argThat(movement ->
            movement.getTypeMouvement() == MouvementStock.TypeMouvement.SORTIE &&
            movement.getQuantite().equals(20) &&
            movement.getMotif().equals("Réservation stock")
        ));
    }

    @Test
    void testStockRelease_CreatesMovement() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));
        when(articleRepository.save(any(Article.class))).thenReturn(testArticle);
        when(mouvementStockRepository.save(any(MouvementStock.class))).thenReturn(new MouvementStock());

        inventoryService.libererStock(1L, 5);

        verify(mouvementStockRepository).save(argThat(movement ->
            movement.getTypeMouvement() == MouvementStock.TypeMouvement.ENTREE &&
            movement.getQuantite().equals(5) &&
            movement.getMotif().equals("Libération réservation")
        ));
    }

    @Test
    void testNegativeStockPrevention() {
        when(articleRepository.findById(1L)).thenReturn(Optional.of(testArticle));

        RuntimeException exception = assertThrows(RuntimeException.class, () -> 
            articleService.ajusterStock(1L, -60, "Correction", "user1")
        );
        
        assertEquals("Stock ne peut pas être négatif", exception.getMessage());
    }
}
package com.track.stock.service;

import com.track.stock.entity.*;
import com.track.stock.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ImprovedInventoryService {
    
    private final ArticleRepository articleRepository;
    private final MouvementStockRepository mouvementStockRepository;
    private final AlerteStockRepository alerteStockRepository;

    @Transactional
    public void processStockMovement(Long articleId, Integer quantite, 
                                   MouvementStock.TypeMouvement type, String motif, String user) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));

        // Validate operation
        if (isStockReductionOperation(type) && article.getStockDisponible() < quantite) {
            throw new RuntimeException("Stock insuffisant pour l'opération");
        }

        // Update stock atomically
        Integer oldStock = article.getQuantiteStock();
        Integer newStock = calculateNewStock(oldStock, quantite, type);
        
        article.setQuantiteStock(newStock);
        articleRepository.save(article);

        // Record movement
        createMovement(article, type, quantite, motif, user);

        // Check alerts
        checkAndCreateAlerts(article);
    }

    @Transactional
    public void reserveStockForOrder(Long articleId, Integer quantite, String orderId) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));

        if (article.getStockDisponible() < quantite) {
            throw new RuntimeException("Stock insuffisant pour la réservation");
        }

        article.setStockReserve(article.getStockReserve() + quantite);
        articleRepository.save(article);

        // Log reservation
        createMovement(article, MouvementStock.TypeMouvement.SORTIE, quantite, 
                      "Réservation commande: " + orderId, "system");
    }

    @Transactional
    public void confirmOrderAndReduceStock(Long articleId, Integer quantite, String orderId) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));

        // Reduce actual stock and reserved stock
        article.setQuantiteStock(article.getQuantiteStock() - quantite);
        article.setStockReserve(Math.max(0, article.getStockReserve() - quantite));
        articleRepository.save(article);

        createMovement(article, MouvementStock.TypeMouvement.SORTIE, quantite, 
                      "Vente confirmée: " + orderId, "system");
        
        checkAndCreateAlerts(article);
    }

    private boolean isStockReductionOperation(MouvementStock.TypeMouvement type) {
        return type == MouvementStock.TypeMouvement.SORTIE || 
               type == MouvementStock.TypeMouvement.CORRECTION_NEGATIVE;
    }

    private Integer calculateNewStock(Integer currentStock, Integer quantite, MouvementStock.TypeMouvement type) {
        return switch (type) {
            case ENTREE, CORRECTION_POSITIVE -> currentStock + quantite;
            case SORTIE, CORRECTION_NEGATIVE -> currentStock - quantite;
        };
    }

    private void createMovement(Article article, MouvementStock.TypeMouvement type, 
                               Integer quantite, String motif, String user) {
        MouvementStock movement = MouvementStock.builder()
            .article(article)
            .typeMouvement(type)
            .quantite(quantite)
            .prixUnitaire(article.getPrixUnitaireHt())
            .motif(motif)
            .createdBy(user)
            .dateMouvement(LocalDateTime.now())
            .build();
        
        mouvementStockRepository.save(movement);
    }

    private void checkAndCreateAlerts(Article article) {
        if (article.isRuptureStock()) {
            createAlert(article, AlerteStock.TypeAlerte.RUPTURE_STOCK, 
                       "Rupture de stock: " + article.getDesignation());
        } else if (article.isStockFaible()) {
            createAlert(article, AlerteStock.TypeAlerte.STOCK_FAIBLE, 
                       "Stock faible: " + article.getDesignation());
        }
    }

    private void createAlert(Article article, AlerteStock.TypeAlerte type, String message) {
        AlerteStock alert = AlerteStock.builder()
            .article(article)
            .type(type)
            .seuil(article.getSeuilAlerte())
            .stockActuel(article.getQuantiteStock())
            .message(message)
            .lu(false)
            .build();
        
        alerteStockRepository.save(alert);
    }
}
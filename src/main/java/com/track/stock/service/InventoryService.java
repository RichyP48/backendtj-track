package com.track.stock.service;

import com.track.stock.entity.Article;
import com.track.stock.entity.AlerteStock;
import com.track.stock.entity.MouvementStock;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.repository.AlerteStockRepository;
import com.track.stock.repository.MouvementStockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class InventoryService {
    
    private final ArticleRepository articleRepository;
    private final AlerteStockRepository alerteStockRepository;
    private final MouvementStockRepository mouvementStockRepository;
    
    @Transactional
    public void ajusterStock(Long articleId, Integer nouvelleQuantite, String motif, Long userId) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        Integer ancienneQuantite = article.getQuantiteStock();
        Integer difference = nouvelleQuantite - ancienneQuantite;
        
        article.setQuantiteStock(nouvelleQuantite);
        articleRepository.save(article);
        
        // Créer mouvement de stock
        MouvementStock mouvement = MouvementStock.builder()
            .article(article)
            .typeMouvement(difference > 0 ? MouvementStock.TypeMouvement.ENTREE : MouvementStock.TypeMouvement.SORTIE)
            .quantite(Math.abs(difference))
            .prixUnitaire(article.getPrixUnitaireHt())
            .motif(motif)
            .build();
        
        mouvementStockRepository.save(mouvement);
        
        // Vérifier les alertes
        verifierAlertes(article);
    }
    
    @Transactional
    public void reserverStock(Long articleId, Integer quantite) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        if (article.getStockDisponible() < quantite) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        article.setStockReserve(article.getStockReserve() + quantite);
        articleRepository.save(article);
        
        // Record movement for reservation
        MouvementStock mouvement = MouvementStock.builder()
            .article(article)
            .typeMouvement(MouvementStock.TypeMouvement.SORTIE)
            .quantite(quantite)
            .motif("Réservation stock")
            .build();
        mouvementStockRepository.save(mouvement);
    }
    
    @Transactional
    public void libererStock(Long articleId, Integer quantite) {
        Article article = articleRepository.findById(articleId)
            .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        Integer oldReserve = article.getStockReserve();
        article.setStockReserve(Math.max(0, article.getStockReserve() - quantite));
        articleRepository.save(article);
        
        // Record movement for stock release
        Integer actualReleased = oldReserve - article.getStockReserve();
        if (actualReleased > 0) {
            MouvementStock mouvement = MouvementStock.builder()
                .article(article)
                .typeMouvement(MouvementStock.TypeMouvement.ENTREE)
                .quantite(actualReleased)
                .motif("Libération réservation")
                .build();
            mouvementStockRepository.save(mouvement);
        }
    }
    
    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        
        Long totalQuantite = articleRepository.getTotalQuantiteStock();
        stats.put("totalArticles", totalQuantite != null ? totalQuantite : 0L);
        stats.put("articlesEnAlerte", articleRepository.countArticlesStockFaible());
        stats.put("articlesRupture", articleRepository.countArticlesRuptureStock());
        stats.put("valeurStock", articleRepository.getValeurTotaleStock() != null ? articleRepository.getValeurTotaleStock() : 0.0);
        LocalDateTime startOfDay = LocalDateTime.now().toLocalDate().atStartOfDay();
        LocalDateTime endOfDay = startOfDay.plusDays(1);
        stats.put("mouvementsJour", mouvementStockRepository.countByDateBetween(startOfDay, endOfDay));
        stats.put("alertesNonLues", alerteStockRepository.countUnreadAlerts());
        
        return stats;
    }
    
    public List<Article> getArticlesStockFaible() {
        return articleRepository.findArticlesStockFaible();
    }
    
    public List<Article> getArticlesRuptureStock() {
        return articleRepository.findArticlesRuptureStock();
    }
    
    public List<AlerteStock> getAlertesNonLues() {
        return alerteStockRepository.findByLuFalseOrderByCreatedAtDesc();
    }
    
    private void verifierAlertes(Article article) {
        if (article.isRuptureStock()) {
            creerAlerte(article, AlerteStock.TypeAlerte.RUPTURE_STOCK, 
                "Rupture de stock pour " + article.getDesignation());
        } else if (article.isStockFaible()) {
            creerAlerte(article, AlerteStock.TypeAlerte.STOCK_FAIBLE, 
                "Stock faible pour " + article.getDesignation());
        } else if (article.getQuantiteStock() > article.getStockMax()) {
            creerAlerte(article, AlerteStock.TypeAlerte.SURSTOCK, 
                "Surstock détecté pour " + article.getDesignation());
        }
    }
    
    private void creerAlerte(Article article, AlerteStock.TypeAlerte type, String message) {
        AlerteStock alerte = AlerteStock.builder()
            .article(article)
            .type(type)
            .seuil(article.getSeuilAlerte())
            .stockActuel(article.getQuantiteStock())
            .message(message)
            .build();
        
        alerteStockRepository.save(alerte);
    }
}
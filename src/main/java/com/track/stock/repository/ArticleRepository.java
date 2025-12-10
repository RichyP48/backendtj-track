package com.track.stock.repository;

import com.track.stock.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    
    Optional<Article> findByCodeArticle(String codeArticle);
    
    Optional<Article> findByCodeBarres(String codeBarres);
    
    List<Article> findByCategorieId(Long categorieId);
    
    List<Article> findByFournisseurId(Long fournisseurId);
    
    List<Article> findByEntrepriseId(Long entrepriseId);
    
    List<Article> findByEntrepriseIdAndQuantiteStockLessThanEqual(Long entrepriseId, Integer stock);
    
    List<Article> findByStatut(Article.StatutArticle statut);
    
    @Query("SELECT a FROM Article a WHERE a.quantiteStock <= a.seuilAlerte AND a.statut = 'ACTIF'")
    List<Article> findArticlesStockFaible();
    
    @Query("SELECT a FROM Article a WHERE a.quantiteStock <= 0 AND a.statut = 'ACTIF'")
    List<Article> findArticlesRuptureStock();
    
    @Query("SELECT a FROM Article a WHERE a.quantiteStock > a.stockMax AND a.statut = 'ACTIF'")
    List<Article> findArticlesSurstock();
    
    @Query("SELECT a FROM Article a WHERE a.designation LIKE %?1% OR a.codeArticle LIKE %?1%")
    List<Article> searchByDesignationOrCode(String searchTerm);
    
    @Query("SELECT COUNT(a) FROM Article a WHERE a.quantiteStock <= a.seuilAlerte AND a.statut = 'ACTIF'")
    Long countArticlesStockFaible();
    
    @Query("SELECT COUNT(a) FROM Article a WHERE a.quantiteStock <= 0 AND a.statut = 'ACTIF'")
    Long countArticlesRuptureStock();
    
    @Query("SELECT SUM(a.quantiteStock * a.prixUnitaireHt) FROM Article a WHERE a.statut = 'ACTIF'")
    Double getValeurTotaleStock();
    
    @Query("SELECT SUM(a.quantiteStock) FROM Article a WHERE a.statut = 'ACTIF'")
    Long getTotalQuantiteStock();
    
    boolean existsByCodeArticle(String codeArticle);
    
    boolean existsByCodeBarres(String codeBarres);
    
    @Query("SELECT a FROM Article a ORDER BY a.quantiteStock DESC LIMIT 10")
    List<Article> findTopStockedArticles();
}
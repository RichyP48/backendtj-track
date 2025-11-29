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
    
    List<Article> findByCategorieId(Long categorieId);
    
    @Query("SELECT a FROM Article a WHERE a.quantiteStock <= a.seuilAlerte")
    List<Article> findArticlesStockFaible();
    
    @Query("SELECT a FROM Article a WHERE a.designation LIKE %?1% OR a.codeArticle LIKE %?1%")
    List<Article> searchByDesignationOrCode(String searchTerm);
    
    boolean existsByCodeArticle(String codeArticle);
}
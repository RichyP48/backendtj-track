package com.track.stock.repository;

import com.track.stock.entity.AlerteStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AlerteStockRepository extends JpaRepository<AlerteStock, Long> {
    
    List<AlerteStock> findByLuFalseOrderByCreatedAtDesc();
    
    List<AlerteStock> findByTypeOrderByCreatedAtDesc(AlerteStock.TypeAlerte type);
    
    @Query("SELECT COUNT(a) FROM AlerteStock a WHERE a.lu = false")
    Long countUnreadAlerts();
    
    @Query("SELECT a FROM AlerteStock a WHERE a.article.id = :articleId ORDER BY a.createdAt DESC")
    List<AlerteStock> findByArticleId(Long articleId);
}
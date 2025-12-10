package com.track.stock.repository;

import com.track.stock.entity.MouvementStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MouvementStockRepository extends JpaRepository<MouvementStock, Long> {
    
    List<MouvementStock> findByArticleIdOrderByDateMouvementDesc(Long articleId);
    
    @Query("SELECT m FROM MouvementStock m WHERE m.dateMouvement BETWEEN ?1 AND ?2 ORDER BY m.dateMouvement DESC")
    List<MouvementStock> findByDateMouvementBetween(LocalDateTime dateDebut, LocalDateTime dateFin);
    
    List<MouvementStock> findByTypeMouvement(MouvementStock.TypeMouvement typeMouvement);
    
    @Query("SELECT COUNT(m) FROM MouvementStock m WHERE m.dateMouvement >= :startOfDay AND m.dateMouvement < :endOfDay")
    Long countByDateBetween(@Param("startOfDay") LocalDateTime startOfDay, @Param("endOfDay") LocalDateTime endOfDay);
}
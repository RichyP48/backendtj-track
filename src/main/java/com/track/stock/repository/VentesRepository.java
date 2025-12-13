package com.track.stock.repository;

import com.track.stock.entity.Ventes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface VentesRepository extends JpaRepository<Ventes, Long> {
    
    Optional<Ventes> findByCode(String code);
    
    @Query(value = "SELECT a.id, a.designation, COUNT(lv.id) as sales, SUM(lv.prix_total) as revenue, " +
           "COALESCE((COUNT(lv.id) - LAG(COUNT(lv.id)) OVER (ORDER BY MONTH(v.date_vente))) / " +
           "NULLIF(LAG(COUNT(lv.id)) OVER (ORDER BY MONTH(v.date_vente)), 0) * 100, 0) as growth " +
           "FROM article a " +
           "JOIN ligne_vente lv ON a.id = lv.article_id " +
           "JOIN ventes v ON lv.vente_id = v.id " +
           "WHERE v.date_vente >= DATE_SUB(NOW(), INTERVAL 30 DAY) " +
           "GROUP BY a.id, a.designation " +
           "ORDER BY revenue DESC LIMIT :limit", nativeQuery = true)
    List<Object[]> getTopProductsByRevenue(@Param("limit") int limit);
}
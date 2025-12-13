package com.track.stock.repository;

import com.track.stock.entity.CommandeClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeClientRepository extends JpaRepository<CommandeClient, Long> {
    
    Optional<CommandeClient> findByCode(String code);
    
    @Query("SELECT COALESCE(SUM(c.totalTtc), 0) FROM CommandeClient c")
    BigDecimal getTotalRevenue();
    
    @Query(value = "SELECT c.id, c.code, c.total_ttc, c.date_commande FROM commande_client c ORDER BY c.date_commande DESC LIMIT :limit", nativeQuery = true)
    List<Object[]> getRecentOrders(@Param("limit") int limit);
    
    @Query(value = "SELECT DATE_FORMAT(c.date_commande, '%Y-%m') as period, SUM(c.total_ttc) as revenue, COUNT(c.id) as orders " +
           "FROM commande_client c WHERE c.date_commande >= :startDate " +
           "GROUP BY DATE_FORMAT(c.date_commande, '%Y-%m') ORDER BY period", nativeQuery = true)
    List<Object[]> getRevenueByPeriod(@Param("startDate") LocalDateTime startDate);
    
    @Query("SELECT c.statut, COUNT(c) FROM CommandeClient c GROUP BY c.statut")
    List<Object[]> getOrderStatusDistribution();
    
    @Query(value = "SELECT DATE(c.date_commande) as date, COUNT(c.id) as orders " +
           "FROM commande_client c WHERE c.date_commande >= DATE_SUB(NOW(), INTERVAL :days DAY) " +
           "GROUP BY DATE(c.date_commande) ORDER BY date DESC LIMIT :days", nativeQuery = true)
    List<Object[]> getDailyOrders(@Param("days") int days);
    
    @Query("SELECT AVG(c.totalTtc) FROM CommandeClient c")
    BigDecimal getAverageOrderValue();
}
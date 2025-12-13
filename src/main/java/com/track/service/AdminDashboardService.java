package com.track.service;

import com.track.dto.analytics.DashboardStatsDto;
import com.track.stock.repository.CommandeClientRepository;
import com.track.stock.repository.ArticleRepository;
import com.track.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminDashboardService {

    @Autowired
    private CommandeClientRepository commandeRepository;
    
    @Autowired
    private ArticleRepository articleRepository;
    
    @Autowired
    private UserRepository userRepository;

    public DashboardStatsDto getDashboardStats() {
        DashboardStatsDto stats = new DashboardStatsDto();
        
        // Total revenue from orders
        BigDecimal totalRevenue = commandeRepository.getTotalRevenue();
        stats.setTotalRevenue(totalRevenue != null ? totalRevenue : BigDecimal.ZERO);
        
        // Total orders count
        Long totalOrders = commandeRepository.count();
        stats.setTotalOrders(totalOrders);
        
        // Total products count
        Long totalProducts = articleRepository.count();
        stats.setTotalProducts(totalProducts);
        
        // Low stock alerts
        Long lowStockAlerts = articleRepository.countLowStockArticles();
        stats.setLowStockAlerts(lowStockAlerts);
        
        // Out of stock products
        Long outOfStockProducts = articleRepository.countOutOfStockArticles();
        stats.setOutOfStockProducts(outOfStockProducts);
        
        // Recent activity
        List<DashboardStatsDto.RecentActivityDto> recentActivity = new ArrayList<>();
        
        // Get recent orders
        List<Object[]> recentOrders = commandeRepository.getRecentOrders(3);
        for (Object[] order : recentOrders) {
            DashboardStatsDto.RecentActivityDto activity = new DashboardStatsDto.RecentActivityDto();
            activity.setId(order[0].toString());
            activity.setMessage("Nouvelle commande #" + order[1] + " - €" + order[2]);
            activity.setTime(formatTime((LocalDateTime) order[3]));
            recentActivity.add(activity);
        }
        
        stats.setRecentActivity(recentActivity);
        
        return stats;
    }
    
    private String formatTime(LocalDateTime dateTime) {
        LocalDateTime now = LocalDateTime.now();
        long minutes = java.time.Duration.between(dateTime, now).toMinutes();
        
        if (minutes < 60) {
            return "Il y a " + minutes + " min";
        } else if (minutes < 1440) {
            return "Il y a " + (minutes / 60) + "h";
        } else {
            return dateTime.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        }
    }
}
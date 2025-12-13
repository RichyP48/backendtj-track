package com.track.service;

import com.track.dto.analytics.*;
import com.track.stock.repository.CommandeClientRepository;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.repository.VentesRepository;
import com.track.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminAnalyticsService {

    @Autowired
    private CommandeClientRepository commandeRepository;
    
    @Autowired
    private ArticleRepository articleRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private VentesRepository ventesRepository;

    public List<RevenueAnalyticsDto> getRevenueAnalytics(String timeRange) {
        List<RevenueAnalyticsDto> analytics = new ArrayList<>();
        
        LocalDateTime startDate = getStartDateFromRange(timeRange);
        List<Object[]> revenueData = commandeRepository.getRevenueByPeriod(startDate);
        
        for (Object[] data : revenueData) {
            RevenueAnalyticsDto dto = new RevenueAnalyticsDto();
            dto.setPeriod(data[0].toString());
            dto.setRevenue((BigDecimal) data[1]);
            dto.setOrders(((Number) data[2]).longValue());
            dto.setGrowth(calculateGrowth(analytics, (BigDecimal) data[1]));
            analytics.add(dto);
        }
        
        return analytics;
    }

    public List<TopProductDto> getTopProducts(int limit) {
        List<TopProductDto> topProducts = new ArrayList<>();
        
        List<Object[]> productData = ventesRepository.getTopProductsByRevenue(limit);
        
        for (Object[] data : productData) {
            TopProductDto dto = new TopProductDto();
            dto.setId(((Number) data[0]).longValue());
            dto.setName(data[1].toString());
            dto.setSales(((Number) data[2]).longValue());
            dto.setRevenue((BigDecimal) data[3]);
            dto.setGrowth(((Number) data[4]).doubleValue());
            topProducts.add(dto);
        }
        
        return topProducts;
    }

    public OrderAnalyticsDto getOrderAnalytics() {
        OrderAnalyticsDto analytics = new OrderAnalyticsDto();
        
        // Status distribution
        List<OrderAnalyticsDto.StatusDistributionDto> statusDist = new ArrayList<>();
        List<Object[]> statusData = commandeRepository.getOrderStatusDistribution();
        Long totalOrders = commandeRepository.count();
        
        for (Object[] data : statusData) {
            OrderAnalyticsDto.StatusDistributionDto dto = new OrderAnalyticsDto.StatusDistributionDto();
            dto.setStatus(data[0].toString());
            dto.setCount(((Number) data[1]).longValue());
            dto.setPercentage(((Number) data[1]).doubleValue() / totalOrders * 100);
            statusDist.add(dto);
        }
        analytics.setStatusDistribution(statusDist);
        
        // Daily orders (last 7 days)
        List<OrderAnalyticsDto.DailyOrderDto> dailyOrders = new ArrayList<>();
        List<Object[]> dailyData = commandeRepository.getDailyOrders(7);
        
        for (Object[] data : dailyData) {
            OrderAnalyticsDto.DailyOrderDto dto = new OrderAnalyticsDto.DailyOrderDto();
            dto.setDate(data[0].toString());
            dto.setOrders(((Number) data[1]).longValue());
            dailyOrders.add(dto);
        }
        analytics.setDailyOrders(dailyOrders);
        
        // Average order value
        BigDecimal avgOrderValue = commandeRepository.getAverageOrderValue();
        analytics.setAverageOrderValue(avgOrderValue != null ? avgOrderValue : BigDecimal.ZERO);
        
        return analytics;
    }

    public UserAnalyticsDto getUserAnalytics() {
        UserAnalyticsDto analytics = new UserAnalyticsDto();
        
        // Role distribution
        List<UserAnalyticsDto.RoleDistributionDto> roleDist = new ArrayList<>();
        List<Object[]> roleData = userRepository.getUserRoleDistribution();
        Long totalUsers = userRepository.count();
        
        for (Object[] data : roleData) {
            UserAnalyticsDto.RoleDistributionDto dto = new UserAnalyticsDto.RoleDistributionDto();
            dto.setRole(data[0].toString());
            dto.setCount(((Number) data[1]).longValue());
            dto.setPercentage(((Number) data[1]).doubleValue() / totalUsers * 100);
            roleDist.add(dto);
        }
        analytics.setRoleDistribution(roleDist);
        
        // Registration trend (last 7 days)
        List<UserAnalyticsDto.RegistrationTrendDto> regTrend = new ArrayList<>();
        List<Object[]> regData = userRepository.getRegistrationTrend(7);
        
        for (Object[] data : regData) {
            UserAnalyticsDto.RegistrationTrendDto dto = new UserAnalyticsDto.RegistrationTrendDto();
            dto.setDate(data[0].toString());
            dto.setRegistrations(((Number) data[1]).longValue());
            regTrend.add(dto);
        }
        analytics.setRegistrationTrend(regTrend);
        
        // Active users (users who logged in last 30 days)
        Long activeUsers = userRepository.countActiveUsers(30);
        analytics.setActiveUsers(activeUsers);
        
        // Retention rate (mock calculation)
        analytics.setRetentionRate(78.5);
        
        return analytics;
    }

    public PerformanceMetricsDto getPerformanceMetrics() {
        PerformanceMetricsDto metrics = new PerformanceMetricsDto();
        
        // Conversion rate (orders / total visitors - mock for now)
        metrics.setConversionRate(3.2);
        
        // Average order value
        BigDecimal avgOrderValue = commandeRepository.getAverageOrderValue();
        metrics.setAverageOrderValue(avgOrderValue != null ? avgOrderValue : BigDecimal.ZERO);
        
        // Customer lifetime value (mock)
        metrics.setCustomerLifetimeValue(new BigDecimal("245.80"));
        
        // Return customer rate (mock)
        metrics.setReturnCustomerRate(42.3);
        
        // Cart abandonment rate (mock)
        metrics.setCartAbandonmentRate(68.7);
        
        return metrics;
    }
    
    private LocalDateTime getStartDateFromRange(String timeRange) {
        LocalDateTime now = LocalDateTime.now();
        switch (timeRange) {
            case "24h": return now.minusDays(1);
            case "7d": return now.minusDays(7);
            case "30d": return now.minusDays(30);
            case "90d": return now.minusDays(90);
            default: return now.minusDays(7);
        }
    }
    
    private Double calculateGrowth(List<RevenueAnalyticsDto> analytics, BigDecimal currentRevenue) {
        if (analytics.isEmpty()) return 0.0;
        
        RevenueAnalyticsDto previous = analytics.get(analytics.size() - 1);
        if (previous.getRevenue().compareTo(BigDecimal.ZERO) == 0) return 0.0;
        
        return currentRevenue.subtract(previous.getRevenue())
                .divide(previous.getRevenue(), 4, RoundingMode.HALF_UP)
                .multiply(new BigDecimal("100"))
                .doubleValue();
    }
}
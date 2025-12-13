package com.track.dto.analytics;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class DashboardStatsDto {
    private BigDecimal totalRevenue;
    private Long totalOrders;
    private Long totalProducts;
    private Long lowStockAlerts;
    private Long outOfStockProducts;
    private List<RecentActivityDto> recentActivity;

    @Data
    public static class RecentActivityDto {
        private String id;
        private String message;
        private String time;
    }
}
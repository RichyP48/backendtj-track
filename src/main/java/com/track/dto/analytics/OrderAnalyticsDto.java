package com.track.dto.analytics;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderAnalyticsDto {
    private List<StatusDistributionDto> statusDistribution;
    private List<DailyOrderDto> dailyOrders;
    private BigDecimal averageOrderValue;

    @Data
    public static class StatusDistributionDto {
        private String status;
        private Long count;
        private Double percentage;
    }

    @Data
    public static class DailyOrderDto {
        private String date;
        private Long orders;
    }
}
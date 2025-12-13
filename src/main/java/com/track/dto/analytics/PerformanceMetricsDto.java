package com.track.dto.analytics;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class PerformanceMetricsDto {
    private Double conversionRate;
    private BigDecimal averageOrderValue;
    private BigDecimal customerLifetimeValue;
    private Double returnCustomerRate;
    private Double cartAbandonmentRate;
}
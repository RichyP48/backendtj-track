package com.track.dto.analytics;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class RevenueAnalyticsDto {
    private String period;
    private BigDecimal revenue;
    private Long orders;
    private Double growth;
}
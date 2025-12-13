package com.track.dto.analytics;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class TopProductDto {
    private Long id;
    private String name;
    private Long sales;
    private BigDecimal revenue;
    private Double growth;
}
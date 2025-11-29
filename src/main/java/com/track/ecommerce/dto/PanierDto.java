package com.track.ecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PanierDto {
    
    private Long id;
    private String userId;
    private List<PanierItemDto> items;
    private Integer totalItems;
    private BigDecimal montantTotal;
    private BigDecimal montantHT;
    private BigDecimal montantTVA;
}
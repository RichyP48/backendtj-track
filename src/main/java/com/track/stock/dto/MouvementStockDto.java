package com.track.stock.dto;

import com.track.stock.entity.MouvementStock;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MouvementStockDto {
    
    private Long id;
    private Long articleId;
    private String articleDesignation;
    private MouvementStock.TypeMouvement typeMouvement;
    private Integer quantite;
    private BigDecimal prixUnitaire;
    private String motif;
    private LocalDateTime dateMouvement;
    private String createdBy;
}
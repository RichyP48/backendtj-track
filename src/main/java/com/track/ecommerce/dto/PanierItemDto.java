package com.track.ecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PanierItemDto {
    
    private Long id;
    private Long articleId;
    private String articleCode;
    private String articleNom;
    private String articlePhoto;
    private Integer quantite;
    private BigDecimal prixUnitaire;
    private BigDecimal sousTotal;
    private Integer stockDisponible;
    private Boolean disponible;
}
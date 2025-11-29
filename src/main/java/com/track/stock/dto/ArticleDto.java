package com.track.stock.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {
    
    private Long id;
    private String codeArticle;
    private String designation;
    private String description;
    private BigDecimal prixUnitaireHt;
    private BigDecimal tauxTva;
    private BigDecimal prixUnitaireTtc;
    private String photo;
    private Long categorieId;
    private String categorieDesignation;
    private Integer quantiteStock;
    private Integer seuilAlerte;
    private Boolean stockFaible;
}
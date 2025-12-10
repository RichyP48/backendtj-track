package com.track.stock.dto;

import jakarta.validation.constraints.*;
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
    
    @NotBlank(message = "Le code article est obligatoire")
    @Size(max = 50, message = "Le code article ne peut pas dépasser 50 caractères")
    private String codeArticle;
    
    @NotBlank(message = "La désignation est obligatoire")
    @Size(max = 200, message = "La désignation ne peut pas dépasser 200 caractères")
    private String designation;
    
    @Size(max = 500, message = "La description ne peut pas dépasser 500 caractères")
    private String description;
    
    @NotNull(message = "Le prix unitaire HT est obligatoire")
    @DecimalMin(value = "0.0", inclusive = false, message = "Le prix doit être positif")
    @Digits(integer = 10, fraction = 2, message = "Format de prix invalide")
    private BigDecimal prixUnitaireHt;
    
    @DecimalMin(value = "0.0", message = "La TVA ne peut pas être négative")
    @DecimalMax(value = "100.0", message = "La TVA ne peut pas dépasser 100%")
    private BigDecimal tauxTva;
    
    private BigDecimal prixUnitaireTtc;
    
    private String photo;
    
    @Min(value = 0, message = "La quantité en stock ne peut pas être négative")
    private Integer quantiteStock = 0;
    
    @Min(value = 0, message = "Le seuil d'alerte ne peut pas être négatif")
    private Integer seuilAlerte = 5;
    
    @Min(value = 1, message = "Le stock maximum doit être au moins 1")
    private Integer stockMax = 1000;
    
    private Long categorieId;
    
    private String categorieDesignation;
    
    private Boolean stockFaible;
    
    private String createdAt;
    
    private String updatedAt;
}
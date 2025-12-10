package com.track.ecommerce.dto;

import jakarta.persistence.Transient;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProduitEcommerceDto {
    
    private Long id;
    
    @NotBlank(message = "Le nom du produit est obligatoire")
    @Size(max = 200, message = "Le nom ne peut pas dépasser 200 caractères")
    private String nom;
    
    @NotBlank(message = "La description est obligatoire")
    @Size(max = 1000, message = "La description ne peut pas dépasser 1000 caractères")
    private String description;
    
    @Size(max = 5000, message = "La description longue ne peut pas dépasser 5000 caractères")
    private String descriptionLongue;
    
    @NotNull(message = "Le prix est obligatoire")
    @DecimalMin(value = "0.01", message = "Le prix doit être supérieur à 0")
    private BigDecimal prix;
    
    @NotNull(message = "La quantité est obligatoire")
    @Min(value = 0, message = "La quantité ne peut pas être négative")
    private Integer quantite;
    
    @NotNull(message = "La catégorie est obligatoire")
    private Long categorieId;
    
    private String categorieName;
    
    private List<String> images;
    
    private String motsCles;
    
    private Boolean visibleEnLigne = false;
    
    // Informations commerçant
    private String nomCommercant;
    private String nomEntreprise;
    private String villeCommercant;
    
    // Statistiques
    private BigDecimal noteMoyenne;
    private Integer nombreEvaluations;
    private Integer nombreLikes;
    private Integer nombreVues;
    private Integer nombreVentes;
    
    // Pour l'upload d'images
    @Transient
    private List<MultipartFile> fichierImages;
}
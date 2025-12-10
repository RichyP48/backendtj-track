package com.track.ecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProduitDetailDto {
    
    // Informations produit
    private Long id;
    private String nom;
    private String description;
    private String descriptionLongue;
    private BigDecimal prix;
    private BigDecimal prixOriginal;
    private Integer quantiteDisponible;
    private String codeArticle;
    
    // Galerie d'images
    private List<String> images;
    private String imageprincipale;
    
    // Catégorie
    private Long categorieId;
    private String categorieNom;
    
    // Informations commerçant
    private CommerçantInfo commercant;
    
    // Évaluations et engagement
    private BigDecimal noteMoyenne;
    private Integer nombreEvaluations;
    private Integer nombreLikes;
    private Integer nombreVues;
    private Integer nombreVentes;
    private List<EvaluationDto> evaluations;
    
    // Produits similaires/recommandés
    private List<ProduitResumeDto> produitsSimilaires;
    private List<ProduitResumeDto> produitsRecommandes;
    
    // Informations techniques
    private String motsCles;
    private LocalDateTime dateMiseEnLigne;
    private Boolean enStock;
    private Boolean favori; // Si connecté
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CommerçantInfo {
        private String nom;
        private String entreprise;
        private String ville;
        private BigDecimal noteCommercant;
        private Integer nombreVentes;
        private String telephone;
        private String adresse;
    }
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class EvaluationDto {
        private Long id;
        private String nomClient;
        private Integer note;
        private String commentaire;
        private LocalDateTime dateEvaluation;
        private Boolean recommande;
    }
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ProduitResumeDto {
        private Long id;
        private String nom;
        private BigDecimal prix;
        private String imagePrincipale;
        private BigDecimal noteMoyenne;
        private Integer nombreEvaluations;
    }
}
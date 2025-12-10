package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "articles")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Article {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String codeArticle;
    
    @Column(nullable = false)
    private String designation;
    
    private String description;
    
    @Column(nullable = false)
    private BigDecimal prixUnitaireHt;
    
    private BigDecimal tauxTva;
    
    private BigDecimal prixUnitaireTtc;
    
    private String photo;
    
    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;
    
    @ManyToOne
    @JoinColumn(name = "fournisseur_id")
    private Fournisseur fournisseur;
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;
    
    @Column(nullable = false)
    private Integer quantiteStock = 0;
    
    @Column(nullable = false)
    private Integer stockReserve = 0;
    
    @Column(nullable = false)
    private Integer seuilAlerte = 5;
    
    @Column(nullable = false)
    private Integer stockMax = 1000;
    
    private String unite = "pcs";
    
    private String codeBarres;
    
    @Enumerated(EnumType.STRING)
    private StatutArticle statut = StatutArticle.ACTIF;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    public Integer getStockDisponible() {
        return quantiteStock - stockReserve;
    }
    
    public boolean isStockFaible() {
        return quantiteStock <= seuilAlerte;
    }
    
    public boolean isRuptureStock() {
        return quantiteStock <= 0;
    }
    
    public enum StatutArticle {
        ACTIF, INACTIF, DISCONTINUE
    }
}
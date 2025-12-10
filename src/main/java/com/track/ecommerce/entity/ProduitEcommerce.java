package com.track.ecommerce.entity;

import com.track.entity.MerchantProfile;
import com.track.stock.entity.Article;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "produits_ecommerce")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProduitEcommerce {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @ManyToOne
    @JoinColumn(name = "merchant_id", nullable = false)
    private MerchantProfile merchant;
    
    @Column(nullable = false)
    private Boolean visibleEnLigne = false;
    
    @ElementCollection
    @CollectionTable(name = "produit_images")
    private List<String> images;
    
    @Column(columnDefinition = "TEXT")
    private String descriptionLongue;
    
    private String motsCles; // SEO
    
    @Column(precision = 3, scale = 2)
    private BigDecimal notemoyenne = BigDecimal.ZERO;
    
    private Integer nombreEvaluations = 0;
    
    private Integer nombreLikes = 0;
    
    private Integer nombreVues = 0;
    
    private Integer nombreVentes = 0;
    
    @Column(name = "date_mise_en_ligne")
    private LocalDateTime dateMiseEnLigne;
    
    @Column(name = "date_derniere_modification")
    private LocalDateTime dateDerniereModification;
    
    @PrePersist
    protected void onCreate() {
        dateMiseEnLigne = LocalDateTime.now();
        dateDerniereModification = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        dateDerniereModification = LocalDateTime.now();
    }
}
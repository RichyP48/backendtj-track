package com.track.ecommerce.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.track.stock.entity.Article;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "commande_items")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommandeItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "commande_id", nullable = false)
    @JsonBackReference
    private Commande commande;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Column(nullable = false)
    private Integer quantite;
    
    @Column(nullable = false)
    private BigDecimal prixUnitaire;
    
    @Column(nullable = false)
    private BigDecimal sousTotal;
    
    @PrePersist
    @PreUpdate
    protected void calculateSousTotal() {
        if (quantite != null && prixUnitaire != null) {
            sousTotal = prixUnitaire.multiply(BigDecimal.valueOf(quantite));
        }
    }
}
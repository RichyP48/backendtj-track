package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;

@Entity
@Table(name = "lignes_commande_fournisseur")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LigneCommandeFournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "commande_fournisseur_id", nullable = false)
    private CommandeFournisseur commandeFournisseur;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Column(nullable = false)
    private Integer quantiteCommandee;
    
    private Integer quantiteRecue = 0;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal prixUnitaire;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal prixTotal;
    
    @PrePersist
    @PreUpdate
    private void calculerPrixTotal() {
        if (quantiteCommandee != null && prixUnitaire != null) {
            prixTotal = prixUnitaire.multiply(BigDecimal.valueOf(quantiteCommandee));
        }
    }
}
package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;

@Entity
@Table(name = "lignes_vente")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LigneVente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "vente_id", nullable = false)
    private Ventes vente;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Column(nullable = false)
    private Integer quantite;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal prixUnitaire;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal prixTotal;
    
    @Column(name = "entreprise_id", insertable = false, updatable = false)
    private Long entrepriseId;
    
    @PrePersist
    @PreUpdate
    private void calculerPrixTotal() {
        if (quantite != null && prixUnitaire != null) {
            prixTotal = prixUnitaire.multiply(BigDecimal.valueOf(quantite));
        }
    }
}
package com.track.finance.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "lignes_facture")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LigneFacture {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "facture_id", nullable = false)
    private Facture facture;
    
    @Column(nullable = false)
    private String designation;
    
    @Column(nullable = false)
    private Integer quantite;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal prixUnitaire;
    
    @Column(precision = 5, scale = 2)
    private BigDecimal tauxTVA = BigDecimal.valueOf(20.0);
    
    @Column(precision = 10, scale = 2)
    private BigDecimal montantHT;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal montantTVA;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal montantTTC;
    
    @PrePersist
    @PreUpdate
    private void calculerMontants() {
        if (quantite != null && prixUnitaire != null) {
            montantHT = prixUnitaire.multiply(BigDecimal.valueOf(quantite));
            montantTVA = montantHT.multiply(tauxTVA).divide(BigDecimal.valueOf(100));
            montantTTC = montantHT.add(montantTVA);
        }
    }
}
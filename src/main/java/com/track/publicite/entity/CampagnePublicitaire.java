package com.track.publicite.entity;

import com.track.entity.MerchantProfile;
import com.track.ecommerce.entity.ProduitEcommerce;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "campagnes_publicitaires")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CampagnePublicitaire {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "produit_id", nullable = false)
    private ProduitEcommerce produit;
    
    @ManyToOne
    @JoinColumn(name = "merchant_id", nullable = false)
    private MerchantProfile merchant;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montantPaye;
    
    @Enumerated(EnumType.STRING)
    private TypeCampagne typeCampagne;
    
    @Enumerated(EnumType.STRING)
    private PeriodeTarification periodeTarification;
    
    @Column(nullable = false)
    private LocalDateTime dateDebut;
    
    @Column(nullable = false)
    private LocalDateTime dateFin;
    
    @Enumerated(EnumType.STRING)
    private StatutCampagne statut = StatutCampagne.EN_ATTENTE;
    
    private Integer nombreClics = 0;
    private Integer nombreVues = 0;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation;
    
    @PrePersist
    protected void onCreate() {
        dateCreation = LocalDateTime.now();
    }
    
    public enum TypeCampagne {
        MISE_EN_AVANT_SIMPLE,
        MISE_EN_AVANT_PREMIUM,
        BANNIERE_PRINCIPALE,
        CARROUSEL_ACCUEIL
    }
    
    public enum PeriodeTarification {
        JOUR(1.0),
        SEMAINE(0.8),
        MOIS(0.6);
        
        private final double multiplicateur;
        
        PeriodeTarification(double multiplicateur) {
            this.multiplicateur = multiplicateur;
        }
        
        public double getMultiplicateur() {
            return multiplicateur;
        }
    }
    
    public enum StatutCampagne {
        EN_ATTENTE, ACTIVE, EXPIREE, SUSPENDUE, ANNULEE
    }
    
    public boolean isActive() {
        LocalDateTime now = LocalDateTime.now();
        return statut == StatutCampagne.ACTIVE && 
               now.isAfter(dateDebut) && 
               now.isBefore(dateFin);
    }
}
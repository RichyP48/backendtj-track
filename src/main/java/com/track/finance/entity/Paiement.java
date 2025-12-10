package com.track.finance.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "paiements")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Paiement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String numeroPaiement;
    
    @ManyToOne
    @JoinColumn(name = "facture_id", nullable = false)
    private Facture facture;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montant;
    
    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;
    
    @Column(nullable = false)
    private LocalDateTime datePaiement;
    
    private String referenceTransaction;
    
    @Enumerated(EnumType.STRING)
    private StatutPaiement statut = StatutPaiement.EN_COURS;
    
    @Enumerated(EnumType.STRING)
    private TypePaiement typePaiement = TypePaiement.FACTURE_COMMANDE;
    
    private String commentaire;
    
    // Champs spécifiques Mobile Money
    private String numeroTelephone;
    private String operateurMobile;
    private String codePin; // Temporaire pour validation
    private String transactionId; // ID transaction mobile money
    
    @PrePersist
    protected void onCreate() {
        datePaiement = LocalDateTime.now();
        if (numeroPaiement == null) {
            numeroPaiement = "PAY-" + System.currentTimeMillis();
        }
    }
    
    public enum ModePaiement {
        CARTE_BANCAIRE, PAYPAL, VIREMENT, ESPECES, CHEQUE,
        ORANGE_MONEY, MTN_MOBILE_MONEY, MOOV_MONEY, WAVE, MOBILE_MONEY_GENERIC
    }
    
    public enum TypePaiement {
        FACTURE_COMMANDE, CAMPAGNE_PUBLICITAIRE, ABONNEMENT, AUTRE
    }
    
    public enum StatutPaiement {
        EN_COURS, VALIDE, ECHEC, REMBOURSE
    }
}
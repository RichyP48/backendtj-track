package com.track.finance.entity;

import com.track.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "factures")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Facture {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String numeroFacture;
    
    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private UserEntity client;
    
    @OneToMany(mappedBy = "facture", cascade = CascadeType.ALL)
    private List<LigneFacture> lignes;
    
    @Column(nullable = false)
    private LocalDateTime dateFacture;
    
    private LocalDateTime dateEcheance;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montantHT;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montantTVA;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal montantTTC;
    
    @Enumerated(EnumType.STRING)
    private StatutFacture statut = StatutFacture.BROUILLON;
    
    @Enumerated(EnumType.STRING)
    private StatutPaiement statutPaiement = StatutPaiement.EN_ATTENTE;
    
    private String commentaire;
    
    @PrePersist
    protected void onCreate() {
        dateFacture = LocalDateTime.now();
        if (numeroFacture == null) {
            numeroFacture = "FAC-" + System.currentTimeMillis();
        }
    }
    
    public enum StatutFacture {
        BROUILLON, ENVOYEE, PAYEE, ANNULEE
    }
    
    public enum StatutPaiement {
        EN_ATTENTE, PAYE, PARTIEL, ECHUE
    }
}
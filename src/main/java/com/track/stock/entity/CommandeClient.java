package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "commandes_client")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommandeClient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String code;
    
    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;
    
    @OneToMany(mappedBy = "commandeClient", cascade = CascadeType.ALL)
    private List<LigneCommandeClient> ligneCommandeClients;
    
    @Column(nullable = false)
    private LocalDateTime dateCommande;
    
    private LocalDateTime dateLivraison;
    
    @Enumerated(EnumType.STRING)
    private StatutCommande statut = StatutCommande.EN_ATTENTE;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalHt;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalTtc;
    
    @Enumerated(EnumType.STRING)
    private StatutPaiement statutPaiement = StatutPaiement.EN_ATTENTE;
    
    public enum StatutPaiement {
        EN_ATTENTE, PAYE, PARTIEL, ECHUE
    }
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;
    
    public enum StatutCommande {
        EN_ATTENTE, CONFIRMEE, EXPEDIEE, LIVREE, ANNULEE
    }
    
    @PrePersist
    @PreUpdate
    public void calculerTotaux() {
        if (ligneCommandeClients != null && !ligneCommandeClients.isEmpty()) {
            totalHt = ligneCommandeClients.stream()
                .map(ligne -> ligne.getPrixUnitaire().multiply(BigDecimal.valueOf(ligne.getQuantite())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
            
            // Calcul TTC (supposons 20% de TVA)
            totalTtc = totalHt.multiply(BigDecimal.valueOf(1.20));
        } else {
            totalHt = BigDecimal.ZERO;
            totalTtc = BigDecimal.ZERO;
        }
    }
    
    public BigDecimal getTotalCalcule() {
        if (ligneCommandeClients == null || ligneCommandeClients.isEmpty()) {
            return BigDecimal.ZERO;
        }
        return ligneCommandeClients.stream()
            .map(ligne -> ligne.getPrixUnitaire().multiply(BigDecimal.valueOf(ligne.getQuantite())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
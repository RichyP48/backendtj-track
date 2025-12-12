package com.track.ecommerce.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "commandes")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Commande {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String numeroCommande;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity client;
    
    @OneToMany(mappedBy = "commande", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<CommandeItem> items;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutCommande statut;
    
    @Column(nullable = false)
    private BigDecimal montantTotal;
    
    private BigDecimal fraisLivraison;
    
    @Embedded
    private AdresseLivraison adresseLivraison;
    
    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;
    
    @Enumerated(EnumType.STRING)
    private StatutPaiement statutPaiement;
    
    private String commentaire;
    
    @Column(name = "date_commande")
    private LocalDateTime dateCommande;
    
    @Column(name = "date_livraison_prevue")
    private LocalDateTime dateLivraisonPrevue;
    
    @Column(name = "date_livraison_effective")
    private LocalDateTime dateLivraisonEffective;
    
    @PrePersist
    protected void onCreate() {
        dateCommande = LocalDateTime.now();
        if (numeroCommande == null) {
            numeroCommande = "CMD-" + System.currentTimeMillis();
        }
    }
    
    public enum StatutCommande {
        EN_ATTENTE, CONFIRMEE, EN_PREPARATION, EXPEDIEE, LIVREE, ANNULEE
    }
    
    public enum ModePaiement {
        CARTE_BANCAIRE, PAYPAL, VIREMENT, ESPECES, MOBILE_MONEY
    }
    
    public enum StatutPaiement {
        EN_ATTENTE, PAYE, ECHEC, REMBOURSE
    }
}
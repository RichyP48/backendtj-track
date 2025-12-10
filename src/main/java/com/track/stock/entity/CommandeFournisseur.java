package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "commandes_fournisseur")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommandeFournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String code;
    
    @ManyToOne
    @JoinColumn(name = "fournisseur_id", nullable = false)
    private Fournisseur fournisseur;
    
    @OneToMany(mappedBy = "commandeFournisseur", cascade = CascadeType.ALL)
    private List<LigneCommandeFournisseur> ligneCommandeFournisseurs;
    
    @Column(nullable = false)
    private LocalDateTime dateCommande;
    
    private LocalDateTime dateLivraisonPrevue;
    private LocalDateTime dateLivraisonReelle;
    
    @Enumerated(EnumType.STRING)
    private StatutCommande statut = StatutCommande.EN_ATTENTE;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalHt;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalTtc;
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;
    
    public enum StatutCommande {
        EN_ATTENTE, CONFIRMEE, EXPEDIEE, RECUE, ANNULEE
    }
}
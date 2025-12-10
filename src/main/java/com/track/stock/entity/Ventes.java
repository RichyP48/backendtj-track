package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "ventes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ventes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String code;
    
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    
    @OneToMany(mappedBy = "vente", cascade = CascadeType.ALL)
    private List<LigneVente> ligneVentes;
    
    @ManyToOne
    @JoinColumn(name = "commande_client_id")
    private CommandeClient commandeClient;
    
    private String commentaire;
    
    @Column(nullable = false)
    private LocalDateTime dateVente;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalHt;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalTva;
    
    @Column(precision = 10, scale = 2)
    private BigDecimal totalTtc;
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;
    
    @Column(name = "entreprise_id", insertable = false, updatable = false)
    private Long entrepriseId;
}
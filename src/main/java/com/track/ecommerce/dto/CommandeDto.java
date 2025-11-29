package com.track.ecommerce.dto;

import com.track.ecommerce.entity.AdresseLivraison;
import com.track.ecommerce.entity.Commande;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommandeDto {
    
    private Long id;
    private String numeroCommande;
    private String clientId;
    private String clientNom;
    private List<CommandeItemDto> items;
    private Commande.StatutCommande statut;
    private BigDecimal montantTotal;
    private BigDecimal fraisLivraison;
    private AdresseLivraison adresseLivraison;
    private Commande.ModePaiement modePaiement;
    private Commande.StatutPaiement statutPaiement;
    private String commentaire;
    private LocalDateTime dateCommande;
    private LocalDateTime dateLivraisonPrevue;
    private LocalDateTime dateLivraisonEffective;
}
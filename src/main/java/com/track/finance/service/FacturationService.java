package com.track.finance.service;

import com.track.finance.entity.Facture;
import com.track.finance.entity.LigneFacture;
import com.track.finance.entity.Paiement;
import com.track.stock.entity.CommandeClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class FacturationService {
    
    @Transactional(rollbackFor = Exception.class)
    public Facture genererFactureDepuisCommande(CommandeClient commande) {
        Facture facture = Facture.builder()
                .client(null) // À lier avec le client de la commande
                .dateFacture(LocalDateTime.now())
                .dateEcheance(LocalDateTime.now().plusDays(30))
                .statut(Facture.StatutFacture.BROUILLON)
                .build();
        
        List<LigneFacture> lignes = commande.getLigneCommandeClients().stream()
                .map(ligne -> LigneFacture.builder()
                        .facture(facture)
                        .designation(ligne.getArticle().getDesignation())
                        .quantite(ligne.getQuantite())
                        .prixUnitaire(ligne.getPrixUnitaire())
                        .build())
                .collect(Collectors.toList());
        
        facture.setLignes(lignes);
        calculerTotauxFacture(facture);
        
        return facture;
    }
    
    @Transactional(rollbackFor = Exception.class)
    public Paiement enregistrerPaiement(Long factureId, BigDecimal montant, 
                                       Paiement.ModePaiement mode, String reference) {
        // Logique de traitement du paiement
        Paiement paiement = Paiement.builder()
                .montant(montant)
                .modePaiement(mode)
                .referenceTransaction(reference)
                .statut(Paiement.StatutPaiement.EN_COURS)
                .build();
        
        // Mise à jour du statut de la facture
        return paiement;
    }
    
    public BigDecimal calculerChiffreAffaires(LocalDateTime debut, LocalDateTime fin) {
        // Calcul du CA sur une période
        return BigDecimal.ZERO;
    }
    
    public Facture creerFactureCampagne(Long merchantId, BigDecimal tarif, 
                                       Object typeCampagne, Object periode) {
        return Facture.builder()
                .dateFacture(LocalDateTime.now())
                .dateEcheance(LocalDateTime.now().plusDays(1))
                .montantHT(tarif)
                .montantTTC(tarif)
                .statut(Facture.StatutFacture.ENVOYEE)
                .build();
    }
    
    private void calculerTotauxFacture(Facture facture) {
        BigDecimal totalHT = facture.getLignes().stream()
                .map(LigneFacture::getMontantHT)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        BigDecimal totalTVA = facture.getLignes().stream()
                .map(LigneFacture::getMontantTVA)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        facture.setMontantHT(totalHT);
        facture.setMontantTVA(totalTVA);
        facture.setMontantTTC(totalHT.add(totalTVA));
    }
}
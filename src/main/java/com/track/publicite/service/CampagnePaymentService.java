package com.track.publicite.service;

import com.track.publicite.entity.CampagnePublicitaire;
import com.track.finance.entity.Facture;
import com.track.finance.entity.Paiement;
import com.track.finance.service.FacturationService;
import com.track.finance.service.PaiementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@Transactional
public class CampagnePaymentService {
    
    private final FacturationService facturationService;
    private final PaiementService paiementService;
    private final PubliciteService publiciteService;
    
    public CampagnePublicitaire creerEtPayerCampagne(Long produitId, Long merchantId,
                                                   CampagnePublicitaire.TypeCampagne type,
                                                   CampagnePublicitaire.PeriodeTarification periode,
                                                   Paiement.ModePaiement modePaiement) {
        
        BigDecimal tarif = publiciteService.calculerTarif(type, periode);
        
        // Créer facture pour la campagne
        Facture facture = facturationService.creerFactureCampagne(merchantId, tarif, type, periode);
        
        // Traiter le paiement
        Paiement paiement = Paiement.builder()
            .facture(facture)
            .montant(tarif)
            .modePaiement(modePaiement)
            .typePaiement(Paiement.TypePaiement.CAMPAGNE_PUBLICITAIRE)
            .statut(Paiement.StatutPaiement.VALIDE)
            .build();
        
        paiementService.traiterPaiement(paiement);
        
        // Si paiement validé, activer la campagne
        if (paiement.getStatut() == Paiement.StatutPaiement.VALIDE) {
            // Créer et activer la campagne
            // Note: Cette partie nécessiterait l'accès aux entités ProduitEcommerce et MerchantProfile
            // qui devraient être récupérées via leurs services respectifs
        }
        
        return null; // À compléter avec la logique complète
    }
}
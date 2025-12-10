package com.track.finance.service;

import com.track.finance.entity.Paiement;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
@Transactional
public class PaiementService {
    
    private final MobileMoneyService mobileMoneyService;
    
    public Paiement.StatutPaiement traiterPaiementCarteBancaire(BigDecimal montant, String numeroCard) {
        // Simulation traitement paiement CB
        if (montant.compareTo(BigDecimal.valueOf(10000)) > 0) {
            return Paiement.StatutPaiement.ECHEC;
        }
        return Paiement.StatutPaiement.VALIDE;
    }
    
    public Paiement.StatutPaiement traiterPaiementMobileMoney(BigDecimal montant, String numeroTelephone) {
        // Simulation Mobile Money
        return Paiement.StatutPaiement.VALIDE;
    }
    
    public Paiement.StatutPaiement traiterPaiementPaypal(BigDecimal montant, String emailPaypal) {
        // Simulation PayPal
        return Paiement.StatutPaiement.VALIDE;
    }
    
    public Paiement traiterPaiement(Paiement paiement) {
        switch (paiement.getModePaiement()) {
            case CARTE_BANCAIRE:
                paiement.setStatut(traiterPaiementCarteBancaire(paiement.getMontant(), ""));
                break;
            case ORANGE_MONEY:
                paiement.setStatut(mobileMoneyService.traiterPaiementOrangeMoney(
                    paiement.getMontant(), paiement.getNumeroTelephone(), paiement.getCodePin()));
                break;
            case MTN_MOBILE_MONEY:
                paiement.setStatut(mobileMoneyService.traiterPaiementMTNMobileMoney(
                    paiement.getMontant(), paiement.getNumeroTelephone(), paiement.getCodePin()));
                break;
            case MOOV_MONEY:
                paiement.setStatut(mobileMoneyService.traiterPaiementMoovMoney(
                    paiement.getMontant(), paiement.getNumeroTelephone(), paiement.getCodePin()));
                break;
            case WAVE:
                paiement.setStatut(mobileMoneyService.traiterPaiementWave(
                    paiement.getMontant(), paiement.getNumeroTelephone()));
                break;
            case MOBILE_MONEY_GENERIC:
                paiement.setStatut(traiterPaiementMobileMoney(paiement.getMontant(), paiement.getNumeroTelephone()));
                break;
            case PAYPAL:
                paiement.setStatut(traiterPaiementPaypal(paiement.getMontant(), ""));
                break;
            default:
                paiement.setStatut(Paiement.StatutPaiement.VALIDE);
        }
        return paiement;
    }
    
    public void rembourserPaiement(Long paiementId, BigDecimal montant) {
        // Logique de remboursement
    }
}
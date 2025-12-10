package com.track.finance.service;

import com.track.finance.entity.Paiement;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class MobileMoneyService {
    
    private final RestTemplate restTemplate = new RestTemplate();
    
    public Paiement.StatutPaiement traiterPaiementOrangeMoney(BigDecimal montant, String numeroTelephone, String codePin) {
        try {
            log.info("Traitement paiement Orange Money: {} FCFA pour {}", montant, numeroTelephone);
            
            // Simulation API Orange Money
            Map<String, Object> request = Map.of(
                "amount", montant,
                "phone", numeroTelephone,
                "pin", codePin,
                "merchant_id", "TJ_TRACK_001",
                "transaction_ref", UUID.randomUUID().toString()
            );
            
            // En production, appeler l'API réelle Orange Money
            // String response = restTemplate.postForObject("https://api.orange.com/orange-money-webpay/cm/v1/webpayment", request, String.class);
            
            // Simulation de réponse
            if (montant.compareTo(BigDecimal.valueOf(500000)) <= 0) { // Limite 500k FCFA
                log.info("Paiement Orange Money réussi");
                return Paiement.StatutPaiement.VALIDE;
            } else {
                log.warn("Montant dépassé pour Orange Money");
                return Paiement.StatutPaiement.ECHEC;
            }
            
        } catch (Exception e) {
            log.error("Erreur paiement Orange Money: {}", e.getMessage());
            return Paiement.StatutPaiement.ECHEC;
        }
    }
    
    public Paiement.StatutPaiement traiterPaiementMTNMobileMoney(BigDecimal montant, String numeroTelephone, String codePin) {
        try {
            log.info("Traitement paiement MTN Mobile Money: {} FCFA pour {}", montant, numeroTelephone);
            
            // Simulation API MTN Mobile Money
            Map<String, Object> request = Map.of(
                "amount", montant,
                "currency", "XAF",
                "externalId", UUID.randomUUID().toString(),
                "payer", Map.of(
                    "partyIdType", "MSISDN",
                    "partyId", numeroTelephone
                ),
                "payerMessage", "Paiement TJ-Track",
                "payeeNote", "Commande e-commerce"
            );
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Bearer " + getMTNAccessToken());
            headers.set("X-Reference-Id", UUID.randomUUID().toString());
            headers.set("X-Target-Environment", "sandbox"); // "production" en prod
            
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);
            
            // En production, appeler l'API réelle MTN
            // ResponseEntity<String> response = restTemplate.postForEntity("https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay", entity, String.class);
            
            // Simulation de réponse
            if (montant.compareTo(BigDecimal.valueOf(1000000)) <= 0) { // Limite 1M FCFA
                log.info("Paiement MTN Mobile Money réussi");
                return Paiement.StatutPaiement.VALIDE;
            } else {
                log.warn("Montant dépassé pour MTN Mobile Money");
                return Paiement.StatutPaiement.ECHEC;
            }
            
        } catch (Exception e) {
            log.error("Erreur paiement MTN Mobile Money: {}", e.getMessage());
            return Paiement.StatutPaiement.ECHEC;
        }
    }
    
    public Paiement.StatutPaiement traiterPaiementMoovMoney(BigDecimal montant, String numeroTelephone, String codePin) {
        try {
            log.info("Traitement paiement Moov Money: {} FCFA pour {}", montant, numeroTelephone);
            
            // Simulation API Moov Money
            // En production, intégrer avec l'API Moov Money
            
            if (montant.compareTo(BigDecimal.valueOf(300000)) <= 0) { // Limite 300k FCFA
                log.info("Paiement Moov Money réussi");
                return Paiement.StatutPaiement.VALIDE;
            } else {
                log.warn("Montant dépassé pour Moov Money");
                return Paiement.StatutPaiement.ECHEC;
            }
            
        } catch (Exception e) {
            log.error("Erreur paiement Moov Money: {}", e.getMessage());
            return Paiement.StatutPaiement.ECHEC;
        }
    }
    
    public Paiement.StatutPaiement traiterPaiementWave(BigDecimal montant, String numeroTelephone) {
        try {
            log.info("Traitement paiement Wave: {} FCFA pour {}", montant, numeroTelephone);
            
            // Simulation API Wave
            // En production, intégrer avec l'API Wave
            
            if (montant.compareTo(BigDecimal.valueOf(2000000)) <= 0) { // Limite 2M FCFA
                log.info("Paiement Wave réussi");
                return Paiement.StatutPaiement.VALIDE;
            } else {
                log.warn("Montant dépassé pour Wave");
                return Paiement.StatutPaiement.ECHEC;
            }
            
        } catch (Exception e) {
            log.error("Erreur paiement Wave: {}", e.getMessage());
            return Paiement.StatutPaiement.ECHEC;
        }
    }
    
    private String getMTNAccessToken() {
        // En production, récupérer le token d'accès MTN
        return "sandbox_token_123";
    }
    
    public String detectOperateur(String numeroTelephone) {
        String numero = numeroTelephone.replaceAll("[^0-9]", "");
        
        if (numero.startsWith("237")) {
            numero = numero.substring(3); // Retirer indicatif pays Cameroun
        }
        
        // Détection basée sur les préfixes opérateurs Cameroun
        if (numero.startsWith("69") || numero.startsWith("65") || numero.startsWith("66")) {
            return "ORANGE";
        } else if (numero.startsWith("67") || numero.startsWith("68") || numero.startsWith("65")) {
            return "MTN";
        } else if (numero.startsWith("69") || numero.startsWith("66")) {
            return "MOOV";
        } else {
            return "UNKNOWN";
        }
    }
}
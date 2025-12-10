package com.track.publicite.service;

import com.track.publicite.entity.CampagnePublicitaire;
import com.track.publicite.entity.TarifPublicite;
import com.track.publicite.repository.CampagnePublicitaireRepository;
import com.track.publicite.repository.TarifPubliciteRepository;
import com.track.ecommerce.entity.ProduitEcommerce;
import com.track.entity.MerchantProfile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class PubliciteService {
    
    private final CampagnePublicitaireRepository campagneRepository;
    private final TarifPubliciteRepository tarifRepository;
    
    public List<ProduitEcommerce> getProduitsEnAvant() {
        return campagneRepository.findProduitsActifs(LocalDateTime.now());
    }
    
    public List<ProduitEcommerce> getProduitsEnAvantParType(CampagnePublicitaire.TypeCampagne type) {
        return campagneRepository.findProduitsActifsParType(type, LocalDateTime.now());
    }
    
    public CampagnePublicitaire creerCampagne(ProduitEcommerce produit, MerchantProfile merchant,
                                            CampagnePublicitaire.TypeCampagne type,
                                            CampagnePublicitaire.PeriodeTarification periode,
                                            BigDecimal montant) {
        
        TarifPublicite tarif = tarifRepository.findByTypeCampagneAndPeriode(type, periode)
            .orElseThrow(() -> new RuntimeException("Tarif non trouvé"));
        
        LocalDateTime debut = LocalDateTime.now();
        LocalDateTime fin = debut.plusHours(tarif.getDureeHeures());
        
        CampagnePublicitaire campagne = CampagnePublicitaire.builder()
            .produit(produit)
            .merchant(merchant)
            .typeCampagne(type)
            .periodeTarification(periode)
            .montantPaye(montant)
            .dateDebut(debut)
            .dateFin(fin)
            .statut(CampagnePublicitaire.StatutCampagne.EN_ATTENTE)
            .build();
        
        return campagneRepository.save(campagne);
    }
    
    public void activerCampagne(Long campagneId) {
        CampagnePublicitaire campagne = campagneRepository.findById(campagneId)
            .orElseThrow(() -> new RuntimeException("Campagne non trouvée"));
        
        campagne.setStatut(CampagnePublicitaire.StatutCampagne.ACTIVE);
        campagneRepository.save(campagne);
    }
    
    public void incrementerVues(Long campagneId) {
        campagneRepository.incrementerVues(campagneId);
    }
    
    public void incrementerClics(Long campagneId) {
        campagneRepository.incrementerClics(campagneId);
    }
    
    @Transactional(readOnly = true)
    public BigDecimal calculerTarif(CampagnePublicitaire.TypeCampagne type, 
                                   CampagnePublicitaire.PeriodeTarification periode) {
        return tarifRepository.findByTypeCampagneAndPeriode(type, periode)
            .map(TarifPublicite::calculerTarif)
            .orElse(BigDecimal.ZERO);
    }
    
    public void expirerCampagnesFinies() {
        LocalDateTime maintenant = LocalDateTime.now();
        List<CampagnePublicitaire> campagnesExpirees = campagneRepository
            .findByStatutAndDateFinBefore(CampagnePublicitaire.StatutCampagne.ACTIVE, maintenant);
        
        campagnesExpirees.forEach(campagne -> {
            campagne.setStatut(CampagnePublicitaire.StatutCampagne.EXPIREE);
            campagneRepository.save(campagne);
        });
    }
}
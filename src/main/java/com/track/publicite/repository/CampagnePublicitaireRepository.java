package com.track.publicite.repository;

import com.track.publicite.entity.CampagnePublicitaire;
import com.track.ecommerce.entity.ProduitEcommerce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface CampagnePublicitaireRepository extends JpaRepository<CampagnePublicitaire, Long> {
    
    @Query("SELECT c.produit FROM CampagnePublicitaire c WHERE c.statut = 'ACTIVE' " +
           "AND c.dateDebut <= :maintenant AND c.dateFin > :maintenant " +
           "ORDER BY c.montantPaye DESC, c.dateCreation DESC")
    List<ProduitEcommerce> findProduitsActifs(@Param("maintenant") LocalDateTime maintenant);
    
    @Query("SELECT c.produit FROM CampagnePublicitaire c WHERE c.statut = 'ACTIVE' " +
           "AND c.typeCampagne = :type AND c.dateDebut <= :maintenant AND c.dateFin > :maintenant " +
           "ORDER BY c.montantPaye DESC, c.dateCreation DESC")
    List<ProduitEcommerce> findProduitsActifsParType(@Param("type") CampagnePublicitaire.TypeCampagne type,
                                                     @Param("maintenant") LocalDateTime maintenant);
    
    List<CampagnePublicitaire> findByStatutAndDateFinBefore(CampagnePublicitaire.StatutCampagne statut, 
                                                           LocalDateTime dateFin);
    
    @Modifying
    @Query("UPDATE CampagnePublicitaire c SET c.nombreVues = c.nombreVues + 1 WHERE c.id = :id")
    void incrementerVues(@Param("id") Long id);
    
    @Modifying
    @Query("UPDATE CampagnePublicitaire c SET c.nombreClics = c.nombreClics + 1 WHERE c.id = :id")
    void incrementerClics(@Param("id") Long id);
    
    List<CampagnePublicitaire> findByMerchantIdOrderByDateCreationDesc(Long merchantId);
}
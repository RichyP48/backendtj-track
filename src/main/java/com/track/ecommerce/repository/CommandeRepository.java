package com.track.ecommerce.repository;

import com.track.ecommerce.entity.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long> {
    List<Commande> findByClientUserId(String userId);
    List<Commande> findByStatut(Commande.StatutCommande statut);
    
    @Query("SELECT DISTINCT c FROM Commande c JOIN c.items ci JOIN ci.article a JOIN ProduitEcommerce pe ON pe.article = a JOIN pe.merchant m WHERE m.user.userId = :merchantUserId ORDER BY c.dateCommande DESC")
    List<Commande> findCommandesByMerchantUserId(@Param("merchantUserId") String merchantUserId);
}
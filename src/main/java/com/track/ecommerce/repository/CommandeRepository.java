package com.track.ecommerce.repository;

import com.track.ecommerce.entity.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long> {
    
    Optional<Commande> findByNumeroCommande(String numeroCommande);
    
    List<Commande> findByClientUserIdOrderByDateCommandeDesc(String clientUserId);
    
    List<Commande> findByStatutOrderByDateCommandeDesc(Commande.StatutCommande statut);
    
    @Query("SELECT c FROM Commande c WHERE c.dateCommande BETWEEN ?1 AND ?2 ORDER BY c.dateCommande DESC")
    List<Commande> findByDateCommandeBetween(LocalDateTime dateDebut, LocalDateTime dateFin);
    
    @Query("SELECT COUNT(c) FROM Commande c WHERE c.client.userId = ?1")
    Long countByClientUserId(String clientUserId);
}
package com.track.stock.repository;

import com.track.stock.entity.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {
    
    List<Fournisseur> findByStatut(Fournisseur.StatutFournisseur statut);
    
    @Query("SELECT f FROM Fournisseur f WHERE f.nom LIKE %:nom%")
    List<Fournisseur> findByNomContaining(String nom);
    
    boolean existsByEmail(String email);
    
    Optional<Fournisseur> findByNom(String nom);
    
    @Query("SELECT f.nom, COUNT(DISTINCT a.id), SUM(CASE WHEN a.quantiteStock > 0 THEN 1 ELSE 0 END), SUM(CASE WHEN a.quantiteStock <= a.seuilAlerte AND a.quantiteStock > 0 THEN 1 ELSE 0 END), SUM(CASE WHEN a.quantiteStock <= 0 THEN 1 ELSE 0 END) FROM Fournisseur f LEFT JOIN Article a ON a.fournisseur.id = f.id GROUP BY f.id, f.nom")
    List<Object[]> getSupplierStats();
}
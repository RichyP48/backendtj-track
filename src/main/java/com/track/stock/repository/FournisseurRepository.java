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
}
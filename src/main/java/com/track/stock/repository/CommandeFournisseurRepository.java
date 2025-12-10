package com.track.stock.repository;

import com.track.stock.entity.CommandeFournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeFournisseurRepository extends JpaRepository<CommandeFournisseur, Long> {
    Optional<CommandeFournisseur> findByCode(String code);
    
    @Query("SELECT c FROM CommandeFournisseur c WHERE c.entreprise.id = ?1")
    List<CommandeFournisseur> findByMerchantId(Long merchantId);
    
    @Query("SELECT c FROM CommandeFournisseur c WHERE c.fournisseur.id = ?1")
    List<CommandeFournisseur> findBySupplierId(Long supplierId);
}
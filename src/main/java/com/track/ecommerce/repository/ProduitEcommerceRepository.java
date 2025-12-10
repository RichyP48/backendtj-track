package com.track.ecommerce.repository;

import com.track.ecommerce.entity.ProduitEcommerce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitEcommerceRepository extends JpaRepository<ProduitEcommerce, Long> {
    
    List<ProduitEcommerce> findByVisibleEnLigneTrue();
    
    List<ProduitEcommerce> findByMerchantId(Long merchantId);
    
    @Query("SELECT p FROM ProduitEcommerce p WHERE p.article.categorie.id = ?1 AND p.visibleEnLigne = true AND p.id != ?2")
    List<ProduitEcommerce> findByCategorieAndVisibleEnLigneTrue(Long categorieId, Long excludeId);
    
    @Query("SELECT p FROM ProduitEcommerce p WHERE p.visibleEnLigne = true ORDER BY p.nombreVues DESC")
    List<ProduitEcommerce> findPopulaires();
    
    @Query("SELECT p FROM ProduitEcommerce p WHERE p.visibleEnLigne = true ORDER BY p.dateMiseEnLigne DESC")
    List<ProduitEcommerce> findNouveautes();
}
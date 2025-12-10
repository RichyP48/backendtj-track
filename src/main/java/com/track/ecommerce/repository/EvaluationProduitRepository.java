package com.track.ecommerce.repository;

import com.track.ecommerce.entity.EvaluationProduit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EvaluationProduitRepository extends JpaRepository<EvaluationProduit, Long> {
    
    List<EvaluationProduit> findByProduitIdOrderByDateEvaluationDesc(Long produitId);
    
    List<EvaluationProduit> findByClientId(Long clientId);
    
    boolean existsByProduitIdAndClientId(Long produitId, Long clientId);
}
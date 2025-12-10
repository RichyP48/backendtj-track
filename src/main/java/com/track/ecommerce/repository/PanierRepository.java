package com.track.ecommerce.repository;

import com.track.ecommerce.entity.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PanierRepository extends JpaRepository<Panier, Long> {
    
    Optional<Panier> findByUserId(Long userId);
    
    Optional<Panier> findByUserUserId(String userUserId);
    
    Optional<Panier> findByUserEmail(String userEmail);
}
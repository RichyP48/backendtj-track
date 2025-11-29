package com.track.stock.repository;

import com.track.stock.entity.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    
    Optional<Categorie> findByCode(String code);
    
    boolean existsByCode(String code);
}
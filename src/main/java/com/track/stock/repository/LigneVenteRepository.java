package com.track.stock.repository;

import com.track.stock.entity.LigneVente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LigneVenteRepository extends JpaRepository<LigneVente, Long> {
    void deleteAllByVenteId(Long venteId);
}
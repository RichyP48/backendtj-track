package com.track.stock.repository;

import com.track.stock.entity.Ventes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface VentesRepository extends JpaRepository<Ventes, Long> {
    Optional<Ventes> findByCode(String code);
}
package com.track.repository;

import com.track.entity.SupplierProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SupplierProfileRepository extends JpaRepository<SupplierProfile, Long> {
    Optional<SupplierProfile> findByUserId(Long userId);
}
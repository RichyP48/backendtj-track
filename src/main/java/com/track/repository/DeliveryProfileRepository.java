package com.track.repository;

import com.track.entity.DeliveryProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DeliveryProfileRepository extends JpaRepository<DeliveryProfile, Long> {
    Optional<DeliveryProfile> findByUserId(Long userId);
}
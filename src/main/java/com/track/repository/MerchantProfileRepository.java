package com.track.repository;

import com.track.entity.MerchantProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MerchantProfileRepository extends JpaRepository<MerchantProfile, Long> {
    Optional<MerchantProfile> findByUserId(Long userId);
    
    @Query("SELECT m FROM MerchantProfile m WHERE m.user.email = :email")
    Optional<MerchantProfile> findByUserEmail(@Param("email") String email);
}
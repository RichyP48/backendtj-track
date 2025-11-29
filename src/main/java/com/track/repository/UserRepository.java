package com.track.repository;

import com.track.entity.Roles;
import com.track.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Boolean existsByEmail(String email);
    Optional<UserEntity> findByUserId(String userId);
    java.util.List<UserEntity> findByIsApprovedFalse();
    java.util.List<UserEntity> findByIsApprovedIsNull();
    
    @Query("SELECT r FROM Roles r WHERE r.name = ?1")
    Optional<Roles> findRoleByName(String name);
    
    default Roles saveRole(Roles role) {
        return null;
    }
}

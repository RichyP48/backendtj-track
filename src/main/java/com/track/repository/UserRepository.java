package com.track.repository;

import com.track.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUserId(String userId);
    boolean existsByEmail(String email);
    List<UserEntity> findByIsApprovedIsNull();
    
    @Query("SELECT r.name, COUNT(u) FROM UserEntity u JOIN u.roles r GROUP BY r.name")
    List<Object[]> getUserRoleDistribution();
    
    @Query(value = "SELECT DATE(u.created_at) as date, COUNT(u.id) as registrations " +
           "FROM user_entity u WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL :days DAY) " +
           "GROUP BY DATE(u.created_at) ORDER BY date DESC LIMIT :days", nativeQuery = true)
    List<Object[]> getRegistrationTrend(@Param("days") int days);
    
    @Query(value = "SELECT COUNT(u.id) FROM user_entity u WHERE u.updated_at >= DATE_SUB(NOW(), INTERVAL :days DAY)", nativeQuery = true)
    Long countActiveUsers(@Param("days") int days);
}
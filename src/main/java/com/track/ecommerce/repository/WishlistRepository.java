package com.track.ecommerce.repository;

import com.track.ecommerce.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
    
    List<Wishlist> findByUserUserIdOrderByAddedAtDesc(String userUserId);
    
    Optional<Wishlist> findByUserUserIdAndArticleId(String userUserId, Long articleId);
    
    boolean existsByUserUserIdAndArticleId(String userUserId, Long articleId);
    
    void deleteByUserUserIdAndArticleId(String userUserId, Long articleId);
}
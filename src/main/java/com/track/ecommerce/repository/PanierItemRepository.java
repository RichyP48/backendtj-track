package com.track.ecommerce.repository;

import com.track.ecommerce.entity.PanierItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PanierItemRepository extends JpaRepository<PanierItem, Long> {
    
    Optional<PanierItem> findByPanierIdAndArticleId(Long panierId, Long articleId);
    
    void deleteByPanierIdAndArticleId(Long panierId, Long articleId);
}
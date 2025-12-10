package com.track.stock.repository;

import com.track.stock.entity.LigneCommandeClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LigneCommandeClientRepository extends JpaRepository<LigneCommandeClient, Long> {
    
    @Query("SELECT l FROM LigneCommandeClient l JOIN FETCH l.article WHERE l.commandeClient.id = :commandeId")
    List<LigneCommandeClient> findByCommandeClientIdWithArticle(Long commandeId);
    
    void deleteAllByCommandeClientId(Long commandeId);
}
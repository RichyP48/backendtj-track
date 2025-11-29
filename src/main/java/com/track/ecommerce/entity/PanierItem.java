package com.track.ecommerce.entity;

import com.track.stock.entity.Article;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "panier_items")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PanierItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "panier_id", nullable = false)
    private Panier panier;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Column(nullable = false)
    private Integer quantite;
    
    @Column(nullable = false)
    private BigDecimal prixUnitaire;
    
    @Column(name = "added_at")
    private LocalDateTime addedAt;
    
    @PrePersist
    protected void onCreate() {
        addedAt = LocalDateTime.now();
    }
}
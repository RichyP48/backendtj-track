package com.track.ecommerce.entity;

import com.track.entity.UserEntity;
import com.track.stock.entity.Article;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "wishlists")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Wishlist {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Column(name = "added_at")
    private LocalDateTime addedAt;
    
    @PrePersist
    protected void onCreate() {
        addedAt = LocalDateTime.now();
    }
}
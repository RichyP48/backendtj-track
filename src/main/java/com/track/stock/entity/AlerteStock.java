package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "alertes_stock")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlerteStock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Enumerated(EnumType.STRING)
    private TypeAlerte type;
    
    private Integer seuil;
    private Integer stockActuel;
    private String message;
    
    @Column(nullable = false)
    private Boolean lu = false;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
    
    public enum TypeAlerte {
        STOCK_FAIBLE, RUPTURE_STOCK, SURSTOCK
    }
}
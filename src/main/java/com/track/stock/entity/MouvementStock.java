package com.track.stock.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "mouvements_stock")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MouvementStock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeMouvement typeMouvement;
    
    @Column(nullable = false)
    private Integer quantite;
    
    private BigDecimal prixUnitaire;
    
    private String motif;
    
    @Column(name = "date_mouvement", nullable = false)
    private LocalDateTime dateMouvement;
    
    @Column(name = "created_by")
    private String createdBy;
    
    @PrePersist
    protected void onCreate() {
        if (dateMouvement == null) {
            dateMouvement = LocalDateTime.now();
        }
    }
    
    public enum TypeMouvement {
        ENTREE, SORTIE, CORRECTION_POSITIVE, CORRECTION_NEGATIVE
    }
}
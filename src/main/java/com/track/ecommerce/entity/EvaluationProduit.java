package com.track.ecommerce.entity;

import com.track.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "evaluations_produit")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EvaluationProduit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "produit_id", nullable = false)
    private ProduitEcommerce produit;
    
    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private UserEntity client;
    
    @Column(nullable = false)
    private Integer note; // 1 à 5 étoiles
    
    @Column(columnDefinition = "TEXT")
    private String commentaire;
    
    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;
    
    private Boolean recommande = false;
    
    @PrePersist
    protected void onCreate() {
        dateEvaluation = LocalDateTime.now();
    }
}
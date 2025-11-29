package com.track.ecommerce.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdresseLivraison {
    
    private String nom;
    private String prenom;
    private String telephone;
    private String adresse;
    private String ville;
    private String codePostal;
    private String pays;
    private String complementAdresse;
}
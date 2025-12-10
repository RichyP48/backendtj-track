package com.track.publicite.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "tarifs_publicite")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TarifPublicite {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampagnePublicitaire.TypeCampagne typeCampagne;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampagnePublicitaire.PeriodeTarification periode;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal tarifBase;
    
    @Column(nullable = false)
    private Integer dureeHeures;
    
    @Column(nullable = false)
    private Boolean actif = true;
    
    public BigDecimal calculerTarif() {
        return tarifBase.multiply(BigDecimal.valueOf(periode.getMultiplicateur()));
    }
}
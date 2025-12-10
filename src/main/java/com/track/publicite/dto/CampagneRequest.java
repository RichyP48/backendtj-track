package com.track.publicite.dto;

import com.track.publicite.entity.CampagnePublicitaire;
import com.track.finance.entity.Paiement;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CampagneRequest {
    private Long produitId;
    private CampagnePublicitaire.TypeCampagne typeCampagne;
    private CampagnePublicitaire.PeriodeTarification periodeTarification;
    private Paiement.ModePaiement modePaiement;
    private BigDecimal montantPaye;
}
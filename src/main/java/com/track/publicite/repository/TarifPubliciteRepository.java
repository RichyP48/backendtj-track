package com.track.publicite.repository;

import com.track.publicite.entity.TarifPublicite;
import com.track.publicite.entity.CampagnePublicitaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TarifPubliciteRepository extends JpaRepository<TarifPublicite, Long> {
    
    Optional<TarifPublicite> findByTypeCampagneAndPeriode(CampagnePublicitaire.TypeCampagne typeCampagne,
                                                         CampagnePublicitaire.PeriodeTarification periode);
}
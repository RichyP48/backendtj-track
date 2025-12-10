package com.track.stock.service;

import com.track.stock.entity.Entreprise;
import com.track.stock.repository.EntrepriseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EntrepriseService {
    
    private final EntrepriseRepository entrepriseRepository;
    
    public List<Entreprise> findAll() {
        return entrepriseRepository.findAll();
    }
    
    public Entreprise findById(Long id) {
        return entrepriseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Entreprise non trouvée"));
    }
    
    public Entreprise save(Entreprise entreprise) {
        return entrepriseRepository.save(entreprise);
    }
    
    public void deleteById(Long id) {
        entrepriseRepository.deleteById(id);
    }
}
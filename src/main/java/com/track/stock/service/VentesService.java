package com.track.stock.service;

import com.track.stock.entity.Ventes;
import com.track.stock.repository.VentesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VentesService {
    
    private final VentesRepository ventesRepository;
    
    public List<Ventes> findAll() {
        return ventesRepository.findAll();
    }
    
    public Ventes findById(Long id) {
        return ventesRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Vente non trouvée"));
    }
    
    public Ventes findByCode(String code) {
        return ventesRepository.findByCode(code)
            .orElseThrow(() -> new RuntimeException("Vente non trouvée"));
    }
    
    public Ventes save(Ventes vente) {
        return ventesRepository.save(vente);
    }
    
    public void deleteById(Long id) {
        ventesRepository.deleteById(id);
    }
}
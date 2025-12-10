package com.track.stock.service;

import com.track.stock.entity.Fournisseur;
import com.track.stock.repository.FournisseurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FournisseurService {
    
    private final FournisseurRepository fournisseurRepository;
    
    public List<Fournisseur> findAll() {
        return fournisseurRepository.findAll();
    }
    
    public Fournisseur findById(Long id) {
        return fournisseurRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Fournisseur non trouvé"));
    }
    
    public List<Fournisseur> findActiveSuppliers() {
        return fournisseurRepository.findByStatut(Fournisseur.StatutFournisseur.ACTIF);
    }
    
    public Fournisseur save(Fournisseur fournisseur) {
        if (fournisseur.getId() == null && fournisseurRepository.existsByEmail(fournisseur.getEmail())) {
            throw new RuntimeException("Un fournisseur avec cet email existe déjà");
        }
        return fournisseurRepository.save(fournisseur);
    }
    
    public void deleteById(Long id) {
        fournisseurRepository.deleteById(id);
    }
    
    public List<Fournisseur> searchByName(String nom) {
        return fournisseurRepository.findByNomContaining(nom);
    }
}
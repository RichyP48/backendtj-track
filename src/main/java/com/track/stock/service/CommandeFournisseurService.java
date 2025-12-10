package com.track.stock.service;

import com.track.stock.entity.CommandeFournisseur;
import com.track.stock.entity.LigneCommandeFournisseur;
import com.track.stock.repository.CommandeFournisseurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommandeFournisseurService {
    
    private final CommandeFournisseurRepository commandeFournisseurRepository;
    
    public List<CommandeFournisseur> findAll() {
        return commandeFournisseurRepository.findAll();
    }
    
    public CommandeFournisseur findById(Long id) {
        return commandeFournisseurRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Commande fournisseur non trouvée"));
    }
    
    public CommandeFournisseur findByCode(String code) {
        return commandeFournisseurRepository.findByCode(code)
            .orElseThrow(() -> new RuntimeException("Commande fournisseur non trouvée"));
    }
    
    public CommandeFournisseur save(CommandeFournisseur commande) {
        return commandeFournisseurRepository.save(commande);
    }
    
    public void deleteById(Long id) {
        commandeFournisseurRepository.deleteById(id);
    }
    
    public List<LigneCommandeFournisseur> findLignes(Long commandeId) {
        CommandeFournisseur commande = findById(commandeId);
        return commande.getLigneCommandeFournisseurs();
    }
}
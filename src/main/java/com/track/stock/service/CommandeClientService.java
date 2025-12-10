package com.track.stock.service;

import com.track.stock.entity.CommandeClient;
import com.track.stock.entity.LigneCommandeClient;
import com.track.stock.repository.CommandeClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommandeClientService {
    
    private final CommandeClientRepository commandeClientRepository;
    
    public List<CommandeClient> findAll() {
        return commandeClientRepository.findAll();
    }
    
    public CommandeClient findById(Long id) {
        return commandeClientRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Commande client non trouvée"));
    }
    
    public CommandeClient findByCode(String code) {
        return commandeClientRepository.findByCode(code)
            .orElseThrow(() -> new RuntimeException("Commande client non trouvée"));
    }
    
    @Transactional
    public CommandeClient save(CommandeClient commande) {
        CommandeClient savedCommande = commandeClientRepository.save(commande);
        
        // Process stock movements for order lines
        if (savedCommande.getLigneCommandeClients() != null) {
            for (LigneCommandeClient ligne : savedCommande.getLigneCommandeClients()) {
                // Reserve stock when order is created
                reserveStockForOrderLine(ligne);
            }
        }
        
        return savedCommande;
    }
    
    private void reserveStockForOrderLine(LigneCommandeClient ligne) {
        // This should integrate with InventoryService
        // For now, just validate stock availability
        if (ligne.getArticle().getStockDisponible() < ligne.getQuantite()) {
            throw new RuntimeException("Stock insuffisant pour l'article: " + 
                ligne.getArticle().getDesignation());
        }
    }
    
    public void deleteById(Long id) {
        commandeClientRepository.deleteById(id);
    }
    
    public List<LigneCommandeClient> findLignes(Long commandeId) {
        CommandeClient commande = findById(commandeId);
        return commande.getLigneCommandeClients();
    }
}
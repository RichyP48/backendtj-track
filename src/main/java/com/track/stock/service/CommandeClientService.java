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
        List<CommandeClient> commandes = commandeClientRepository.findAll();
        
        // Calculer les totaux pour chaque commande si nécessaire
        commandes.forEach(commande -> {
            if (commande.getTotalHt() == null || commande.getTotalTtc() == null) {
                commande.calculerTotaux();
                commandeClientRepository.save(commande);
            }
        });
        
        return commandes;
    }
    
    public CommandeClient findById(Long id) {
        CommandeClient commande = commandeClientRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Commande client non trouvée"));
        
        // Calculer les totaux si ils sont null
        if (commande.getTotalHt() == null || commande.getTotalTtc() == null) {
            commande.calculerTotaux();
            commande = commandeClientRepository.save(commande);
        }
        
        return commande;
    }
    
    public CommandeClient findByCode(String code) {
        return commandeClientRepository.findByCode(code)
            .orElseThrow(() -> new RuntimeException("Commande client non trouvée"));
    }
    
    @Transactional
    public CommandeClient save(CommandeClient commande) {
        // Calculer les totaux avant sauvegarde
        commande.calculerTotaux();
        
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
    
    @Transactional
    public CommandeClient calculerEtSauvegarderTotaux(Long commandeId) {
        CommandeClient commande = findById(commandeId);
        commande.calculerTotaux();
        return commandeClientRepository.save(commande);
    }
    

}
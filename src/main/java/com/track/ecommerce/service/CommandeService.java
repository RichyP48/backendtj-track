package com.track.ecommerce.service;

import com.track.ecommerce.entity.Commande;
import com.track.ecommerce.entity.CommandeItem;
import com.track.ecommerce.repository.CommandeRepository;
import com.track.finance.entity.Paiement;
import com.track.finance.service.PaiementService;
import com.track.repository.UserRepository;
import com.track.security.SecurityUtils;
import com.track.stock.service.InventoryService;
import com.track.stock.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommandeService {
    
    private final PanierService panierService;
    private final InventoryService inventoryService;
    private final PaiementService paiementService;
    private final CommandeRepository commandeRepository;
    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    
    @Transactional(rollbackFor = Exception.class)
    public Commande creerCommandeDepuisPanier(String userId) {
        SecurityUtils.validateUserAccess(userId);
        var panier = panierService.getPanier(userId);
        var user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        if (panier.getItems().isEmpty()) {
            throw new RuntimeException("Le panier est vide");
        }
        
        // Vérifier et réserver le stock ATOMIQUEMENT
        panier.getItems().forEach(item -> {
            if (item.getStockDisponible() < item.getQuantite()) {
                throw new RuntimeException("Stock insuffisant pour " + item.getArticleNom());
            }
            inventoryService.reserverStock(item.getArticleId(), item.getQuantite());
        });
        
        // Créer la commande
        Commande commande = Commande.builder()
                .client(user)
                .statut(Commande.StatutCommande.EN_ATTENTE)
                .statutPaiement(Commande.StatutPaiement.EN_ATTENTE)
                .montantTotal(panier.getMontantTotal())
                .build();
        
        final Commande savedCommande = commandeRepository.save(commande);
        
        // Créer les items de commande
        List<CommandeItem> commandeItems = panier.getItems().stream()
                .map(panierItem -> {
                    var article = articleRepository.findById(panierItem.getArticleId())
                            .orElseThrow(() -> new RuntimeException("Article non trouvé"));
                    return CommandeItem.builder()
                            .commande(savedCommande)
                            .article(article)
                            .quantite(panierItem.getQuantite())
                            .prixUnitaire(panierItem.getPrixUnitaire())
                            .sousTotal(panierItem.getSousTotal())
                            .build();
                })
                .collect(Collectors.toList());
        
        savedCommande.setItems(commandeItems);
        commande = commandeRepository.save(savedCommande);
        
        panierService.viderPanier(userId);
        
        return commande;
    }
    
    @Transactional(rollbackFor = Exception.class)
    public Commande traiterPaiement(Long commandeId, Paiement.ModePaiement mode, String reference) {
        Commande commande = commandeRepository.findById(commandeId)
                .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        
        var statutPaiement = paiementService.traiterPaiementCarteBancaire(commande.getMontantTotal(), reference);
        
        if (statutPaiement == Paiement.StatutPaiement.VALIDE) {
            commande.setStatutPaiement(Commande.StatutPaiement.PAYE);
            commande.setStatut(Commande.StatutCommande.CONFIRMEE);
        } else {
            throw new RuntimeException("Échec du paiement");
        }
        
        return commandeRepository.save(commande);
    }
    
    @Transactional(rollbackFor = Exception.class)
    public Commande expedierCommande(Long commandeId) {
        Commande commande = commandeRepository.findById(commandeId)
                .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        
        commande.setStatut(Commande.StatutCommande.EXPEDIEE);
        return commandeRepository.save(commande);
    }
    
    public List<Commande> getCommandesByMerchant(String merchantUserId) {
        return commandeRepository.findCommandesByMerchantUserId(merchantUserId);
    }
}
package com.track.ecommerce;

import com.track.ecommerce.entity.Commande;
import com.track.ecommerce.service.CommandeService;
import com.track.ecommerce.service.PanierService;
import com.track.finance.entity.Paiement;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
class WorkflowEcommerceTest {

    @Autowired private PanierService panierService;
    @Autowired private CommandeService commandeService;

    @Test
    void testWorkflowComplet_PanierVersLivraison() {
        String userId = "test@example.com";
        
        // 1. Ajouter articles au panier
        panierService.ajouterArticle(userId, 1L, 2);
        var panier = panierService.getPanier(userId);
        assertFalse(panier.getItems().isEmpty());
        
        // 2. Créer commande depuis panier
        Commande commande = commandeService.creerCommandeDepuisPanier(userId);
        assertEquals(Commande.StatutCommande.EN_ATTENTE, commande.getStatut());
        
        // 3. Traiter paiement
        commande = commandeService.traiterPaiement(commande.getId(), 
            Paiement.ModePaiement.CARTE_BANCAIRE, "REF123");
        assertEquals(Commande.StatutPaiement.PAYE, commande.getStatutPaiement());
        
        // 4. Expédier commande
        commande = commandeService.expedierCommande(commande.getId());
        assertEquals(Commande.StatutCommande.EXPEDIEE, commande.getStatut());
        
        // 5. Vérifier panier vidé
        var panierVide = panierService.getPanier(userId);
        assertTrue(panierVide.getItems().isEmpty());
    }
}
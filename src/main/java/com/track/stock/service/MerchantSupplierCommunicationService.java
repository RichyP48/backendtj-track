package com.track.stock.service;

import com.track.entity.MerchantProfile;
import com.track.entity.SupplierProfile;
import com.track.service.EmailService;
import com.track.stock.entity.CommandeFournisseur;
import com.track.stock.repository.CommandeFournisseurRepository;
import com.track.repository.MerchantProfileRepository;
import com.track.repository.SupplierProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MerchantSupplierCommunicationService {
    
    private final CommandeFournisseurRepository commandeRepository;
    private final MerchantProfileRepository merchantRepository;
    private final SupplierProfileRepository supplierRepository;
    private final EmailService emailService;
    
    @Transactional
    public CommandeFournisseur createOrderRequest(Long merchantId, Long supplierId, CommandeFournisseur commande) {
        MerchantProfile merchant = merchantRepository.findById(merchantId)
            .orElseThrow(() -> new RuntimeException("Commerçant non trouvé"));
        
        SupplierProfile supplier = supplierRepository.findById(supplierId)
            .orElseThrow(() -> new RuntimeException("Fournisseur non trouvé"));
        
        commande.setDateCommande(LocalDateTime.now());
        commande.setStatut(CommandeFournisseur.StatutCommande.EN_ATTENTE);
        
        CommandeFournisseur savedCommande = commandeRepository.save(commande);
        
        // Notification au fournisseur
        notifySupplierNewOrder(supplier, merchant, savedCommande);
        
        return savedCommande;
    }
    
    @Transactional
    public void confirmOrder(Long commandeId, Long supplierId) {
        CommandeFournisseur commande = commandeRepository.findById(commandeId)
            .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        
        commande.setStatut(CommandeFournisseur.StatutCommande.CONFIRMEE);
        commandeRepository.save(commande);
        
        // Notification au commerçant
        notifyMerchantOrderConfirmed(commande);
    }
    
    @Transactional
    public void shipOrder(Long commandeId, LocalDateTime dateLivraison) {
        CommandeFournisseur commande = commandeRepository.findById(commandeId)
            .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        
        commande.setStatut(CommandeFournisseur.StatutCommande.EXPEDIEE);
        commande.setDateLivraisonPrevue(dateLivraison);
        commandeRepository.save(commande);
        
        notifyMerchantOrderShipped(commande);
    }
    
    public List<CommandeFournisseur> getMerchantOrders(Long merchantId) {
        return commandeRepository.findByMerchantId(merchantId);
    }
    
    public List<CommandeFournisseur> getSupplierOrders(Long supplierId) {
        return commandeRepository.findBySupplierId(supplierId);
    }
    
    private void notifySupplierNewOrder(SupplierProfile supplier, MerchantProfile merchant, CommandeFournisseur commande) {
        String subject = "Nouvelle commande de " + merchant.getShopName();
        String message = String.format("Vous avez reçu une nouvelle commande #%s de %s", 
            commande.getCode(), merchant.getShopName());
        emailService.sendNotificationEmail(supplier.getUser().getEmail(), supplier.getUser().getName(), subject, message);
    }
    
    private void notifyMerchantOrderConfirmed(CommandeFournisseur commande) {
        String subject = "Commande confirmée #" + commande.getCode();
        String message = "Votre commande a été confirmée par le fournisseur";
    }
    
    private void notifyMerchantOrderShipped(CommandeFournisseur commande) {
        String subject = "Commande expédiée #" + commande.getCode();
        String message = "Votre commande a été expédiée";

    }
}
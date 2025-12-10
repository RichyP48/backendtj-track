package com.track.stock.controller;

import com.track.stock.entity.CommandeFournisseur;
import com.track.stock.entity.LigneCommandeFournisseur;
import com.track.stock.service.CommandeFournisseurService;
import com.track.stock.service.MerchantSupplierCommunicationService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

import java.util.List;

@RestController
@RequestMapping("/stock/commandes-fournisseur")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CommandeFournisseurController {
    
    private final CommandeFournisseurService commandeFournisseurService;
    private final MerchantSupplierCommunicationService communicationService;
    
    @Data
    public static class OrderRequest {
        private CommandeFournisseur commande;
    }
    
    @Data
    public static class ShipRequest {
        private LocalDateTime dateLivraison;
    }
    
    @PostMapping
    public ResponseEntity<CommandeFournisseur> createOrder(
            @RequestBody OrderRequest request,
            @RequestParam Long merchantId,
            @RequestParam Long supplierId) {
        try {
            CommandeFournisseur commande = communicationService.createOrderRequest(merchantId, supplierId, request.getCommande());
            return ResponseEntity.ok(commande);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/{id}/confirm")
    public ResponseEntity<Void> confirmOrder(@PathVariable Long id, @RequestParam Long supplierId) {
        communicationService.confirmOrder(id, supplierId);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/{id}/ship")
    public ResponseEntity<Void> shipOrder(@PathVariable Long id, @RequestBody ShipRequest request) {
        communicationService.shipOrder(id, request.getDateLivraison());
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<CommandeFournisseur> findById(@PathVariable Long id) {
        return ResponseEntity.ok(commandeFournisseurService.findById(id));
    }
    
    @GetMapping("/code/{code}")
    public ResponseEntity<CommandeFournisseur> findByCode(@PathVariable String code) {
        return ResponseEntity.ok(commandeFournisseurService.findByCode(code));
    }
    
    @GetMapping
    public ResponseEntity<List<CommandeFournisseur>> findAll() {
        return ResponseEntity.ok(commandeFournisseurService.findAll());
    }
    
    @GetMapping("/{id}/lignes")
    public ResponseEntity<List<LigneCommandeFournisseur>> findLignes(@PathVariable Long id) {
        return ResponseEntity.ok(commandeFournisseurService.findLignes(id));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        commandeFournisseurService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
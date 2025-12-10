package com.track.stock.controller;

import com.track.dto.ApiResponse;
import com.track.stock.entity.CommandeFournisseur;
import com.track.stock.entity.Fournisseur;
import com.track.stock.service.FournisseurService;
import com.track.stock.service.MerchantSupplierCommunicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock/fournisseurs")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FournisseurController {
    
    private final FournisseurService fournisseurService;
    private final MerchantSupplierCommunicationService communicationService;
    
    @GetMapping
    public ResponseEntity<List<Fournisseur>> getAllFournisseurs() {
        return ResponseEntity.ok(fournisseurService.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Fournisseur> getFournisseurById(@PathVariable Long id) {
        return ResponseEntity.ok(fournisseurService.findById(id));
    }
    
    @GetMapping("/active")
    public ResponseEntity<List<Fournisseur>> getActiveFournisseurs() {
        return ResponseEntity.ok(fournisseurService.findActiveSuppliers());
    }
    
    @PostMapping
    public ResponseEntity<Fournisseur> createFournisseur(@RequestBody Fournisseur fournisseur) {
        return ResponseEntity.ok(fournisseurService.save(fournisseur));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Fournisseur> updateFournisseur(@PathVariable Long id, @RequestBody Fournisseur fournisseur) {
        fournisseur.setId(id);
        return ResponseEntity.ok(fournisseurService.save(fournisseur));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteFournisseur(@PathVariable Long id) {
        try {
            fournisseurService.deleteById(id);
            return ResponseEntity.ok(ApiResponse.success("Fournisseur supprimé avec succès", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Fournisseur>> searchFournisseurs(@RequestParam String nom) {
        return ResponseEntity.ok(fournisseurService.searchByName(nom));
    }
    
    @GetMapping("/merchant/{merchantId}/orders")
    public ResponseEntity<List<CommandeFournisseur>> getMerchantOrders(@PathVariable Long merchantId) {
        return ResponseEntity.ok(communicationService.getMerchantOrders(merchantId));
    }
    
    @GetMapping("/supplier/{supplierId}/orders")
    public ResponseEntity<List<CommandeFournisseur>> getSupplierOrders(@PathVariable Long supplierId) {
        return ResponseEntity.ok(communicationService.getSupplierOrders(supplierId));
    }
}
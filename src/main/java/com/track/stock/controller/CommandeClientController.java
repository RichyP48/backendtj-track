package com.track.stock.controller;

import com.track.stock.entity.CommandeClient;
import com.track.stock.entity.LigneCommandeClient;
import com.track.stock.service.CommandeClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0/commandes-client")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CommandeClientController {
    
    private final CommandeClientService commandeClientService;
    
    @PostMapping
    public ResponseEntity<CommandeClient> save(@RequestBody CommandeClient commande) {
        return ResponseEntity.ok(commandeClientService.save(commande));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<CommandeClient> findById(@PathVariable Long id) {
        return ResponseEntity.ok(commandeClientService.findById(id));
    }
    
    @GetMapping("/code/{code}")
    public ResponseEntity<CommandeClient> findByCode(@PathVariable String code) {
        return ResponseEntity.ok(commandeClientService.findByCode(code));
    }
    
    @GetMapping
    public ResponseEntity<List<CommandeClient>> findAll() {
        return ResponseEntity.ok(commandeClientService.findAll());
    }
    
    @GetMapping("/{id}/lignes")
    public ResponseEntity<List<LigneCommandeClient>> findLignes(@PathVariable Long id) {
        return ResponseEntity.ok(commandeClientService.findLignes(id));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        commandeClientService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
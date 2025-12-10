package com.track.stock.controller;

import com.track.stock.entity.Entreprise;
import com.track.stock.service.EntrepriseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0/entreprises")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class EntrepriseController {
    
    private final EntrepriseService entrepriseService;
    
    @PostMapping
    public ResponseEntity<Entreprise> save(@RequestBody Entreprise entreprise) {
        return ResponseEntity.ok(entrepriseService.save(entreprise));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Entreprise> findById(@PathVariable Long id) {
        return ResponseEntity.ok(entrepriseService.findById(id));
    }
    
    @GetMapping
    public ResponseEntity<List<Entreprise>> findAll() {
        return ResponseEntity.ok(entrepriseService.findAll());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        entrepriseService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
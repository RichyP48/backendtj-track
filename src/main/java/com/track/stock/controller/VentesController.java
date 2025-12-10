package com.track.stock.controller;

import com.track.stock.entity.Ventes;
import com.track.stock.service.VentesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0/ventes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VentesController {
    
    private final VentesService ventesService;
    
    @PostMapping
    public ResponseEntity<Ventes> save(@RequestBody Ventes vente) {
        return ResponseEntity.ok(ventesService.save(vente));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Ventes> findById(@PathVariable Long id) {
        return ResponseEntity.ok(ventesService.findById(id));
    }
    
    @GetMapping("/code/{code}")
    public ResponseEntity<Ventes> findByCode(@PathVariable String code) {
        return ResponseEntity.ok(ventesService.findByCode(code));
    }
    
    @GetMapping
    public ResponseEntity<List<Ventes>> findAll() {
        return ResponseEntity.ok(ventesService.findAll());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        ventesService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
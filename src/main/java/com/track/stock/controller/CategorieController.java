package com.track.stock.controller;

import com.track.stock.dto.CategorieDto;
import com.track.stock.service.CategorieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock/categories")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER') or hasRole('COMMERCANT')")
public class CategorieController {
    
    private final CategorieService categorieService;
    
    @PostMapping
    public ResponseEntity<CategorieDto> createCategorie(@RequestBody CategorieDto categorieDto) {
        try {
            CategorieDto created = categorieService.createCategorie(categorieDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<CategorieDto> updateCategorie(@PathVariable Long id, @RequestBody CategorieDto categorieDto) {
        try {
            CategorieDto updated = categorieService.updateCategorie(id, categorieDto);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategorie(@PathVariable Long id) {
        try {
            categorieService.deleteCategorie(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<CategorieDto> getCategorieById(@PathVariable Long id) {
        try {
            CategorieDto categorie = categorieService.getCategorieById(id);
            return ResponseEntity.ok(categorie);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping
    public ResponseEntity<List<CategorieDto>> getAllCategories() {
        List<CategorieDto> categories = categorieService.getAllCategories();
        return ResponseEntity.ok(categories);
    }
}
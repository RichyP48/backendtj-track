package com.track.stock.service;

import com.track.stock.dto.CategorieDto;
import com.track.stock.entity.Categorie;
import com.track.stock.repository.CategorieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CategorieService {
    
    private final CategorieRepository categorieRepository;
    
    public CategorieDto createCategorie(CategorieDto categorieDto) {
        if (categorieRepository.existsByCode(categorieDto.getCode())) {
            throw new RuntimeException("Une catégorie avec ce code existe déjà");
        }
        
        Categorie categorie = mapToEntity(categorieDto);
        categorie = categorieRepository.save(categorie);
        return mapToDto(categorie);
    }
    
    public CategorieDto updateCategorie(Long id, CategorieDto categorieDto) {
        Categorie categorie = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        
        categorie.setDesignation(categorieDto.getDesignation());
        categorie.setDescription(categorieDto.getDescription());
        
        categorie = categorieRepository.save(categorie);
        return mapToDto(categorie);
    }
    
    public void deleteCategorie(Long id) {
        Categorie categorie = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        
        if (categorie.getArticles() != null && !categorie.getArticles().isEmpty()) {
            throw new RuntimeException("Impossible de supprimer une catégorie contenant des articles");
        }
        
        categorieRepository.deleteById(id);
    }
    
    @Transactional(readOnly = true)
    public CategorieDto getCategorieById(Long id) {
        Categorie categorie = categorieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
        return mapToDto(categorie);
    }
    
    @Transactional(readOnly = true)
    public List<CategorieDto> getAllCategories() {
        return categorieRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    private Categorie mapToEntity(CategorieDto dto) {
        return Categorie.builder()
                .code(dto.getCode())
                .designation(dto.getDesignation())
                .description(dto.getDescription())
                .build();
    }
    
    private CategorieDto mapToDto(Categorie categorie) {
        return CategorieDto.builder()
                .id(categorie.getId())
                .code(categorie.getCode())
                .designation(categorie.getDesignation())
                .description(categorie.getDescription())
                .nombreArticles(categorie.getArticles() != null ? categorie.getArticles().size() : 0)
                .build();
    }
}
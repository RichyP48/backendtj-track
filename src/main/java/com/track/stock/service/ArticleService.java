package com.track.stock.service;

import com.track.stock.dto.ArticleDto;
import com.track.stock.entity.Article;
import com.track.stock.entity.Categorie;
import com.track.stock.entity.MouvementStock;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.repository.CategorieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ArticleService {
    
    private final ArticleRepository articleRepository;
    private final CategorieRepository categorieRepository;
    private final MouvementStockService mouvementStockService;
    
    public ArticleDto createArticle(ArticleDto articleDto) {
        if (articleRepository.existsByCodeArticle(articleDto.getCodeArticle())) {
            throw new RuntimeException("Un article avec ce code existe déjà");
        }
        
        Article article = mapToEntity(articleDto);
        article = articleRepository.save(article);
        return mapToDto(article);
    }
    
    public ArticleDto updateArticle(Long id, ArticleDto articleDto) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        article.setDesignation(articleDto.getDesignation());
        article.setDescription(articleDto.getDescription());
        article.setPrixUnitaireHt(articleDto.getPrixUnitaireHt());
        article.setTauxTva(articleDto.getTauxTva());
        article.setPrixUnitaireTtc(articleDto.getPrixUnitaireTtc());
        article.setSeuilAlerte(articleDto.getSeuilAlerte());
        
        if (articleDto.getCategorieId() != null) {
            Categorie categorie = categorieRepository.findById(articleDto.getCategorieId())
                    .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
            article.setCategorie(categorie);
        }
        
        article = articleRepository.save(article);
        return mapToDto(article);
    }
    
    public void deleteArticle(Long id) {
        if (!articleRepository.existsById(id)) {
            throw new RuntimeException("Article non trouvé");
        }
        articleRepository.deleteById(id);
    }
    
    @Transactional(readOnly = true)
    public ArticleDto getArticleById(Long id) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        return mapToDto(article);
    }
    
    @Transactional(readOnly = true)
    public List<ArticleDto> getAllArticles() {
        return articleRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ArticleDto> getArticlesByCategorie(Long categorieId) {
        return articleRepository.findByCategorieId(categorieId).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ArticleDto> getArticlesStockFaible() {
        return articleRepository.findArticlesStockFaible().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ArticleDto> rechercherArticles(String searchTerm) {
        return articleRepository.searchByDesignationOrCode(searchTerm).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public void ajusterStock(Long articleId, Integer quantite, String motif, String utilisateur) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        MouvementStock.TypeMouvement typeMouvement = quantite > 0 ? 
                MouvementStock.TypeMouvement.CORRECTION_POSITIVE : 
                MouvementStock.TypeMouvement.CORRECTION_NEGATIVE;
        
        article.setQuantiteStock(article.getQuantiteStock() + quantite);
        articleRepository.save(article);
        
        mouvementStockService.enregistrerMouvement(articleId, typeMouvement, Math.abs(quantite), motif, utilisateur);
    }
    
    public void reduireStock(Long articleId, Integer quantite, String motif, String utilisateur) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        if (article.getQuantiteStock() < quantite) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        article.setQuantiteStock(article.getQuantiteStock() - quantite);
        articleRepository.save(article);
        
        mouvementStockService.enregistrerMouvement(articleId, MouvementStock.TypeMouvement.SORTIE, quantite, motif, utilisateur);
    }
    
    private Article mapToEntity(ArticleDto dto) {
        Article article = Article.builder()
                .codeArticle(dto.getCodeArticle())
                .designation(dto.getDesignation())
                .description(dto.getDescription())
                .prixUnitaireHt(dto.getPrixUnitaireHt())
                .tauxTva(dto.getTauxTva())
                .prixUnitaireTtc(dto.getPrixUnitaireTtc())
                .quantiteStock(dto.getQuantiteStock() != null ? dto.getQuantiteStock() : 0)
                .seuilAlerte(dto.getSeuilAlerte() != null ? dto.getSeuilAlerte() : 5)
                .build();
        
        if (dto.getCategorieId() != null) {
            Categorie categorie = categorieRepository.findById(dto.getCategorieId())
                    .orElseThrow(() -> new RuntimeException("Catégorie non trouvée"));
            article.setCategorie(categorie);
        }
        
        return article;
    }
    
    private ArticleDto mapToDto(Article article) {
        return ArticleDto.builder()
                .id(article.getId())
                .codeArticle(article.getCodeArticle())
                .designation(article.getDesignation())
                .description(article.getDescription())
                .prixUnitaireHt(article.getPrixUnitaireHt())
                .tauxTva(article.getTauxTva())
                .prixUnitaireTtc(article.getPrixUnitaireTtc())
                .photo(article.getPhoto())
                .categorieId(article.getCategorie() != null ? article.getCategorie().getId() : null)
                .categorieDesignation(article.getCategorie() != null ? article.getCategorie().getDesignation() : null)
                .quantiteStock(article.getQuantiteStock())
                .seuilAlerte(article.getSeuilAlerte())
                .stockFaible(article.getQuantiteStock() <= article.getSeuilAlerte())
                .build();
    }
}
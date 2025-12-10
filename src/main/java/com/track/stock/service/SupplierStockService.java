package com.track.stock.service;

import com.track.entity.SupplierProfile;
import com.track.repository.SupplierProfileRepository;
import com.track.stock.dto.ArticleDto;
import com.track.stock.entity.Article;
import com.track.stock.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class SupplierStockService {
    
    private final ArticleRepository articleRepository;
    private final SupplierProfileRepository supplierRepository;
    private final ArticleService articleService;
    
    public List<ArticleDto> getArticlesBySupplier(String userId) {
        SupplierProfile supplier = getSupplierProfile(userId);
        return articleRepository.findByFournisseurId(supplier.getId()).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public ArticleDto ajouterArticle(String userId, ArticleDto articleDto) {
        SupplierProfile supplier = getSupplierProfile(userId);
        
        // Générer code article unique pour le fournisseur
        String codeArticle = "SUP-" + supplier.getId() + "-" + System.currentTimeMillis();
        articleDto.setCodeArticle(codeArticle);
        
        return articleService.createArticle(articleDto);
    }
    
    public void ajusterStock(String userId, Long articleId, Integer quantite, String motif) {
        SupplierProfile supplier = getSupplierProfile(userId);
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        // Vérifier que l'article appartient au fournisseur
        if (!article.getFournisseur().getId().equals(supplier.getId())) {
            throw new RuntimeException("Article non autorisé");
        }
        
        articleService.ajusterStock(articleId, quantite, motif, userId);
    }
    
    private SupplierProfile getSupplierProfile(String userId) {
        return supplierRepository.findByUserId(Long.parseLong(userId))
                .orElseThrow(() -> new RuntimeException("Profil fournisseur non trouvé"));
    }
    
    private ArticleDto mapToDto(Article article) {
        return ArticleDto.builder()
                .id(article.getId())
                .codeArticle(article.getCodeArticle())
                .designation(article.getDesignation())
                .description(article.getDescription())
                .prixUnitaireHt(article.getPrixUnitaireHt())
                .prixUnitaireTtc(article.getPrixUnitaireTtc())
                .quantiteStock(article.getQuantiteStock())
                .seuilAlerte(article.getSeuilAlerte())
                .stockFaible(article.isStockFaible())
                .build();
    }
}
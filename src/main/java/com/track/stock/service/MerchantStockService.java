package com.track.stock.service;

import com.track.entity.MerchantProfile;
import com.track.entity.UserEntity;
import com.track.repository.MerchantProfileRepository;
import com.track.repository.UserRepository;
import com.track.stock.dto.ArticleDto;
import com.track.stock.entity.Article;
import com.track.stock.entity.Entreprise;
import com.track.stock.entity.MouvementStock;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.repository.EntrepriseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MerchantStockService {
    
    private final ArticleRepository articleRepository;
    private final MerchantProfileRepository merchantRepository;
    private final UserRepository userRepository;
    private final EntrepriseRepository entrepriseRepository;
    private final ArticleService articleService;
    private final MouvementStockService mouvementStockService;
    
    public List<ArticleDto> getArticlesByMerchant(String userEmail) {
        System.out.println("=== DEBUG getArticlesByMerchant ===");
        System.out.println("userEmail: " + userEmail);
        
        // Corriger les articles existants sans createdBy
        corrigerArticlesExistants(userEmail);
        
        // Utiliser directement ArticleService qui filtre par createdBy
        return articleService.getMyArticles(userEmail);
    }
    
    private void corrigerArticlesExistants(String userEmail) {
        try {
            MerchantProfile merchant = getMerchantProfile(userEmail);
            
            // Trouver tous les articles liés aux produits de ce merchant
            List<Article> articlesACorreger = articleRepository.findAll().stream()
                .filter(article -> {
                    // Vérifier si l'article est lié à un ProduitEcommerce de ce merchant
                    return article.getCreatedBy() == null || article.getCreatedBy().isEmpty();
                })
                .collect(Collectors.toList());
            
            System.out.println("Articles à corriger: " + articlesACorreger.size());
            
            for (Article article : articlesACorreger) {
                // Vérifier si cet article appartient à ce merchant via ProduitEcommerce
                boolean appartientAuMerchant = articleRepository.existsArticleLinkedToMerchant(article.getId(), merchant.getId());
                
                if (appartientAuMerchant) {
                    System.out.println("Correction article: " + article.getDesignation() + " pour " + userEmail);
                    article.setCreatedBy(userEmail);
                    articleRepository.save(article);
                }
            }
        } catch (Exception e) {
            System.err.println("Erreur lors de la correction: " + e.getMessage());
        }
    }
    
    public ArticleDto ajouterArticle(String userEmail, ArticleDto articleDto) {
        MerchantProfile merchant = getMerchantProfile(userEmail);
        
        // Générer code article unique pour le commerçant
        String codeArticle = "MCH-" + merchant.getId() + "-" + System.currentTimeMillis();
        articleDto.setCodeArticle(codeArticle);
        
        // Créer l'article
        ArticleDto createdArticle = articleService.createArticle(articleDto);
        
        // Forcer l'association au merchant
        Article article = articleRepository.findById(createdArticle.getId())
                .orElseThrow(() -> new RuntimeException("Article créé non trouvé"));
        article.setCreatedBy(userEmail);
        articleRepository.save(article);
        
        return createdArticle;
    }
    
    public void ajusterStock(String userEmail, Long articleId, Integer quantite, String motif) {
        MerchantProfile merchant = getMerchantProfile(userEmail);
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        // TODO: Implémenter la vérification correcte de propriété
        // Pour l'instant, permettre l'ajustement
        
        articleService.ajusterStock(articleId, quantite, motif, userEmail);
    }
    
    public List<ArticleDto> getArticlesStockFaible(String userEmail) {
        System.out.println("=== DEBUG getArticlesStockFaible ===");
        System.out.println("userEmail: " + userEmail);
        
        // Utiliser directement ArticleService qui filtre par createdBy
        List<ArticleDto> mesArticles = articleService.getMyArticles(userEmail);
        return mesArticles.stream()
                .filter(article -> Boolean.TRUE.equals(article.getStockFaible()))
                .collect(Collectors.toList());
    }
    
    private MerchantProfile getMerchantProfile(String userEmail) {
        return merchantRepository.findByUserEmail(userEmail)
                .orElseGet(() -> createDefaultMerchantProfile(userEmail));
    }
    
    private MerchantProfile createDefaultMerchantProfile(String userEmail) {
        UserEntity user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé: " + userEmail));
        
        MerchantProfile profile = MerchantProfile.builder()
                .user(user)
                .shopName("Boutique de " + (user.getName() != null ? user.getName() : "Commerçant"))
                .town("Non spécifié")
                .address("Adresse non spécifiée")
                .phoneNumber("Téléphone non spécifié")
                .build();
        
        return merchantRepository.save(profile);
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
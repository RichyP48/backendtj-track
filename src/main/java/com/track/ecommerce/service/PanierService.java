package com.track.ecommerce.service;

import com.track.ecommerce.dto.PanierDto;
import com.track.ecommerce.dto.PanierItemDto;
import com.track.ecommerce.entity.Panier;
import com.track.ecommerce.entity.PanierItem;
import com.track.ecommerce.repository.PanierItemRepository;
import com.track.ecommerce.repository.PanierRepository;
import com.track.repository.UserRepository;
import com.track.stock.entity.Article;
import com.track.stock.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class PanierService {
    
    private final PanierRepository panierRepository;
    private final PanierItemRepository panierItemRepository;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    
    public PanierDto ajouterArticle(String userId, Long articleId, Integer quantite) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        if (article.getQuantiteStock() < quantite) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        Panier panier = obtenirOuCreerPanier(userId);
        
        PanierItem existingItem = panierItemRepository
                .findByPanierIdAndArticleId(panier.getId(), articleId)
                .orElse(null);
        
        if (existingItem != null) {
            existingItem.setQuantite(existingItem.getQuantite() + quantite);
            panierItemRepository.save(existingItem);
        } else {
            PanierItem newItem = PanierItem.builder()
                    .panier(panier)
                    .article(article)
                    .quantite(quantite)
                    .prixUnitaire(article.getPrixUnitaireTtc())
                    .build();
            panierItemRepository.save(newItem);
        }
        
        return getPanier(userId);
    }
    
    public PanierDto modifierQuantite(String userId, Long articleId, Integer nouvelleQuantite) {
        if (nouvelleQuantite <= 0) {
            return supprimerArticle(userId, articleId);
        }
        
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        if (article.getQuantiteStock() < nouvelleQuantite) {
            throw new RuntimeException("Stock insuffisant");
        }
        
        Panier panier = obtenirOuCreerPanier(userId);
        PanierItem item = panierItemRepository
                .findByPanierIdAndArticleId(panier.getId(), articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé dans le panier"));
        
        item.setQuantite(nouvelleQuantite);
        panierItemRepository.save(item);
        
        return getPanier(userId);
    }
    
    public PanierDto supprimerArticle(String userId, Long articleId) {
        Panier panier = obtenirOuCreerPanier(userId);
        panierItemRepository.deleteByPanierIdAndArticleId(panier.getId(), articleId);
        return getPanier(userId);
    }
    
    public void viderPanier(String userId) {
        Panier panier = panierRepository.findByUserUserId(userId).orElse(null);
        if (panier != null) {
            panier.getItems().clear();
            panierRepository.save(panier);
        }
    }
    
    @Transactional(readOnly = true)
    public PanierDto getPanier(String userId) {
        Panier panier = panierRepository.findByUserUserId(userId).orElse(null);
        if (panier == null) {
            return PanierDto.builder()
                    .userId(userId)
                    .items(List.of())
                    .totalItems(0)
                    .montantTotal(BigDecimal.ZERO)
                    .montantHT(BigDecimal.ZERO)
                    .montantTVA(BigDecimal.ZERO)
                    .build();
        }
        
        return mapToDto(panier);
    }
    
    private Panier obtenirOuCreerPanier(String userId) {
        return panierRepository.findByUserUserId(userId)
                .orElseGet(() -> {
                    var user = userRepository.findByUserId(userId)
                            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
                    
                    Panier nouveauPanier = Panier.builder()
                            .user(user)
                            .build();
                    return panierRepository.save(nouveauPanier);
                });
    }
    
    private PanierDto mapToDto(Panier panier) {
        List<PanierItemDto> itemsDto = panier.getItems().stream()
                .map(this::mapItemToDto)
                .collect(Collectors.toList());
        
        BigDecimal montantTotal = itemsDto.stream()
                .map(PanierItemDto::getSousTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        Integer totalItems = itemsDto.stream()
                .mapToInt(PanierItemDto::getQuantite)
                .sum();
        
        return PanierDto.builder()
                .id(panier.getId())
                .userId(panier.getUser().getUserId())
                .items(itemsDto)
                .totalItems(totalItems)
                .montantTotal(montantTotal)
                .montantHT(montantTotal) // Simplifié pour l'exemple
                .montantTVA(BigDecimal.ZERO)
                .build();
    }
    
    private PanierItemDto mapItemToDto(PanierItem item) {
        BigDecimal sousTotal = item.getPrixUnitaire().multiply(BigDecimal.valueOf(item.getQuantite()));
        
        return PanierItemDto.builder()
                .id(item.getId())
                .articleId(item.getArticle().getId())
                .articleCode(item.getArticle().getCodeArticle())
                .articleNom(item.getArticle().getDesignation())
                .articlePhoto(item.getArticle().getPhoto())
                .quantite(item.getQuantite())
                .prixUnitaire(item.getPrixUnitaire())
                .sousTotal(sousTotal)
                .stockDisponible(item.getArticle().getQuantiteStock())
                .disponible(item.getArticle().getQuantiteStock() >= item.getQuantite())
                .build();
    }
}
package com.track.ecommerce.service;

import com.track.ecommerce.dto.PanierDto;
import com.track.ecommerce.dto.PanierItemDto;
import com.track.ecommerce.entity.Panier;
import com.track.ecommerce.entity.PanierItem;
import com.track.ecommerce.repository.PanierItemRepository;
import com.track.ecommerce.repository.PanierRepository;
import com.track.repository.UserRepository;
import com.track.entity.UserEntity;
import com.track.stock.entity.Article;
import com.track.stock.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class PanierService {
    
    private final PanierRepository panierRepository;
    private final PanierItemRepository panierItemRepository;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    
    public PanierDto ajouterArticle(String userEmail, Long articleId, Integer quantite) {
        if (userEmail == null || userEmail.trim().isEmpty()) {
            throw new RuntimeException("Email utilisateur requis");
        }
        if (articleId == null || articleId <= 0) {
            throw new RuntimeException("ID article invalide");
        }
        if (quantite == null || quantite <= 0) {
            throw new RuntimeException("Quantité invalide");
        }
        
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé avec l'ID: " + articleId));
        
        Panier panier = obtenirOuCreerPanier(userEmail);
        
        PanierItem existingItem = panierItemRepository
                .findByPanierIdAndArticleId(panier.getId(), articleId)
                .orElse(null);
        
        int quantiteTotale = quantite;
        if (existingItem != null) {
            quantiteTotale += existingItem.getQuantite();
        }
        
        // Vérification stock avec quantité totale
        if (article.getQuantiteStock() < quantiteTotale) {
            throw new RuntimeException("Stock insuffisant. Disponible: " + article.getQuantiteStock() + ", Demandé: " + quantiteTotale);
        }
        
        if (existingItem != null) {
            existingItem.setQuantite(quantiteTotale);
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
        
        return getPanier(userEmail);
    }
    
    public PanierDto modifierQuantite(String userEmail, Long articleId, Integer nouvelleQuantite) {
        if (nouvelleQuantite == null || nouvelleQuantite <= 0) {
            return supprimerArticle(userEmail, articleId);
        }
        
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé avec l'ID: " + articleId));
        
        if (article.getQuantiteStock() < nouvelleQuantite) {
            throw new RuntimeException("Stock insuffisant. Disponible: " + article.getQuantiteStock() + ", Demandé: " + nouvelleQuantite);
        }
        
        Panier panier = obtenirOuCreerPanier(userEmail);
        PanierItem item = panierItemRepository
                .findByPanierIdAndArticleId(panier.getId(), articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé dans le panier"));
        
        item.setQuantite(nouvelleQuantite);
        panierItemRepository.save(item);
        
        return getPanier(userEmail);
    }
    
    public PanierDto supprimerArticle(String userEmail, Long articleId) {
        Panier panier = obtenirOuCreerPanier(userEmail);
        panierItemRepository.deleteByPanierIdAndArticleId(panier.getId(), articleId);
        return getPanier(userEmail);
    }
    
    public void viderPanier(String userEmail) {
        Panier panier = panierRepository.findByUserEmail(userEmail).orElse(null);
        if (panier != null) {
            panier.getItems().clear();
            panierRepository.save(panier);
        }
    }
    
    @Transactional(readOnly = true)
    public PanierDto getPanier(String userEmail) {
        Panier panier = panierRepository.findByUserEmail(userEmail).orElse(null);
        if (panier == null) {
            return PanierDto.builder()
                    .userId(userEmail)
                    .items(List.of())
                    .totalItems(0)
                    .montantTotal(BigDecimal.ZERO)
                    .montantHT(BigDecimal.ZERO)
                    .montantTVA(BigDecimal.ZERO)
                    .build();
        }
        
        return mapToDto(panier);
    }
    
    private Panier obtenirOuCreerPanier(String userEmail) {
        if (userEmail == null || userEmail.trim().isEmpty()) {
            throw new RuntimeException("Email utilisateur requis");
        }
        
        try {
            Optional<Panier> existingPanier = panierRepository.findByUserEmail(userEmail);
            
            return existingPanier.orElseGet(() -> {
                Optional<UserEntity> userOpt = userRepository.findByEmail(userEmail);
                
                if (!userOpt.isPresent()) {
                    throw new RuntimeException("Utilisateur non trouvé pour email: " + userEmail);
                }
                
                UserEntity user = userOpt.get();
                
                Panier nouveauPanier = Panier.builder()
                        .user(user)
                        .build();
                        
                return panierRepository.save(nouveauPanier);
            });
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la récupération/création du panier: " + e.getMessage(), e);
        }
    }
    
    private PanierDto mapToDto(Panier panier) {
        List<PanierItemDto> itemsDto = panier.getItems() != null ? 
                panier.getItems().stream()
                        .map(this::mapItemToDto)
                        .collect(Collectors.toList()) : 
                List.of();
        
        BigDecimal montantTotal = itemsDto.stream()
                .map(PanierItemDto::getSousTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        Integer totalItems = itemsDto.stream()
                .mapToInt(PanierItemDto::getQuantite)
                .sum();
        
        // Calculs financiers corrects
        BigDecimal montantHT = itemsDto.stream()
                .map(item -> item.getPrixUnitaire().multiply(BigDecimal.valueOf(item.getQuantite()))
                        .divide(BigDecimal.valueOf(1.20), 2, BigDecimal.ROUND_HALF_UP))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        BigDecimal montantTVA = montantTotal.subtract(montantHT);
        
        return PanierDto.builder()
                .id(panier.getId())
                .userId(panier.getUser().getUserId())
                .items(itemsDto)
                .totalItems(totalItems)
                .montantTotal(montantTotal)
                .montantHT(montantHT)
                .montantTVA(montantTVA)
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
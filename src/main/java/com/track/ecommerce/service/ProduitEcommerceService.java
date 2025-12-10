package com.track.ecommerce.service;

import com.track.ecommerce.dto.ProduitEcommerceDto;
import com.track.ecommerce.entity.ProduitEcommerce;
import com.track.ecommerce.repository.ProduitEcommerceRepository;
import com.track.entity.MerchantProfile;
import com.track.repository.MerchantProfileRepository;
import com.track.stock.entity.Article;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ProduitEcommerceService {
    
    private final ArticleService articleService;
    private final ArticleRepository articleRepository;
    private final MerchantProfileRepository merchantRepository;
    private final ProduitEcommerceRepository produitRepository;
    private final String uploadDir = "uploads/produits/";
    
    @Transactional
    public ProduitEcommerceDto ajouterProduitEnLigne(String merchantUserId, ProduitEcommerceDto produitDto) {
        // Nettoyer l'email (enlever mailto: si présent)
        String cleanEmail = merchantUserId.replace("mailto:", "").trim();
        
        // Récupérer le profil commerçant (support email ou ID)
        MerchantProfile merchant;
        try {
            Long userId = Long.parseLong(cleanEmail);
            merchant = merchantRepository.findByUserId(userId)
                    .orElseThrow(() -> new RuntimeException("Profil commerçant non trouvé"));
        } catch (NumberFormatException e) {
            // Si ce n'est pas un nombre, c'est probablement un email
            merchant = merchantRepository.findByUserEmail(cleanEmail)
                    .orElseThrow(() -> new RuntimeException("Profil commerçant non trouvé pour l'email: " + cleanEmail));
        }
        
        // Créer l'article de base
        var articleDto = com.track.stock.dto.ArticleDto.builder()
                .codeArticle(genererCodeArticle())
                .designation(produitDto.getNom())
                .description(produitDto.getDescription())
                .prixUnitaireHt(produitDto.getPrix())
                .prixUnitaireTtc(produitDto.getPrix().multiply(java.math.BigDecimal.valueOf(1.20)))
                .quantiteStock(produitDto.getQuantite())
                .categorieId(produitDto.getCategorieId())
                .build();
        
        var articleDtoCreated = articleService.createArticle(articleDto);
        
        // Récupérer l'entité Article depuis la base de données
        Article article = articleRepository.findById(articleDtoCreated.getId())
                .orElseThrow(() -> new RuntimeException("Article créé non trouvé"));
        
        // Traiter les images
        List<String> imageUrls = new ArrayList<>();
        if (produitDto.getFichierImages() != null && !produitDto.getFichierImages().isEmpty()) {
            imageUrls = sauvegarderImages(produitDto.getFichierImages());
        }
        
        // Créer le produit e-commerce
        ProduitEcommerce produit = ProduitEcommerce.builder()
                .article(article)
                .merchant(merchant)
                .descriptionLongue(produitDto.getDescriptionLongue())
                .motsCles(produitDto.getMotsCles())
                .images(imageUrls)
                .visibleEnLigne(produitDto.getVisibleEnLigne() != null ? produitDto.getVisibleEnLigne() : false)
                .build();
        
        // Sauvegarder dans la base de données
        ProduitEcommerce produitSaved = produitRepository.save(produit);
        
        // Retourner le DTO
        return mapToDto(produitSaved, merchant);
    }
    
    @Transactional
    public ProduitEcommerceDto modifierVisibilite(String merchantUserId, Long produitId, Boolean visible) {
        // Nettoyer l'email
        String cleanEmail = merchantUserId.replace("mailto:", "").trim();
        
        // Récupérer le produit
        ProduitEcommerce produit = produitRepository.findById(produitId)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        
        // Vérifier que le produit appartient au commerçant
        MerchantProfile merchant;
        try {
            Long userId = Long.parseLong(cleanEmail);
            merchant = merchantRepository.findByUserId(userId)
                    .orElseThrow(() -> new RuntimeException("Profil commerçant non trouvé"));
        } catch (NumberFormatException e) {
            merchant = merchantRepository.findByUserEmail(cleanEmail)
                    .orElseThrow(() -> new RuntimeException("Profil commerçant non trouvé"));
        }
        
        if (!produit.getMerchant().getId().equals(merchant.getId())) {
            throw new RuntimeException("Ce produit ne vous appartient pas");
        }
        
        // Modifier la visibilité
        produit.setVisibleEnLigne(visible);
        ProduitEcommerce produitUpdated = produitRepository.save(produit);
        
        return mapToDto(produitUpdated, merchant);
    }
    
    public List<ProduitEcommerceDto> getProduitsVisibles() {
        List<ProduitEcommerce> produits = produitRepository.findByVisibleEnLigneTrue();
        System.out.println("Produits visibles trouvés: " + produits.size());
        return produits.stream()
                .map(p -> mapToDto(p, p.getMerchant()))
                .toList();
    }
    
    public List<ProduitEcommerceDto> getMesProduits(String merchantUserId) {
        // Nettoyer l'email
        String cleanEmail = merchantUserId.replace("mailto:", "").trim();
        
        // Récupérer le profil commerçant
        MerchantProfile merchant;
        try {
            Long userId = Long.parseLong(cleanEmail);
            merchant = merchantRepository.findByUserId(userId).orElse(null);
        } catch (NumberFormatException e) {
            merchant = merchantRepository.findByUserEmail(cleanEmail).orElse(null);
        }
        
        // Si pas de profil, retourner liste vide
        if (merchant == null) {
            return new ArrayList<>();
        }
        
        // Récupérer tous les produits du commerçant
        List<ProduitEcommerce> produits = produitRepository.findByMerchantId(merchant.getId());
        
        // Convertir en DTO
        final MerchantProfile finalMerchant = merchant;
        return produits.stream()
                .map(p -> mapToDto(p, finalMerchant))
                .toList();
    }
    
    private List<String> sauvegarderImages(List<MultipartFile> fichiers) {
        List<String> urls = new ArrayList<>();
        
        for (MultipartFile fichier : fichiers) {
            if (!fichier.isEmpty()) {
                try {
                    String nomFichier = UUID.randomUUID() + "_" + fichier.getOriginalFilename();
                    Path cheminFichier = Paths.get(uploadDir + nomFichier);
                    
                    // Créer le répertoire s'il n'existe pas
                    Files.createDirectories(cheminFichier.getParent());
                    
                    // Sauvegarder le fichier
                    Files.copy(fichier.getInputStream(), cheminFichier);
                    
                    urls.add("/images/produits/" + nomFichier);
                } catch (IOException e) {
                    throw new RuntimeException("Erreur lors de la sauvegarde de l'image", e);
                }
            }
        }
        
        return urls;
    }
    
    private String genererCodeArticle() {
        return "PROD-" + System.currentTimeMillis();
    }
    

    
    private ProduitEcommerceDto mapToDto(ProduitEcommerce produit, MerchantProfile merchant) {
        return ProduitEcommerceDto.builder()
                .id(produit.getId())
                .nom(produit.getArticle().getDesignation())
                .description(produit.getArticle().getDescription())
                .descriptionLongue(produit.getDescriptionLongue())
                .prix(produit.getArticle().getPrixUnitaireTtc())
                .quantite(produit.getArticle().getQuantiteStock())
                .categorieId(produit.getArticle().getCategorie() != null ? produit.getArticle().getCategorie().getId() : null)
                .categorieName(produit.getArticle().getCategorie() != null ? produit.getArticle().getCategorie().getDesignation() : null)
                .images(produit.getImages())
                .motsCles(produit.getMotsCles())
                .visibleEnLigne(produit.getVisibleEnLigne())
                .nomCommercant(merchant.getUser() != null ? merchant.getUser().getName() : null)
                .nomEntreprise(merchant.getShopName())
                .villeCommercant(merchant.getTown())
                .noteMoyenne(produit.getNotemoyenne())
                .nombreEvaluations(produit.getNombreEvaluations())
                .nombreLikes(produit.getNombreLikes())
                .nombreVues(produit.getNombreVues())
                .nombreVentes(produit.getNombreVentes())
                .build();
    }
}
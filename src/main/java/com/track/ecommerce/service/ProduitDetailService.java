package com.track.ecommerce.service;

import com.track.ecommerce.dto.ProduitDetailDto;
import com.track.ecommerce.entity.EvaluationProduit;
import com.track.ecommerce.entity.ProduitEcommerce;
import com.track.ecommerce.repository.EvaluationProduitRepository;
import com.track.ecommerce.repository.ProduitEcommerceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ProduitDetailService {
    
    private final ProduitEcommerceRepository produitRepository;
    private final EvaluationProduitRepository evaluationRepository;
    
    @Transactional
    public ProduitDetailDto getProduitDetail(Long produitId, String userId) {
        ProduitEcommerce produit = produitRepository.findById(produitId)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        
        if (!produit.getVisibleEnLigne()) {
            throw new RuntimeException("Produit non disponible");
        }
        
        // Incrémenter le nombre de vues
        produit.setNombreVues(produit.getNombreVues() + 1);
        produitRepository.save(produit);
        
        // Récupérer les évaluations
        List<EvaluationProduit> evaluations = evaluationRepository.findByProduitIdOrderByDateEvaluationDesc(produitId);
        
        // Récupérer les produits similaires
        List<ProduitEcommerce> produitsSimilaires = getProduitsSimilaires(produit);
        
        // Vérifier si en favoris (si utilisateur connecté)
        Boolean estFavori = userId != null ? verifierFavori(produitId, userId) : false;
        
        return mapToProduitDetailDto(produit, evaluations, produitsSimilaires, estFavori);
    }
    
    @Transactional
    public void ajouterLike(Long produitId, String userId) {
        ProduitEcommerce produit = produitRepository.findById(produitId)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        
        // Vérifier si déjà liké par cet utilisateur
        // Pour simplifier, on incrémente directement
        produit.setNombreLikes(produit.getNombreLikes() + 1);
        produitRepository.save(produit);
    }
    
    @Transactional
    public void ajouterAuxFavoris(Long produitId, String userId) {
        // Logique d'ajout aux favoris
        // À implémenter avec une table de liaison user-produit
    }
    
    private List<ProduitEcommerce> getProduitsSimilaires(ProduitEcommerce produit) {
        // Récupérer produits de la même catégorie
        return produitRepository.findByCategorieAndVisibleEnLigneTrue(
                produit.getArticle().getCategorie().getId(), produit.getId())
                .stream()
                .limit(6)
                .collect(Collectors.toList());
    }
    
    private Boolean verifierFavori(Long produitId, String userId) {
        // Vérifier si le produit est dans les favoris de l'utilisateur
        return false; // À implémenter
    }
    
    private ProduitDetailDto mapToProduitDetailDto(ProduitEcommerce produit, 
                                                  List<EvaluationProduit> evaluations,
                                                  List<ProduitEcommerce> similaires,
                                                  Boolean favori) {
        
        var article = produit.getArticle();
        var merchant = produit.getMerchant();
        
        // Mapper les évaluations
        List<ProduitDetailDto.EvaluationDto> evaluationsDto = evaluations.stream()
                .map(eval -> ProduitDetailDto.EvaluationDto.builder()
                        .id(eval.getId())
                        .nomClient(masquerNomClient(eval.getClient().getName()))
                        .note(eval.getNote())
                        .commentaire(eval.getCommentaire())
                        .dateEvaluation(eval.getDateEvaluation())
                        .recommande(eval.getRecommande())
                        .build())
                .collect(Collectors.toList());
        
        // Mapper les produits similaires
        List<ProduitDetailDto.ProduitResumeDto> similairesDto = similaires.stream()
                .map(p -> ProduitDetailDto.ProduitResumeDto.builder()
                        .id(p.getId())
                        .nom(p.getArticle().getDesignation())
                        .prix(p.getArticle().getPrixUnitaireTtc())
                        .imagePrincipale(p.getImages().isEmpty() ? null : p.getImages().get(0))
                        .noteMoyenne(p.getNotemoyenne())
                        .nombreEvaluations(p.getNombreEvaluations())
                        .build())
                .collect(Collectors.toList());
        
        // Informations commerçant
        var commercantInfo = ProduitDetailDto.CommerçantInfo.builder()
                .nom(merchant.getUser().getName())
                .entreprise(merchant.getShopName())
                .ville(merchant.getTown())
                .telephone(merchant.getPhoneNumber())
                .adresse(merchant.getAddress())
                .nombreVentes(produit.getNombreVentes())
                .build();
        
        return ProduitDetailDto.builder()
                .id(produit.getId())
                .nom(article.getDesignation())
                .description(article.getDescription())
                .descriptionLongue(produit.getDescriptionLongue())
                .prix(article.getPrixUnitaireTtc())
                .quantiteDisponible(article.getStockDisponible())
                .codeArticle(article.getCodeArticle())
                .images(produit.getImages())
                .imageprincipale(produit.getImages().isEmpty() ? null : produit.getImages().get(0))
                .categorieId(article.getCategorie().getId())
                .categorieNom(article.getCategorie().getDesignation())
                .commercant(commercantInfo)
                .noteMoyenne(produit.getNotemoyenne())
                .nombreEvaluations(produit.getNombreEvaluations())
                .nombreLikes(produit.getNombreLikes())
                .nombreVues(produit.getNombreVues())
                .nombreVentes(produit.getNombreVentes())
                .evaluations(evaluationsDto)
                .produitsSimilaires(similairesDto)
                .motsCles(produit.getMotsCles())
                .dateMiseEnLigne(produit.getDateMiseEnLigne())
                .enStock(article.getQuantiteStock() > 0)
                .favori(favori)
                .build();
    }
    
    private String masquerNomClient(String nom) {
        if (nom == null || nom.length() <= 2) return nom;
        return nom.substring(0, 1) + "***" + nom.substring(nom.length() - 1);
    }
}
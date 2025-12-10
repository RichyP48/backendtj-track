package com.track.ecommerce.controller;

import com.track.dto.ApiResponse;
import com.track.ecommerce.dto.ProduitEcommerceDto;
import com.track.ecommerce.service.ProduitEcommerceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/merchant/produits")
@RequiredArgsConstructor
public class MerchantProductController {
    
    private final ProduitEcommerceService produitService;
    
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<ProduitEcommerceDto>> ajouterProduit(
            @RequestParam("nom") String nom,
            @RequestParam("description") String description,
            @RequestParam(value = "descriptionLongue", required = false) String descriptionLongue,
            @RequestParam("prix") String prix,
            @RequestParam("quantite") String quantite,
            @RequestParam("categorieId") String categorieId,
            @RequestParam(value = "visibleEnLigne", defaultValue = "true") String visibleEnLigne,
            @RequestParam(value = "images", required = false) List<MultipartFile> images,
            @RequestParam("merchantUserId") String merchantUserId) {
        
        try {
            ProduitEcommerceDto produitDto = new ProduitEcommerceDto();
            produitDto.setNom(nom);
            produitDto.setDescription(description);
            produitDto.setDescriptionLongue(descriptionLongue);
            produitDto.setPrix(new java.math.BigDecimal(prix));
            produitDto.setQuantite(Integer.parseInt(quantite));
            produitDto.setCategorieId(Long.parseLong(categorieId));
            produitDto.setVisibleEnLigne(Boolean.parseBoolean(visibleEnLigne));
            produitDto.setFichierImages(images);
            
            ProduitEcommerceDto produit = produitService.ajouterProduitEnLigne(merchantUserId, produitDto);
            return ResponseEntity.ok(ApiResponse.success("Produit ajouté avec succès", produit));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(ApiResponse.error("Erreur: " + e.getMessage()));
        }
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<ProduitEcommerceDto>>> getMesProduits(
            @CurrentSecurityContext(expression = "authentication?.name") String merchantUserId) {
        
        List<ProduitEcommerceDto> produits = produitService.getMesProduits(merchantUserId);
        return ResponseEntity.ok(ApiResponse.success("Produits récupérés", produits));
    }
    
    @PutMapping("/{id}/visibilite")
    public ResponseEntity<ApiResponse<ProduitEcommerceDto>> modifierVisibilite(
            @PathVariable Long id,
            @RequestParam Boolean visible,
            @CurrentSecurityContext(expression = "authentication?.name") String merchantUserId) {
        
        try {
            ProduitEcommerceDto produit = produitService.modifierVisibilite(merchantUserId, id, visible);
            String message = visible ? "Produit mis en ligne" : "Produit retiré de la vente";
            return ResponseEntity.ok(ApiResponse.success(message, produit));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
    
    @PostMapping("/{id}/images")
    public ResponseEntity<ApiResponse<Void>> ajouterImages(
            @PathVariable Long id,
            @RequestParam("images") List<MultipartFile> images,
            @CurrentSecurityContext(expression = "authentication?.name") String merchantUserId) {
        
        try {
            // Logique d'ajout d'images supplémentaires
            return ResponseEntity.ok(ApiResponse.success("Images ajoutées", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        }
    }
}
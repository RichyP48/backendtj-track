package com.track.stock.service;

import com.track.stock.dto.MouvementStockDto;
import com.track.stock.entity.Article;
import com.track.stock.entity.MouvementStock;
import com.track.stock.repository.ArticleRepository;
import com.track.stock.repository.MouvementStockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MouvementStockService {
    
    private final MouvementStockRepository mouvementStockRepository;
    private final ArticleRepository articleRepository;
    
    public void enregistrerMouvement(Long articleId, MouvementStock.TypeMouvement typeMouvement, 
                                   Integer quantite, String motif, String utilisateur) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));
        
        MouvementStock mouvement = MouvementStock.builder()
                .article(article)
                .typeMouvement(typeMouvement)
                .quantite(quantite)
                .motif(motif)
                .createdBy(utilisateur)
                .dateMouvement(LocalDateTime.now())
                .build();
        
        mouvementStockRepository.save(mouvement);
    }
    
    @Transactional(readOnly = true)
    public List<MouvementStockDto> getMouvementsByArticle(Long articleId) {
        return mouvementStockRepository.findByArticleIdOrderByDateMouvementDesc(articleId)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<MouvementStockDto> getMouvementsByPeriode(LocalDateTime dateDebut, LocalDateTime dateFin) {
        return mouvementStockRepository.findByDateMouvementBetween(dateDebut, dateFin)
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<MouvementStockDto> getAllMouvements() {
        return mouvementStockRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    private MouvementStockDto mapToDto(MouvementStock mouvement) {
        return MouvementStockDto.builder()
                .id(mouvement.getId())
                .articleId(mouvement.getArticle().getId())
                .articleDesignation(mouvement.getArticle().getDesignation())
                .typeMouvement(mouvement.getTypeMouvement())
                .quantite(mouvement.getQuantite())
                .prixUnitaire(mouvement.getPrixUnitaire())
                .motif(mouvement.getMotif())
                .dateMouvement(mouvement.getDateMouvement())
                .createdBy(mouvement.getCreatedBy())
                .build();
    }
}
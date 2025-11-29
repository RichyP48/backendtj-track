package com.track.stock.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategorieDto {
    
    private Long id;
    private String code;
    private String designation;
    private String description;
    private Integer nombreArticles;
}
package com.track.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.track.stock.controller.ArticleController;
import com.track.stock.service.ArticleService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ArticleController.class)
class FrontendIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ArticleService articleService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @WithMockUser(roles = "ADMIN")
    void testStockAdjustment_ReturnsStandardizedResponse() throws Exception {
        var request = new ArticleController.StockAdjustmentRequest();
        request.setQuantite(10);
        request.setMotif("Test adjustment");

        mockMvc.perform(post("/stock/articles/1/ajuster-stock")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.message").value("Stock ajusté avec succès"));
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    void testGetAllArticles_ReturnsConsistentFormat() throws Exception {
        mockMvc.perform(get("/stock/articles"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}
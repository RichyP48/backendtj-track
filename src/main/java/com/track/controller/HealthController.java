package com.track.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
            "status", "UP",
            "application", "TJ-Track API",
            "version", "1.0.0",
            "timestamp", System.currentTimeMillis()
        ));
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> root() {
        return ResponseEntity.ok(Map.of(
            "message", "TJ-Track E-commerce API",
            "endpoints", Map.of(
                "health", "/api/v1.0/health",
                "test", "/api/v1.0/test-public",
                "login", "/api/v1.0/login",
                "catalogue", "/api/v1.0/catalogue/articles"
            )
        ));
    }
}
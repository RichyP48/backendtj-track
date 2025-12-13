package com.track.controller;

import com.track.dto.analytics.*;
import com.track.service.AdminAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/analytics")
@CrossOrigin(origins = "*")
public class AdminAnalyticsController {

    @Autowired
    private AdminAnalyticsService analyticsService;

    @GetMapping("/revenue")
    public ResponseEntity<List<RevenueAnalyticsDto>> getRevenueAnalytics(
            @RequestParam(defaultValue = "7d") String timeRange) {
        return ResponseEntity.ok(analyticsService.getRevenueAnalytics(timeRange));
    }

    @GetMapping("/top-products")
    public ResponseEntity<List<TopProductDto>> getTopProducts(
            @RequestParam(defaultValue = "10") int limit) {
        return ResponseEntity.ok(analyticsService.getTopProducts(limit));
    }

    @GetMapping("/orders")
    public ResponseEntity<OrderAnalyticsDto> getOrderAnalytics() {
        return ResponseEntity.ok(analyticsService.getOrderAnalytics());
    }

    @GetMapping("/users")
    public ResponseEntity<UserAnalyticsDto> getUserAnalytics() {
        return ResponseEntity.ok(analyticsService.getUserAnalytics());
    }

    @GetMapping("/performance")
    public ResponseEntity<PerformanceMetricsDto> getPerformanceMetrics() {
        return ResponseEntity.ok(analyticsService.getPerformanceMetrics());
    }
}
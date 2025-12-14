package com.track.controller;

import com.track.service.AdminGlobalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminGlobalController {

    @Autowired
    private AdminGlobalService globalService;

    @GetMapping("/global-stats")
    public ResponseEntity<Map<String, Object>> getGlobalStats() {
        return ResponseEntity.ok(globalService.getGlobalStats());
    }

    @GetMapping("/orders-by-merchant")
    public ResponseEntity<List<Map<String, Object>>> getOrdersByMerchant() {
        return ResponseEntity.ok(globalService.getOrdersByMerchant());
    }

    @GetMapping("/orders-by-client")
    public ResponseEntity<List<Map<String, Object>>> getOrdersByClient() {
        return ResponseEntity.ok(globalService.getOrdersByClient());
    }

    @GetMapping("/stock-by-merchant")
    public ResponseEntity<List<Map<String, Object>>> getStockByMerchant() {
        return ResponseEntity.ok(globalService.getStockByMerchant());
    }

    @GetMapping("/supplier-stats")
    public ResponseEntity<List<Map<String, Object>>> getSupplierStats() {
        return ResponseEntity.ok(globalService.getSupplierStats());
    }
}
package com.track.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestRegistrationController {
    
    @GetMapping("/registration-info")
    public Map<String, Object> getRegistrationInfo() {
        Map<String, Object> info = new HashMap<>();
        info.put("endpoint", "/api/v1.0/register");
        info.put("method", "POST");
        info.put("requiredFields", new String[]{"name", "email", "password", "role"});
        info.put("validation", Map.of(
            "name", "2-50 characters",
            "email", "Valid email format",
            "password", "Minimum 8 characters",
            "role", "CLIENT, COMMERCANT, FOURNISSEUR, LIVREUR, ADMIN, MANAGER",
            "merchantInfo", "Required for COMMERCANT: shopName, address, phoneNumber, latitude, longitude",
            "supplierInfo", "Required for FOURNISSEUR: shopName, address, phoneNumber, latitude, longitude",
            "deliveryInfo", "Required for LIVREUR: address, phoneNumber, latitude, longitude (no shopName)"
        ));
        info.put("response", "User profile + verification message");
        return info;
    }
}
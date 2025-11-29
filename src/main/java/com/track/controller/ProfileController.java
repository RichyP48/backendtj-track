package com.track.controller;

import com.track.dto.ProfileRequest;
import com.track.dto.ProfileResponse;
import com.track.service.EmailService;
import com.track.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final EmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody ProfileRequest request) {
        try {
            log.info("Registration attempt for email: {}", request.getEmail());
            ProfileResponse response = profileService.createProfile(request);
            
            Map<String, Object> result = new HashMap<>();
            result.put("user", response);
            boolean isExistingUser = response.getIsAccountVerified() != null && response.getIsAccountVerified();
            
            if (!isExistingUser) {
                try {
                    profileService.sendOtp(response.getEmail());
                    log.info("OTP sent successfully to: {}", response.getEmail());
                } catch (Exception e) {
                    log.error("Failed to send OTP during registration for {}: {}", response.getEmail(), e.getMessage(), e);
                    // Still continue with registration but log the full error
                }
            }
            boolean needsApproval = response.getIsApproved() == null || !response.getIsApproved();
            
            String message;
            if (isExistingUser) {
                message = switch (request.getRole()) {
                    case COMMERCANT -> "New COMMERCANT role added successfully. Merchant information saved.";
                    case FOURNISSEUR -> "New FOURNISSEUR role added successfully. Supplier information saved.";
                    case LIVREUR -> "New LIVREUR role added successfully. Delivery information saved.";
                    case CLIENT -> "New CLIENT role added successfully. Client information saved.";
                    default -> "New role added successfully.";
                };
            } else {
                message = switch (request.getRole()) {
                    case COMMERCANT -> "Registration successful. Merchant information saved. Please check your email for verification.";
                    case FOURNISSEUR -> "Registration successful. Supplier information saved. Please check your email for verification.";
                    case LIVREUR -> "Registration successful. Delivery information saved. Please check your email for verification.";
                    case CLIENT -> "Registration successful. Client information saved. Please check your email for verification.";
                    default -> "Registration successful. Please check your email for verification.";
                };
                if (needsApproval) {
                    message += " Account pending admin approval.";
                }
            }
            
            result.put("message", message);
            result.put("requiresVerification", !isExistingUser);
            result.put("requiresApproval", needsApproval);
            
            log.info("Registration successful for: {}", request.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
            
        } catch (ResponseStatusException e) {
            log.error("Registration failed for {}: {}", request.getEmail(), e.getReason());
            Map<String, Object> error = new HashMap<>();
            error.put("error", true);
            error.put("message", e.getReason());
            return ResponseEntity.status(e.getStatusCode()).body(error);
        } catch (Exception e) {
            log.error("Registration failed for {}: {}", request.getEmail(), e.getMessage());
            Map<String, Object> error = new HashMap<>();
            error.put("error", true);
            error.put("message", "Registration failed. Please try again.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    @GetMapping("/test")
    public String test() {
        return "test by ....";
    }
    @GetMapping("/profile")
    public ProfileResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email) {
        return profileService.getProfile(email);
    }
}

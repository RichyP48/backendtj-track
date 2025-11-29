package com.track.controller;

import com.track.dto.ProfileResponse;
import com.track.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
public class AdminController {
    
    private final ProfileService profileService;

    @GetMapping("/pending-users")
    public ResponseEntity<List<ProfileResponse>> getPendingUsers() {
        return ResponseEntity.ok(profileService.getPendingUsers());
    }

    @GetMapping("/all-users")
    public ResponseEntity<List<ProfileResponse>> getAllUsers() {
        return ResponseEntity.ok(profileService.getAllUsers());
    }

    @PostMapping("/approve-user/{userId}")
    public ResponseEntity<?> approveUser(
            @PathVariable String userId,
            @CurrentSecurityContext(expression = "authentication?.name") String approvedBy) {
        try {
            profileService.approveUser(userId, true, approvedBy);
            return ResponseEntity.ok(Map.of("success", true, "message", "User approved successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }

    @PostMapping("/reject-user/{userId}")
    public ResponseEntity<?> rejectUser(
            @PathVariable String userId,
            @CurrentSecurityContext(expression = "authentication?.name") String rejectedBy) {
        try {
            profileService.approveUser(userId, false, rejectedBy);
            return ResponseEntity.ok(Map.of("success", true, "message", "User rejected successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }

    @GetMapping("/test")
    public ResponseEntity<?> testEndpoint() {
        try {
            List<ProfileResponse> users = profileService.getAllUsers();
            return ResponseEntity.ok(Map.of(
                "success", true, 
                "message", "Admin endpoint working",
                "userCount", users.size(),
                "users", users
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
}
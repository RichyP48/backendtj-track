package com.track.controller;

import com.track.dto.ProfileResponse;
import com.track.service.ProfileService;
import com.track.stock.service.ArticleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
public class AdminController {
    
    private final ProfileService profileService;
    private final ArticleService articleService;

    @GetMapping("/pending-users")
    public ResponseEntity<List<ProfileResponse>> getPendingUsers() {
        return ResponseEntity.ok(profileService.getPendingUsers());
    }

    @GetMapping(" /all-users")
    public ResponseEntity<List<ProfileResponse>> getAllUsers() {
        return ResponseEntity.ok(profileService.getAllUsers());
    }

    @PostMapping("/approve-user/{userIdOrEmail}")
    public ResponseEntity<?> approveUser(
            @PathVariable String userIdOrEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String approvedBy) {
        try {
            log.info("Admin {} attempting to approve user {}", approvedBy, userIdOrEmail);
            profileService.approveUser(userIdOrEmail, true, approvedBy);
            return ResponseEntity.ok(Map.of("success", true, "message", "User approved successfully"));
        } catch (Exception e) {
            log.error("Failed to approve user {}: {}", userIdOrEmail, e.getMessage(), e);
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }

    @PostMapping("/reject-user/{userIdOrEmail}")
    public ResponseEntity<?> rejectUser(
            @PathVariable String userIdOrEmail,
            @CurrentSecurityContext(expression = "authentication?.name") String rejectedBy) {
        try {
            profileService.approveUser(userIdOrEmail, false, rejectedBy);
            return ResponseEntity.ok(Map.of("success", true, "message", "User rejected successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }

    @GetMapping("/test")
    public ResponseEntity<?> testEndpoint() {
        try {
            List<ProfileResponse> allUsers = profileService.getAllUsers();
            List<ProfileResponse> pendingUsers = profileService.getPendingUsers();
            
            return ResponseEntity.ok(Map.of(
                "success", true, 
                "message", "Admin endpoint working",
                "totalUsers", allUsers.size(),
                "pendingUsers", pendingUsers.size(),
                "allUsers", allUsers,
                "pendingUsersList", pendingUsers
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/debug-users")
    public ResponseEntity<?> debugUsers() {
        try {
            List<ProfileResponse> users = profileService.getAllUsers();
            return ResponseEntity.ok(Map.of(
                "success", true,
                "users", users.stream().map(user -> Map.of(
                    "userId", user.getUserId(),
                    "name", user.getName(),
                    "email", user.getEmail(),
                    "isVerified", user.getIsAccountVerified(),
                    "isApproved", user.getIsApproved(),
                    "roles", user.getRoles()
                )).collect(java.util.stream.Collectors.toList())
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @PostMapping("/reset-approval/{userId}")
    public ResponseEntity<?> resetUserApproval(@PathVariable String userId) {
        try {
            profileService.resetUserApproval(userId);
            return ResponseEntity.ok(Map.of("success", true, "message", "User approval status reset to pending"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/user-stats")
    public ResponseEntity<?> getUserStats() {
        try {
            Map<String, Object> stats = profileService.getUserStats();
            return ResponseEntity.ok(stats);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/stock/statistiques")
    public ResponseEntity<?> getStatistiquesStock() {
        try {
            Map<String, Object> stats = Map.of(
                "totalArticles", articleService.getAllArticles().size(),
                "totalQuantiteStock", articleService.getTotalQuantiteStockGlobal(),
                "valeurTotaleStock", articleService.getValeurTotaleStockGlobal(),
                "articlesStockFaible", articleService.getArticlesStockFaibleGlobal()
            );
            return ResponseEntity.ok(Map.of("success", true, "data", stats));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/articles")
    public ResponseEntity<?> getTousLesArticles() {
        try {
            return ResponseEntity.ok(Map.of("success", true, "data", articleService.getAllArticles()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
}
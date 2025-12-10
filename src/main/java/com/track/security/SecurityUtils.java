package com.track.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class SecurityUtils {
    
    public static String getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null ? auth.getName() : null;
    }
    
    public static boolean isCurrentUser(String userId) {
        return getCurrentUserId().equals(userId);
    }
    
    public static void validateUserAccess(String userId) {
        if (!isCurrentUser(userId)) {
            throw new SecurityException("Accès non autorisé");
        }
    }
}
package com.track.controller;

import com.track.dto.AuthRequest;
import com.track.dto.AuthResponse;
import com.track.dto.ResetPasswordRequest;
import com.track.jwt.JwtUtil;
import com.track.service.ProfileService;
import com.track.service.UserDetailsServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtUtil jwtUtil;
    private final ProfileService profileService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try{
            log.info("Attempting authentication for email: {}", request.getEmail());
            authenticate(request.getEmail(), request.getPassword());
            log.info("Credential authentication successful for: {}", request.getEmail());
            
             var user = profileService.getProfile(request.getEmail());
             log.info("User verification status: {}", user.getIsAccountVerified());
             // Send OTP only for unverified accounts
             if (user.getIsAccountVerified() == null || !user.getIsAccountVerified()) {
                 try {
                     log.info("User {} has valid credentials but account not verified - sending OTP", request.getEmail());
                     profileService.sendOtp(request.getEmail());
                     log.info("OTP sent successfully to unverified user: {}", request.getEmail());
                 } catch (Exception e) {
                     log.error("Failed to send OTP to unverified user {}: {}", request.getEmail(), e.getMessage(), e);
                 }
                 Map<String, Object> response = new HashMap<>();
                 response.put("requiresVerification", true);
                 response.put("message", "Account requires email verification. OTP sent to your email.");
                 response.put("email", request.getEmail());
                 return ResponseEntity.ok(response);
             }
            

            
            final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
            final String jwtToken = jwtUtil.generateToken(userDetails);
            var userProfile = profileService.getProfile(request.getEmail());
            
            ResponseCookie cookie = ResponseCookie.from("jwt",jwtToken)
                    .httpOnly(true)
                    .path("/")
                    .maxAge(Duration.ofDays(1))
                    .sameSite("Strict")
                    .build();
            
            Map<String, Object> response = new HashMap<>();
            response.put("email", request.getEmail());
            response.put("token", jwtToken);
            response.put("name", userProfile.getName());
            response.put("roles", userProfile.getRoles());
            
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
                    .body(response);
        }catch (BadCredentialsException e){
            log.error("Bad credentials for email: {}", request.getEmail());
            Map<String, Object> errors = new HashMap<>();
            errors.put("errors", true);
            errors.put("message", "Invalid email or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }catch (DisabledException e){
            log.error("Account disabled for email: {}", request.getEmail());
            Map<String, Object> errors = new HashMap<>();
            errors.put("errors", true);
            errors.put("message", "Account user is disabled");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errors);
        }catch (Exception e){
            log.error("Authorization failed: {}", e.getMessage(), e);
            Map<String, Object> errors = new HashMap<>();
            errors.put("errors", true);
            errors.put("message", "Authorization failed");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errors);
        }
    }

    private void authenticate(String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
    }
    @GetMapping("/is-authenticated")
    public ResponseEntity<Map<String, Object>> isAuthenticated(
            @CurrentSecurityContext(
                    expression = "authentication?.name") String email
    ) {
        Map<String, Object> response = new HashMap<>();
        if (email != null) {
            response.put("authenticated", true);
            response.put("email", email);
        } else {
            response.put("authenticated", false);
            response.put("message", "User is not authenticated");
        }
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/test-public")
    public ResponseEntity<Map<String, Object>> testPublic() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Public endpoint working");
        response.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(response);
    }
    @PostMapping("/send-reset-otp")
    public void sendResetOtp(@RequestParam String email) {
        try {
            profileService.sendResetOtp(email);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
    @PostMapping("/reset-password")
    public void resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        try{
            profileService.resetPassword(request.getEmail(),request.getOtp(), request.getNewPassword());
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
    @PostMapping("/send-otp")
    public void sendVerifyOtp(@CurrentSecurityContext(expression ="authentication?.name") String email){
        try{
            profileService.sendOtp(email);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
    @PostMapping("/register-otp")
    public ResponseEntity<?> verifyRegistration(@RequestBody Map<String, Object> request){
        if(request.get("otp") == null || request.get("email") == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email and OTP required");
        }
        try{
            String email = request.get("email").toString();
            String otp = request.get("otp").toString();
            profileService.verifyOtp(email, otp);
            return ResponseEntity.ok(Map.of("success", true, "message", "Registration verified successfully"));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
    
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, Object> request) {
        log.info("Verify OTP request received: {}", request);
        
        if (request.get("otp") == null || request.get("email") == null) {
            log.error("Missing required fields - email: {}, otp: {}", request.get("email"), request.get("otp"));
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email and OTP required");
        }
        try {
            String email = request.get("email").toString();
            String otp = request.get("otp").toString();
            log.info("Attempting OTP verification for email: {}", email);
            profileService.verifyOtp(email, otp);
            log.info("OTP verification successful for email: {}", email);
            
            final UserDetails userDetails = userDetailsService.loadUserByUsername(email);
            final String jwtToken = jwtUtil.generateToken(userDetails);
            var userProfile = profileService.getProfile(email);
            
            ResponseCookie cookie = ResponseCookie.from("jwt", jwtToken)
                    .httpOnly(true)
                    .path("/")
                    .maxAge(Duration.ofDays(1))
                    .sameSite("Strict")
                    .build();
            
            Map<String, Object> response = new HashMap<>();
            response.put("email", email);
            response.put("token", jwtToken);
            response.put("name", userProfile.getName());
            response.put("roles", userProfile.getRoles());
            
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(response);
        } catch (Exception e) {
            log.error("OTP verification failed for email: {}, error: {}", request.get("email"), e.getMessage(), e);
            return ResponseEntity.badRequest().body(Map.of("error", true, "message", e.getMessage()));
        }
    }
}

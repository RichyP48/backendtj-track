package com.track.service;

import com.track.dto.ProfileRequest;
import com.track.dto.ProfileResponse;
import com.track.entity.ClientProfile;
import com.track.entity.DeliveryProfile;
import com.track.entity.MerchantProfile;
import com.track.entity.Roles;
import com.track.entity.SupplierProfile;
import com.track.entity.UserEntity;
import com.track.enums.UserRole;
import com.track.repository.ClientProfileRepository;
import com.track.repository.DeliveryProfileRepository;
import com.track.repository.MerchantProfileRepository;
import com.track.repository.RoleRepository;
import com.track.repository.SupplierProfileRepository;
import com.track.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ClientProfileRepository clientProfileRepository;
    private final MerchantProfileRepository merchantProfileRepository;
    private final SupplierProfileRepository supplierProfileRepository;
    private final DeliveryProfileRepository deliveryProfileRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    @Override
    public ProfileResponse createProfile(ProfileRequest request){
        UserEntity existingUser = userRepository.findByEmail(request.getEmail()).orElse(null);
        
        if(existingUser != null) {
            // Check if user already has this role
            boolean hasRole = existingUser.getRoles().stream()
                    .anyMatch(role -> role.getName().equals(request.getRole().name()));
            
            if(hasRole) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, 
                    "User already has " + request.getRole().name() + " role");
            }
            
            // Add new role to existing user
            Roles newRole = roleRepository.findByName(request.getRole().name())
                    .orElseGet(() -> {
                        Roles role = Roles.builder()
                                .name(request.getRole().name())
                                .build();
                        return roleRepository.save(role);
                    });
            
            existingUser.getRoles().add(newRole);
            existingUser = userRepository.save(existingUser);
            
            // Save role-specific profile
            saveRoleSpecificProfile(existingUser, request);
            
            return convertToProfileResponse(existingUser);
        }
        
        // Validate role-specific info only for roles that require it
        if(request.getRole() == UserRole.CLIENT && request.getClientInfo() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Client information is required for CLIENT role");
        }
        if(request.getRole() == UserRole.COMMERCANT && request.getMerchantInfo() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Merchant information is required for COMMERCANT role");
        }
        if(request.getRole() == UserRole.FOURNISSEUR && request.getSupplierInfo() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Supplier information is required for FOURNISSEUR role");
        }
        if(request.getRole() == UserRole.LIVREUR && request.getDeliveryInfo() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Delivery information is required for LIVREUR role");
        }
        // ADMIN and MANAGER roles don't require additional info
        
        // Create new user
        UserEntity newProfile = convertToUserEntity(request);
        newProfile = userRepository.save(newProfile);
        
        // Save role-specific profile
        saveRoleSpecificProfile(newProfile, request);
        
        return convertToProfileResponse(newProfile);
    }

    @Override
    public ProfileResponse getProfile(String email) {
        UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: "+email));
        return  convertToProfileResponse(existingUser);
    }

    @Override
    public void sendResetOtp(String email) {
        UserEntity existingEntity = userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found: "+email));
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100000, 1000000));
        long expiryTime = System.currentTimeMillis()+(15*60*1000);

        existingEntity.setResetOtp(otp);
        existingEntity.setResetOtpExpireAt(expiryTime);
        userRepository.save(existingEntity);
        try{
            emailService.sendResetOtpEmail(existingEntity.getEmail(), otp);

        }catch (Exception e){
            throw new RuntimeException("Unable to send reset otp");
        }
    }

    @Override
    public void resetPassword(String email, String otp, String newPassword) {
        UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found: "+email));
        if(existingUser.getResetOtp() == null || !existingUser.getResetOtp().equals(otp)){
            throw new RuntimeException("Invalid reset otp");
        }
        if(existingUser.getResetOtpExpireAt() < System.currentTimeMillis()){
            throw new RuntimeException("otp expired");
        }
        existingUser.setPassword(passwordEncoder.encode(newPassword));
        existingUser.setResetOtp(null);
        existingUser.setResetOtpExpireAt(0L);
        userRepository.save(existingUser);
    }

    @Override
    public void sendOtp(String email) {
        UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found: "+email));
        
        log.info("Sending OTP to {} - Current verification status: {}", email, existingUser.getIsAccountVerified());
        
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100000, 1000000));
        long expiryTime = System.currentTimeMillis()+(24 * 60 * 60 * 1000);

        existingUser.setVerifyOtp(otp);
        existingUser.setVerifyOtpExpireAt(expiryTime);
        userRepository.save(existingUser);

        try{
            log.info("Attempting to send OTP {} to {}", otp, email);
            emailService.sendOtpEmail(existingUser.getEmail(), otp);
            log.info("OTP email sent successfully to {}", email);
        }catch (Exception e){
            log.error("Failed to send OTP to {}: {}", email, e.getMessage(), e);
            throw new RuntimeException("Unable to send OTP email: " + e.getMessage(), e);
        }
    }

    @Override
    public void verifyOtp(String email, String otp) {
        UserEntity existingUser = userRepository.findByEmail(email)
                .orElseThrow(()->new UsernameNotFoundException("User not found: "+email));
        if(existingUser.getVerifyOtp() == null || !existingUser.getVerifyOtp().equals(otp)){
            throw new RuntimeException("Invalid verification otp");
        }
        if(existingUser.getVerifyOtpExpireAt() < System.currentTimeMillis()){
            throw new RuntimeException("otp expired");
        }
        
        boolean wasUnverified = existingUser.getIsAccountVerified() == null || !existingUser.getIsAccountVerified();
        
        existingUser.setIsAccountVerified(true);
        existingUser.setVerifyOtp(null);
        existingUser.setVerifyOtpExpireAt(0L);
        userRepository.save(existingUser);
        
        // Only send registration pending email for newly registered users
        if (wasUnverified && (existingUser.getIsApproved() == null || !existingUser.getIsApproved())) {
            try {
                emailService.sendRegistrationPendingEmail(existingUser.getEmail(), existingUser.getName());
                
                // Notify admin about new registration
                String adminEmail = "richardmogou99@gmail.com"; // Use real admin email
                String userRoles = existingUser.getRoles().stream()
                    .map(role -> role.getName())
                    .collect(java.util.stream.Collectors.joining(", "));
                emailService.sendAdminNotificationEmail(adminEmail, existingUser.getName(), 
                    existingUser.getEmail(), userRoles);
            } catch (Exception e) {
                log.error("Failed to send registration pending email to {}: {}", email, e.getMessage());
            }
        }
    }

    @Override
    public void approveUser(String userId, Boolean approved, String approvedBy) {
        UserEntity user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        user.setIsApproved(approved);
        user.setApprovedBy(approvedBy);
        user.setApprovedAt(approved ? new java.sql.Timestamp(System.currentTimeMillis()) : null);
        userRepository.save(user);
        
        // Send approval/rejection email
        if (approved) {
            emailService.sendApprovalEmail(user.getEmail(), user.getName());
        } else {
            emailService.sendRejectionEmail(user.getEmail(), user.getName());
        }
    }

    @Override
    public java.util.List<ProfileResponse> getPendingUsers() {
        return userRepository.findByIsApprovedIsNull()
                .stream()
                .filter(user -> user.getIsAccountVerified() != null && user.getIsAccountVerified())
                .map(this::convertToProfileResponse)
                .collect(java.util.stream.Collectors.toList());
    }

    @Override
    public java.util.List<ProfileResponse> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::convertToProfileResponse)
                .collect(java.util.stream.Collectors.toList());
    }
    
    private void saveMerchantProfile(UserEntity user, com.track.dto.MerchantInfo merchantInfo) {
        MerchantProfile profile = MerchantProfile.builder()
                .user(user)
                .shopName(merchantInfo.getShopName())
                .town(merchantInfo.getTown())
                .address(merchantInfo.getAddress())
                .phoneNumber(merchantInfo.getPhoneNumber())
                .latitude(merchantInfo.getLatitude())
                .longitude(merchantInfo.getLongitude())
                .build();
        merchantProfileRepository.save(profile);
    }
    
    private void saveSupplierProfile(UserEntity user, com.track.dto.SupplierInfo supplierInfo) {
        SupplierProfile profile = SupplierProfile.builder()
                .user(user)
                .shopName(supplierInfo.getShopName())
                .town(supplierInfo.getTown())
                .address(supplierInfo.getAddress())
                .phoneNumber(supplierInfo.getPhoneNumber())
                .latitude(supplierInfo.getLatitude())
                .longitude(supplierInfo.getLongitude())
                .build();
        supplierProfileRepository.save(profile);
    }
    
    private void saveDeliveryProfile(UserEntity user, com.track.dto.DeliveryInfo deliveryInfo) {
        DeliveryProfile profile = DeliveryProfile.builder()
                .user(user)
                .town(deliveryInfo.getTown())
                .address(deliveryInfo.getAddress())
                .phoneNumber(deliveryInfo.getPhoneNumber())
                .latitude(deliveryInfo.getLatitude())
                .longitude(deliveryInfo.getLongitude())
                .build();
        deliveryProfileRepository.save(profile);
    }
    
    private void saveClientProfile(UserEntity user, com.track.dto.ClientInfo clientInfo) {
        ClientProfile profile = ClientProfile.builder()
                .user(user)
                .town(clientInfo.getTown())
                .address(clientInfo.getAddress())
                .phoneNumber(clientInfo.getPhoneNumber())
                .latitude(clientInfo.getLatitude())
                .longitude(clientInfo.getLongitude())
                .build();
        clientProfileRepository.save(profile);
    }
    
    private void saveRoleSpecificProfile(UserEntity user, ProfileRequest request) {
        try {
            if(request.getRole() == UserRole.CLIENT && request.getClientInfo() != null) {
                if (clientProfileRepository.findByUserId(user.getId()).isEmpty()) {
                    saveClientProfile(user, request.getClientInfo());
                }
            } else if(request.getRole() == UserRole.COMMERCANT && request.getMerchantInfo() != null) {
                if (merchantProfileRepository.findByUserId(user.getId()).isEmpty()) {
                    saveMerchantProfile(user, request.getMerchantInfo());
                }
            } else if(request.getRole() == UserRole.FOURNISSEUR && request.getSupplierInfo() != null) {
                if (supplierProfileRepository.findByUserId(user.getId()).isEmpty()) {
                    saveSupplierProfile(user, request.getSupplierInfo());
                }
            } else if(request.getRole() == UserRole.LIVREUR && request.getDeliveryInfo() != null) {
                if (deliveryProfileRepository.findByUserId(user.getId()).isEmpty()) {
                    saveDeliveryProfile(user, request.getDeliveryInfo());
                }
            }
            // ADMIN and MANAGER roles don't need additional profiles
        } catch (Exception e) {
            log.error("Error saving role-specific profile for {}: {}", user.getEmail(), e.getMessage(), e);
            throw new RuntimeException("Failed to save role-specific profile: " + e.getMessage(), e);
        }
    }


    private ProfileResponse convertToProfileResponse(UserEntity user) {
        Set<String> roleNames = user.getRoles() != null ? 
            user.getRoles().stream().map(Roles::getName).collect(java.util.stream.Collectors.toSet()) :
            Set.of();
        
        // Get additional profile details based on user roles
        String phoneNumber = null;
        String enterpriseName = null;
        String town = null;
        String address = null;
        
        // Check for merchant profile
        var merchantProfile = merchantProfileRepository.findByUserId(user.getId());
        if (merchantProfile.isPresent()) {
            phoneNumber = merchantProfile.get().getPhoneNumber();
            enterpriseName = merchantProfile.get().getShopName();
            town = merchantProfile.get().getTown();
            address = merchantProfile.get().getAddress();
        }
        
        // Check for supplier profile if no merchant profile
        if (phoneNumber == null) {
            var supplierProfile = supplierProfileRepository.findByUserId(user.getId());
            if (supplierProfile.isPresent()) {
                phoneNumber = supplierProfile.get().getPhoneNumber();
                enterpriseName = supplierProfile.get().getShopName();
                town = supplierProfile.get().getTown();
                address = supplierProfile.get().getAddress();
            }
        }
        
        // Check for client profile if no other profile
        if (phoneNumber == null) {
            var clientProfile = clientProfileRepository.findByUserId(user.getId());
            if (clientProfile.isPresent()) {
                phoneNumber = clientProfile.get().getPhoneNumber();
                town = clientProfile.get().getTown();
                address = clientProfile.get().getAddress();
            }
        }
        
        // Check for delivery profile if no other profile
        if (phoneNumber == null) {
            var deliveryProfile = deliveryProfileRepository.findByUserId(user.getId());
            if (deliveryProfile.isPresent()) {
                phoneNumber = deliveryProfile.get().getPhoneNumber();
                town = deliveryProfile.get().getTown();
                address = deliveryProfile.get().getAddress();
            }
        }
            
        return ProfileResponse.builder()
                .name(user.getName())
                .email(user.getEmail())
                .userId(user.getUserId())
                .isAccountVerified(user.getIsAccountVerified())
                .isApproved(user.getIsApproved())
                .roles(roleNames)
                .phoneNumber(phoneNumber)
                .enterpriseName(enterpriseName)
                .town(town)
                .address(address)
                .build();
    }
    
    private UserEntity convertToUserEntity(ProfileRequest request){
        // Find or create role
        Roles role = roleRepository.findByName(request.getRole().name())
                .orElseGet(() -> {
                    Roles newRole = Roles.builder()
                            .name(request.getRole().name())
                            .build();
                    return roleRepository.save(newRole);
                });
        
        return UserEntity.builder()
                .email(request.getEmail())
                .userId(UUID.randomUUID().toString())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .isAccountVerified(false)
                .resetOtpExpireAt(0L)
                .verifyOtp(null)
                .verifyOtpExpireAt(0L)
                .resetOtp(null)
                .isApproved(null)
                .approvedBy(null)
                .approvedAt(null)
                .roles(new java.util.HashSet<>(Set.of(role)))
                .build();
    }
}

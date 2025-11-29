package com.track.config;

import com.track.entity.Roles;
import com.track.entity.UserEntity;
import com.track.enums.UserRole;
import com.track.repository.RoleRepository;
import com.track.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        initializeAdminUsers();
    }

    private void initializeAdminUsers() {
        // Create ADMIN role if not exists
        Roles adminRole = roleRepository.findByName(UserRole.ADMIN.name())
                .orElseGet(() -> {
                    Roles role = Roles.builder()
                            .name(UserRole.ADMIN.name())
                            .build();
                    return roleRepository.save(role);
                });

        // Admin 1: Richard Mogou
        createAdminIfNotExists(
                "Richard Mogou",
                "richardmogou99@gmail.com",
                "Admin123@",
                adminRole
        );

        // Admin 2: TJ-Track
        createAdminIfNotExists(
                "tj-track",
                "tjtrack268@gmail.com",
                "Admin123@",
                adminRole
        );
    }

    private void createAdminIfNotExists(String name, String email, String password, Roles adminRole) {
        if (!userRepository.existsByEmail(email)) {
            UserEntity admin = UserEntity.builder()
                    .userId(UUID.randomUUID().toString())
                    .name(name)
                    .email(email)
                    .password(passwordEncoder.encode(password))
                    .isAccountVerified(true)
                    .isApproved(true)
                    .roles(new java.util.HashSet<>(Set.of(adminRole)))
                    .build();
            
            userRepository.save(admin);
            log.info("Admin user created: {}", email);
        } else {
            log.info("Admin user already exists: {}", email);
        }
    }


}
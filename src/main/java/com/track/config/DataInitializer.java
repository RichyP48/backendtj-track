package com.track.config;

import com.track.entity.MerchantProfile;
import com.track.entity.Roles;
import com.track.entity.UserEntity;
import com.track.enums.UserRole;
import com.track.repository.MerchantProfileRepository;
import com.track.repository.RoleRepository;
import com.track.repository.UserRepository;
import com.track.stock.entity.Categorie;
import com.track.stock.repository.CategorieRepository;
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
    private final MerchantProfileRepository merchantProfileRepository;
    private final CategorieRepository categorieRepository;

    @Override
    public void run(String... args) throws Exception {
        initializeRoles();
        initializeCategories();
        initializeAdminUsers();
        initializeTestUsers();
        initializeMerchantProfiles();
    }

    private void initializeRoles() {
        // Create all roles if not exist
        for (UserRole userRole : UserRole.values()) {
            roleRepository.findByName(userRole.name())
                    .orElseGet(() -> {
                        Roles role = Roles.builder()
                                .name(userRole.name())
                                .build();
                        return roleRepository.save(role);
                    });
        }
    }

    private void initializeAdminUsers() {
        Roles adminRole = roleRepository.findByName(UserRole.ADMIN.name()).orElseThrow();

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

    private void initializeTestUsers() {
        // Create test users for each role
        Roles clientRole = roleRepository.findByName(UserRole.CLIENT.name()).orElseThrow();
        Roles merchantRole = roleRepository.findByName(UserRole.COMMERCANT.name()).orElseThrow();
        Roles supplierRole = roleRepository.findByName(UserRole.FOURNISSEUR.name()).orElseThrow();
        Roles deliveryRole = roleRepository.findByName(UserRole.LIVREUR.name()).orElseThrow();

        // Test Client
        createUserIfNotExists(
                "Client Test",
                "client@test.com",
                "password123",
                clientRole
        );

        // Test Merchant
        createUserIfNotExists(
                "Marchand Test",
                "merchant@test.com",
                "password123",
                merchantRole
        );

        // Test Supplier
        createUserIfNotExists(
                "Fournisseur Test",
                "supplier@test.com",
                "password123",
                supplierRole
        );

        // Test Delivery
        createUserIfNotExists(
                "Livreur Test",
                "delivery@test.com",
                "password123",
                deliveryRole
        );
    }

    private void createUserIfNotExists(String name, String email, String password, Roles role) {
        if (!userRepository.existsByEmail(email)) {
            UserEntity user = UserEntity.builder()
                    .userId(UUID.randomUUID().toString())
                    .name(name)
                    .email(email)
                    .password(passwordEncoder.encode(password))
                    .isAccountVerified(true)
                    .isApproved(true)
                    .roles(new java.util.HashSet<>(Set.of(role)))
                    .build();
            
            userRepository.save(user);
            log.info("Test user created: {} with role {}", email, role.getName());
        } else {
            log.info("Test user already exists: {}", email);
        }
    }

    private void initializeCategories() {
        String[][] categories = {
            {"ELEC", "Électronique", "Appareils et accessoires électroniques"},
            {"VETM", "Vêtements", "Vêtements et accessoires de mode"},
            {"ALIM", "Alimentation", "Produits alimentaires et boissons"},
            {"MBLE", "Meubles", "Meubles et décoration d'intérieur"},
            {"LIVR", "Livres", "Livres et publications"},
            {"SPRT", "Sport", "Articles de sport et fitness"},
            {"BEAU", "Beauté", "Produits de beauté et cosmétiques"},
            {"JEUX", "Jeux", "Jeux et jouets"},
            {"AUTO", "Automobile", "Pièces et accessoires automobiles"},
            {"JARD", "Jardin", "Outils et équipements de jardinage"}
        };
        
        for (String[] cat : categories) {
            if (!categorieRepository.existsByCode(cat[0])) {
                Categorie categorie = Categorie.builder()
                        .code(cat[0])
                        .designation(cat[1])
                        .description(cat[2])
                        .build();
                categorieRepository.save(categorie);
                log.info("Category created: {}", cat[1]);
            }
        }
    }

    private void initializeMerchantProfiles() {
        UserEntity merchantUser = userRepository.findByEmail("merchant@test.com").orElse(null);
        if (merchantUser == null) {
            log.error("Merchant user not found!");
            return;
        }
        
        log.info("Found merchant user: {} with ID: {}", merchantUser.getEmail(), merchantUser.getId());
        
        if (!merchantProfileRepository.findByUserId(merchantUser.getId()).isPresent()) {
            MerchantProfile profile = MerchantProfile.builder()
                    .user(merchantUser)
                    .shopName("Boutique Test")
                    .town("Yaoundé")
                    .address("123 Rue Test")
                    .phoneNumber("+237600000000")
                    .latitude(3.8480)
                    .longitude(11.5021)
                    .build();
            MerchantProfile saved = merchantProfileRepository.save(profile);
            log.info("Merchant profile created with ID: {} for user: {}", saved.getId(), merchantUser.getEmail());
        } else {
            log.info("Merchant profile already exists for: {}", merchantUser.getEmail());
        }
    }

}
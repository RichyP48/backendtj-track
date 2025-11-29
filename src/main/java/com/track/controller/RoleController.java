package com.track.controller;

import com.track.entity.Roles;
import com.track.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RoleController {
    private final RoleRepository roleRepository;
    @PostMapping("/roles")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Roles> addRole(@RequestBody String name) {
        if (roleRepository.findByName(name).isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        Roles role = Roles.builder().name(name).build();
        return ResponseEntity.ok(roleRepository.save(role));
    }
}

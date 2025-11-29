package com.track.controller;

import com.track.entity.UserEntity;
import com.track.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class TestController {
    private final UserRepository userRepository;

    @GetMapping("/check-user")
    public Map<String, Object> checkUser(@RequestParam String email) {
        Map<String, Object> result = new HashMap<>();
        
        var user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            UserEntity userEntity = user.get();
            result.put("exists", true);
            result.put("email", userEntity.getEmail());
            result.put("isAccountVerified", userEntity.getIsAccountVerified());
            result.put("hasPassword", userEntity.getPassword() != null);
        } else {
            result.put("exists", false);
        }
        
        return result;
    }

    @GetMapping("/verify-user")
    public String verifyUser(@RequestParam String email) {
        var user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            UserEntity userEntity = user.get();
            userEntity.setIsAccountVerified(true);
            userRepository.save(userEntity);
            return "User " + email + " verified successfully";
        }
        return "User not found";
    }
}
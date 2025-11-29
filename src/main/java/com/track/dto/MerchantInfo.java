package com.track.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MerchantInfo {
    @NotBlank(message = "Shop name is required")
    private String shopName;
    
    @NotBlank(message = "Town is required")
    private String town;
    
    @NotBlank(message = "Address (quartier) is required")
    private String address;
    
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[+]?[0-9]{8,15}$", message = "Invalid phone number format")
    private String phoneNumber;
    
    private Double latitude;
    private Double longitude;
}
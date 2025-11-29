package com.track.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApprovalRequest {
    @NotBlank(message = "User ID is required")
    private String userId;
    
    @NotNull(message = "Approval status is required")
    private Boolean approved;
}
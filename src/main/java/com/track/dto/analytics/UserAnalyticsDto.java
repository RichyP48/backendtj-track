package com.track.dto.analytics;

import lombok.Data;
import java.util.List;

@Data
public class UserAnalyticsDto {
    private List<RoleDistributionDto> roleDistribution;
    private List<RegistrationTrendDto> registrationTrend;
    private Long activeUsers;
    private Double retentionRate;

    @Data
    public static class RoleDistributionDto {
        private String role;
        private Long count;
        private Double percentage;
    }

    @Data
    public static class RegistrationTrendDto {
        private String date;
        private Long registrations;
    }
}
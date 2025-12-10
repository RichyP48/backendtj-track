package com.track.delivery.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeliveryAssignmentDto {
    private Long deliveryPersonId;
    private String deliveryPersonName;
    private String phoneNumber;
    private Double latitude;
    private Double longitude;
    private Double distanceToMerchant;
    private Double distanceToClient;
    private Double averageDistance;
    private String status;
}
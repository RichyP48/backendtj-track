package com.track.delivery.service;

import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.model.GeocodingResult;
import com.google.maps.model.LatLng;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@Slf4j
public class GeocodingService {
    
    @Value("${google.maps.api.key:}")
    private String googleApiKey;
    
    private final WebClient webClient;
    
    public GeocodingService() {
        this.webClient = WebClient.builder().build();
    }
    
    public Map<String, Double> getCoordinatesFromAddress(String address) {
        if (googleApiKey != null && !googleApiKey.isEmpty()) {
            return getCoordinatesFromGoogle(address);
        } else {
            return getCoordinatesFromOpenStreetMap(address);
        }
    }
    
    private Map<String, Double> getCoordinatesFromGoogle(String address) {
        try {
            GeoApiContext context = new GeoApiContext.Builder()
                    .apiKey(googleApiKey)
                    .build();
            
            GeocodingResult[] results = GeocodingApi.geocode(context, address).await();
            
            if (results.length > 0) {
                LatLng location = results[0].geometry.location;
                return Map.of(
                    "latitude", location.lat,
                    "longitude", location.lng
                );
            }
        } catch (Exception e) {
            log.error("Erreur géocodage Google: {}", e.getMessage());
        }
        return null;
    }
    
    private Map<String, Double> getCoordinatesFromOpenStreetMap(String address) {
        try {
            String url = "https://nominatim.openstreetmap.org/search?format=json&q=" + 
                        address.replace(" ", "+");
            
            var response = webClient.get()
                    .uri(url)
                    .header("User-Agent", "TJ-Track-App")
                    .retrieve()
                    .bodyToMono(Object[].class)
                    .block();
            
            if (response != null && response.length > 0) {
                @SuppressWarnings("unchecked")
                Map<String, Object> result = (Map<String, Object>) response[0];
                
                return Map.of(
                    "latitude", Double.parseDouble(result.get("lat").toString()),
                    "longitude", Double.parseDouble(result.get("lon").toString())
                );
            }
        } catch (Exception e) {
            log.error("Erreur géocodage OpenStreetMap: {}", e.getMessage());
        }
        return null;
    }
    
    public String getAddressFromCoordinates(double lat, double lon) {
        try {
            String url = String.format(
                "https://nominatim.openstreetmap.org/reverse?format=json&lat=%f&lon=%f", 
                lat, lon
            );
            
            var response = webClient.get()
                    .uri(url)
                    .header("User-Agent", "TJ-Track-App")
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();
            
            if (response != null && response.containsKey("display_name")) {
                return response.get("display_name").toString();
            }
        } catch (Exception e) {
            log.error("Erreur géocodage inverse: {}", e.getMessage());
        }
        return null;
    }
}
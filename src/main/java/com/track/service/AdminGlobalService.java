package com.track.service;

import com.track.repository.UserRepository;
import com.track.stock.repository.*;
import com.track.stock.entity.CommandeClient;
import com.track.ecommerce.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AdminGlobalService {

    @Autowired
    private CommandeRepository commandeRepository;
    
    @Autowired
    private CommandeClientRepository commandeClientRepository;
    
    @Autowired
    private ArticleRepository articleRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private FournisseurRepository fournisseurRepository;

    public Map<String, Object> getGlobalStats() {
        Map<String, Object> stats = new HashMap<>();
        
        // Orders stats
        Map<String, Object> orders = new HashMap<>();
        orders.put("total", commandeClientRepository.count());
        orders.put("pending", commandeClientRepository.findByStatut(CommandeClient.StatutCommande.EN_ATTENTE).size());
        stats.put("orders", orders);
        
        // Products stats
        Map<String, Object> products = new HashMap<>();
        products.put("total", articleRepository.count());
        products.put("outOfStock", articleRepository.countOutOfStockArticles());
        stats.put("products", products);
        
        // Merchants stats
        Map<String, Object> merchants = new HashMap<>();
        List<Object[]> merchantRoles = userRepository.getUserRoleDistribution();
        long merchantCount = merchantRoles.stream()
            .filter(role -> "COMMERCANT".equals(role[0]))
            .mapToLong(role -> ((Number) role[1]).longValue())
            .findFirst().orElse(0L);
        merchants.put("total", merchantCount);
        merchants.put("pending", userRepository.findByIsApprovedIsNull().stream()
            .filter(u -> u.getRoles().stream().anyMatch(r -> "COMMERCANT".equals(r.getName())))
            .count());
        stats.put("merchants", merchants);
        
        // Clients stats
        Map<String, Object> clients = new HashMap<>();
        long clientCount = merchantRoles.stream()
            .filter(role -> "CLIENT".equals(role[0]))
            .mapToLong(role -> ((Number) role[1]).longValue())
            .findFirst().orElse(0L);
        clients.put("total", clientCount);
        clients.put("new", userRepository.countActiveUsers(7)); // New users in last 7 days
        stats.put("clients", clients);
        
        // Suppliers stats
        Map<String, Object> suppliers = new HashMap<>();
        suppliers.put("total", fournisseurRepository.count());
        suppliers.put("pending", 0); // TODO: Add pending suppliers logic
        stats.put("suppliers", suppliers);
        
        return stats;
    }

    public List<Map<String, Object>> getOrdersByMerchant() {
        List<Object[]> results = commandeClientRepository.getOrdersByMerchant();
        List<Map<String, Object>> merchants = new ArrayList<>();
        
        for (Object[] result : results) {
            Map<String, Object> merchant = new HashMap<>();
            merchant.put("name", result[0]);
            merchant.put("orders", result[1]);
            merchant.put("revenue", result[2]);
            merchant.put("status", "active"); // Default status
            merchants.add(merchant);
        }
        
        return merchants;
    }

    public List<Map<String, Object>> getOrdersByClient() {
        List<Object[]> results = commandeClientRepository.getTopClients(10);
        List<Map<String, Object>> clients = new ArrayList<>();
        
        for (Object[] result : results) {
            Map<String, Object> client = new HashMap<>();
            client.put("name", result[0]);
            client.put("orders", result[1]);
            client.put("total", result[2]);
            client.put("lastOrder", result[3]);
            clients.add(client);
        }
        
        return clients;
    }

    public List<Map<String, Object>> getStockByMerchant() {
        List<Object[]> results = articleRepository.getStockByMerchant();
        List<Map<String, Object>> merchants = new ArrayList<>();
        
        for (Object[] result : results) {
            Map<String, Object> merchant = new HashMap<>();
            merchant.put("name", result[0]);
            merchant.put("products", result[1]);
            merchant.put("inStock", result[2]);
            merchant.put("lowStock", result[3]);
            merchant.put("outOfStock", result[4]);
            merchants.add(merchant);
        }
        
        return merchants;
    }

    public List<Map<String, Object>> getSupplierStats() {
        List<Object[]> results = fournisseurRepository.getSupplierStats();
        List<Map<String, Object>> suppliers = new ArrayList<>();
        
        for (Object[] result : results) {
            Map<String, Object> supplier = new HashMap<>();
            supplier.put("name", result[0]);
            supplier.put("products", result[1]);
            supplier.put("inStock", result[2]);
            supplier.put("lowStock", result[3]);
            supplier.put("outOfStock", result[4]);
            suppliers.add(supplier);
        }
        
        return suppliers;
    }
}
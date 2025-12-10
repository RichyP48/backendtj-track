package com.track.service;

import com.track.dto.ProfileRequest;
import com.track.dto.ProfileResponse;

public interface ProfileService {
    ProfileResponse createProfile(ProfileRequest request);
    ProfileResponse getProfile(String email);
    void sendResetOtp(String email);
    void resetPassword(String email, String otp, String newPassword);
    void sendOtp(String email);
    void verifyOtp(String email, String otp);
    void approveUser(String userIdOrEmail, Boolean approved, String approvedBy);
    java.util.List<ProfileResponse> getPendingUsers();
    java.util.List<ProfileResponse> getAllUsers();
    void resetUserApproval(String userId);
    java.util.Map<String, Object> getUserStats();

}

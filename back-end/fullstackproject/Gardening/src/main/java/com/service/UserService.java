package com.service;

import org.springframework.stereotype.Service;

import com.dto.UserResponseDto;

@Service
public interface UserService {
    UserResponseDto getAllUser();

}

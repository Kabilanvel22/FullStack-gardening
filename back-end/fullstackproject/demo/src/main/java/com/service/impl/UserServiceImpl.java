package com.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dto.UserResponseDto;
import com.entity.User;
import com.repository.UserRepository;
import com.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepo;

    @Override
    public UserResponseDto getAllUser() {
       
        List<User> userList = userRepo.findAll();
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setUsers(userList);
        return userResponse;
        
    }
    
}
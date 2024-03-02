package com.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.AuthenticationResponse;
import com.auth.AuthenticationService;
import com.auth.RegisterRequest;
import com.dto.UserResponseDto;
import com.entity.User;
import com.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final AuthenticationService authservice;
    private final UserService service;

    @GetMapping("/admin/get")
    @PreAuthorize("hasAuthority('admin:READ')")
   public ResponseEntity<UserResponseDto> getAllUser(){
    UserResponseDto userResponseDto = service.getAllUser();
    return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
   }


  
    @PostMapping("/admin/add")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public ResponseEntity<AuthenticationResponse> registerUser(
        @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(authservice.adminregister(request));
        
    }


    @PutMapping(value = "update/admin/{email}", produces = "application/json")
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public String updateStaff(@PathVariable String email, @RequestBody User updatedUser){
        authservice.updatedUser(email, updatedUser);
        String updatemessage = "Admin "+email+ " Updated";
        return updatemessage;
    }
   


    @DeleteMapping("/delete/admin/{email}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String  deleteUser(@PathVariable String email){
        authservice.deleteUserByUsername(email);
        String message = "Admin "+email + " Deleted Successfully";
        return message;
    }

}

package com.auth;

import com.entity.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 

public class RegisterRequest {
	
	private String email;
	private String userName;
	private String password;
	private Role role;
}

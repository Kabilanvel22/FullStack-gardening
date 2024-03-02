package com.entity;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.entity.enumerate.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@SuppressWarnings("serial")
@Data
@Builder
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="usersdemo")

public class User implements UserDetails{
	
	@Id
	@Column(name="email", nullable = false, unique=true)
	private String email;
	@Column(name="username", nullable = false)
	private String userName;
	@Column(name="password", nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
    private Role role;

	
	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        return role.getAuthorities();
    }

	@Override
    public String getUsername() {
    	return email;
    }
	
    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        
        return true;
    }

    @Override
    public boolean isEnabled() {
        
        return true;
    }
    
}

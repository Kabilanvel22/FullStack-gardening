package com.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="contactdemo1")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class contact {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false, unique=true)
	private Long Id;
	
	@Column(name="name", nullable = false)
	private String name;
	
	@Column(name="email", nullable = false)
	private String email;
	
	@Column(name="phone", nullable = false)
	private Long phone;
	
	@Column(name="subject", nullable = false)
	private String subject;
	
	@Column(name="message", nullable = false)
	private String message;
	
}

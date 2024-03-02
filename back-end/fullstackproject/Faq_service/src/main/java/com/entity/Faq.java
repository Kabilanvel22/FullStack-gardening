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
@Table(name="faqdemo")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Faq {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false, unique=true)
	private Long Id;
	
	@Column(name="question", nullable = false)
	private String question;
	
	@Column(name="answer", nullable = false)
	private String answer;
	
	
}

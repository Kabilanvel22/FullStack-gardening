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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="general")

public class Plant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="plantid")
	private long plantId;
	
	@Column(name="commonname", nullable = false)
	private String commonName;
	
	@Column(name="scitificname", nullable = false)
    private String scientificName;
	
	@Column(name="description", length=50000, nullable = false)
    private String description;
	
	@Column(name="plantfamily", nullable = false)
    private String plantFamily;
	
	@Column(name="planttype", nullable = false)
    private String plantType;
	
	@Column(name="position", length=50000, nullable = false)
    private String position;
	
	@Column(name="frostTolerant", length=50000, nullable = false)
    private String frostTolerant;
	
	@Column(name="spacing", length=50000, nullable = false)
    private String spacing;
	
	@Column(name="planting", length=50000, nullable = false)
    private String planting;
	
	@Column(name="feeding", length=50000, nullable = false)
    private String feeding;
	
	@Column(name="harvest", length=50000,nullable = false)
    private String harvesting;
	
	@Column(name="pests", nullable = false)
    private String pests;
	
	@Column(name="disease", length=50000, nullable = false)
    private String disease;
	
	@Column(name="fertilization", nullable = false)
    private String fertilization;
	
	@Column(name="notes", length=50000, nullable = false)
    private String notes;
	
	@Column(name="plantimage", nullable = false)
    private String plantImage;
}

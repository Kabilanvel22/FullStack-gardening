package com.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class PlantAdd {
	
	private long plantId;
	private String commonName;
    private String scientificName;
    private String description;
    private String plantFamily;
    private String plantType;
    private String position;
    private String frostTolerant;
    private String spacing;
    private String planting;
	private String feeding;
    private String harvesting;
    private String pests;
    private String disease;
    private String fertilization;
    private String notes;
    private String plantImage;

}

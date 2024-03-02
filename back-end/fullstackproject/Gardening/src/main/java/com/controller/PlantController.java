package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Plant;
import com.service.PlantService;

@RestController
@RequestMapping("/api/v1/user/plants")
@CrossOrigin("*")
public class PlantController {
	@Autowired
	private PlantService service;
	
	 
	    @GetMapping("/plant/getplant/{plantId}")
	    public ResponseEntity<Optional<Plant>> getplantById(@PathVariable long plantId){
	    	return ResponseEntity.ok(service.getPlantById(plantId));
	    }
	    
	    @GetMapping("/plant/all")
	    public ResponseEntity<List<Plant>> getAllPlant()
	    {
	    	return ResponseEntity.ok(service.getAllPlants());
	    }

}

package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.PlantAdd;
import com.entity.Plant;
import com.service.PlantService;

@RestController
@RequestMapping("/api/v1/admin/plants")
@CrossOrigin("*")
public class PlantAdminController {

	
	@Autowired
	private PlantService service;
	
	 @PostMapping("/plant/add")
	    public String addPlant(@RequestBody PlantAdd request){
	        return service.AddPlant(request);
	    }
	    @GetMapping("/plant/getplant/{plantId}")
	    public ResponseEntity<Optional<Plant>> getplantById(@PathVariable long plantId){
	    	return ResponseEntity.ok(service.getPlantById(plantId));
	    }
	    
	    @GetMapping("/plant/all")
	    public ResponseEntity<List<Plant>> getAllPlant()
	    {
	    	return ResponseEntity.ok(service.getAllPlants());
	    }
	    
	    @PutMapping("/plant/update/{plantId}")
	    public String updatePlant(@PathVariable long plantId, @RequestBody Plant plants)
	    {
	    	return service.updatePlant(plantId, plants);
	    }
	    
	    @DeleteMapping("/plant/delete/{plantId}")
	    public String deletePlant(@PathVariable long plantId)
	    {
	    	return service.deletePlant(plantId);
	    }
}

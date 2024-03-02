package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.entity.Garden;
import com.service.GardenService;

@RequestMapping("/garden")
public class GardenController {
	@Autowired
	GardenService gardenService;
	
	@GetMapping("/getall")  
	public Optional<List<Garden>> GetAllGarden()   
	{  
		return gardenService.getAllGarden();  
	}  

	@GetMapping("/getid/{id}") 
	public ResponseEntity<Optional<Garden>> GetUser(@PathVariable int id)
	{  
		Optional<Garden> ga = gardenService.getGarden(id); 
		return ResponseEntity.ok(ga);
	}  

	@DeleteMapping("/delete/{id}")  
	public ResponseEntity<Map<String, Boolean>> DeleteGarden(@PathVariable int id)   
	{  
		gardenService.deleteGarden(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/post")  
	public Garden SaveGarden(@RequestBody Garden g)   
	{  
		return gardenService.saveGarden(g);  
	}  
	
	@PutMapping("/update")  
	public ResponseEntity<Garden> UpdateGarden(@PathVariable int id,@RequestBody Garden g)   
	{  
		Garden ga = gardenService.updateGarden(g);  
		return ResponseEntity.ok(ga); 
	} 
}

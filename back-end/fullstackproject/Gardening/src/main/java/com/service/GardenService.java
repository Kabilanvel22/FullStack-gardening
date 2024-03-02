package com.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.entity.Garden;
import com.repository.GardenRepository;


@Service

public class GardenService {
	@Autowired
	GardenRepository gardenRepository;
	
	public Optional<List<Garden>> getAllGarden()   
	{  
		return Optional.of(gardenRepository.findAll());
	}  
	
	public Optional<Garden> getGarden(int id)   
	{  
		return gardenRepository.findById(id); 
	}
	
	public void deleteGarden(int id)   
	{  
		gardenRepository.deleteById(id);  
	}
	
	public Garden saveGarden(Garden g)   
	{  
		return gardenRepository.save(g);  
	}
	
	public Garden updateGarden(Garden g)   
	{  
		gardenRepository.save(g);  
		return g;  
	}
}

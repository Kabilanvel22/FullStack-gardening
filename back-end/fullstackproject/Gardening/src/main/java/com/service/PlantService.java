package com.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.PlantAdd;
import com.entity.Plant;
import com.repository.PlantRepository;

@Service
public class PlantService {
	
	@Autowired
	 private  PlantRepository plantRepository;

	    
	    public String AddPlant(PlantAdd request){
	        var plant = Plant.builder()
	        .commonName(request.getCommonName())
	        .scientificName(request.getScientificName())
	        .description(request.getDescription())
	        .plantFamily(request.getPlantFamily())
	        .plantType(request.getPlantType())
	        .position(request.getPosition())
	        .frostTolerant(request.getFrostTolerant())
	        .spacing(request.getSpacing())
	        .planting(request.getPlanting())
	        .feeding(request.getFeeding())
	        .harvesting(request.getHarvesting())
	        .pests(request.getPests())
	        .disease(request.getDisease())
	        .fertilization(request.getFertilization())
	        .notes(request.getNotes())
	        .plantImage(request.getPlantImage())
	        .build();
	        plantRepository.save(plant);
	        return "Plant Added Successfully";
	    }

	    public Optional<Plant> getPlantById(long id){
	        return plantRepository.findById(id);
	    }

	    public List<Plant> getAllPlants(){
	        return plantRepository.findAll();
	    }

	    public String updatePlant(long id, Plant updatePlant){
	        Plant plant = plantRepository.findByplantId(id);
	        if(plant!=null){
	        	
	        		plant.setCommonName(updatePlant.getCommonName());
	        		plant.setScientificName(updatePlant.getScientificName());
	        		plant.setDescription(updatePlant.getDescription());
	        		plant.setPlantFamily(updatePlant.getPlantFamily());
	        		plant.setPlantType(updatePlant.getPlantType());
	            	plant.setPosition(updatePlant.getPosition());
	            	plant.setFrostTolerant(updatePlant.getFrostTolerant());
	            	plant.setSpacing(updatePlant.getSpacing());
	            	plant.setPlanting(updatePlant.getPlanting());
	            	plant.setFeeding(updatePlant.getFeeding());
	            	plant.setHarvesting(updatePlant.getHarvesting());
	            	plant.setPests(updatePlant.getPests());
	            	plant.setDisease(updatePlant.getDisease());
	            	plant.setFertilization(updatePlant.getFertilization());
	            	plant.setNotes(updatePlant.getNotes());
	            	plant.setPlantImage(updatePlant.getPlantImage());;

	            
	            plantRepository.save(plant);
	            
	        }
	        return "Plant Updated Successfully";
	    }

	    public String deletePlant(long id){
	        Plant plant = plantRepository.findByplantId(id);
	        if(plant!=null){
	        	plantRepository.deleteById(id);
	        }
	        return "Plant Deleted Successfully";
	    }
}

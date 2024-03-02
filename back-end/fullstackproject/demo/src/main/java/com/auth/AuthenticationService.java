package com.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.config.JwtService;
import com.entity.Plant;
import com.entity.User;
import com.entity.enumerate.Role;
import com.repository.PlantRepository;
import com.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse userregister(RegisterRequest request) {
        var user = User.builder()
        .email(request.getEmail())
        .userName(request.getUserName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
    }

    public AuthenticationResponse userauthenticate(AuthenticationRequest request) {
    	authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
       );
        var user = repository.findById(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

   public void updatedUser(String email, User updateUser){
    User user = repository.findByEmail(email);
    if(!user.toString().isEmpty()){

        user.setUserName(updateUser.getUsername());
        user.setRole(Role.USER);
        repository.save(user);
    }
   }
    public void deleteUserByUsername(String email){
        User user = repository.findByEmail(email);
        if(user!=null){
            repository.delete(user);
        }
    }
    
    public Optional<User> getuserById(String email) {
        var user = repository.findById(email);
        return user;
    }

    // Admin Service


    public AuthenticationResponse adminregister(RegisterRequest request){
        var admin =  User.builder()
        .email(request.getEmail())
        .userName(request.getUserName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.ADMIN)
        .build();
        repository.save(admin);
        var jwtToken = jwtService.generateToken(admin);

        return AuthenticationResponse.builder()
        .token(jwtToken)

        .build();
    }

    public AuthenticationResponse adminAuthenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var admin = repository.findById(request.getEmail()).orElseThrow();
        var adminToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder().token(adminToken).build();
    
    }
    
    public Optional<User> getadminById(String email) {
        var admin = repository.findById(email);
        return admin;
    }

    //Plant Service
 private final PlantRepository plantRepository;

    
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
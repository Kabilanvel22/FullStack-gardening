package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Garden;

public interface GardenRepository extends JpaRepository<Garden, Integer>{
	
}

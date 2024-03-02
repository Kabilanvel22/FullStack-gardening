package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Plant;

public interface PlantRepository extends JpaRepository<Plant, Long>{
	Plant findByplantId(long id);
}

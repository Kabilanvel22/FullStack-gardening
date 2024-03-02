package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestBody;

import com.entity.contact;

public interface contactRepository extends JpaRepository<contact,Long>{

	

}

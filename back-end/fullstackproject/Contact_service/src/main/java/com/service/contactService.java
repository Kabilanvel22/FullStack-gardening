package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.entity.contact;
import com.repository.contactRepository;

@Service
public class contactService {

	@Autowired
	private  contactRepository repo;
	
	public void save(@RequestBody contact cont)
	{
		repo.save(cont);
	}

	public List<contact> contactDetail() {
		
		return repo.findAll();
	}

	
}

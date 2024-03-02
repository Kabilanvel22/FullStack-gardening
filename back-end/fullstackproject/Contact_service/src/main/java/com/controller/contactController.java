package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.contact;
import com.service.contactService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/contact")
public class contactController {
	
	@Autowired
	private final contactService service;

	@PostMapping("/send/query")
	public void sendQuery(@RequestBody contact conser)
	{
		 service.save(conser);
	}
	
	@GetMapping("/get/query")
	public List<contact> getAll()
	{
		return  service.contactDetail();
	}
}

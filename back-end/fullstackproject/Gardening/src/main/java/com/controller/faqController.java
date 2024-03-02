package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Faq;
import com.service.faqService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("*")
@RequiredArgsConstructor
public class faqController {

	@Autowired
	private faqService service;
	
	
	
	@GetMapping("/get/ques")
	public List<Faq> getFaq()
	{
		return service.getAllFaq();
	}
	
	
}

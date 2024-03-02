package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Faq;
import com.service.faqService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/Faq")
@CrossOrigin("*")
@RequiredArgsConstructor
public class faqController {

	@Autowired
	private faqService service;
	
	@PostMapping("/send/ques")
	public void saveFaq(@RequestBody Faq faq)
	{
		service.sendFaq(faq);
	}
	
	@GetMapping("/get/ques")
	public List<Faq> getFaq()
	{
		return service.getAllFaq();
	}
	
	@PutMapping("/update/ques/{id}")
	public String updateQues(@PathVariable long id, @RequestBody Faq faq)
	{
		return service.UpdateQues(id,faq);
	}
	
		@DeleteMapping("/delete/ques/{id}")
		public String deleteFaq(@PathVariable long id)
		{
			return service.DeleteFaq(id);
		}
}

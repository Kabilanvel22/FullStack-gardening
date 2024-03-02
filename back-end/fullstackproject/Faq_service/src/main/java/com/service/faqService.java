package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.entity.Faq;
import com.repository.faqRepository;

@Service
public class faqService {
	
	@Autowired
	private faqRepository repo;

	public void sendFaq(@RequestBody Faq faq) {
		
		repo.save(faq);
	}

	public List<Faq> getAllFaq() {
		return repo.findAll();
	}

	public String UpdateQues(long id, Faq faq) {
		Faq faqs = repo.findById(id);
		
		if(faqs != null)
		{
			faqs.setQuestion(faq.getQuestion());
			faqs.setAnswer(faq.getAnswer());
			
			repo.save(faqs);
		}
		return "FAQ Updated Succesfully";
	}

	public String DeleteFaq(long id) {
		Faq faqs = repo.findById(id);
		if(faqs != null)
		{
			repo.deleteById(id);
		}
		return "Faq Deleted Successfully";
	}

	


}

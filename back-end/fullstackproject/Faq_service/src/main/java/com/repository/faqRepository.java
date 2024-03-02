package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Faq;

@Repository
public interface faqRepository extends JpaRepository<Faq,Long>{
		Faq findById(long id);
}

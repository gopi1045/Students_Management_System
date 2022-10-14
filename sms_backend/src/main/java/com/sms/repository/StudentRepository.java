package com.sms.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.models.Student;

public interface StudentRepository extends JpaRepository<Student, Long>
{

	ArrayList<Student> findAll();
	
}

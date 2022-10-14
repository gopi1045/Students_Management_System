package com.sms.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.exceptions.ResourceNotFoundException;
import com.sms.models.Student;
import com.sms.repository.StudentRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/students")
public class StudentController 
{
	@Autowired
	private StudentRepository repo;
	
	@GetMapping
	public ArrayList<Student> getAllStudents() 
	{
		return (ArrayList<Student>) repo.findAll();
	}
	
	@PostMapping
	public Student createStudent(@RequestBody Student student)
	{
		return repo.save(student);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable(value="id") long id)
	{
		Student student=repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Requested student not found with Id"+id));
		
		return ResponseEntity.ok(student);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Student> updateStudentById(@PathVariable(value="id") long id, @RequestBody Student student)
	{
		Student updateStudent=repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Requested student not found with Id"+id));
		
		updateStudent.setFirstName(student.getFirstName());
		updateStudent.setLastName(student.getLastName());
		updateStudent.setDept(student.getDept());
		updateStudent.setEmail(student.getEmail());
		
		repo.save(updateStudent);
		
		return ResponseEntity.ok(updateStudent);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteStudentById(@PathVariable(value="id") long id)
	{
		repo.deleteById(id);
		return new ResponseEntity("Deleted student with Id: "+id,HttpStatus.OK);
	}
}

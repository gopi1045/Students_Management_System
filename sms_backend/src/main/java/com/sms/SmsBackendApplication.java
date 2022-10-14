package com.sms;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sms.models.Student;
import com.sms.repository.StudentRepository;

@SpringBootApplication
public class SmsBackendApplication implements CommandLineRunner{

	public static void main(String[] args){
		SpringApplication.run(SmsBackendApplication.class, args);
	}
	
	@Autowired
	private StudentRepository repo;
	@Override
	public void run(String... args) throws Exception 
	{
//		Student s=new Student();
//		s.setFirstName("Gopi");
//		s.setLastName("Ashok");
//		s.setDept("IT");
//		s.setEmail("gopi@gmail.com");
//		repo.save(s);		
	}

}

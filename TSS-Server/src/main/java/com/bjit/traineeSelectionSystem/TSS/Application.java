package com.bjit.traineeSelectionSystem.TSS;

import com.bjit.traineeSelectionSystem.TSS.service.RoleService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {

		System.out.println("hii");
		SpringApplication.run(Application.class, args);
		System.out.println("hii");

	}
//	@Bean
//	CommandLineRunner run(RoleService roleService){
//		return args -> {
//
//			roleService.addRole("EVALUATOR");
//			roleService.addRole("TRAINER");
//			roleService.addRole("ADMIN");
//
//		};

}

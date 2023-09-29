package com.abelf.fragance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.abelf.fragance")
@EnableJpaRepositories(basePackages = "com.abelf.fragance.repositorio")
public class FraganceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FraganceApplication.class, args);
	}

}

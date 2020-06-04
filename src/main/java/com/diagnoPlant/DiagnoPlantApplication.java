package com.diagnoPlant;


import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.diagnoPlant.storage.ImageStorageService;


@SpringBootApplication
public class DiagnoPlantApplication {

//	@Resource
//	ImageStorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(DiagnoPlantApplication.class, args);
	}

//	@Override
//	  public void run(String... arg) throws Exception {
//	    storageService.deleteAll();
//	    storageService.init();
//	}
}

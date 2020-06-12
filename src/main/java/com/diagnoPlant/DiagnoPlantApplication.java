package com.diagnoPlant;



import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class DiagnoPlantApplication extends SpringBootServletInitializer{
	
	public static void main(String[] args) {
		SpringApplication.run(DiagnoPlantApplication.class, args);
		//creation of folder 'imagesPlante' to store the images
		String path = System.getProperty("user.home");
		File dir=new File(path+"/imagesPlante");
            if(dir.exists()){
 	           System.out.println("A folder with name 'imagesPlante' is already exist in the path "+path);
 	       	}
            else {
            	dir.mkdir();
                System.out.println("Directory is created!");
            }
        }
}

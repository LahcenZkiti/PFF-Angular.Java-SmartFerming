package com.diagnoPlant.Controllers;

import java.io.File;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import com.diagnoPlant.Models.Image;
import com.diagnoPlant.Repositorys.ImageRepository;

/**
 * This class used to upload image and store it in a folder 
 * @author lahcen
 *
 */
@RestController
public class ImageController {
	@Autowired
	private ImageRepository imageRepository;

	@Value("${dir.images}")
	private String imageDir;
	
	  	
	@PostMapping("/telechargerimage")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) { 
    	
		Image im = new Image();
		imageRepository.save(im);
    	im.setEtatTraitement(false);
    	
    	
        if (file.isEmpty()) {
            return new ResponseEntity<>("veuillez sélectionner une image !", HttpStatus.OK);
        }

        try {
        	im.setImage(file.getOriginalFilename());
			file.transferTo(new File(imageDir+im.getId()));
			imageRepository.save(im);

        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>("Votre image a bien été enregistrée !", new HttpHeaders(), HttpStatus.OK);

    }
	
}



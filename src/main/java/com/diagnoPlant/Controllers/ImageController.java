package com.diagnoPlant.Controllers;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;


import com.diagnoPlant.Messages.ResponseMessage;
import com.diagnoPlant.Models.Image;
import com.diagnoPlant.Repositorys.ImageRepository;
import com.diagnoPlant.storage.ImageStorageService;

/**
 * This class used to upload image and store it in a folder 
 * @author lahcen
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {
	@Autowired
	private ImageRepository imageRepository;

	@Autowired
	ImageStorageService storageService;
	
	
	/**
	 * Cette méthode permet d'enregistrer les images 
	 * @param id
	 * @return
	 */	
	@PostMapping("/telechargerimage")
	  public ResponseEntity<ResponseMessage> uploadImage(@RequestParam("file") MultipartFile file) {
	    String message = "";
	    
	    Image im = new Image();
    	im.setEtatTraitement(false);
	    
	    try {
	      storageService.save(file);

	      message = "Votre image a bien été enregistrée! : " + file.getOriginalFilename();
	      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
	    } catch (Exception e) {
	      message = "L'image n'a pas pu être téléchargé : " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	    }
	  }
	
	/**
	 * Cette méthode permet d'afficher les images
	 * @param id
	 * @return
	 */	
	@GetMapping(value = "/images")
	public ResponseEntity<List<Image>> getImages(){
		
		//1- recuperer la liste des images
		List<Image> image = storageService.loadAll().map(path -> {

			String filename = path.getFileName().toString();
			
			//2- preparer les liens des images
			String url = MvcUriComponentsBuilder
			          .fromMethodName(ImageController.class, "getImage", path.getFileName().toString()).build().toString();
			return new Image(filename, url);
		}).collect(Collectors.toList());
		
		return ResponseEntity.status(HttpStatus.OK).body(image);
	}
	
	/**
	 * Cette méthode permet récuperer les images dans un dossier
	 * @param id
	 * @return
	 */
	@GetMapping("/images/{filename:.+}")
	  public ResponseEntity<Resource> getImage(@PathVariable String filename) {
	    Resource file = storageService.load(filename);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
	}
	
	
	/**
	 * Cette méthode permet récuperer les images par id
	 * @param id
	 * @return
	 */
	@GetMapping(value = "/image/{id}")
	public ResponseEntity<Image> getImageById(@PathVariable("id") Long id){
		Optional<Image> img = imageRepository.findById(id);

		if (img.isPresent()) {
			return new ResponseEntity<>(img.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	/**
	 * Cette méthode permet modifier les attributes des images
	 * @param id
	 * @param image
	 * @return
	 */
	@PutMapping("/image/{id}")
	public ResponseEntity<Image> updateImage(@PathVariable("id") Long id, @RequestBody Image image) {
		Optional<Image> img = imageRepository.findById(id);
		
		if (img.isPresent()) {
			Image _image =  img.get(); 
			  _image.setId(image.getId());
			  _image.setEtatTraitement(image.isEtatTraitement());
			  _image.setImage(image.getImage());
			  _image.setUrlImage(image.getUrlImage());
			
			return new ResponseEntity<>(imageRepository.save(_image), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	/**
	 * Cette méthode permet supprimer les images par id
	 * @param id
	 * @return
	 */
	@DeleteMapping("/image/{id}")
	public ResponseEntity<HttpStatus> deleteImage(@PathVariable("id") Long id) {
		try {
			imageRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	/**
	 * Cette méthode permet supprimer tout les images
	 * @param id
	 * @return
	 */
	@DeleteMapping("/images")
	  public ResponseEntity<HttpStatus> deleteAllImages() {
	    try {
	      imageRepository.deleteAll();
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	    }

	  }
	
	
	
}



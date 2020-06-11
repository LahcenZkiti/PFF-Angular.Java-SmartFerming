package com.diagnoPlant.Controllers;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import com.diagnoPlant.Messages.ResponseMessage;
import com.diagnoPlant.Models.Image;
import com.diagnoPlant.Repositorys.ImageRepository;

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
	
	
	@Value("${dir.images}")
	private String imageDir;
	
	
	/**
	 * Cette méthode permet d'enregistrer les images 
	 * @param id
	 * @return
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */	
	@PostMapping("/telechargerimage")
	public ResponseEntity<ResponseMessage> uploadImage(@RequestParam("file") MultipartFile file,Image image) throws IllegalStateException, IOException {
		String message = "";
    
		if (!(file.isEmpty())) {image.setImage(file.getOriginalFilename());}
		image.setEtatTraitement(false);
		imageRepository.save(image);
		
	    try {
	    	

	    	if (!(file.isEmpty())) {
				image.setImage(file.getOriginalFilename());
				image.setUrlImage("http://localhost:8080/images/"+ image.getId());
				
				file.transferTo(new File(imageDir+ image.getId()));
				
				imageRepository.save(image);
	    	}
	    
	    	
			message = "Votre image a bien été enregistrée! : " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
	      
	    } catch (Exception e) {
	    	message = "L'image n'a pas pu être téléchargé ";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	    }
	}
	
	
	@RequestMapping(value = "/image/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
	@ResponseBody
	public byte[] getImages(@PathVariable("id") Long id) throws Exception {
		File f = new File(imageDir+ id);
		
		return IOUtils.toByteArray(new FileInputStream(f));
	}
	
	
	
	/**
	 * Cette méthode permet d'afficher les images
	 * @param id
	 * @return
	 */	
	@GetMapping(value = "/images")
	public ResponseEntity<List<Image>> getImages(){
		
		List<Image> images = imageRepository.findAll();
		
		return ResponseEntity.status(HttpStatus.OK).body(images);
	}

	
	/**
	 * Cette méthode permet récuperer les images par id
	 * @param id
	 * @return
	 */
	@GetMapping(value = "/images/{id}")
	public ResponseEntity<Image> getImageById(@PathVariable("id") Long id){
		Optional<Image> img = imageRepository.findById(id);

		if (img.isPresent()) {
			System.out.println("objet image = >"+img+" of the id "+ id);
			return new ResponseEntity<>(img.get(), HttpStatus.OK);
		}else {
			System.out.println("Id: " + id + " don't exist");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}		
	}
	
	/**
	 * Cette méthode permet modifier les attributes des images
	 * @param id
	 * @param image
	 * @return
	 */
	@PutMapping("/images/{id}")
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
	 * Cette méthode permet d'enregistrer les données saisies dans 
	 * la base de donnée pour chaque image 
	 * @param m
	 * @param model
	 * @param maladiePlante
	 * @return
	 */
	@RequestMapping(value = "/donneravis/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Image> Maladie(@PathVariable("id")Long id,@RequestBody Image m) {
		Optional<Image> img = imageRepository.findById(id);
		if(img.isPresent()) {
			Image _m = img.get();
			_m.setEtatTraitement(true);
			_m.setImage(m.getImage());
			_m.setUrlImage(m.getUrlImage());
			_m.setInfosCompl(m.getInfosCompl());
			_m.setMaladiePlante(m.getMaladiePlante());
			return new ResponseEntity<>(imageRepository.save(_m), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	/**
	 * Cette méthode permet supprimer les images par id
	 * @param id
	 * @return
	 */
	@DeleteMapping("/images/{id}")
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
	 * @param 
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
	
	
	
	/**
	 * Cette méthode permet d'afficher les images non traiter
	 * @param 
	 * @return
	 */	
	@GetMapping("/images/nontraiter")
	public ResponseEntity<List<Image>> getImgNonTrit(){
		List<Image> imagesNoTr = imageRepository.getImageNonTrit();
		
		return ResponseEntity.status(HttpStatus.OK).body(imagesNoTr);
	}
	
	
	/**
	 * Cette méthode permet d'afficher les images traiter
	 * @param 
	 * @return
	 */	
	@GetMapping("/images/traiter")
	public ResponseEntity<List<Image>> getImgTrit(){
		List<Image> imagesTr = imageRepository.getImageTrit();
		
		return ResponseEntity.status(HttpStatus.OK).body(imagesTr);
	}
	
	
	
}



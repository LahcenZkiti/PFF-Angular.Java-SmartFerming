package com.diagnoPlant.Controllers;

import java.util.List;
import java.util.Optional;

import com.diagnoPlant.payload.response.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.diagnoPlant.Models.MaladiePlante;
import com.diagnoPlant.Repositorys.MaladiePlantRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/mld")
public class MaladiePlantController {
	@Autowired
	private MaladiePlantRepository mldRepo;
	
	
	/**
	 * Cette méthode permet d'ajouter les maladies 
	 * @param mldPlant
	 * @return
	 */
	@PostMapping("/addMaladie")
	public ResponseEntity<ResponseMessage> ajoutMaladie(@RequestBody MaladiePlante mldPlant) {
		String message = "";
		try {
			MaladiePlante _mld = mldRepo
					.save(new MaladiePlante(mldPlant.getNomMaladie(), 
											mldPlant.getSymptomes(), 
											mldPlant.getCauses(), 
											mldPlant.getTraitement(), 
											mldPlant.getActionsPreventives()));

			message = "Created Success";
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		}catch (Exception e) {
			message = "Error Failed create";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}
	
	
	
	/**
	 * Cette méthode permet d'afficher les maladies 
	 * @param nomMaladie
	 * @return
	 */
	@GetMapping("/listMaladies")
	public ResponseEntity<List<MaladiePlante>> getAllMaladies() {
		
			List<MaladiePlante> maladies = mldRepo.findAll();
			
			return ResponseEntity.status(HttpStatus.OK).body(maladies);
	
	}
	

	/**
	 * Cette méthode permet d'afficher les maladies par id
	 * @param nomMaladie
	 * @return
	 */
	@GetMapping("/listMaladies/{id}")
	public ResponseEntity<MaladiePlante> getMaladieById(@PathVariable("id") Long id) {
		Optional<MaladiePlante> mldlData = mldRepo.findById(id);

	    if (mldlData.isPresent()) {
	      return new ResponseEntity<>(mldlData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
	/**
	 * Cette méthode permet de modifier les maladies par id
	 * @param nomMaladie
	 * @return
	 */
	@PutMapping("/listMaladies/{id}")
	public ResponseEntity<MaladiePlante> updateMldPlante(@PathVariable("id")Long id, @RequestBody MaladiePlante mldPlante) {
		Optional<MaladiePlante> mldData = mldRepo.findById(id);
		
		if (mldData.isPresent()) {
			MaladiePlante _mldPl = mldData.get();
			
			_mldPl.setNomMaladie(mldPlante.getNomMaladie());
			_mldPl.setSymptomes(mldPlante.getSymptomes());
			_mldPl.setCauses(mldPlante.getCauses());
			_mldPl.setTraitement(mldPlante.getTraitement());
			_mldPl.setActionsPreventives(mldPlante.getActionsPreventives());
			return new ResponseEntity<>(mldRepo.save(_mldPl), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	/**
	 * Cette méthode permet de supprimerles maladies par id
	 * @param nomMaladie
	 * @return
	 */
	@DeleteMapping("/listMaladies/{id}")
	public ResponseEntity<HttpStatus> deleteMaladie(@PathVariable("id") Long id) {
	    try {
	      mldRepo.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	    }
	}
	
	
	/**
	 * Cette méthode permet supprimer tout les maladies
	 * @param 
	 * @return
	 */
	@DeleteMapping("/listMaladies")
	  public ResponseEntity<HttpStatus> deleteAllMaladies() {
	    try {
	      mldRepo.deleteAll();
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	    }

	  }

}

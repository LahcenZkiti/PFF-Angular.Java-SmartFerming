package com.diagnoPlant.Controllers;

import com.diagnoPlant.Exceptions.ResourceNotFoundException;
import com.diagnoPlant.Models.Expert;
import com.diagnoPlant.Repositorys.ExpertRepository;
import com.diagnoPlant.services.ExpertServiceImlp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expert")
public class ExpertController {
    @Autowired
    private ExpertRepository expertRepository;

    @Autowired
    private ExpertServiceImlp expertServiceImlp;

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Expert> getExpertById(@PathVariable("id")Long id) throws ResourceNotFoundException{
        Expert expert = expertServiceImlp.findById(id).orElseThrow( () -> {
            return new ResourceNotFoundException("No Expert with id " + id);
        });
        return new ResponseEntity<Expert>(expert, HttpStatus.OK);
    }


}

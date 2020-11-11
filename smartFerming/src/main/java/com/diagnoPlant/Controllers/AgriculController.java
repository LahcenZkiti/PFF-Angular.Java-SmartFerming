package com.diagnoPlant.Controllers;

import java.util.List;

import com.diagnoPlant.Exceptions.ResourceNotFoundException;
import com.diagnoPlant.Models.Agriculture;
import com.diagnoPlant.services.AgriculServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/agricultures")
public class AgriculController {

    @Autowired
    private AgriculServiceImpl agriculServiceImpl;

    @GetMapping
    public ResponseEntity<List<Agriculture>> getAllAgriculs() throws ResourceNotFoundException{
        List<Agriculture> list = agriculServiceImpl.findAll()
                                                    .orElseThrow(()-> new ResourceNotFoundException("No agriculture found"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    
}

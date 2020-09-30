package com.diagnoPlant.Controllers;

import com.diagnoPlant.Repositorys.ExpertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expert")
public class ExpertController {
    @Autowired
    ExpertRepository expertRepository;


}

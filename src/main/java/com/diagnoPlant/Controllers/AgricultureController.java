package com.diagnoPlant.Controllers;

import com.diagnoPlant.Repositorys.AgricultureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/agriculture")
public class AgricultureController {

    @Autowired
    AgricultureRepository agricultureRepository;


}

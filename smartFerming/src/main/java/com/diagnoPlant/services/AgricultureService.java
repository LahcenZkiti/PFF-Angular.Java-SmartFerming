package com.diagnoPlant.services;

import java.util.List;
import java.util.Optional;

import com.diagnoPlant.Models.Agriculture;

public interface AgricultureService {
    
    Optional<List<Agriculture>> findAll();

    Optional<Agriculture> findById(Long id);
}

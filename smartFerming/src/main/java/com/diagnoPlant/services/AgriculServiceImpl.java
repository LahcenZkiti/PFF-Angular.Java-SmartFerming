package com.diagnoPlant.services;

import java.util.List;
import java.util.Optional;

import com.diagnoPlant.Models.Agriculture;
import com.diagnoPlant.Repositorys.AgricultureRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgriculServiceImpl implements AgricultureService {

    @Autowired
    private AgricultureRepository agriculRepository;

    @Override
    public Optional<List<Agriculture>> findAll() {
        return Optional.of(agriculRepository.findAll());
    }

    @Override
    public Optional<Agriculture> findById(Long id) {
        return agriculRepository.findById(id);
    }
    
}

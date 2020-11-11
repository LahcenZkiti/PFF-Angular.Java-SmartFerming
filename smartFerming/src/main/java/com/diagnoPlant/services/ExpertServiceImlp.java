package com.diagnoPlant.services;

import com.diagnoPlant.Models.Expert;
import com.diagnoPlant.Repositorys.ExpertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpertServiceImlp implements ExpertService {

    @Autowired
    private ExpertRepository expertRepository;

    @Override
    public Optional<List<Expert>> findAll() {
        return Optional.of(expertRepository.findAll());
    }

    @Override
    public Optional<Expert> findById(Long id) {
        return expertRepository.findById(id);
    }

    @Override
    public Optional<Expert> findByEmail(String email) {
        return expertRepository.findByEmail(email);
    }

    @Override
    public Optional<Expert> findByUsername(String username) {
        return expertRepository.findByUsername(username);
    }

    @Override
    public Optional<Expert> save(Expert expert) {
        return Optional.ofNullable(expertRepository.save(expert));
    }

    @Override
    public Optional<Expert> update(Expert expert) {
        return Optional.of(expertRepository.save(expert));
    }

    @Override
    public void deletById(Long id) {
        expertRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        expertRepository.deleteAll();
    }
}

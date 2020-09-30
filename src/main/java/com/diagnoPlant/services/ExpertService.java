package com.diagnoPlant.services;

import com.diagnoPlant.Models.Expert;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public interface ExpertService {

    /*
    * List des experts
    * @return List<Expert>
    * */
    Optional<List<Expert>> findAll(Sort sort);

    /*
     * trouver un expert par son id
     * @return expert
     * */
    Optional<Expert> findById(Long id);

    /*
     * trouver un expert par son email
     * @param email
     * */
    public Optional<Expert> findByEmail(String email);


    /*
     * trouver un expert par son username
     * @param email
     * */
    public Optional<Expert> findByUsername(String username);

    /*
    * Ajouter un expert
    * @param expert
    * */
    public Optional<Expert> save(Expert expert);



    /*
     * modifier un expert
     * @param expert
     * */
    public Optional<Expert> update(Expert expert);

    /*
     * Supprimer un expert
     * */
    void deletById(Long id);

    /*
     * Supprimer tout les experts
     * @return expert
     * */
    public void deleteAll();

}

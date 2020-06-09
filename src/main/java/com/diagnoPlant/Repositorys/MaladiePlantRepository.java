package com.diagnoPlant.Repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diagnoPlant.Models.MaladiePlante;

public interface MaladiePlantRepository extends JpaRepository<MaladiePlante, Long> {

	List<MaladiePlante> findByNomMaladieContains(String nomMaladie);

}

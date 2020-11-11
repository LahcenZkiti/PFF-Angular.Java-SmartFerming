package com.diagnoPlant.Repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diagnoPlant.Models.MaladiePlante;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MaladiePlantRepository extends JpaRepository<MaladiePlante, Long>, JpaSpecificationExecutor<MaladiePlante> {

	List<MaladiePlante> findByNomMaladieContains(String nomMaladie);

}

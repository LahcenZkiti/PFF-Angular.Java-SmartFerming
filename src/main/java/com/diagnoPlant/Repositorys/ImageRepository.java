package com.diagnoPlant.Repositorys;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.diagnoPlant.Models.Image;

/**
 * This interface extends all methods of JpaRepository
 * @author lahcen
 *
 */
@Repository
public interface ImageRepository extends JpaRepository<Image,Long>{
	
	@Query("select i from Image i where i.etatTraitement = false")
	public List<Image> getImageNonTrit();
	
	@Query("select i from Image i where i.etatTraitement = true")
	public List<Image> getImageTrit();
}
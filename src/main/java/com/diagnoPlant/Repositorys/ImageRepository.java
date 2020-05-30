package com.diagnoPlant.Repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diagnoPlant.Models.Image;

/**
 * This interface extends all methods of JpaRepository
 * @author lahcen
 *
 */
public interface ImageRepository extends JpaRepository<Image,Long>{

}
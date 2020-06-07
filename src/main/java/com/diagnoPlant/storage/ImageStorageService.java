package com.diagnoPlant.storage;

import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.diagnoPlant.Models.Image;

public interface ImageStorageService {

	public void init();

	public Image save(MultipartFile file);

	public Resource load(String filename);

	public void deleteAll();

	public Stream<Path> loadAll();
  
	public Image findById(Long id);
  
	public List<Image> findAll();
}
package com.diagnoPlant.storage;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import com.diagnoPlant.Models.Image;
import com.diagnoPlant.Repositorys.ImageRepository;

@Service
public class ImageStrorageServiceImpl implements ImageStorageService{
	
	@Autowired
	private ImageRepository imageRepository;

	private final Path root = Paths.get("uploads");

	  @Override
	  public void init() {
		  
	    try {
	      Files.createDirectory(root);
	    } catch (IOException e) {
	      throw new RuntimeException("Could not initialize folder for upload!");
	    }
	  }

	  @Override
	  public Image save(MultipartFile file) {
		  Image im = new Image();
		  
	    try {
	    	im.setImage(file.getOriginalFilename());
	    	im.setUrlImage("http://localhost:8080/images/"+file.getOriginalFilename());
	      Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
	      return imageRepository.save(im);
	    } catch (Exception e) {
	      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
	    }
	  }

	  @Override
	  public Resource load(String filename) {
	    try {
	      Path file = root.resolve(filename);
	      Resource resource = new UrlResource(file.toUri());

	      if (resource.exists() || resource.isReadable()) {
	        return resource;
	      } else {
	        throw new RuntimeException("Could not read the file!");
	      }
	    } catch (MalformedURLException e) {
	      throw new RuntimeException("Error: " + e.getMessage());
	    }
	  }

	  @Override
	  public void deleteAll() {
	    FileSystemUtils.deleteRecursively(root.toFile());
	  }

	  @Override
	  public Stream<Path> loadAll() {
	    try {
	      return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
	    } catch (IOException e) {
	      throw new RuntimeException("Could not load the files!");
	    }
	  }

	@Override
	public Image findById(Long id) {
		return imageRepository.findById(id).get();
	}

	@Override
	public List<Image> findAll() {
		return imageRepository.findAll();
	}
}

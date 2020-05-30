package com.diagnoPlant.Models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Image implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;
	private boolean etatTraitement;
	private String image;
	/**
	 * @param image
	 */
	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param id
	 */
	public Image(Long id) {
		super();
		this.id = id;
	}
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the etatTraitement
	 */
	public boolean isEtatTraitement() {
		return etatTraitement;
	}

	/**
	 * @param etatTraitement the etatTraitement to set
	 */
	public void setEtatTraitement(boolean etatTraitement) {
		this.etatTraitement = etatTraitement;
	}

	/**
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * @param image the image to set
	 */
	public void setImage(String image) {
		this.image = image;
	}
	
	



}
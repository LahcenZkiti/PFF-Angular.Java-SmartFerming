package com.diagnoPlant.Models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Image implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private boolean etatTraitement;
	private String image;
	private String urlImage;
	private String infosCompl ;
	
	@ManyToOne
	private MaladiePlante maladiePlante;
	/**
	 * @param image
	 */
	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param id
	 * @param image
	 * @param urlString
	 */
	public Image(Long id, String image, String urlString) {
		super();
		this.id = id;
		this.image = image;
		this.urlImage = urlString;
	}
	
	
	/**
	 * @param image
	 * @param urlString
	 */
	public Image(String image, String urlImage) {
		super();
		this.image = image;
		this.urlImage = urlImage;
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
	/**
	 * @return the urlImage
	 */
	public String getUrlImage() {
		return urlImage;
	}
	/**
	 * @param urlImage the urlImage to set
	 */
	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}
	/**
	 * @return the infosCompl
	 */
	public String getInfosCompl() {
		return infosCompl;
	}
	/**
	 * @param infosCompl the infosCompl to set
	 */
	public void setInfosCompl(String infosCompl) {
		this.infosCompl = infosCompl;
	}
	
	/**
	 * @return the maladiePlante
	 */
	public MaladiePlante getMaladiePlante() {
		return maladiePlante;
	}
	
	
	/**
	 * @param maladiePlante the maladiePlante to set
	 */
	public void setMaladiePlante(MaladiePlante maladiePlante) {
		this.maladiePlante = maladiePlante;
	}



}
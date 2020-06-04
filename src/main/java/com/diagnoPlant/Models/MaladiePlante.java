package com.diagnoPlant.Models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class MaladiePlante implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Long idMaladiePlante;
	private String nomMaladie;
	private String symptomes;
	private String causes;	
	private String traitement;
	private String actionsPreventives;
	
	public MaladiePlante() {
		super();
	}
	public MaladiePlante( String nomMaladie, String symptomes, String causes, String traitement, String actionsPreventives) {
		super();
		this.nomMaladie=nomMaladie;
		this.symptomes=symptomes;
		this.causes=causes;
		this.traitement=traitement;
		this.actionsPreventives=actionsPreventives;
	}
	/**
	 * @return the idMaladiePlante
	 */
	public Long getIdMaladiePlante() {
		return idMaladiePlante;
	}
	/**
	 * @return the nomMaladie
	 */
	public String getNomMaladie() {
		return nomMaladie;
	}
	/**
	 * @return the symptomes
	 */
	public String getSymptomes() {
		return symptomes;
	}
	/**
	 * @return the causes
	 */
	public String getCauses() {
		return causes;
	}
	/**
	 * @return the traitement
	 */
	public String getTraitement() {
		return traitement;
	}
	/**
	 * @return the actionsPreventives
	 */
	public String getActionsPreventives() {
		return actionsPreventives;
	}
	/**
	 * @param idMaladiePlante the idMaladiePlante to set
	 */
	public void setIdMaladiePlante(Long idMaladiePlante) {
		this.idMaladiePlante = idMaladiePlante;
	}
	/**
	 * @param nomMaladie the nomMaladie to set
	 */
	public void setNomMaladie(String nomMaladie) {
		this.nomMaladie = nomMaladie;
	}
	/**
	 * @param symptomes the symptomes to set
	 */
	public void setSymptomes(String symptomes) {
		this.symptomes = symptomes;
	}
	/**
	 * @param causes the causes to set
	 */
	public void setCauses(String causes) {
		this.causes = causes;
	}
	/**
	 * @param traitement the traitement to set
	 */
	public void setTraitement(String traitement) {
		this.traitement = traitement;
	}
	/**
	 * @param actionsPreventives the actionsPreventives to set
	 */
	public void setActionsPreventives(String actionsPreventives) {
		this.actionsPreventives = actionsPreventives;
	}
	@Override
	public String toString() {
		return "MaladiePlante [idMaladiePlante=" + idMaladiePlante + ", nomMaladie=" + nomMaladie + ", symptomes="
				+ symptomes + ", causes=" + causes + ", traitement=" + traitement + ", actionsPreventives="
				+ actionsPreventives + "]";
	}

}
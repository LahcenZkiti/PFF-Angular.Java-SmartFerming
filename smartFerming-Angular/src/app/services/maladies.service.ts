import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaladiePlante } from '../models/maladies-plant';
import { Observable } from 'rxjs';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class MaladiesService {

  /**
   * Api url of maladies service
   */
  API_URL = 'http://localhost:8080/';

  /**
   * Maladies  of maladies service
   */
  maladies : MaladiePlante;

  /**
   * Creates an instance of maladies service.
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Adds one
   * @param maladie 
   * @returns one 
   */
  addOne(maladie: MaladiePlante): Observable<MaladiePlante> {
    return this.http.post<MaladiePlante>(this.API_URL + 'addMaladie' , maladie);
  }

  /**
   * Finds all
   * @returns all 
   */
  findAll(): Observable<MaladiePlante> {
    return this.http.get<MaladiePlante>(this.API_URL + 'listMaladies');
  }

  /**
   * Finds by id
   * @param id 
   * @returns by id 
   */
  findById(id: number): Observable<MaladiePlante> {
    return this.http.get<MaladiePlante>(this.API_URL + 'listMaladies/' + id);
  }

  /**
   * Deletes maladies service
   * @param id 
   * @returns delete 
   */
  delete(id: number): Observable<MaladiePlante> {
    return this.http.delete<MaladiePlante>(this.API_URL + 'listMaladies/' + id)
  }

  /**
   * Updates maladies service
   * @param maladie 
   * @returns update 
   */
  update(maladie: MaladiePlante ): Observable<MaladiePlante> {
    return this.http.put<MaladiePlante>(this.API_URL + 'listMaladies/' + maladie.id, maladie)
  }
}

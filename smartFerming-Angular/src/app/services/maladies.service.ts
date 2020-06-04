import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaladiesPlant } from '../models/maladies-plant';
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
  maladies : MaladiesPlant;

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
  addOne(maladie: MaladiesPlant): Observable<MaladiesPlant> {
    return this.http.post<MaladiesPlant>(this.API_URL + 'addMaladie' , maladie);
  }

  /**
   * Finds all
   * @returns all 
   */
  findAll(): Observable<MaladiesPlant> {
    return this.http.get<MaladiesPlant>(this.API_URL + 'listMaladies');
  }

  /**
   * Finds by id
   * @param id 
   * @returns by id 
   */
  findById(id: number): Observable<MaladiesPlant> {
    return this.http.get<MaladiesPlant>(this.API_URL + 'listMaladies/' + id);
  }

  /**
   * Deletes maladies service
   * @param id 
   * @returns delete 
   */
  delete(id: number): Observable<MaladiesPlant> {
    return this.http.delete<MaladiesPlant>(this.API_URL + 'listMaladies/' + id)
  }

  /**
   * Updates maladies service
   * @param maladie 
   * @returns update 
   */
  update(maladie: MaladiesPlant ): Observable<MaladiesPlant> {
    return this.http.put<MaladiesPlant>(this.API_URL + 'listMaladies/' + maladie.id, maladie)
  }
}

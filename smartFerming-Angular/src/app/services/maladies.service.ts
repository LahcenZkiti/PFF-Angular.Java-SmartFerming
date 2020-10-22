import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaladiePlante } from '../models/maladies-plant';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/mld';


/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class MaladiesService {


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
    return this.http.post<MaladiePlante>(`${API_URL}`, maladie);
  }

  /**
   * Finds all
   * @returns all
   */
  findAll(): Observable<MaladiePlante[]> {
    return this.http.get<MaladiePlante[]>(`${API_URL}`);
  }

  /**
   * Finds by id
   * @param id
   * @returns by id
   */
  findById(id: number): Observable<MaladiePlante> {
    return this.http.get<MaladiePlante>(`${API_URL}/${id}`);
  }

  /**
   * Deletes maladies service
   * @param id
   * @returns delete
   */
  delete(id: number): Observable<MaladiePlante> {
    return this.http.delete<MaladiePlante>(`${API_URL}/${id}`)
  }

  /**
   * Updates maladies service
   * @param maladie
   * @returns update
   */
  update(maladie: MaladiePlante ): Observable<MaladiePlante> {
    return this.http.put<MaladiePlante>(`${API_URL}/ ${maladie.idMaladiePlante}`, maladie)
  }

  search(maladie: MaladiePlante): Observable<MaladiePlante>{
    return this.http.get<MaladiePlante>(`${API_URL}/nomMLD${maladie}`);
  }

}

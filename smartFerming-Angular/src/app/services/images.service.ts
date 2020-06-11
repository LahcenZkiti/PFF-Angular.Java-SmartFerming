import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/images';
import { Observable } from 'rxjs';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  /**
   * Api url of images service
   */
  API_URL = 'http://localhost:8080/';

  /**
   * Images  of images service
   */
  images : Image;

  /**
   * Creates an instance of images service.
   * @param http 
   */
  constructor(private http:HttpClient) { }

  /**
   * Finds all the images
   * @returns all 
   */
  findAll() : Observable<Image>  {
    return this.http.get<Image>(this.API_URL + 'images');
  }

  /**
   * Finds all the images that are not trait 
   * @returns all non trit 
   */
  findAllNonTrit() : Observable<Image> {
    return this.http.get<Image>(this.API_URL + 'images/nontraiter');
  }

  /**
   * Finds all the images that are trait
   * @returns all trit 
   */
  findAllTrit() : Observable<Image> {
    return this.http.get<Image>(this.API_URL + 'images/traiter');
  }

  /**
   * Finds by id
   * @param id 
   * @returns by id 
   */
  findByID(id: number) : Observable<Image> {
    return this.http.get<Image>(this.API_URL + 'images/' + id)
  }


  /**
   * Deletes by id
   * @param id 
   * @returns by id 
   */
  deleteById(id: number) : Observable<Image> {
    return this.http.delete<Image>(this.API_URL + 'images/' + id);
  }

  /**
   * Updates by id
   * @param image 
   * @returns by id 
   */
  updateById(image: Image) : Observable<Image> {
    return this.http.put<Image>(this.API_URL + 'images/' + image.id, image);
  }


  /**
   * Add response to user
   * @param image 
   * @returns resp 
   */
  addResp(image: Image) : Observable<Image>  {
    return this.http.put<Image>(this.API_URL + 'donneravis/'+image.id , image);
  }

}

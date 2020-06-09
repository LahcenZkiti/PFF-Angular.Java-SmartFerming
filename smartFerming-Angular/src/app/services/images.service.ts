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
   * Finds all
   * @returns all 
   */
  findAll() : Observable<Image>  {
    return this.http.get<Image>(this.API_URL + 'images');
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
   * Adds resp
   * @param image 
   * @returns resp 
   */
  addResp(image: Image) : Observable<Image>  {
    return this.http.put<Image>(this.API_URL + 'donneravis/'+image.id , image);
  }

}

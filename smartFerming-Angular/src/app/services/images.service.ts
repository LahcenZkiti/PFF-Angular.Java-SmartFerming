import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from '../models/images';
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
  images : Images;

  /**
   * Creates an instance of images service.
   * @param http 
   */
  constructor(private http:HttpClient) { }

  /**
   * Finds all
   * @returns all 
   */
  findAll() : Observable<Images>  {
    return this.http.get<Images>(this.API_URL + 'images');
  }

  /**
   * Finds by id
   * @param id 
   * @returns by id 
   */
  findByID(id: number) : Observable<Images> {
    return this.http.get<Images>(this.API_URL + 'image/' + id);
  }

  /**
   * Deletes by id
   * @param id 
   * @returns by id 
   */
  deleteById(id: number) : Observable<Images> {
    return this.http.delete<Images>(this.API_URL + 'image/' + id);
  }

  /**
   * Updates by id
   * @param image 
   * @returns by id 
   */
  updateById(image: Images) : Observable<Images> {
    return this.http.put<Images>(this.API_URL + 'image/' + image.id, image);
  }
}

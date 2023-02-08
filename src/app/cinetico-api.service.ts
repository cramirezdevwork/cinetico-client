import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CineticoApiService {

  urlBase: string;
  constructor(private http:HttpClient) {
    this.urlBase = 'http://127.0.0.1:8000/api/';
  }

  /**
   * Returns all movies
   */
  getMovies(): Observable<any>{
      return this.http.get(this.urlBase+'movies');
  }

  /**
   * Returns movie information based on movie id
   * @param movieId
   */
  getMovie(movieId:number): Observable<any>{
      return  this.http.get(this.urlBase+'movie/'+movieId);
  }
}

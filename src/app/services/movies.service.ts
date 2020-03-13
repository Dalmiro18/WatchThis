import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { answerMDb } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    return this.http.get<answerMDb>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=04d3a9add65f0f3926b167628b1fd575&language=es&include_image_language=es`)
  }
}

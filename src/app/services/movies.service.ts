import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { answerMDb } from '../interfaces/interface';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query : string){
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`

    return this.http.get<answerMDb>(query);
  }

  //getFeature es para que el cataloglo te lo muestre segun las pelis que hayan durtante el mes

  getFeature(){

    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1 , 0).getDate();
    const month = today.getMonth() + 1;

    let monthString;
    
    if(month < 10){
      monthString = '0' + month;
      console.log( 'IF'+ monthString);
    }
    else{
      monthString = month;
      console.log(monthString);
    }
    
    const start =  `${ today.getFullYear() }-${monthString}-01`
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`
    console.log('START: ' + start, 'END: ' + end);


   return this.executeQuery<answerMDb>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`)
  }
}

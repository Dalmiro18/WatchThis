import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

newestMovies: Movie[] = [];
slideOpts = {
  slidesPerView: 1.9,
  freeMode: true
};

  constructor(private movieService: MoviesService) {}


  ngOnInit(){
    this.movieService.getFeature()
    .subscribe(answ =>{
      this.newestMovies = answ.results;
      console.log(answ);
    });
  }
}

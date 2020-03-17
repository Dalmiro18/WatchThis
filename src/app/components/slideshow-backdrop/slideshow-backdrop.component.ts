import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movie:Movie[] = [];
  
  slideOpts = {
    slidesPerView: 1.9,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}

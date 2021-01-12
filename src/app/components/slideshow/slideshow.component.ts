import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
  ]
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() movies: Movie[];
  
  mySwiper: Swiper;
  constructor() { }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true
    });
  }

  ngOnInit(): void {
    //console.log(this.movies);
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styles: [
  ]
})
export class PeliculasPosterGridComponent implements OnInit {
  
  @Input() movies: Movie[] = []

  constructor( private router: Router ) { }

  ngOnInit(): void {
    //console.log(this.movies);
  }

  onMovieClick( movie: Movie ){
    // console.log(movie);
    this.router.navigate(['/pelicula', movie.id]);
  }
}

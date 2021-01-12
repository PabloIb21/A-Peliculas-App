import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  public movies: Movie[] = [];
  public busqueda: string = '';

  constructor( private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params.texto);
      this.busqueda = params.texto;
      this.peliculasService.buscarPeliculas( params.texto ).subscribe( movies => {
        this.movies = movies;
      });
    });
  }

}

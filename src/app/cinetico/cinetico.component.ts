import { Component } from '@angular/core';
import { CineticoApiService } from "../cinetico-api.service";

@Component({
  selector: 'app-cinetico',
  templateUrl: './cinetico.component.html',
  styleUrls: ['./cinetico.component.css']
})
export class CineticoComponent {
  movies: any;
  filterMovie = ''

  constructor(private api:CineticoApiService) {
    this.api.getMovies().subscribe(data =>{
        this.movies = data;
        console.log(this.movies);
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CineticoApiService } from "../cinetico-api.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  public movieId: number
  public movieResult: any;

  constructor(private route:ActivatedRoute, private api:CineticoApiService) {
    this.movieId = this.route.snapshot.params['id'];
    this.getMovie();
  }

  /**
   * Request for movie information based on ID
   * @private
   */
  private getMovie(){
    this.api.getMovie(this.movieId).subscribe(movieInformation =>{
       this.movieResult = movieInformation;
       console.log(this.movieResult);
    });
  }
}

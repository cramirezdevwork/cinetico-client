import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(movies: any, ...searchData: any): any {
     const movieResults = [];
     for (const movie of movies){
       if (movie.name.toLowerCase().indexOf(searchData) > -1){
         movieResults.push(movie);
       }
     }

     return movieResults;
  }

}

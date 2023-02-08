import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CineticoComponent} from "./cinetico/cinetico.component";
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [
  {
    path: '',
    component: CineticoComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CineticoComponent} from "./cinetico/cinetico.component";

const routes: Routes = [
  {
    path: '',
    component: CineticoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

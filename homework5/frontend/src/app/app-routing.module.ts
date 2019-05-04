import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import {ProfileComponent} from './profile/profile.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

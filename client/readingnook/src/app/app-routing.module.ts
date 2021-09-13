import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreLinkComponent } from './genre-link/genre-link.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: HomeComponent },
    { path: 'genres', component: GenreLinkComponent },
    { path: 'home', component: HomeComponent },
    { path: 'groups', component: SearchComponent }
    //TODO: wildcard
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

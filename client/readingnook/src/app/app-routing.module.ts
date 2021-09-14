import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreLinkComponent } from './genre-link/genre-link.component';
import { AddGroupComponent } from './groups/add-group/add-group.component';
import { GroupsComponent } from './groups/groups/groups.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: HomeComponent },
    { path: 'genres', component: GenreLinkComponent },
    { path: 'home', component: HomeComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'addGroup', component: AddGroupComponent}
    //TODO: wildcard
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

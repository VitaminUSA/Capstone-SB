import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreLinkComponent } from './genre-link/genre-link.component';
import { AddEditGroupComponent } from './groups/add-edit-group/add-edit-group.component';
import { AddEditMembersComponent } from './groups/add-edit-members/add-edit-members.component';
import { GroupsComponent } from './groups/groups/groups.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: HomeComponent },
    { path: 'genres', component: GenreLinkComponent },
    { path: 'home', component: HomeComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'addGroup', component: AddEditGroupComponent },
    { path: 'editGroup', component: AddEditGroupComponent },
    { path: 'addMember', component: AddEditMembersComponent },
    { path: 'editMember', component: AddEditMembersComponent },
    { path: '**', component: HomeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

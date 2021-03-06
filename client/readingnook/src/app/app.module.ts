import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { GenreLinkComponent } from './genre-link/genre-link.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups/groups.component';
import { GroupTilesComponent } from './groups/group-tiles/group-tiles.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditGroupComponent } from './groups/add-edit-group/add-edit-group.component';
import { AddEditMembersComponent } from './groups/add-edit-members/add-edit-members.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    GenreLinkComponent,
    HomeComponent,
    GroupsComponent,
    GroupTilesComponent,
    AddEditGroupComponent,
    AddEditMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

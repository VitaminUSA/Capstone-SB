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
import { SearchComponent } from './search/search.component';
import { GroupsComponent } from './groups/groups/groups.component';
import { GroupTilesComponent } from './groups/group-tiles/group-tiles.component';
import { AddGroupComponent } from './groups/add-group/add-group.component';
import { EditGroupComponent } from './groups/edit-group/edit-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    GenreLinkComponent,
    HomeComponent,
    SearchComponent,
    GroupsComponent,
    GroupTilesComponent,
    AddGroupComponent,
    EditGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

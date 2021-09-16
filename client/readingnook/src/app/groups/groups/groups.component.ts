import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { GenreService } from 'src/app/services/genre.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  genrePlaceholderValue = "noGenre";
  visible = true;
  groupObservable$;
  groups;
  allGenres;
  selectedGenre;

  isLoading = true;

  constructor(private location: Location, private groupService: GroupService, private genreService: GenreService) {
    
  }

  ngOnInit(): void {
    this.isLoading = true;
    const state = this.location.getState();
    if (state['searchFilter'] == 1) {
      this.selectedGenre = state['organization'].id;
    }

    this.groupObservable$ = this.groupService.getAllGroups();
    if (this.selectedGenre !== undefined) {
      this.groupByOrgId(this.selectedGenre);
    }

    this.allGenres = this.genreService.getAllGenres().subscribe((allGenres)=>{this.allGenres=allGenres});
    this.observeGroup();
    console.log(this.location.getState());
  }

  selectGenre(evt): void {
    console.log(evt.target.value);
    if (evt.target.value == this.genrePlaceholderValue) {
      this.allGroups();
      this.observeGroup();
      return
    }

    this.selectedGenre = evt.target.value;
    this.groupByOrgId(this.selectedGenre);
    this.observeGroup();
    return;
  }

  observeGroup(): void {
    this.groupObservable$.subscribe((groups)=>this.groups = groups);
    this.isLoading = false;
  }

  groupByOrgId(orgId): void {
    this.groupObservable$ = this.groupService.getGroupsByOrganizationId(orgId);
  }

  allGroups(): void {
    this.groupObservable$ = this.groupService.getAllGroups();
  }

  toggleHideFullGroups(evt): void {
    console.log('changed');
    this.visible = !this.visible;
  }

}

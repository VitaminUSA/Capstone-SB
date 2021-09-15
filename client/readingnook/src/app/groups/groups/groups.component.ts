import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Group } from 'src/app/models/Group';
import { GenreService } from 'src/app/services/genre.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groupObservable$;
  groups;
  editGroupFlag = true;
  allGenres;
  selectedGenre;

  isLoading = true;

  constructor(private location: Location, private groupService: GroupService, private genreService: GenreService) {
    
  }

  ngOnInit(): void {
    const state = this.location.getState();
    if (state['searchFilter'] == 1) {
      this.selectedGenre = state['organization'].id;
    }

    this.groupObservable$ = this.groupService.getAllGroups();
    if (this.selectedGenre !== undefined) {
      this.groupObservable$ = this.groupService.getGroupsByOrganizationId(this.selectedGenre);
    }

    this.allGenres = this.genreService.getAllGenres().subscribe((allGenres)=>{this.allGenres=allGenres});
    this.groupObservable$.subscribe((groups)=>this.groups = groups);
    this.isLoading = false;
    console.log(this.location.getState());
  }

  changeGroups(): void {
    this.groups = [];
  }

}

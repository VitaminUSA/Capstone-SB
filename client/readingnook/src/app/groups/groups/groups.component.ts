import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Group } from 'src/app/models/Group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groupObservable$ = this.groupService.getAllGroups();
  groups;
  editGroupFlag = true;

  constructor(private groupService: GroupService) {
    /*
    this.groupService.getAllGroups().subscribe((allGroups) => {
      this.groups = allGroups
      console.log(allGroups);
      console.log(this.groups);
    });
    */
  }

  ngOnInit(): void {
    
  }

}

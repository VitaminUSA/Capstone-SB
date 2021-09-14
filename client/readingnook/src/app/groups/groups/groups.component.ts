import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  constructor() {

    const group1 = new Group();
    group1.genreName = "Horror";
    group1.groupName = "Horror enthusiasts";
    group1.id = 1;
    group1.maxGroupSize = 20;
    group1.members = [];
    group1.sponsorEmail = "test@test.com";
    group1.sponsorName = "Joe Johnson";
    group1.sponsorPhone = "888-888-8888";

    const group2 = new Group();
    group2.genreName = "Horror";
    group2.groupName = "Horror enthusiasts";
    group2.id = 1;
    group2.maxGroupSize = 20;
    group2.members = [];
    group2.sponsorEmail = "test@test.com";
    group2.sponsorName = "Joe Johnson";
    group2.sponsorPhone = "888-888-8888";

    this.groups = [group1, group2];
  }

  ngOnInit(): void {
  }

}

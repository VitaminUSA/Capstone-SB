import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-group-tiles',
  templateUrl: './group-tiles.component.html',
  styleUrls: ['./group-tiles.component.css']
})
export class GroupTilesComponent implements OnInit {

  @Input() group: Group;
  @Input() genres;
  groupId;

  constructor() { }

  ngOnInit(): void {
    this.groupId = this.group['GroupId'];
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-group-tiles-container',
  templateUrl: './group-tiles-container.component.html',
  styleUrls: ['./group-tiles-container.component.css']
})
export class GroupTilesContainerComponent implements OnInit {

  @Input() groups: Group[];

  constructor() { }

  ngOnInit(): void {}

  resetGroups(): void {
    this.groups = [];
  }

}

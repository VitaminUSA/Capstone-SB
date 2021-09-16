import { Component, Input, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Group } from 'src/app/models/Group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {
 
  groupForm: FormGroup;
  allGenres;
  genres;
  state;
  group;
  groupId;

  modeId: number;
  mode: string;

  //TODO: Validators for form fields

  createForm(): void {
    this.groupForm = this.fb.group({
      GroupName: ['', Validators.required],
      OrganizationName: ['', Validators.required],
      SponsorName: ['', Validators.required],
      SponsorPhone: ['', Validators.required],
      SponsorEmail: ['', Validators.required],
      MaxGroupSize: ['0', Validators.required]
    });
  }

  //make this accept a group and set those values
  editGroupForm(): void {
    this.groupForm = this.fb.group({
      GroupId: [this.group['GroupId'], Validators.required],
      GroupName: [this.group['GroupName'], Validators.required],
      OrganizationName: [this.group['OrganizationName'], Validators.required],
      SponsorName: [this.group['SponsorName'], Validators.required],
      SponsorPhone: [this.group['SponsorPhone'], Validators.required],
      SponsorEmail: [this.group['SponsorEmail'], Validators.required],
      MaxGroupSize: [this.group['MaxGroupSize'], Validators.required]
    });
  }

  resetAddFormGroup(): void {
    this.groupForm.reset();
  }

  submitGroupForm(group: Group): void {
    console.log(group);
    if(this.groupForm.invalid) {
      console.log("Invalid Form");
      return;
    }
    if (this.modeId === 1) {
      this.groupService.updateGroup(group).subscribe((res)=>{group = res})
    } else {
      this.groupService.addGroup(group).subscribe((res)=>{group = res})
    }
  
    console.log(group);
    this.location.back(); //Todo: Preserve previous state of page? Or do a popup for this add group entirely
  }

  constructor(private fb: FormBuilder, private location: Location, private genreService: GenreService, private groupService: GroupService) {}

  ngOnInit(): void {
    if (this.state === undefined) {
      this.state = this.location.getState();
      this.genres = this.state['genres'];
    }
    if (this.state['genres'] === undefined) {
      this.genres = this.genreService.getAllGenres().subscribe((genres)=>{this.genres=genres});
    } else {
      this.genres = this.state['genres'];
    }

    if (this.state['modeId'] === 1 && this.state['mode'] === 'edit') {
      this.mode = this.state['mode'];
      this.modeId = this.state['modeId'];
      if (this.state['group'] === undefined) {
        console.log('error no group info to edit');
      } else {
        this.group = this.state['group'];
        this.groupId = this.group['GroupId'];
        this.editGroupForm();
      }
    } else {
      this.createForm();
    }
    console.log(this.state);
  }
}

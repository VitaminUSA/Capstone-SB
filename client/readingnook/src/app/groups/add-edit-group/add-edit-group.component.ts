import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/models/Group';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

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
      GroupId: [''],
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

  goBack(): void {
    this.router.navigateByUrl('/groups');
  }

  deleteGroup(groupId: string): void {
    console.log('delete group')
    this.groupService.deleteGroup(groupId).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/groups');
    });
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
    this.router.navigateByUrl('/editGroup', {state: {mode: 'edit', modeId: 1, group:group, genres:this.genres, origin: '/groups'}});
  }

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private location: Location, 
    private genreService: GenreService, 
    private groupService: GroupService
    ) {}

  ngOnInit(): void {
    if (this.state === undefined) {
      this.state = this.location.getState();
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
        if (this.state['refresh'] === 1) {
          this.groupService.getGroupById(this.groupId).subscribe((result)=>{this.group = result});
        }
        
        this.editGroupForm();
      }
    } else {
      this.createForm();
    }
    console.log(this.state);
  }
}

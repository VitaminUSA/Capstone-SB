import { Component, Input, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit {
 
  addGroupForm: FormGroup;
  allGenres;
  genres;
  state;
  @Input() group?: Group;

  modeId: number;
  mode: string;

  //TODO: Validators for form fields

  createForm(): void {
    this.addGroupForm = this.fb.group({
      groupName: ['', Validators.required],
      genreName: ['', Validators.required],
      sponsorName: ['', Validators.required],
      sponsorPhone: ['', Validators.required],
      sponsorEmail: ['', Validators.required],
      groupSize: ['0', Validators.required]
    });
  }

  //make this accept a group and set those values
  editGroupForm(): void {
    this.addGroupForm = this.fb.group({
      groupName: [this.group['GroupName'], Validators.required],
      genreName: [this.group['OrganizationName'], Validators.required],
      sponsorName: [this.group['SponsorName'], Validators.required],
      sponsorPhone: [this.group['SponsorPhone'], Validators.required],
      sponsorEmail: [this.group['SponsorEmail'], Validators.required],
      groupSize: [this.group['MaxGroupSize'], Validators.required]
    });
  }

  groupRetrieved(group: Group): void {
    this.group = group;
    this.addGroupForm.setValue({
      id: this.group.id,
      groupName: this.group.groupName,
      genreName: this.group.genreName,
      sponsorName: this.group.sponsorName,
      sponsorPhone: this.group.sponsorPhone,
      sponsorEmail: this.group.sponsorEmail,
      groupSize: this.group.maxGroupSize
    });
  }

  resetAddFormGroup(): void {
    this.addGroupForm.reset();
  }

  addGroup(group: Group): void {
    console.log(group);
    this.location.back(); //Todo: Preserve previous state of page? Or do a popup for this add group entirely
  }

  constructor(private fb: FormBuilder, private location: Location, private genreService: GenreService) {}

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
        this.editGroupForm();
      }
    } else {
      this.createForm();
    }
    console.log(this.state);
  }
}

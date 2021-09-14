import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  addFormGroup: FormGroup;
  addGroupForm = true;
  allGenres;
  group: Group;

  //TODO: Validators for form fields

  createForm(): void {
    this.addFormGroup = this.fb.group({
      groupName: [''],
      genreName: [''],
      sponsorName: [''],
      sponsorPhone: [''],
      sponsorEmail: [''],
      groupSize: ['0']
    });
  }

  groupRetrieved(group: Group): void {
    this.group = group;
    this.addFormGroup.setValue({
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
    this.addFormGroup.reset();
  }

  addGroup(group: Group): void {
    console.log(group);
    this.location.back(); //Todo: Preserve previous state of page? Or do a popup for this add group entirely
  }

  constructor(private fb: FormBuilder, private location: Location, private genreService: GenreService) {
    this.allGenres = genreService.getAllGenres();
    this.createForm();
   }

  ngOnInit(): void {
    this.createForm();
    this.allGenres = this.genreService.getAllGenres();
  }
}

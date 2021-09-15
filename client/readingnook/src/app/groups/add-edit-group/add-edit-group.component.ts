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
  @Input() editGroupFlag: boolean;
  addGroupFlag = true;
  addGroupForm: FormGroup;
  allGenres;
  @Input() group?: Group;

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
      groupName: ['test', Validators.required],
      genreName: ['test', Validators.required],
      sponsorName: ['test', Validators.required],
      sponsorPhone: ['test', Validators.required],
      sponsorEmail: ['test', Validators.required],
      groupSize: ['20', Validators.required]
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
    this.allGenres = this.genreService.getAllGenres().subscribe((allGenres)=>{this.allGenres=allGenres});
    console.log(this.editGroupFlag);
    if (this.editGroupFlag) {
      this.editGroupForm();
    } else {
      this.createForm();
    }
  }
}

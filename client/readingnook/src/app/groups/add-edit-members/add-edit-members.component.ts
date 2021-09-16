import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group';
import { Member } from 'src/app/models/Member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-edit-members',
  templateUrl: './add-edit-members.component.html',
  styleUrls: ['./add-edit-members.component.css']
})
export class AddEditMembersComponent implements OnInit {

  state;
  operationMode;
  memberForm: FormGroup;
  groupId: string;
  group;
  member;
  memberId;

  createForm(): void {
    this.memberForm = this.fb.group({
      GroupId: [''],
      MemberId: [''],
      MemberName: ['', Validators.required],
      MemberEmail: ['', Validators.required],
      MemberPhone: ['', Validators.required]
    });
  }

  editForm(): void {
    this.memberForm = this.fb.group({
      GroupId: [this.groupId, Validators.required],
      MemberId: [this.member['MemberId'], Validators.required],
      MemberName: [this.member['MemberName'], Validators.required],
      MemberEmail: [this.member['MemberEmail'], Validators.required],
      MemberPhone: [this.member['MemberPhone'], Validators.required]
    });
  }

  submitMemberForm(member: Member): void {
    if (this.state['modeId'] === 1 && this.state['mode'] === 'add') {
      console.log('add member');
      this.groupService.addMemberToGroup(this.groupId, member).subscribe((res)=>{this.member = res});
      
    } else {
      console.log('edit member');
      this.groupService.editMemberInGroup(this.groupId, member).subscribe((res)=>{this.member = res});
      
    }
    //TODO: Refactor this to utilize the already available groupId instead of having to fetch the whole group.
    //It also seems that it's getting the data too fast here and the member is not updated quite yet.
    this.groupService.getGroupById(this.groupId).subscribe((res)=> {
      this.router.navigateByUrl(this.state['origin'], {state: {mode: 'edit', modeId: 1, group: res, refresh: 1}});
    });
  }

  goBack(): void {
    this.location.back();
  }

  deleteMember(member: Member): void {

    this.groupService.getGroupById(this.groupId).subscribe((result)=>{this.group = result;})
    console.log(this.group);
    this.groupService.deleteMemberInGroup(this.groupId, member['MemberId']).subscribe((res)=>{
      this.router.navigateByUrl(this.state['origin'], {state: {mode: 'edit', 
      modeId: 1, 
      group: this.group, 
      refresh: 1}});
    });
  }

  constructor(private groupService: GroupService, private fb: FormBuilder, private location: Location, private router: Router) { }

  ngOnInit(): void {
    console.log(this.state);
    if (this.state === undefined) {
      this.state = this.location.getState();
      console.log(this.state);
      this.operationMode = this.state['modeId'];
    }

    this.group = this.state['group'];
    if (this.group === undefined) {
      this.goBack();
    }
    this.groupId = this.group['GroupId'];
    
    if (this.state['modeId'] === 1 && this.state['mode'] === 'add') {
      console.log('add');
      this.createForm();
    } else {
      this.member = this.state['member'];
      if (this.member !== undefined) {
        this.memberId = this.member['MemberId'];
      }
      console.log('edit');
      this.editForm();
    }
    
  }

}

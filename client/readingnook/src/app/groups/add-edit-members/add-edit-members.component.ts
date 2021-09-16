import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/models/Member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-edit-members',
  templateUrl: './add-edit-members.component.html',
  styleUrls: ['./add-edit-members.component.css']
})
export class AddEditMembersComponent implements OnInit {

  state;
  memberForm: FormGroup;
  groupId: string;
  member;

  createForm(): void {
    this.memberForm = this.fb.group({
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
      console.log(this.member);
    } else {
      console.log('edit member');
      this.groupService.editMemberInGroup(this.groupId, member).subscribe((res)=>{this.member = res});
      console.log(this.member);
    }
    //TODO: Route back to edit Group so that members get reloaded
    this.location.back();
  }

  constructor(private groupService: GroupService, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    if (this.state === undefined) {
      this.state = this.location.getState();
      console.log(this.state);
      this.member = this.state['member'];
      this.groupId = this.state['groupId'];
    }
    if (this.state['modeId'] === 1 && this.state['mode'] === 'add') {
      console.log('add');
      this.createForm();
    } else {
      console.log('edit');
      this.editForm();
    }
    
  }

}

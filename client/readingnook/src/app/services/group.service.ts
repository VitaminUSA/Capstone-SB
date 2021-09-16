import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl: string = 'http://localhost:8082/api/groups/';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }

  getAllGroups(): Observable<Group> {
    return this.http.get<Group>(this.baseUrl);
  }

  getGroupById(id: string): Observable<Group> {
    return this.http.get<Group>(this.baseUrl + id);
  }

  getGroupsByOrganizationId(id: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl + 'byorganization/' + id);
  }

  getMemberOfGroup(groupId, memberId): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + groupId + '/members/' + memberId);
  }

  addGroup(group: Group): Observable<Group> {
    const result: Observable<Group> = this.http.post<Group>(`${this.baseUrl}`, group, this.jsonContentTypeHeaders);
    console.log(result);
    return result;
  }

  updateGroup(group: Group): Observable<Group> {
    const result: Observable<Group> = this.http.put<Group>(`${this.baseUrl}`, group, this.jsonContentTypeHeaders);
    console.log(result);
    return result;
  }

  deleteGroup(groupId: string): Observable<Group> {
    const result: Observable<Group> = this.http.delete<Group>(`${this.baseUrl}${groupId}`);
    console.log(result);
    return result;
  }

  addMemberToGroup(groupId: string, member: Member): Observable<Member> {
    const result: Observable<Member> = this.http.post<Member>(`${this.baseUrl}${groupId}/members`, member, this.jsonContentTypeHeaders);
    console.log(result);
    return result;
  }

  editMemberInGroup(groupId: string, member: Member): Observable<Member> {
    const result: Observable<Member> = this.http.put<Member>(`${this.baseUrl}${groupId}/members`, member, this.jsonContentTypeHeaders);
    console.log(result);
    return result;
  }

  deleteMemberInGroup(groupId: string, memberId: string): Observable<Member> {
    const result: Observable<Member> = this.http.delete<Member>(`${this.baseUrl}${groupId}/members/${memberId}`);
    console.log(result);
    return result;
  }

  constructor(private http: HttpClient) { }
}

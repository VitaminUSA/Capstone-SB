import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl: string = 'http://localhost:8082/api/';

  getAllGroups(): Observable<Group> {
    return this.http.get<Group>(this.baseUrl + 'groups');
  }

  getGroupById(id: string): Observable<Group> {
    return this.http.get<Group>(this.baseUrl + 'groups/' + id);
  }

  getGroupsByOrganizationId(id: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl + 'groups/byorganization/' + id);
  }

  getMemberOfGroup(groupId, memberId): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + 'groups/' + groupId + '/members/' + memberId);
  }

  constructor(private http: HttpClient) { }
}

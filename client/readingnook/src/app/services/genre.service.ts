import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseUrl: string = 'http://localhost:8082/api/';
  private groupsPath: string = 'organizations';

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl + this.groupsPath);
  }
  
  constructor(private http: HttpClient) { }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  getGenres(): string[] {
    const results: string[] = ["Horror", "Comedy", "Romance", "Sci-Fi"];
    return results;
  }

  constructor() { }
}

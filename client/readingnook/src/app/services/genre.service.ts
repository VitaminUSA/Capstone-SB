import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  getAllGenres(): Genre[] {

    const genre = new Genre();
    genre.description = "Generic genre Description";
    genre.name = "Horror";
    genre.id = 1;

    const genre2 = new Genre();
    genre2.description = "Generic genre Description";
    genre2.name = "Comedy";
    genre2.id = 2;

    const genre3 = new Genre();
    genre3.description = "Generic genre Description";
    genre3.name = "Sci-Fi";
    genre3.id = 3;

    const results: Genre[] = [genre, genre2, genre3];
    return results;
  }

  getGenres(): string[] {
    const results: string[] = ["Horror", "Comedy", "Romance", "Sci-Fi"];
    return results;
  }

  constructor() { }
}

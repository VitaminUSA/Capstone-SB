import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-link',
  templateUrl: './genre-link.component.html',
  styleUrls: ['./genre-link.component.css']
})
export class GenreLinkComponent implements OnInit {

  allGenres;

  constructor(private genreService: GenreService) {
    this.allGenres = genreService.getGenres();
   }

  ngOnInit(): void {
    this.allGenres = this.genreService.getGenres();
  }

}

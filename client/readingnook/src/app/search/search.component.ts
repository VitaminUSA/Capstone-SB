import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allGenres;

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.allGenres = this.genreService.getAllGenres().subscribe((allGenres)=>{this.allGenres=allGenres});
  }

}

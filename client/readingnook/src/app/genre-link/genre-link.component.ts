import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-link',
  templateUrl: './genre-link.component.html',
  styleUrls: ['./genre-link.component.css']
})
export class GenreLinkComponent implements OnInit {

  allGenres;

  constructor(private location: Location,private genreService: GenreService) {}

  ngOnInit(): void {
    this.allGenres = this.genreService.getAllGenres().subscribe((allGenres)=>{this.allGenres=allGenres});
    console.log(this.location.getState());
  }
}

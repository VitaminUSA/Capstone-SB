import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
  }

  test(): void {
    alert('test');
    //this.genreService.getAllGenres().subscribe((allGenres)=>{console.log(allGenres)});
  }

}

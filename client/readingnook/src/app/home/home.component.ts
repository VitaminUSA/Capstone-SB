import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private genreService: GenreService, private groupService: GroupService) { }

  ngOnInit(): void {
  }

  test(): void {
    alert('test');
    this.groupService.getGroupById('1').subscribe((allGenres)=>{console.log(allGenres)});
    this.groupService.getMemberOfGroup(1,2).subscribe((allGenres)=>{console.log(allGenres)});
  }

}

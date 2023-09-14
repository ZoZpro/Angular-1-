import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   listPosts: any[]=[];

constructor(private _MoviesService:MoviesService ){
  _MoviesService.getPosts().subscribe(
    {
      next:(res:any)=> {
        console.log(res);
        this.listPosts=res;
      },
    })  
}
}

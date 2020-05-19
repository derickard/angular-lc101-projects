import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies: string[] = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   movieExists: boolean = false;
   movieInvalid: boolean = false;
   constructor() { }

   ngOnInit() {
   }

   addMovie( newTitle: string) {
      if(!this.movies.includes(newTitle) && newTitle !== '') {
         this.movies.push(newTitle);
      } else if (this.movies.includes(newTitle)) { 
         this.movieExists = true;
      } else if (newTitle === '') {
         this.movieInvalid = true;
      }
   }
}
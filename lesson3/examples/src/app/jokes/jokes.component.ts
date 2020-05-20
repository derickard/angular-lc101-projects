import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokesHeading: string = "Jokes";
  start: boolean = false;
  clickMe = false;

  constructor() { }

  ngOnInit() {
  }

}

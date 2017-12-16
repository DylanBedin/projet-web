import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envies',
  templateUrl: './envies.component.html',
  styleUrls: ['./envies.component.css']
})
export class EnviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      sessionStorage.setItem("action","envies");
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  username: string;
  mail: string;
  user = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.setValues();
  }

  setValues() {
      this.http.get('/users/' + sessionStorage.getItem('userID')).subscribe(data => {
          this.username = data['username'];
          this.mail = data['mail'];
          this.user = data;
      });
  }

  edit(){
      this.http.get('/users/' + sessionStorage.getItem('userID')).subscribe(data => {
          this.router.navigate(['/profil-edit', data['_id']]);
      });
  }
}

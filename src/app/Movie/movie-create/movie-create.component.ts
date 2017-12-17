import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router) { }

    movie = {};

    ngOnInit() {
    }

    saveMovie() {
        this.http.post('/movies', this.movie)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/movie-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    movie = {};
    user = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getMovieDetail(this.route.snapshot.params['id']);
    }

    getMovieDetail(id) {
        this.http.get('/movies/' + id).subscribe(data => {
            this.movie = data;
        });
    }

    deleteMovie(id) {
        console.log(id);
        this.http.delete('/movies/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/movies']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addMovie(id, list) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(res => {
                this.user = res;
                if (this.user[list].indexOf(id) == -1) {
                    this.user[list].push(id);
                }
                this.http.put('/users/' + userID, this.user).subscribe(data => {
                });
            });
    }

}
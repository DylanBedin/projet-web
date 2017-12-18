import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.css']
})
export class MovieCollectionComponent implements OnInit {


    movies: any;
    user = {};
    avis: string;
    movie = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','movie');
        sessionStorage.setItem('action','collection');
        const userID = sessionStorage.getItem('userID');
        let moviesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for (var i = 0; i < this.user['moviesCollection'].length; i++) {
                this.http.get('/movies/' + this.user['moviesCollection'][i]).subscribe(movie => {
                        if (movie == null) {
                            this.user['moviesCollection'].splice(movie, 1);
                        }
                        else {
                            moviesArray.push(movie);
                        }
                    }
                );
            }
            this.movies = moviesArray;
        });
    }

    removeMovie(id) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(user => {
                this.user = user;
                if (this.user['moviesCollection'].indexOf(id) != -1) {
                    this.user['moviesCollection'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }
}

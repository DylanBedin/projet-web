import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-wishlist',
  templateUrl: './movie-wishlist.component.html',
  styleUrls: ['./movie-wishlist.component.css']
})
export class MovieWishlistComponent implements OnInit {

    movies: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const userID = sessionStorage.getItem('userID');
        let moviesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['moviesEnvies'].length; i++){
                this.http.get('/movies/' + this.user['moviesEnvies'][i]).subscribe(movie =>
                    moviesArray.push(movie)
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
                if (this.user['moviesEnvies'].indexOf(id) != -1) {
                    this.user['moviesEnvies'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }

}
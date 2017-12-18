import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

    movies: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        sessionStorage.setItem('cat','movie');
        sessionStorage.setItem('action','parcourir');
        this.http.get('/movies').subscribe(data => {
            this.movies = data;
        });
    }


}

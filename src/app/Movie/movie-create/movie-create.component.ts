import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-movie-create',
    templateUrl: './movie-create.component.html',
    styleUrls: ['./movie-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MovieCreateComponent implements OnInit {

    movie = {};

    constructor(private http: HttpClient, private router: Router) { }

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

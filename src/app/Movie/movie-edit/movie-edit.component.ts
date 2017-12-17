import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

    movie = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getMovie(this.route.snapshot.params['id']);
    }

    getMovie(id) {
        this.http.get('/movies/'+id).subscribe(data => {
            this.movie = data;
        });
    }

    updateMovie(id, data) {
        this.http.put('/movies/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/movie-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
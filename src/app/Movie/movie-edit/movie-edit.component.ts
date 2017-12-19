import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.css'],
    encapsulation: ViewEncapsulation.None
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

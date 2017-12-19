import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {

    movie = {};
    user = {};
    avis = [];
    usersAvis = [];
    myStruct =[];
    note: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getMovieDetail(this.route.snapshot.params['id']);
        this.getMovieAvis(this.route.snapshot.params['id']);
        this.getNote(this.route.snapshot.params['id']);
    }

    getNote(id){
        this.http.get('/movies/' + id).subscribe(data => {
                this.movie = data;
                this.note = this.movie['note'];
            }
        )
    }

    getMovieDetail(id) {
        this.http.get('/movies/' + id).subscribe(data => {
            this.movie = data;
        });
    }

    getMovieAvis(id) {
        this.http.get('/movies/' + id).subscribe(data => {
            this.movie = data;
            for (var i = 0; i < this.movie['avis'].length; i += 2) {
                console.log("i=" + i);
                let currentAvis = this.movie['avis'][i+1];
                this.http.get('/users/' + this.movie['avis'][i]).subscribe(user => {
                        this.user = user;
                        this.usersAvis.push(user['username']);
                        this.avis.push(currentAvis);
                        this.myStruct.push({user : user['username'], avis : currentAvis});
                        console.log(this.usersAvis);
                        console.log(this.avis);
                    }
                );
            }
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
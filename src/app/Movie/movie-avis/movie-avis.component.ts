import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-movie-avis',
    templateUrl: './movie-avis.component.html',
    styleUrls: ['./movie-avis.component.css']
})
export class MovieAvisComponent implements OnInit {

    movie = {};
    avis = "";
    userNote: number;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.getMovieDetail(this.route.snapshot.params['id']);
    }

    getMovieDetail(id) {
        this.http.get('/movies/' + id).subscribe(data => {
            this.movie = data;
        });
    }

    addAvis(idMovie){
        let avisWithUserID = false;
        const userID = sessionStorage.getItem("userID");
        for(var i = 0; i < this.movie['avis'].length; i+=2){
            console.log(this.movie['avis'][i]);
            if(this.movie['avis'][i] == userID){
                avisWithUserID = true;
            }
        }
        if (!avisWithUserID) {
            this.movie['avis'].push(userID);
            this.movie['avis'].push(this.avis);
            this.http.put('/movies/' + idMovie, this.movie).subscribe(data => {
            });
        }
    }

    note(idMovie){
        const userID = sessionStorage.getItem("userID");
        let hasVoted = false;
        for(var i = 0; i < this.movie['hasNoted'].length; i++){
            if(this.movie['hasNoted'][i] == userID){
                hasVoted = true;
            }
        }
        if (!hasVoted) {
            let nbVotants = this.movie['nbVotants'];
            this.movie['note'] = (this.userNote + this.movie['note'] * nbVotants) / (nbVotants + 1);
            this.movie['nbVotants'] = nbVotants + 1;
            this.http.put('/movies/' + idMovie, this.movie).subscribe(data => {
            });
            this.movie['hasNoted'].push(userID);
        }
    }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-serie-avis',
  templateUrl: './serie-avis.component.html',
  styleUrls: ['./serie-avis.component.css']
})
export class SerieAvisComponent implements OnInit {

    serie = {};
    avis = "";
    userNote: number;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.getSerieDetail(this.route.snapshot.params['id']);
    }

    getSerieDetail(id) {
        this.http.get('/series/' + id).subscribe(data => {
            this.serie = data;
        });
    }

    addAvis(idSerie){
        let avisWithUserID = false;
        const userID = sessionStorage.getItem("userID");
        for(var i = 0; i < this.serie['avis'].length; i+=2){
            console.log(this.serie['avis'][i]);
            if(this.serie['avis'][i] == userID){
                avisWithUserID = true;
            }
        }
        if (!avisWithUserID) {
            this.serie['avis'].push(userID);
            this.serie['avis'].push(this.avis);
            this.http.put('/series/' + idSerie, this.serie).subscribe(data => {
            });
        }
    }

    note(idSerie){
        const userID = sessionStorage.getItem("userID");
        let hasVoted = false;
        for(var i = 0; i < this.serie['hasNoted'].length; i++){
            if(this.serie['hasNoted'][i] == userID){
                hasVoted = true;
            }
        }
        if (!hasVoted) {
            let nbVotants = this.serie['nbVotants'];
            this.serie['note'] = (this.userNote + this.serie['note'] * nbVotants) / (nbVotants + 1);
            this.serie['nbVotants'] = nbVotants + 1;
            this.http.put('/series/' + idSerie, this.serie).subscribe(data => {
            });
            this.serie['hasNoted'].push(userID);
        }
    }
}

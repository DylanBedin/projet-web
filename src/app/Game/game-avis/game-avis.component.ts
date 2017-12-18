import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-avis',
  templateUrl: './game-avis.component.html',
  styleUrls: ['./game-avis.component.css']
})
export class GameAvisComponent implements OnInit {

    game = {};
    avis = "";
    userNote: number;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.getGameDetail(this.route.snapshot.params['id']);
    }

    getGameDetail(id) {
        this.http.get('/games/' + id).subscribe(data => {
            this.game = data;
        });
    }

    addAvis(idGame){
        let avisWithUserID = false;
        const userID = sessionStorage.getItem("userID");
        for(var i = 0; i < this.game['avis'].length; i+=2){
            console.log(this.game['avis'][i]);
            if(this.game['avis'][i] == userID){
                avisWithUserID = true;
            }
        }
        if (!avisWithUserID) {
            this.game['avis'].push(userID);
            this.game['avis'].push(this.avis);
            this.http.put('/games/' + idGame, this.game).subscribe(data => {
            });
        }
    }

    note(idGame){
        const userID = sessionStorage.getItem("userID");
        let hasVoted = false;
        for(var i = 0; i < this.game['hasNoted'].length; i++){
            if(this.game['hasNoted'][i] == userID){
                hasVoted = true;
            }
        }
        if (!hasVoted) {
            let nbVotants = this.game['nbVotants'];
            this.game['note'] = (this.userNote + this.game['note'] * nbVotants) / (nbVotants + 1);
            this.game['nbVotants'] = nbVotants + 1;
            this.http.put('/games/' + idGame, this.game).subscribe(data => {
            });
            this.game['hasNoted'].push(userID);
        }
    }
}
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-album-avis',
  templateUrl: './album-avis.component.html',
  styleUrls: ['./album-avis.component.css']
})
export class AlbumAvisComponent implements OnInit {


    album = {};
    avis = "";
    userNote: number;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.getAlbumDetail(this.route.snapshot.params['id']);
    }

    getAlbumDetail(id) {
        this.http.get('/albums/' + id).subscribe(data => {
            this.album = data;
        });
    }

    addAvis(idAlbum){
        let avisWithUserID = false;
        const userID = sessionStorage.getItem("userID");
        for(var i = 0; i < this.album['avis'].length; i+=2){
            console.log(this.album['avis'][i]);
            if(this.album['avis'][i] == userID){
                avisWithUserID = true;
            }
        }
        if (!avisWithUserID) {
            this.album['avis'].push(userID);
            this.album['avis'].push(this.avis);
            this.http.put('/albums/' + idAlbum, this.album).subscribe(data => {
            });
        }
    }

    note(idAlbum){
        const userID = sessionStorage.getItem("userID");
        let hasVoted = false;
        for(var i = 0; i < this.album['hasNoted'].length; i++){
            if(this.album['hasNoted'][i] == userID){
                hasVoted = true;
            }
        }
        if (!hasVoted) {
            let nbVotants = this.album['nbVotants'];
            this.album['note'] = (this.userNote + this.album['note'] * nbVotants) / (nbVotants + 1);
            this.album['nbVotants'] = nbVotants + 1;
            this.http.put('/albums/' + idAlbum, this.album).subscribe(data => {
            });
            this.album['hasNoted'].push(userID);
        }
    }
}
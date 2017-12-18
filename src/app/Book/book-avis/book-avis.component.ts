import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-avis',
  templateUrl: './book-avis.component.html',
  styleUrls: ['./book-avis.component.css']
})
export class BookAvisComponent implements OnInit {

  book = {};
  avis = "";
  userNote: number;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
      this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
        this.http.get('/books/' + id).subscribe(data => {
            this.book = data;
        });
    }

    addAvis(idBook){
        let avisWithUserID = false;
        const userID = sessionStorage.getItem("userID");
        for(var i = 0; i < this.book['avis'].length; i+=2){
            console.log(this.book['avis'][i]);
            if(this.book['avis'][i] == userID){
                avisWithUserID = true;
            }
        }
        if (!avisWithUserID) {
            this.book['avis'].push(userID);
            this.book['avis'].push(this.avis);
            this.http.put('/books/' + idBook, this.book).subscribe(data => {
            });
        }
    }

    note(idBook){
        const userID = sessionStorage.getItem("userID");
        let hasVoted = false;
        for(var i = 0; i < this.book['hasNoted'].length; i++){
            if(this.book['hasNoted'][i] == userID){
                hasVoted = true;
            }
        }
        if (!hasVoted) {
            let nbVotants = this.book['nbVotants'];
            this.book['note'] = (this.userNote + this.book['note'] * nbVotants) / (nbVotants + 1);
            this.book['nbVotants'] = nbVotants + 1;
            this.http.put('/books/' + idBook, this.book).subscribe(data => {
            });
            this.book['hasNoted'].push(userID);
        }
    }
}

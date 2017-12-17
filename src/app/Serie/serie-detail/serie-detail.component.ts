import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

    serie = {};
    user = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getSerieDetail(this.route.snapshot.params['id']);
    }

    getSerieDetail(id) {
        this.http.get('/series/' + id).subscribe(data => {
            this.serie = data;
        });
    }

    deleteSerie(id) {
        console.log(id);
        this.http.delete('/series/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/series']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addSerie(id, list) {
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
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-serie-wishlist',
    templateUrl: './serie-wishlist.component.html',
    styleUrls: ['./serie-wishlist.component.css']
})
export class SerieWishlistComponent implements OnInit {

    series: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','serie');
        sessionStorage.setItem('action','envies');
        const userID = sessionStorage.getItem('userID');
        let seriesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['seriesEnvies'].length; i++){
                this.http.get('/series/' + this.user['seriesEnvies'][i]).subscribe(serie =>
                    seriesArray.push(serie)
                );
            }
            this.series = seriesArray;
        });
    }

    removeSerie(id) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(user => {
                this.user = user;
                if (this.user['seriesEnvies'].indexOf(id) != -1) {
                    this.user['seriesEnvies'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }

}


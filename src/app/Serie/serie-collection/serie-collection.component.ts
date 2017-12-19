import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-serie-collection',
    templateUrl: './serie-collection.component.html',
    styleUrls: ['./serie-collection.component.css']
})

export class SerieCollectionComponent implements OnInit {

    series: any;
    user = {};
    avis: string;
    serie = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','serie');
        sessionStorage.setItem('action','collection');
        const userID = sessionStorage.getItem('userID');
        let seriesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for (var i = 0; i < this.user['seriesCollection'].length; i++) {
                this.http.get('/series/' + this.user['seriesCollection'][i]).subscribe(serie => {
                        if (serie == null) {
                            this.user['seriesCollection'].splice(serie, 1);
                        }
                        else {
                            seriesArray.push(serie);
                        }
                    }
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
                if (this.user['seriesCollection'].indexOf(id) != -1) {
                    this.user['seriesCollection'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }
}

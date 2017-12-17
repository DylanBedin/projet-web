import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-serie',
    templateUrl: './serie.component.html',
    styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

    series: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/series').subscribe(data => {
            this.series = data;
        });
    }

}

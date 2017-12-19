import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-serie-create',
    templateUrl: './serie-create.component.html',
    styleUrls: ['./serie-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SerieCreateComponent implements OnInit {

    serie = {};

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

    saveSerie() {
        this.http.post('/series', this.serie)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/serie-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

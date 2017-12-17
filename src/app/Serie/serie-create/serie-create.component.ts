import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css']
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

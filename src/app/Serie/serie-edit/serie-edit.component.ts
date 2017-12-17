import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {


    serie = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getSerie(this.route.snapshot.params['id']);
    }

    getSerie(id) {
        this.http.get('/series/'+id).subscribe(data => {
            this.serie = data;
        });
    }

    updateSerie(id, data) {
        this.http.put('/series/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/serie-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
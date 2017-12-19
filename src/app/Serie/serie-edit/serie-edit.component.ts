import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-serie-edit',
    templateUrl: './serie-edit.component.html',
    styleUrls: ['./serie-edit.component.css'],
    encapsulation: ViewEncapsulation.None
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

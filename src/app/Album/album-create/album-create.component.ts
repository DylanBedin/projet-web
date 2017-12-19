import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-album-create',
    templateUrl: './album-create.component.html',
    styleUrls: ['./album-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AlbumCreateComponent implements OnInit {

    album = {};

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

    saveAlbum() {
        this.http.post('/albums', this.album)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/album-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

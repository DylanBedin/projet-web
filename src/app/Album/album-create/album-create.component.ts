import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {


    constructor(private http: HttpClient, private router: Router) { }

    album = {};

    ngOnInit() {
    }

    saveAlbum() {
        this.http.post('/album', this.album)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/album-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }
}

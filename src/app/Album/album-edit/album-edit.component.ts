import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

    album = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getAlbum(this.route.snapshot.params['id']);
    }

    getAlbum(id) {
        this.http.get('/albums/'+id).subscribe(data => {
            this.album = data;
        });
    }

    updateAlbum(id, data) {
        this.http.put('/albums/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/album-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

    album = {};
    user = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getAlbumDetail(this.route.snapshot.params['id']);
    }

    getAlbumDetail(id) {
        this.http.get('/album/' + id).subscribe(data => {
            this.album = data;
        });
    }

    deleteAlbum(id) {
        this.http.delete('/album/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/albums']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addAlbum(id, list) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(res => {
                this.user = res;
                if (this.user[list].indexOf(id) == -1) {
                    this.user[list].push(id);
                    console.log(this.user);
                }
                this.http.put('/users/' + userID, this.user).subscribe(data => {
                });
            });
    }

}
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
    avis = [];
    usersAvis = [];
    note: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getAlbumDetail(this.route.snapshot.params['id']);
        this.getAlbumAvis(this.route.snapshot.params['id']);
        this.getNote(this.route.snapshot.params['id']);
    }

    getNote(id){
        this.http.get('/albums/' + id).subscribe(data => {
                this.album = data;
                this.note = this.album['note'];
            }
        )
    }

    getAlbumDetail(id) {
        this.http.get('/albums/' + id).subscribe(data => {
            this.album = data;
        });
    }

    getAlbumAvis(id) {
        this.http.get('/albums/' + id).subscribe(data => {
            this.album = data;
            for (var i = 0; i < this.album['avis'].length; i += 2) {
                console.log("i=" + i);
                let currentAvis = this.album['avis'][i+1];
                this.http.get('/users/' + this.album['avis'][i]).subscribe(user => {
                        this.user = user;
                        this.usersAvis.push(user['username']);
                        this.avis.push(currentAvis);
                        console.log(this.usersAvis);
                        console.log(this.avis);
                    }
                );
            }
        });
    }


    deleteAlbum(id) {
        this.http.delete('/albums/' + id)
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
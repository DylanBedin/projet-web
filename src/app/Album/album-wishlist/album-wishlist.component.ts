import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-album-wishlist',
    templateUrl: './album-wishlist.component.html',
    styleUrls: ['./album-wishlist.component.css']
})
export class AlbumWishlistComponent implements OnInit {

    albums: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','album');
        sessionStorage.setItem('action','envies');
        const userID = sessionStorage.getItem('userID');
        let albumsArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['albumsEnvies'].length; i++){
                this.http.get('/albums/' + this.user['albumsEnvies'][i]).subscribe(album =>
                    albumsArray.push(album)
                );
            }
            this.albums = albumsArray;
        });
    }

    removeAlbum(id) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(user => {
                this.user = user;
                if (this.user['albumsEnvies'].indexOf(id) != -1) {
                    this.user['albumsEnvies'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }

}


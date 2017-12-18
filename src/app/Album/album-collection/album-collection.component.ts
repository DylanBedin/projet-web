import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-album-collection',
    templateUrl: './album-collection.component.html',
    styleUrls: ['./album-collection.component.css']
})

export class AlbumCollectionComponent implements OnInit {

    albums: any;
    user = {};
    avis: string;
    album = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','album');
        sessionStorage.setItem('action','collection');
        const userID = sessionStorage.getItem('userID');
        let albumsArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for (var i = 0; i < this.user['albumsCollection'].length; i++) {
                this.http.get('/albums/' + this.user['albumsCollection'][i]).subscribe(album => {
                    if (album == null) {
                        this.user['albumsCollection'].splice(album, 1);
                    }
                    else {
                        albumsArray.push(album)
                    }
                    }
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
                if (this.user['albumsCollection'].indexOf(id) != -1) {
                    this.user['albumsCollection'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }
}

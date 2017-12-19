import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    albums: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat', 'album');
        sessionStorage.setItem('action','parcourir');
        this.http.get('/albums').subscribe(data => {
            this.albums = data;
        });
    }

}

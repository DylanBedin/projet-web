import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-menu',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    currentUser;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('/users/' + sessionStorage.getItem('userID')).subscribe(user => {
            this.currentUser = user;
        });
    }
}

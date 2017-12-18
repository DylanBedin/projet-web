import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    currentUser: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }


    ngOnInit() {
        this.http.get('/users/' + sessionStorage.getItem('userID')).subscribe(user => {

            this.currentUser = user;
            console.log(this.currentUser);
        });
    }

    deco(){
        sessionStorage.setItem('userID', null);
        this.router.navigate(['login']);
    }
}

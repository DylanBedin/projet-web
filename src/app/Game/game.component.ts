import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    games: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        sessionStorage.setItem('cat','game');
        sessionStorage.setItem('action','parcourir');
        this.http.get('/games').subscribe(data => {
            this.games = data;
        });
    }

}

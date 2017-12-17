import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game-wishlist',
  templateUrl: './game-wishlist.component.html',
  styleUrls: ['./game-wishlist.component.css']
})
export class GameWishlistComponent implements OnInit {

    games: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const userID = sessionStorage.getItem('userID');
        let gamesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['gamesEnvies'].length; i++){
                this.http.get('/game/' + this.user['gamesEnvies'][i]).subscribe(game =>
                    gamesArray.push(game)
                );
            }
            this.games = gamesArray;
        });
    }

    removeGame(id) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(user => {
                this.user = user;
                if (this.user['gamesEnvies'].indexOf(id) != -1) {
                    this.user['gamesEnvies'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }

}
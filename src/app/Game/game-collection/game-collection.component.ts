import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game-collection',
  templateUrl: './game-collection.component.html',
  styleUrls: ['./game-collection.component.css']
})
export class GameCollectionComponent implements OnInit {


    games: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const userID = sessionStorage.getItem('userID');
        let gamesArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for (var i = 0; i < this.user['gamesCollection'].length; i++) {
                this.http.get('/game/' + this.user['gamesCollection'][i]).subscribe(game => {
                        if (game == null) {
                            this.user['albumsCollection'].splice(game, 1);
                        }
                        else {
                            gamesArray.push(game);
                        }
                    }
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
                if (this.user['gamesCollection'].indexOf(id) != -1) {
                    this.user['gamesCollection'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }
}

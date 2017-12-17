import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

    game = {};
    user = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getGameDetail(this.route.snapshot.params['id']);
    }

    getGameDetail(id) {
        this.http.get('/game/' + id).subscribe(data => {
            this.game = data;
        });
    }

    deleteGame(id) {
        console.log(id);
        this.http.delete('/games/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/games']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addGame(id, list) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(res => {
                this.user = res;
                if (this.user[list].indexOf(id) == -1) {
                    this.user[list].push(id);
                }
                this.http.put('/users/' + userID, this.user).subscribe(data => {
                });
            });
    }

}

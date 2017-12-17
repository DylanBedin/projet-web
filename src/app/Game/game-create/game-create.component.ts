import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router) { }

    game = {};

    ngOnInit() {
    }

    saveGame() {
        this.http.post('/game', this.game)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/game-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

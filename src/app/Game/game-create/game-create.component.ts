import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-game-create',
    templateUrl: './game-create.component.html',
    styleUrls: ['./game-create.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GameCreateComponent implements OnInit {

    game = {};

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

    saveGame() {
        this.http.post('/games', this.game)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/game-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

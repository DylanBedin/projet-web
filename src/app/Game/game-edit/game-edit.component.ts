import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

    game = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getGame(this.route.snapshot.params['id']);
    }

    getGame(id) {
        this.http.get('/game/'+id).subscribe(data => {
            this.game = data;
        });
    }

    updateGame(id, data) {
        this.http.put('/game/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/game-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

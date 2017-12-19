import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GameEditComponent implements OnInit {

    game = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getGame(this.route.snapshot.params['id']);
    }

    getGame(id) {
        this.http.get('/games/'+id).subscribe(data => {
            this.game = data;
        });
    }

    updateGame(id, data) {
        this.http.put('/games/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/game-detail', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}

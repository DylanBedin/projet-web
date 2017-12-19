import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    styleUrls: ['./game-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GameDetailComponent implements OnInit {

    game = {};
    user = {};
    avis = [];
    usersAvis = [];
    myStruct =[];
    note: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getGameDetail(this.route.snapshot.params['id']);
        this.getGameAvis(this.route.snapshot.params['id']);
        this.getNote(this.route.snapshot.params['id']);
    }

    getNote(id){
        this.http.get('/games/' + id).subscribe(data => {
                this.game = data;
                this.note = this.game['note'];
            }
        )
    }

    getGameDetail(id) {
        this.http.get('/games/' + id).subscribe(data => {
            this.game = data;
        });
    }

    getGameAvis(id) {
        this.http.get('/games/' + id).subscribe(data => {
            this.game = data;
            for (var i = 0; i < this.game['avis'].length; i += 2) {
                console.log("i=" + i);
                let currentAvis = this.game['avis'][i+1];
                this.http.get('/users/' + this.game['avis'][i]).subscribe(user => {
                        this.user = user;
                        this.usersAvis.push(user['username']);
                        this.avis.push(currentAvis);
                        this.myStruct.push({user : user['username'], avis : currentAvis});
                        console.log(this.usersAvis);
                        console.log(this.avis);
                    }
                );
            }
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
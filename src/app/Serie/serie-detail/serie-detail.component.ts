import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-serie-detail',
    templateUrl: './serie-detail.component.html',
    styleUrls: ['./serie-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SerieDetailComponent implements OnInit {

    serie = {};
    user = {};
    avis = [];
    usersAvis = [];
    myStruct =[];
    note: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getSerieDetail(this.route.snapshot.params['id']);
        this.getSerieAvis(this.route.snapshot.params['id']);
        this.getNote(this.route.snapshot.params['id']);
    }

    getNote(id){
        this.http.get('/series/' + id).subscribe(data => {
                this.serie = data;
                this.note = this.serie['note'];
            }
        )
    }

    getSerieDetail(id) {
        this.http.get('/series/' + id).subscribe(data => {
            this.serie = data;
        });
    }

    getSerieAvis(id) {
        this.http.get('/series/' + id).subscribe(data => {
            this.serie = data;
            for (var i = 0; i < this.serie['avis'].length; i += 2) {
                console.log("i=" + i);
                let currentAvis = this.serie['avis'][i+1];
                this.http.get('/users/' + this.serie['avis'][i]).subscribe(user => {
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

    deleteSerie(id) {
        console.log(id);
        this.http.delete('/series/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/series']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addSerie(id, list) {
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
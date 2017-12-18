import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

    book = {};
    user = {};
    avis = [];
    usersAvis = [];
    note: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getBookDetail(this.route.snapshot.params['id']);
        this.getBookAvis(this.route.snapshot.params['id']);
        this.getNote(this.route.snapshot.params['id']);
    }

    getNote(id){
        this.http.get('/books/' + id).subscribe(data => {
            this.book = data;
            this.note = this.book['note'];
            }
        )
    }

    getBookDetail(id) {
        this.http.get('/books/' + id).subscribe(data => {
            this.book = data;
        });
    }

    getBookAvis(id) {
        this.http.get('/books/' + id).subscribe(data => {
            this.book = data;
            for (var i = 0; i < this.book['avis'].length; i += 2) {
                console.log("i=" + i);
                let currentAvis = this.book['avis'][i+1];
                this.http.get('/users/' + this.book['avis'][i]).subscribe(user => {
                    this.user = user;
                    this.usersAvis.push(user['username']);
                    this.avis.push(currentAvis);
                    console.log(this.usersAvis);
                    console.log(this.avis);
                }
                );
            }
        });
    }

    deleteBook(id) {
        console.log(id);
        this.http.delete('/books/' + id)
            .subscribe(res => {
                    this.router.navigate(['/parcourir/books']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

    addBook(id, list) {
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
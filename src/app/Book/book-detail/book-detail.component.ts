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

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.getBookDetail(this.route.snapshot.params['id']);
    }

    getBookDetail(id) {
        this.http.get('/book/' + id).subscribe(data => {
            this.book = data;
        });
    }

    deleteBook(id) {
        this.http.delete('/book/' + id)
            .subscribe(res => {
                    this.router.navigate(['/books']);
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
                    console.log(this.user);
                }
                this.http.put('/users/' + userID, this.user).subscribe(data => {
                });
            });
    }
}
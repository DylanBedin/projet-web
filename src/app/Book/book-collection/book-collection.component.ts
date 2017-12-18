import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-book-collection',
    templateUrl: './book-collection.component.html',
    styleUrls: ['./book-collection.component.css']
})

export class BookCollectionComponent implements OnInit {

    books: any;
    user = {};
    avis: string;
    book = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const userID = sessionStorage.getItem('userID');
        let booksArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for (var i = 0; i < this.user['booksCollection'].length; i++) {
                this.http.get('/books/' + this.user['booksCollection'][i]).subscribe(book => {
                        if (book == null) {
                            this.user['booksCollection'].splice(book, 1);
                        }
                        else {
                            booksArray.push(book);
                        }
                    }
                );
            }
            this.books = booksArray;
        });
    }

    removeBook(id) {
        const userID = sessionStorage.getItem("userID");
        this.http.get('/users/' + userID, this.user)
            .subscribe(user => {
                this.user = user;
                if (this.user['booksCollection'].indexOf(id) != -1) {
                    this.user['booksCollection'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }
}

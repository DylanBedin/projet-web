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

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const userID = sessionStorage.getItem('userID');
        let booksArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['booksCollection'].length; i++){
                this.http.get('/book/' + this.user['booksCollection'][i]).subscribe(book =>
                    booksArray.push(book)
                );
            }
            this.books = booksArray;
        });
    }

}

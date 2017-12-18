import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent implements OnInit {

    books: any;
    user = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        sessionStorage.setItem('cat','book');
        sessionStorage.setItem('action','envies');
        const userID = sessionStorage.getItem('userID');
        let booksArray = [];
        this.http.get('/users/' + userID).subscribe(user => {
            this.user = user;
            for(var i = 0; i < this.user['booksEnvies'].length; i++){
                this.http.get('/books/' + this.user['booksEnvies'][i]).subscribe(book =>
                    booksArray.push(book)
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
                if (this.user['booksEnvies'].indexOf(id) != -1) {
                    this.user['booksEnvies'].splice(id, 1);
                    this.http.put('/users/' + userID, this.user).subscribe(data => {
                    });
                    window.location.reload();
                }

            });
    }

}


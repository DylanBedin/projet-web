import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})

export class ProfilEditComponent implements OnInit {

    user = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getBook(this.route.snapshot.params['id']);
    }

    getBook(id) {
        this.http.get('/books/'+id).subscribe(data => {
            this.user = data;
        });
    }

    updateUser(id, data) {
        this.http.put('/users/' + id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/profil', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
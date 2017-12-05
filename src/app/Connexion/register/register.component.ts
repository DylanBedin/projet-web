import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {  UserService } from '../../../services/user-service';
import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'

})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
      private http: HttpClient) { }

   register() {
        this.loading = true;
        this.model.project = [];
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }



}

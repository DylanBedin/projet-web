import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardDisconnected implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "null";
    }
}

@Injectable()
export class AuthGuardConnected implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return sessionStorage.getItem('userID') != null && sessionStorage.getItem('userID') != "null";
    }
}
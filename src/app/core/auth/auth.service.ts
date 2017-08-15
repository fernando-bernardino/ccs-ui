import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

import { User } from './user.model';
import { HttpService } from '../http/http.service';
import { RequestOptionsService } from '../http/request-options.service';
import { EncodeService } from './encode.service';
import { ErrorService } from '../error/error.service';

@Injectable()
export class AuthService {

    loggedOut = new Subject<any>();
    loggedIn = new Subject<string>();

    constructor(
        private http: HttpService,
        private encoder: EncodeService,
        private errorService: ErrorService) { }

    user: User = null;

    logout() {
        this.user = null;

        this.loggedOut.next();
    }

    islogged() {
        return this.user !== null;
    }

    login(credentials) {
        const credentialsBase64 = this.encoder.encode(
            credentials.email + ':' + credentials.password);

        this.http.authenticate(credentialsBase64).subscribe(
            (response: Response) => {

                //  set token & user info
                this.setUser();

                this.loggedIn.next(this.user.name);
            },
            (error) => {
                this.errorService.setError("Invalid username or password");
                //  clear token
            }
        );
    }

    getToken(){
        if (this.user !== null) {
            return this.user.token;
        } else {
            return null;
        }
    }

    setUser() {
        this.user = new User(
            'user1', 
            'Tony', 
            'tony.bernardino@gmail.com',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Rlb250aWNzLWRldi5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NThlY2U0N2NhZDIwNzM0ZWNkMmFiYWVjIiwiYXVkIjoiNjZQbGhGN0w4SGYyTUVTRHRxcUo5Z2VBSm95bFVlaHMiLCJleHAiOjE1MDI4NjQ3MjQsImlhdCI6MTUwMjgyODcyNH0.GXEkFAl23d7hv03cfIPQT-AN2Zvew8mnp6lz0J3P4gM');
    }
}
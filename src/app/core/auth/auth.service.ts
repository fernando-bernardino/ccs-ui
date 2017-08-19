import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions } from '@angular/http';

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
        private errorService: ErrorService,
        private optionsService: RequestOptions) { }

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
                this.setUser(response.json());
                
                this.loggedIn.next(this.user.name);
                this.http.setJwtToken(this.user.token);
            },
            (error) => {
                this.errorService.setError("Invalid username or password");
                this.http.clearJwtToken();
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

    setUser(json) {
        this.user = new User(
            json.userId, 
            json.userName, 
            json.userEmail,
            json.token);
    }
}
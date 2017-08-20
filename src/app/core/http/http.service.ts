import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsService } from '../http/request-options.service';

import { ErrorService } from '../error/error.service';

@Injectable()
export class HttpService {

  apiBasePath = "https://dev-ccs.deontics.com/api/";

  jwtToken: string;

  constructor(private http: Http,
    private errorService: ErrorService) { }

  authenticate(credentials: string): Observable<Response> {

    this.errorService.clearError();

    return this.http.get(
        this.apiBasePath + 'authenticate', 
        this.createBasicAuthorizationHeader(credentials));
  }

  getCloudSpaces(): Observable<Response> {
    return this.http.get(
        this.apiBasePath + 'cloudspace', 
        this.createAcceptJsonHeader());
  }

  getCloudSpace(id: string): Observable<Response> {
    return this.http.get(
        this.apiBasePath + 'cloudspace/' + id, 
        this.createAcceptJsonHeader());
  }

  updateCloudSpace(cloudSpace) {
    return Observable.create((observer) => {
      console.log('http');
      console.log(cloudSpace);
      observer.next(cloudSpace);
      observer.complete();
    });
  }

  createBasicAuthorizationHeader(credentials: string): RequestOptions {
    var headers = new Headers();
    
    headers.append('Authorization', 'Basic ' + credentials);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.createRequestOptions(headers);
  }

  createAcceptJsonHeader(): RequestOptions {
    var headers = new Headers();

    headers.set('Accept', 'application/json');
    
    this.addJwtToken(headers);

    return this.createRequestOptions(headers);
  }

  addJwtToken(headers: Headers){
    if(this.jwtToken !== null) {
      headers.set('Authorization', 'Bearer ' + this.jwtToken);
    }
  }

  createRequestOptions(headers: Headers){

    const options = new RequestOptions({
      headers: headers
    });

    return options;
  }

  setJwtToken(token: string){
    this.jwtToken = token;
  }

  clearJwtToken(){
    this.jwtToken = null;
  }
}

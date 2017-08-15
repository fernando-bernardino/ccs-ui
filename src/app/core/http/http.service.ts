import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ErrorService } from '../error/error.service';

@Injectable()
export class HttpService {

  apiBasePath = "https://dev-ccs.deontics.com/api/";

  constructor(private http: Http,
    private errorService: ErrorService) { }

  authenticate(credentials: string): Observable<Response> {

    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + credentials);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const options = new RequestOptions({
      headers: headers
    });

    this.errorService.clearError();

    return this.http.get(this.apiBasePath + 'authenticate', options);
  }

  getCloudSpaces(): Observable<Response> {
    return this.http.get(this.apiBasePath + 'cloudspace');
  }
}

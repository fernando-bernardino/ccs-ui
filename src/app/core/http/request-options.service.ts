import { BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {

  token = null;

  constructor() {
    super();

    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
  }

  merge(options?: RequestOptionsArgs): RequestOptions {

    const newOptions = super.merge(options);

    if(this.token !== null) {
      newOptions.headers.set('Authorization',
        'Bearer ' + this.token);

    }

    return newOptions;
  }

}

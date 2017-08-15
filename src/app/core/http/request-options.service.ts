import { BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {

  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Rlb250aWNzLWRldi5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NThlY2U0N2NhZDIwNzM0ZWNkMmFiYWVjIiwiYXVkIjoiNjZQbGhGN0w4SGYyTUVTRHRxcUo5Z2VBSm95bFVlaHMiLCJleHAiOjE1MDI4NjQ3MjQsImlhdCI6MTUwMjgyODcyNH0.GXEkFAl23d7hv03cfIPQT-AN2Zvew8mnp6lz0J3P4gM';

  constructor(
    //private authService: AuthService
  ) {
    super();

    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Accept', 'application/json');
  }

  merge(options?: RequestOptionsArgs): RequestOptions {

    const newOptions = super.merge(options);

    //newOptions.headers.set('Authorization',
    //    'Bearer ' + this.token);
    /*
    if(this.authService.islogged()) {
      newOptions.headers.set('Authorization',
        'Bearer ' + this.authService.getToken());

    }
    */

    return newOptions;
  }

}

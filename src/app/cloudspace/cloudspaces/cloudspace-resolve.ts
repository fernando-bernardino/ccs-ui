import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/http/http.service';
import { CloudSpace } from '../cloudspace-model';

export class CloudSpaceResolve implements Resolve<CloudSpace []> {

  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return Observable.create(observer =>
      this.httpService
        .getCloudSpaces()
          .subscribe(
            (response) => observer.next(
              this.map(response.json())),
          )
    );
  }

  map(response : any): CloudSpace [] {
    console.log(response);

    return [];
  }
}
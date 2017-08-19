import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CloudSpace } from '../cloudspace-model';
import { HttpService } from '../../core/http/http.service';

@Injectable()
export class CloudSpacesResolver implements Resolve<CloudSpace []> {

  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CloudSpace[]> | CloudSpace[] {
    
    return Observable.create(observer =>
      this.httpService
        .getCloudSpaces()
          .subscribe((response) => {
            observer.next(response.json());
            observer.complete();
          })
    );   
  }
}
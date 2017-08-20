import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CloudSpace } from '../cloudspace-model';
import { CloudspaceService } from '../cloudspace.service';

@Injectable()
export class CloudSpaceResolver implements Resolve<CloudSpace> {

  constructor(private cloudspaceService: CloudspaceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CloudSpace> | CloudSpace {
    return this.cloudspaceService.getCloudSpace(route.params['id']);
  }
}
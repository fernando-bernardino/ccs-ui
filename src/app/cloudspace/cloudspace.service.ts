import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CloudSpace } from './cloudspace-model';
import { HttpService } from '../core/http/http.service';
import { ErrorService } from '../core/error/error.service';

@Injectable()
export class CloudspaceService {

  cloudSpaces: CloudSpace [] = null;

  currentCloudSpace: CloudSpace = null;


  constructor(private httpService: HttpService,
      private errorService: ErrorService) { }

  getCloudSpaces() : Observable<CloudSpace[]> | CloudSpace[] {
    return Observable.create(observer =>
      this.httpService
        .getCloudSpaces()
          .subscribe((response) => {
            this.cloudSpaces = response.json();
            observer.next(this.cloudSpaces);
            observer.complete();
          })
    );   
  }

  getCloudSpace(id: string) : Observable<CloudSpace> | CloudSpace {

    this.currentCloudSpace = this.findCloudSpaceInMemory(id);

    if(this.currentCloudSpace !== null) {

      return this.cloneCloudspace(this.currentCloudSpace);

    } else {

      return this.loadCloudSpace(id);
    }
  }

  loadCloudSpace(id: string): Observable<CloudSpace> | CloudSpace {
    return Observable.create(observer =>
      this.httpService
        .getCloudSpace(id)
          .subscribe((response) => {

            this.cloudSpaces.push(this.currentCloudSpace);

            observer.next(this.cloneCloudspace(this.currentCloudSpace));
            observer.complete();
          })
    );   
  }

  findCloudSpaceInMemory(id: string): CloudSpace {

    if(this.cloudSpaces) {
      return this.cloudSpaces.find((cloudspace) => cloudspace.id === id);
    }

    return null;
  }

  updateCloudSpace(cloudSpace: CloudSpace) {
    let original = this.findCloudSpaceInMemory(cloudSpace.id);

    if(original === null) {
      this.errorService.setError("Could not update cloudspace " + cloudSpace.name + " it was not found");

    } else {

      console.log('service before cloudSpace');
      console.log(cloudSpace);

      let update = this.cloneCloudspace(original);
      console.log('service before overwrite');
      console.log(update);

      this.overwriteCloudspace(update, cloudSpace);

      console.log('service after overwrite');
      console.log(update);

      return Observable.create(observer =>
        this.httpService
          .updateCloudSpace(update)
            .subscribe((response) => {
              console.log('response 1');
              console.log(response);

              this.overwriteCloudspace(original, response);
              observer.next(response);
              observer.complete();

              console.log('original');
              console.log(original);
            })
      );   
    }
  }

  overwriteCloudspace(origin: CloudSpace, updated: CloudSpace){
    origin.name = updated.name;
    origin.description = updated.description;
    origin.test_server.url = updated.test_server.url;
    origin.test_server.enact_string = updated.test_server.enact_string;
    origin.test_server.test_app = updated.test_server.test_app;
  }

  cloneCloudspace(origin: CloudSpace){
    let clone = new CloudSpace();

    clone.id = origin.id;
    clone.name = origin.name;
    clone.description = origin.description;
    clone.vcs_url = origin.vcs_url;
    clone.test_server = {
      url: origin.test_server.url,
      enact_string: origin.test_server.enact_string,
      test_app: origin.test_server.test_app
    };
    
    return clone;    
  }
}

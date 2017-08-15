import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {

  newError = new Subject<string>();
  noError = new Subject<any>();

  public error: string;

  constructor() { }

  setError(error: string) {
    this.error = error;
    this.newError.next(error);
  }

  clearError() {
    this.error = null;
    this.noError.next();
  }

}

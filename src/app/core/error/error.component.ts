import { Component, OnInit } from '@angular/core';

import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMsg: string = null;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.newError.subscribe((error) => 
    {
      console.log('error component error = ' + error);
      this.errorMsg = error;
    });
    this.errorService.noError.subscribe(() => this.errorMsg = null);
  }
}

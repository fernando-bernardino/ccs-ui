import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild ('loginForm') form : NgForm;

  constructor(private authService: AuthService) { }

  onSubmit(){
    this.authService.login(this.form.form.value);
  }

}

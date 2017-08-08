import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('loginForm') form : NgForm;

  @Output() login = new EventEmitter<{email: string, password: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.login.emit(this.form.form.value);
  }

}

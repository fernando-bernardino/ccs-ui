import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: string = null;

  logout(){
    this.user = null;
  }

  islogged() {
    return this.user != null;
  }

  login(credentials){
    if(credentials.email === 'tony.bernardino@gmail.com' && credentials.password === 'pass') {
      this.user = 'Tony';
    }
    if(credentials.email === 'my.bruta@gmail.com' && credentials.password === 'pass') {
      this.user = 'Ranhosa';
    }
  }
}

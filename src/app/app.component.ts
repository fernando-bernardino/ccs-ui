import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';

import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: string = null;

  constructor(private authService : AuthService, private router: Router){}

  ngOnInit() {
    this.authService.loggedIn.subscribe((user) => {
      this.user = user;
      this.router.navigate(['']);
    });

    this.authService.loggedOut.subscribe(() => {
      this.user = null;
      this.router.navigate(['login']);
    });

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationCancel) {
        if (this.authService.islogged()) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      }
    });
  }

  logout() {
    this.user = null;
  }

  islogged() {
    return this.user != null;
  }
}

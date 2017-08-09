import { Component } from '@angular/core';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }

}

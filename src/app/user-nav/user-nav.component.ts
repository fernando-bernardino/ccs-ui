import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit();
  }

}

import { Component, OnInit } from '@angular/core';

import { CloudSpace } from '../cloudspace-model';

@Component({
  selector: 'app-cloudspaces',
  templateUrl: './cloudspaces.component.html',
  styleUrls: ['./cloudspaces.component.css']
})
export class CloudspacesComponent implements OnInit {

  cloudspaces: CloudSpace [];
  
  constructor() { }

  ngOnInit() {
  }

}

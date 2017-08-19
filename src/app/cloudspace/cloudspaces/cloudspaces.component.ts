import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CloudSpace } from '../cloudspace-model';

@Component({
  selector: 'app-cloudspaces',
  templateUrl: './cloudspaces.component.html',
  styleUrls: ['./cloudspaces.component.css']
})
export class CloudspacesComponent implements OnInit {

  cloudspaces;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cloudspaces = this.route.snapshot.data['cloudspaces'];
    console.log(this.cloudspaces);
  }

}

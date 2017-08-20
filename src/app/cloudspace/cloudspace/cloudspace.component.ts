import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CloudSpace } from '../cloudspace-model';

@Component({
  selector: 'app-cloudspace',
  templateUrl: './cloudspace.component.html',
  styleUrls: ['./cloudspace.component.css']
})
export class CloudspaceComponent implements OnInit {

  cloudspace;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cloudspace = this.route.snapshot.data['cloudspace'];
  }
}

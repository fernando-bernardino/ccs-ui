import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CloudSpace } from '../../cloudspace-model';
import { CloudspaceService } from '../../cloudspace.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  original: CloudSpace;
  cloudspace: CloudSpace;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private cloudspaceService: CloudspaceService) { }

  ngOnInit() {
    this.original = this.route.snapshot.data['cloudspace'];
    this.cloudspace = this.cloudspaceService.cloneCloudspace(this.original);

    console.log(this.route);
  }

  onSubmit(){

    this.cloudspaceService.overwriteCloudspace(this.original, this.form.value);

    this.cloudspaceService.updateCloudSpace(this.original).subscribe(
      (response) => {
        
        console.log('done updating');
      });
  }

}

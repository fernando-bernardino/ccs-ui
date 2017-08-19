import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpService } from '../core/http/http.service';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudSpacesResolver } from './cloudspaces/cloudspaces-resolver';

const cloudspaceRoutes: Routes = [
  { path: '', 
    component: CloudspacesComponent,
    resolve: {
      cloudspaces: CloudSpacesResolver
    },
    children: [
      { path: ':id', component: CloudspaceComponent }
    ] 
  },
];

@NgModule({
  imports: [  
    RouterModule.forChild(cloudspaceRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers : [
    CloudSpacesResolver
  ]
})
export class CloudspaceRoutingModule {}
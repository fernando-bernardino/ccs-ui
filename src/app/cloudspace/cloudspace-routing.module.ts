import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpService } from '../core/http/http.service';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudSpacesResolver } from './cloudspaces/cloudspaces-resolver';
import { CloudSpaceResolver } from './cloudspace/cloudspace-resolve';

import { DetailComponent } from './cloudspace/detail/detail.component';

const cloudspaceRoutes: Routes = [
  { path: '', 
    component: CloudspacesComponent,
    resolve: {
      cloudspaces: CloudSpacesResolver
    }
  },
  { path: ':id', 
    component: CloudspaceComponent,
    resolve: {
      cloudspace: CloudSpaceResolver
    },
    children: [
      {
        path: '',
        component: DetailComponent,
        resolve: {
          cloudspace: CloudSpaceResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [  
    RouterModule.forChild(cloudspaceRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers : [
    CloudSpacesResolver,
    CloudSpaceResolver
  ]
})
export class CloudspaceRoutingModule {}
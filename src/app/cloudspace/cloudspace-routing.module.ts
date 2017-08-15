import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudSpaceResolve } from './cloudspaces/cloudspace-resolve';

const cloudspaceRoutes: Routes = [
  { path: '', 
    component: CloudspacesComponent,
    resolve: {
      cloudspaces: CloudSpaceResolve
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
  exports: [RouterModule]
})
export class CloudspaceRoutingModule {}
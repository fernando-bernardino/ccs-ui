import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';

const cloudspaceRoutes: Routes = [
  { path: '', component: CloudspacesComponent, children: [
    { path: ':id', component: CloudspaceComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(cloudspaceRoutes)
  ],
  exports: [RouterModule]
})
export class CloudspaceRoutingModule {}
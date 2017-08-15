import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpService } from '../core/http/http.service';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudSpaceResolve } from './cloudspaces/cloudspace-resolve';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudspaceRoutingModule } from './cloudspace-routing.module';

@NgModule({
  declarations: [
    CloudspacesComponent,
    CloudspaceComponent
  ],
  imports: [
    FormsModule,
    CloudspaceRoutingModule
  ]
  /*,
  providers: [
    CloudSpaceResolve,
    HttpService
  ]*/
})
export class CloudspaceModule {}
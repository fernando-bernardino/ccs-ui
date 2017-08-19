import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpService } from '../core/http/http.service';

import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudspaceRoutingModule } from './cloudspace-routing.module';

@NgModule({
  declarations: [
    CloudspacesComponent,
    CloudspaceComponent
  ],
  imports: [
    FormsModule,
    CloudspaceRoutingModule,
    CommonModule
  ]
})
export class CloudspaceModule {}
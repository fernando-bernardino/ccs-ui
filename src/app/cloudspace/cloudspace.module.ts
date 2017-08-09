import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    CloudspaceRoutingModule
  ]
})
export class CloudspaceModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CloudspaceService } from './cloudspace.service';
import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';
import { CloudspaceComponent } from './cloudspace/cloudspace.component';
import { CloudspaceRoutingModule } from './cloudspace-routing.module';
import { DetailComponent } from './cloudspace/detail/detail.component';
import { UsersComponent } from './cloudspace/users/users.component';
import { ProjectsComponent } from './cloudspace/projects/projects.component';

@NgModule({
  declarations: [
    CloudspacesComponent,
    CloudspaceComponent,
    DetailComponent,
    UsersComponent,
    ProjectsComponent
  ],
  imports: [
    FormsModule,
    CloudspaceRoutingModule,
    CommonModule
  ],
  providers: [
    CloudspaceService
  ]
})
export class CloudspaceModule {}
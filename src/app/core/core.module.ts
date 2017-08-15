import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AuthGuard } from './auth/auth-guard.service';
import { EncodeService } from './auth/encode.service';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';

@NgModule({
  declarations: [
    LoginComponent,
    UserNavComponent,
    ErrorComponent
  ],
  imports: [
      FormsModule,
      CommonModule
  ],
  exports: [
    LoginComponent,
    UserNavComponent,
    ErrorComponent
  ],
  providers: [
    AuthGuard,
    EncodeService,
    ErrorService
  ]
})
export class CoreModule {}
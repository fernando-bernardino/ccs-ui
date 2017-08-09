import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AuthGuard } from './login/auth-guard.service';

@NgModule({
  declarations: [
    LoginComponent,
    UserNavComponent
  ],
  imports: [
      FormsModule,
      CommonModule
  ],
  exports: [
    LoginComponent,
    UserNavComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class CoreModule {}
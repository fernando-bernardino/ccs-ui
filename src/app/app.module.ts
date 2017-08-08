import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { LoginComponent } from './login/login.component';
import { CloudspacesComponent } from './cloudspaces/cloudspaces.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    LoginComponent,
    CloudspacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

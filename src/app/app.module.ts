import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CloudspaceModule } from './cloudspace/cloudspace.module';

import { AuthService } from './core/auth/auth.service';
import { HttpService } from './core/http/http.service';
import { RequestOptionsService } from './core/http/request-options.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CloudspaceModule,
    HttpModule
  ],
  providers: [
    AuthService,
    HttpService,
    { provide: RequestOptions, useClass: RequestOptionsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

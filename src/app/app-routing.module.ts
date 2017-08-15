import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './core/auth/login.component'
import { AuthGuard } from './core/auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'cloudspace', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cloudspace', loadChildren: './cloudspace/cloudspace.module#CloudspaceModule', canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

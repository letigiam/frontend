
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'app', loadChildren: () => import('../app/modules/application/application.module').then(m => m.ApplicationModule) },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

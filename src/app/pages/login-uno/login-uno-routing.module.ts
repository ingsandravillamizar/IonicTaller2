import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUnoPage } from './login-uno.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginUnoPageRoutingModule {}

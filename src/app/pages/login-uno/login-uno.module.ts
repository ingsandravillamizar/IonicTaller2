import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUnoPageRoutingModule } from './login-uno-routing.module';

import { LoginUnoPage } from './login-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUnoPageRoutingModule
  ],
  declarations: [LoginUnoPage]
})
export class LoginUnoPageModule {}

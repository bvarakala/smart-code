import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonFeatureRoutingModule } from './common-feature-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    CommonFeatureRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavListComponent
  ]
})
export class CommonFeatureModule { }

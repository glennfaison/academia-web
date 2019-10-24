import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { RtlComponent } from '../../pages/rtl/rtl.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    RtlComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class AuthLayoutModule { }

import { Routes } from '@angular/router';

import { RtlComponent } from '../../pages/rtl/rtl.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { LoginComponent } from 'src/app/pages/login/login.component';


export const AuthLayoutRoutes: Routes = [
  { path: 'rtl', pathMatch: 'full', component: RtlComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

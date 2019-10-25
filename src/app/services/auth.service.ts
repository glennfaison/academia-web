import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static thisUser: any;
  static accessToken: any;

  constructor(
    private httpSvc: HttpService,
  ) {
    if (!AuthService.accessToken) {
      AuthService.accessToken = localStorage.getItem('academia-jwt');
    }
  }

  async instructorRegister(user: any): Promise<void> {
    try {
      const url = `${environment.apiRoot}/auth/instructor-registration`;
      const res = await this.httpSvc.post(url, user, false);
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }

  async instructorLogin(email: string, password: string): Promise<any> {
    try {
      const url = `${environment.apiRoot}/auth/instructor-login`;
      const res = await this.httpSvc.post(url, { email, password }, false);
      if (!!res.error) { throw res; }
      const { user, jwt } = res;
      AuthService.accessToken = jwt;
      localStorage.setItem('academia-jwt', jwt);
      await this.getThisUser();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      AuthService.accessToken = null;
      localStorage.removeItem('academia-jwt');
    } catch (error) { throw error; }
  }

  async getThisUser(): Promise<any> {
    try {
      const url = `${environment.apiRoot}/auth/me`;
      const res = await this.httpSvc.get(url, {}, false);
      if (!!res.error) { throw res; }
      AuthService.thisUser = res;
      return res;
    } catch (error) {
      throw error;
    }
  }
}

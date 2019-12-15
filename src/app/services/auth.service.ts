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
      if (!!AuthService.accessToken) { this.getThisUser(); }
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
      this.httpSvc.accessToken = jwt;
      AuthService.thisUser = user;
      localStorage.setItem('academia-jwt', jwt);
      localStorage.setItem('academia-thisUser', JSON.stringify(user));
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      AuthService.accessToken = null;
      AuthService.thisUser = null;
      localStorage.removeItem('academia-jwt');
      localStorage.removeItem('academia-thisUser');
    } catch (error) { throw error; }
  }

  async getThisUser(): Promise<any> {
    try {
      const browserUser = JSON.parse(localStorage.getItem('academia-thisUser'));
      if (!!browserUser) {
        AuthService.thisUser = browserUser;
        return browserUser;
      }
      const url = `${environment.apiRoot}/auth/me`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      AuthService.thisUser = res;
      localStorage.setItem('academia-thisUser', JSON.stringify(res));
      return res;
    } catch (error) {
      throw error;
    }
  }

}

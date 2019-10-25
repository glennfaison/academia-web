import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  thisUser: any;
  accessToken: any;

  constructor(
    private httpSvc: HttpService,
  ) {
    if (!this.accessToken) { this.accessToken = localStorage.getItem('academia-jwt'); }
  }

  async register(user: any): Promise<void> {
    try {
      const url = `${environment.apiRoot}/auth/signup`;
      const res = await this.httpSvc.post(url, user, false);
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const url = `${environment.apiRoot}/auth/login`;
      const res = await this.httpSvc.post(url, { email, password }, false);
      if (!!res.error) { throw res; }
      const { user, jwt } = res;
      this.accessToken = jwt;
      localStorage.setItem('academia-jwt', jwt);
      this.thisUser = user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      this.accessToken = null;
      localStorage.removeItem('academia-jwt');
    } catch (error) { throw error; }
  }

  async getThisUser(): Promise<any> {
    try {
      const url = `${environment.apiRoot}/auth/me`;
      const res = await this.httpSvc.get(url, {}, false);
      if (!!res.error) { throw res; }
      this.thisUser = res;
      return res;
    } catch (error) {
      throw error;
    }
  }
}

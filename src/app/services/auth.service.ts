import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  thisUser: any;

  constructor(
    private httpSvc: HttpService,
  ) { }

  async register(user: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/signup`;
      const res = await this.httpSvc.post(url, user, false);
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/login`;
      const res = await this.httpSvc.post(url, { email, password }, false);
      if (!!res.error) { throw res; }
      const { user, jwt } = res;
      this.httpSvc.accessToken = jwt;
      localStorage.setItem('mcq-jwt', jwt);
      this.thisUser = user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getThisUser(): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/me`;
      const res = await this.httpSvc.get(url, {}, false);
      if (!!res.error) { throw res; }
      this.thisUser = res;
      return res;
    } catch (error) {
      throw error;
    }
  }
}

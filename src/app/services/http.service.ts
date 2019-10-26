import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {
    if (!this.accessToken) { this.accessToken = localStorage.getItem('academia-jwt'); }
  }

  private accessToken: any;
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  static findHttpError(error: any): string {
    return (error && error.error && error.error.message) ||
      (error && error.message) || error instanceof String ? error : 'Oops! There was an error.';
  }

  private setOptions(withAuth: boolean) {
    if (withAuth) {
      this.options.headers = new HttpHeaders({
        // tslint:disable-next-line:object-literal-key-quotes
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': `application/json`,
      });
    }
    if (withAuth && !this.accessToken) {
      throw new Error('No Access Token Found');
    }
  }

  async get(url: string, requestParams: object, withAuth: boolean = true): Promise<any> {
    try {
      this.setOptions(withAuth);
      const params: string = new HttpParams(requestParams).toString();
      const res = await this.http.get<any>(`${url}?`, this.options).toPromise();
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      return error;
    }
  }

  async post(url: string, requestBody: object, withAuth: boolean = true): Promise<any> {
    try {
      this.setOptions(withAuth);
      const res = await this.http.post<any>(`${url}`, requestBody, this.options).toPromise();
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      return error;
    }
  }

  async put(url: string, requestBody: object, withAuth: boolean = true): Promise<any> {
    try {
      this.setOptions(withAuth);
      const res = await this.http.put<any>(`${url}`, requestBody, this.options).toPromise();
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      return error;
    }
  }

  async delete(url: string, requestBody: object, withAuth: boolean = true): Promise<any> {
    try {
      this.setOptions(withAuth);
      const params: string = new HttpParams(requestBody).toString();
      const options = { ...this.options, body: params };
      const res = await this.http.delete<any>(`${url}`, options).toPromise();
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      return error;
    }
  }

}

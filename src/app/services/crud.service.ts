import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService {

  constructor(
    protected httpSvc: HttpService,
    protected apiEndpoint: string,
  ) {
  }

  async createOne(data: any): Promise<any> {
    try {
      const url = `${environment.apiRoot}/${this.apiEndpoint}`;
      const res = await this.httpSvc.post(url, data, true);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchMany(detailed = true): Promise<any[]> {
    try {
      const url = `${environment.apiRoot}/${this.apiEndpoint}`;
      const res = await this.httpSvc.get(url, { }, true);
      if (!!res.error || !Array.isArray(res)) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchOne(id: any): Promise<any> {
    try {
      const url = `${environment.apiRoot}/${this.apiEndpoint}/${id}`;
      const res = await this.httpSvc.get(url, {}, true);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateOne(data: any): Promise<any> {
    try {
      const url = `${environment.apiRoot}/${this.apiEndpoint}/${data.id}`;
      const res = await this.httpSvc.put(url, data, true);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(id: any): Promise<void> {
    try {
      const url = `${environment.apiRoot}/${this.apiEndpoint}/${id}`;
      const res = await this.httpSvc.delete(url, {}, true);
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}

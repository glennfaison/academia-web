import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createPerson(person: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/persons`;
      const res = await this.httpSvc.post(url, person);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchPersons(): Promise<any[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/persons`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updatePerson(person: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/persons/${person._id}`;
      const res = await this.httpSvc.put(url, person);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deletePerson(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/persons/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}

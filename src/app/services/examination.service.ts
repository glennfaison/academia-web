import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createExamination(examination: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/examinations`;
      const res = await this.httpSvc.post(url, examination);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchExaminations(): Promise<any[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/examinations`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateExamination(examination: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/examinations/${examination._id}`;
      const res = await this.httpSvc.put(url, examination);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteExamination(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/examinations/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}

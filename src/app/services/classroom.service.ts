import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createClassroom(classroom: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/classrooms`;
      const res = await this.httpSvc.post(url, classroom);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchClassrooms(): Promise<any[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/classrooms`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateClassroom(classroom: any): Promise<any> {
    try {
      const url = `${this.httpSvc.apiRoot}/classrooms/${classroom._id}`;
      const res = await this.httpSvc.put(url, classroom);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteClassroom(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/classrooms/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}

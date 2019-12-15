import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class StudentExaminationService extends CrudService {

  constructor(
    protected httpSvc: HttpService,
  ) {
    super(httpSvc, 'student_examinations');
  }

}

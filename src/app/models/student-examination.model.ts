import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Course, Sequence, Instructor, Examination } from '.';

export class StudentExamination {
  [x: string]: any;
  id?: number;
  student_id?: number;
  sequence_id?: number;
  examination_id?: number;
  took_exam = false;
  course_id?: number;
  score?: number;
  student?: Instructor;
  sequence?: Sequence;
  examination?: Examination;
  course?: Course;

  constructor(obj: any = {}) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (!obj[key]) { continue; }
      this[key] = obj[key];
    }
  }




}

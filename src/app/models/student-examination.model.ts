import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Course, Sequence, Instructor } from '.';

export class StudentExamination {
  [x: string]: any;
  id?: number;
  student_id?: number;
  sequence_id?: number;
  examination_id?: number;
  course_id?: number;
  total_mark?: number;
  score?: number;
  student?: Instructor;
  sequence?: Sequence;
  examination?: Sequence;
  course?: Course;
  date_taken?: Date | NgbDate | string;

  constructor(obj: any = {}) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (!obj[key]) { continue; }
      this[key] = obj[key];
    }
  }




}

import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Course, Sequence, Instructor } from '.';
import { Classroom } from './classroom.model';

export class Examination {
  [x: string]: any;
  id?: number;
  number_sat?: number;
  number_passed?: number;
  total_mark?: number;
  course_id?: number;
  sequence_id?: number;
  supervisor_id?: number;
  instructor_id?: number;
  classroom_id?: number;
  course?: Course;
  sequence?: Sequence;
  supervisor?: Instructor;
  instructor?: Instructor;
  classroom?: Classroom;
  date_taken?: Date | NgbDate | string;

  constructor(obj: Partial<Examination> = {}) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (!obj[key]) { continue; }
      this[key] = obj[key];
    }
  }

}

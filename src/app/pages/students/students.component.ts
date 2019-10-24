import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Person } from 'src/app/models/person.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html'
})
export class StudentsComponent extends CrudPageComponent {
  itemList: Person[];

  constructor(
    protected studentSvc: StudentService,
    protected alerts: AlertService,
  ) {
    super(alerts, studentSvc);
  }
}

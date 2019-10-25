import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentModalComponent } from './student-modal/student-modal.component';

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html'
})
export class StudentsComponent extends CrudPageComponent {
  itemList: Student[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected studentSvc: StudentService,
  ) {
    super(alerts, modalSvc, studentSvc, StudentModalComponent);
  }

  async fetchItemList(): Promise<void> {
    await super.fetchItemList();
    this.itemList = this.itemList.map(i => new Student(i));
  }

}

import { Component } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/models/classroom.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClassroomModalComponent } from './classroom-modal/classroom-modal.component';

@Component({
  selector: 'app-classrooms',
  templateUrl: 'classrooms.component.html'
})
export class ClassroomsComponent extends CrudPageComponent {
  itemList: Classroom[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected examSvc: ClassroomService,
  ) {
    super(alerts, modalSvc, examSvc, ClassroomModalComponent);
  }

}

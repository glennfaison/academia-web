import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseModalComponent } from './course-modal/course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html'
})
export class CoursesComponent extends CrudPageComponent {
  itemList: Course[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected courseSvc: CourseService,
  ) {
    super(alerts, modalSvc, courseSvc, CourseModalComponent);
  }

}

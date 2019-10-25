import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';

@Component({
  selector: 'app-course-modal',
  templateUrl: 'course-modal.component.html'
})
export class CourseModalComponent extends GenericModalComponent {
  @Input() item: Course = new Course();

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    super(activeModal);
  }

}

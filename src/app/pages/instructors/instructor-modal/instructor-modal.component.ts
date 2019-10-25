import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor, Gender } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';

@Component({
  selector: 'app-instructor-modal',
  templateUrl: 'instructor-modal.component.html'
})
export class InstructorModalComponent extends GenericModalComponent {

  @Input() item: Instructor = new Instructor();
  @Input() genders: Gender[];

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    super(activeModal);
  }

}

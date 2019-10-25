import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Classroom } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';

@Component({
  selector: 'app-classroom-modal',
  templateUrl: 'classroom-modal.component.html'
})
export class ClassroomModalComponent extends GenericModalComponent {
  @Input() item: Classroom = new Classroom();

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    super(activeModal);
  }

}

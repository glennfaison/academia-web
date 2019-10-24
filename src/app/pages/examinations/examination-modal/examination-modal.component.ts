import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Examination } from 'src/app/models';

@Component({
  selector: 'app-examination-modal',
  templateUrl: 'examination-modal.component.html'
})
export class ExaminationModalComponent {
  @Input() title: any;
  @Input() message: any;
  @Input() item: Examination = new Examination();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

}

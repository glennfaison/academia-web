import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Sequence } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';

@Component({
  selector: 'app-sequence-modal',
  templateUrl: 'sequence-modal.component.html'
})
export class SequenceModalComponent extends GenericModalComponent {
  @Input() item: Sequence = new Sequence();

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    super(activeModal);
  }

}

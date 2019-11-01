import { Component } from '@angular/core';
import { SequenceService } from 'src/app/services/sequence.service';
import { Sequence } from 'src/app/models/sequence.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SequenceModalComponent } from './sequence-modal/sequence-modal.component';

@Component({
  selector: 'app-sequences',
  templateUrl: 'sequences.component.html'
})
export class SequencesComponent extends CrudPageComponent {
  itemList: Sequence[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected examSvc: SequenceService,
  ) {
    super(alerts, modalSvc, examSvc, SequenceModalComponent);
  }

}

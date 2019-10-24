import { Component } from '@angular/core';
import { ExaminationService } from 'src/app/services/examination.service';
import { Examination } from 'src/app/models/examination.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExaminationModalComponent } from './examination-modal/examination-modal.component';

@Component({
  selector: 'app-examinations',
  templateUrl: 'examinations.component.html'
})
export class ExaminationsComponent extends CrudPageComponent {
  itemList: Examination[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected examSvc: ExaminationService,
  ) {
    super(alerts, modalSvc, examSvc, ExaminationModalComponent);
  }

}

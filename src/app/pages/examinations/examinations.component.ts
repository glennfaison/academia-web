import { Component } from '@angular/core';
import { ExaminationService } from 'src/app/services/examination.service';
import { Examination } from 'src/app/models/examination.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';

@Component({
  selector: 'app-examinations',
  templateUrl: 'examinations.component.html'
})
export class ExaminationsComponent extends CrudPageComponent {
  itemList: Examination[];

  constructor(
    protected examSvc: ExaminationService,
    protected alerts: AlertService,
  ) {
    super(alerts, examSvc);
  }

}

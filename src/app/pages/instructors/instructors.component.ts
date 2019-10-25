import { Component } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/models/instructor.model';
import { AlertService } from 'src/app/services/alert.service';
import { CrudPageComponent } from '../crud-page/crud-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructorModalComponent } from './instructor-modal/instructor-modal.component';

@Component({
  selector: 'app-instructors',
  templateUrl: 'instructors.component.html'
})
export class InstructorsComponent extends CrudPageComponent {
  itemList: Instructor[];

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected instructorSvc: InstructorService,
  ) {
    super(alerts, modalSvc, instructorSvc, InstructorModalComponent);
  }

  async fetchItemList(): Promise<void> {
    await super.fetchItemList();
    this.itemList = this.itemList.map(i => new Instructor(i));
  }

}

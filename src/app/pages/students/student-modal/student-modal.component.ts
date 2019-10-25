import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student, Gender } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: 'student-modal.component.html'
})
export class StudentModalComponent extends GenericModalComponent {

  @Input() item: Student = new Student();
  @Input() genders: Gender[];

  constructor(
    public activeModal: NgbActiveModal,
  ) {
    super(activeModal);
  }

}

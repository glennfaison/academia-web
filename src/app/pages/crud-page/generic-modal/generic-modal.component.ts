import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-modal',
  templateUrl: 'generic-modal.component.html'
})
export class GenericModalComponent {
  [x: string]: any;
  @Input() title: any;
  @Input() message: any;
  @Input() item: any;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

}

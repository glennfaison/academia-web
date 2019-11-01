import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SequenceService extends CrudService {

  constructor(
    protected httpSvc: HttpService,
  ) {
    super(httpSvc, 'sequences');
  }

}

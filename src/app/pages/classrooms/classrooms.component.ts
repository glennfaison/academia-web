import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: 'classrooms.component.html'
})
export class ClassroomsComponent implements OnInit {
  constructor(
    private classroomSvc: ClassroomService,
  ) {}

  ngOnInit() {}
}

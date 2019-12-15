import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student, Gender, Classroom } from 'src/app/models';
import { GenderService } from 'src/app/services/gender.service';
import { StudentService } from 'src/app/services/student.service';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: 'student-modal.component.html'
})
export class StudentModalComponent implements OnInit {

  @Input() title: string;
  @Input() item: Student = new Student();
  @Input() action: 'create' | 'edit' | 'delete';
  genders: Gender[] = [];
  classrooms: Classroom[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    protected genderSvc: GenderService,
    protected studentSvc: StudentService,
    protected classroomSvc: ClassroomService,
  ) { }

  async ngOnInit() {
    this.genders = await this.genderSvc.fetchMany();
    this.classrooms = await this.classroomSvc.fetchMany();
  }

  async submit() {
    switch (this.action) {
      case 'create':
        this.item = await this.create();
        break;
      case 'edit':
        this.item = await this.edit();
        break;
      case 'delete':
        await this.delete();
        break;
      default:
        break;
    }
    this.activeModal.close(this.item);
  }

  async create(): Promise<Student> {
    return await this.studentSvc.createOne(this.item);
  }

  async edit(): Promise<Student> {
    const count = await this.studentSvc.updateOne(this.item);
    if (count) { this.item = await this.studentSvc.fetchOne(this.item.id); }
    return this.item;
  }

  async delete(): Promise<void> {
    await this.studentSvc.deleteOne(this.item.id);
  }

}

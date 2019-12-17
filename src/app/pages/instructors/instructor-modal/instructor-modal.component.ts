import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor, Gender, Classroom, Course } from 'src/app/models';
import { GenericModalComponent } from '../../crud-page/generic-modal/generic-modal.component';
import { GenderService } from 'src/app/services/gender.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-instructor-modal',
  templateUrl: 'instructor-modal.component.html'
})
export class InstructorModalComponent implements OnInit {

  @Input() title: string;
  @Input() item: Instructor = new Instructor();
  @Input() action: 'create' | 'edit' | 'delete';
  genders: Gender[] = [];
  classrooms: Classroom[] = [];
  courses: Course[] = [];
  multiselectSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'title',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    noDataAvailablePlaceholderText: 'No available items',
    itemsShowLimit: 1,
    allowSearchFilter: true,
  };

  constructor(
    public activeModal: NgbActiveModal,
    protected genderSvc: GenderService,
    protected instructorSvc: InstructorService,
    protected classroomSvc: ClassroomService,
    protected courseSvc: CourseService,
  ) { }

  async ngOnInit() {
    this.genders = await this.genderSvc.fetchMany();
    this.classrooms = await this.classroomSvc.fetchMany();
    this.courses = await this.courseSvc.fetchMany();
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

  async create(): Promise<Instructor> {
    return await this.instructorSvc.createOne(this.item);
  }

  async edit(): Promise<Instructor> {
    const count = await this.instructorSvc.updateOne(this.item);
    if (count) { this.item = await this.instructorSvc.fetchOne(this.item.id); }
    return this.item;
  }

  async delete(): Promise<void> {
    await this.instructorSvc.deleteOne(this.item.id);
  }

}

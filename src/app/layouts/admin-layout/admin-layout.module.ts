import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { StudentsComponent } from 'src/app/pages/students/students.component';
import { InstructorsComponent } from 'src/app/pages/instructors/instructors.component';
import { ClassroomsComponent } from 'src/app/pages/classrooms/classrooms.component';
import { SequencesComponent } from 'src/app/pages/sequences/sequences.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';
import { GenericModalComponent } from 'src/app/pages/crud-page/generic-modal/generic-modal.component';
import { SequenceModalComponent } from 'src/app/pages/sequences/sequence-modal/sequence-modal.component';
import { CourseModalComponent } from 'src/app/pages/courses/course-modal/course-modal.component';
import { ClassroomModalComponent } from 'src/app/pages/classrooms/classroom-modal/classroom-modal.component';
import { StudentModalComponent } from 'src/app/pages/students/student-modal/student-modal.component';
import { InstructorModalComponent } from 'src/app/pages/instructors/instructor-modal/instructor-modal.component';
import { ExaminationsComponent } from 'src/app/pages/examinations/examinations.component';
import { ExaminationModalComponent } from 'src/app/pages/examinations/examination-modal/examination-modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    FilterPipeModule,
    NgxDatatableModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    StudentsComponent,
    InstructorsComponent,
    ClassroomsComponent,
    SequencesComponent,
    CoursesComponent,
    GenericModalComponent,
    SequenceModalComponent,
    CourseModalComponent,
    ClassroomModalComponent,
    StudentModalComponent,
    InstructorModalComponent,
    ExaminationsComponent,
    ExaminationModalComponent,
  ],
  entryComponents: [
    GenericModalComponent,
    SequenceModalComponent,
    CourseModalComponent,
    ClassroomModalComponent,
    StudentModalComponent,
    InstructorModalComponent,
    ExaminationModalComponent,
  ],
})
export class AdminLayoutModule { }

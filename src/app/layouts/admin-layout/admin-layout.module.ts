import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { StudentsComponent } from 'src/app/pages/students/students.component';
import { InstructorsComponent } from 'src/app/pages/instructors/instructors.component';
import { ClassroomsComponent } from 'src/app/pages/classrooms/classrooms.component';
import { ExaminationsComponent } from 'src/app/pages/examinations/examinations.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    ProfileComponent,
    StudentsComponent,
    InstructorsComponent,
    ClassroomsComponent,
    ExaminationsComponent,
    CoursesComponent,
    // RtlComponent,
  ]
})
export class AdminLayoutModule {}

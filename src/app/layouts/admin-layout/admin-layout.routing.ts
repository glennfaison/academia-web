import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { StudentsComponent } from 'src/app/pages/students/students.component';
import { InstructorsComponent } from 'src/app/pages/instructors/instructors.component';
import { ClassroomsComponent } from 'src/app/pages/classrooms/classrooms.component';
import { ExaminationsComponent } from 'src/app/pages/examinations/examinations.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'icons', component: IconsComponent, },
  { path: 'maps', component: MapComponent, },
  { path: 'notifications', component: NotificationsComponent, },
  { path: 'user', component: UserComponent, },
  { path: 'tables', component: TablesComponent, },
  { path: 'typography', component: TypographyComponent, },
  { path: 'my-profile', component: ProfileComponent, },
  { path: 'students', component: StudentsComponent, },
  { path: 'instructors', component: InstructorsComponent, },
  { path: 'classrooms', component: ClassroomsComponent, },
  { path: 'examinations', component: ExaminationsComponent, },
  { path: 'courses', component: CoursesComponent, },
  // { path: "rtl", component: RtlComponent, },
];

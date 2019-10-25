import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { StudentsComponent } from 'src/app/pages/students/students.component';
import { InstructorsComponent } from 'src/app/pages/instructors/instructors.component';
import { ClassroomsComponent } from 'src/app/pages/classrooms/classrooms.component';
import { ExaminationsComponent } from 'src/app/pages/examinations/examinations.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', },
      { path: 'my-profile', component: ProfileComponent, pathMatch: 'full', },
      { path: 'students', component: StudentsComponent, pathMatch: 'full', },
      { path: 'instructors', component: InstructorsComponent, pathMatch: 'full', },
      { path: 'classrooms', component: ClassroomsComponent, pathMatch: 'full', },
      { path: 'examinations', component: ExaminationsComponent, pathMatch: 'full', },
      { path: 'courses', component: CoursesComponent, pathMatch: 'full', },
    ],
  },
];

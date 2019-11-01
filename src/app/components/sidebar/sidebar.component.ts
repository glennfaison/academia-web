import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle?: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/students',
    title: 'Students',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/instructors',
    title: 'Instructors',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/classrooms',
    title: 'Classrooms',
    icon: 'icon-istanbul',
    class: ''
  },
  {
    path: '/sequences',
    title: 'Sequences',
    icon: 'icon-paper',
    class: ''
  },
  {
    path: '/courses',
    title: 'Courses',
    icon: 'icon-paper',
    class: ''
  },
  {
    path: '/examinations',
    title: 'Examinations',
    icon: 'icon-paper',
    class: ''
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

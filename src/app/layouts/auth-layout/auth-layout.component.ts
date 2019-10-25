import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  public menuItems: any[];
  test: Date = new Date();
  closeResult: string;
  public sidebarColor = 'blue';
  public isCollapsed = true;
  mobile_menu_visible: any = 0;
  $layer: HTMLElement | Element;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, LoginModalComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, LoginModalComponent],
  entryComponents: [LoginModalComponent],
})
export class ComponentsModule {}

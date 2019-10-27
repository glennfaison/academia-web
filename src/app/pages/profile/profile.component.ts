import { Component, OnInit, ViewChild } from '@angular/core';
import { GenderService } from 'src/app/services/gender.service';
import { Instructor, Gender } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  item: Instructor = new Instructor(AuthService.thisUser);
  genders: Gender[];
  isEditable = false;
  showPasswordSection = false;

  current_password: string;
  new_password: string;
  confirm_password: string;

  constructor(
    protected authSvc: AuthService,
    private genderSvc: GenderService,
  ) {
    this.fetchGenders();
    this.fetchThisUser();
  }

  ngOnInit() {}

  async fetchGenders() {
    this.genders = await this.genderSvc.fetchMany();
  }

  async fetchThisUser() {
    this.item = await this.authSvc.getThisUser();
    const date = new Date(this.item.date_of_birth.toString());
    this.item.date_of_birth = new NgbDate(date.getFullYear(), date.getMonth(), date.getDate());
    this.item = new Instructor(this.item);
  }

  setEditableTrue() {
    this.isEditable = true;
    this.showPasswordSection = false;
  }

  setEditableFalse() {
    this.isEditable = false;
    this.showPasswordSection = false;
  }

}

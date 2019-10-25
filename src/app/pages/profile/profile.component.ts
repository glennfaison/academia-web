import { Component, OnInit, Input } from '@angular/core';
import { GenderService } from 'src/app/services/gender.service';
import { Instructor, Gender } from 'src/app/models';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  item: Instructor = new Instructor();
  genders: Gender[];
  isEditable = false;
  showPasswordSection = false;


  current_password: string;
  new_password: string;
  confirm_password: string;

  constructor(
    private genderSvc: GenderService,
  ) {
    this.fetchGenders();
  }

  ngOnInit() {}

  async fetchGenders() {
    this.genders = await this.genderSvc.fetchMany();
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { Student, Instructor, Gender } from 'src/app/models';
import { GenderService } from 'src/app/services/gender.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;
  genders: Gender[];
  errorMessage: string;

  constructor(
    protected authSvc: AuthService,
    protected genderSvc: GenderService,
  ) {
    this.fetchGenders();
  }

  ngOnInit() { }

  async fetchGenders() {
    this.genders = await this.genderSvc.fetchMany();
  }

  async onSubmit(form: NgForm) {
    if (!this.validate(form)) { return; }
    console.log(form.valid);
    console.log(form.valueChanges);
    console.log(form.value);
    console.log(form.value.first_name);
  }

  validate(form: NgForm): boolean {
    if (form.value.password !== form.value.repeat_password) {
      this.errorMessage = 'Passwords do not match!';
      return false;
    }
    return true;
  }

}

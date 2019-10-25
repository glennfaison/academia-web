import { Component, OnInit, ViewChild } from '@angular/core';
import { Gender } from 'src/app/models';
import { GenderService } from 'src/app/services/gender.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

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
    protected alerts: AlertService,
    protected router: Router,
  ) {
    this.fetchGenders();
  }

  ngOnInit() { }

  async fetchGenders() {
    this.genders = await this.genderSvc.fetchMany();
  }

  async onSubmit(form: NgForm) {
    try {
      if (!this.validate(form)) { return; }
      await this.authSvc.instructorRegister(form.value);
      this.alerts.success('Successfully registered!');
      this.router.navigate(['login']);
    } catch (error) {
      this.alerts.error(error);
    }
  }

  validate(form: NgForm): boolean {
    if (form.value.password !== form.value.repeat_password) {
      this.errorMessage = 'Passwords do not match!';
      return false;
    }
    return true;
  }

}

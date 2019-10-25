import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;
  errorMessage: string;

  constructor(
    protected authSvc: AuthService,
    protected alerts: AlertService,
    protected router: Router,
  ) { }

  ngOnInit() { }

  async onSubmit(form: NgForm) {
    try {
      if (!this.validate(form)) { return; }
      const { email, password } = form.value;
      await this.authSvc.instructorLogin(email, password);
      this.alerts.success('Successfully logged in');
      this.router.navigate(['dashboard']);
    } catch (error) {
      this.alerts.error(error);
    }
  }

  validate(form: NgForm): boolean {
    if (!form.value.email) {
      this.errorMessage = 'Your username or email is required!';
      return false;
    }
    if (!form.value.password) {
      this.errorMessage = 'Your password is required!';
      return false;
    }
    return true;
  }

}

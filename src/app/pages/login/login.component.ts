import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
  ) { }

  ngOnInit() { }

  async onSubmit(form: NgForm) {
    if (!this.validate(form)) { return; }
    console.log(form.valid);
    console.log(form.valueChanges);
    console.log(form.value);
    console.log(form.value.first_name);
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

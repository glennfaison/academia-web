import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent implements AfterViewInit {

  @Input() successRedirectPath: string;
  @Input() failureRedirectPath: string;

  @Input() emailOrUsername;
  @Input() password;

  @ViewChild('form', { static: false }) form: NgForm;
  errorMessage: string;

  constructor(
    protected authSvc: AuthService,
    protected alerts: AlertService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected activeModal: NgbActiveModal,
  ) { }

  ngAfterViewInit() {
    this.form.value.email = this.emailOrUsername;
    this.form.value.password = this.password;
  }

  async onSubmit(form: NgForm) {
    try {
      if (!this.validate(form)) { throw new Error(this.errorMessage); }
      const { email, password } = form.value;
      await this.authSvc.instructorLogin(email, password);
      this.alerts.success('Successfully logged in');
      this.router.navigate([this.successRedirectPath || this.route.snapshot.url]);
    } catch (error) {
      this.router.navigate([this.failureRedirectPath || '/login']);
      this.alerts.error(HttpService.findHttpError(error));
    } finally {
      this.activeModal.close();
    }
  }

  async onCancel() {
    await this.authSvc.logout();
    this.alerts.info('Logged out');
    this.router.navigate(['/login']);
    this.activeModal.close();
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

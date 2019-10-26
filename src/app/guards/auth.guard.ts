import { Injectable } from '@angular/core';
import { UrlTree, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  static pathToReload: string;

  constructor(
    protected authSvc: AuthService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected modalSvc: NgbModal,
  ) { }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!AuthService.thisUser && !!AuthService.accessToken) { return true; }
    if (!!AuthService.thisUser) {
      this.logInAndNavigateToRoute();
      return false;
    }
    this.fetchCurrentUserAndNavigateToRoute();
    return false;
  }

  async fetchCurrentUserAndNavigateToRoute() {
    const path = this.route.snapshot.toString();
    if (AuthGuard.pathToReload === path) {
      AuthGuard.pathToReload = null;
      return;
    }
    AuthGuard.pathToReload = path;
    await this.authSvc.getThisUser();
    this.router.navigate([path]);
  }

  async logInAndNavigateToRoute() {
    const path = this.route.snapshot.toString();
    if (AuthGuard.pathToReload === path) {
      AuthGuard.pathToReload = null;
      return;
    }
    AuthGuard.pathToReload = path;
    const { email, username } = AuthService.thisUser;
    /*
    - Show login dialog with email/username filled, prompting for password
    - On login success, navigate to AuthGuard.pathToReload
    - On login failure, navigate to login screen
     */
    const modalRef = this.modalSvc.open(LoginModalComponent, {
      centered: false,
      backdrop: true,
    });
    modalRef.componentInstance.successRedirectPath = path;
    modalRef.componentInstance.failureRedirectPath = '/login';
    modalRef.componentInstance.emailOrUsername = email || username;
    try {
      await modalRef.result;
    } catch (e) { }
  }

}

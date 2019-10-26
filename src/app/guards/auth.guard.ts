import { Injectable } from '@angular/core';
import { UrlTree, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  static pathToReload: string;

  constructor(
    protected authSvc: AuthService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!AuthService.thisUser && !!AuthService.accessToken) { return true; }
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

}

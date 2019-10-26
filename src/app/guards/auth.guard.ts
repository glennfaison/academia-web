import { Injectable } from '@angular/core';
import { UrlTree, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    protected authSvc: AuthService,
    protected router: Router,
    protected route: ActivatedRoute,
  ) { }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!AuthService.thisUser && !!AuthService.accessToken) { return true; }
    const path = this.route.snapshot.toString();
    this.fetchCurrentUserAndNavigateToRoute(path);
    return false;
  }

  async fetchCurrentUserAndNavigateToRoute(path: string) {
    await this.authSvc.getThisUser();
    this.router.navigate([path]);
  }

}

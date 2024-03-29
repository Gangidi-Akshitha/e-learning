import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _service: LoginService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if user is logged in
    const isLoggedIn = this._service.isUserLoggedIn();
    if (typeof isLoggedIn !== 'boolean' || !isLoggedIn) {
      this.navigateToLogin();
      return false;
    }

    // Check user type
    const userType = this._service.userType();
    if (typeof userType !== 'string') {
      // Handle unexpected return type
      console.error('Unexpected return type from userType()');
      this.navigateToLogin();
      return false;
    }

    // Convert userType to lowercase for comparison
    const userTypeLower = (userType as string).toLowerCase();

    if (userTypeLower === 'admin') {
      return true;
    } else {
      // Redirect to login if user type is not admin
      this.navigateToLogin();
      return false;
    }
  }

  private navigateToLogin(): void {
    this._router.navigate(['login']);
  }
}

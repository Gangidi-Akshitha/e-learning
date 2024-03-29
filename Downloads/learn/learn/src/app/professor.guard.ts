import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorGuard implements CanActivate {
  constructor(private router: Router, private _service: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const userType = this._service.userType();
    if (typeof userType === 'string' && (userType === 'professor' || userType === 'PROFESSOR')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

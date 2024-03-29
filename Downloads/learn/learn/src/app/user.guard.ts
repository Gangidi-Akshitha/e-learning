import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate 
{
  constructor(private router: Router, private service : LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this.service.isUserLoggedIn() && this.service.userType() === 'user' || this.service.userType() === 'USER') 
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
import { TestBed } from '@angular/core/testing';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserGuard } from './user.guard';

describe('userGuard', () => {
  let routerMock: Router;
  let serviceMock: any;
  let guard: UserGuard;

  beforeEach(() => {
    routerMock = {} as Router;
    serviceMock = {
      isUserLoggedIn: () => true,
      userType: () => 'user' // Adjust based on your userType() implementation
    };

    guard = new UserGuard(routerMock, serviceMock);
  });

  it('should be created and canActivate should return true', () => {
    const dummyRoute = {} as ActivatedRouteSnapshot;
    const dummyState = {} as RouterStateSnapshot;

    const canActivateResult = guard.canActivate(dummyRoute, dummyState);
    expect(canActivateResult).toBeTruthy();
  });

  it('should navigate to login and canActivate should return false', () => {
    serviceMock.isUserLoggedIn = () => false; // Simulate user not logged in
    const navigateSpy = spyOn(routerMock, 'navigate');

    const dummyRoute = {} as ActivatedRouteSnapshot;
    const dummyState = {} as RouterStateSnapshot;

    const canActivateResult = guard.canActivate(dummyRoute, dummyState);
    expect(canActivateResult).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['login']); // Ensure router.navigate was called with the correct route
  });
});

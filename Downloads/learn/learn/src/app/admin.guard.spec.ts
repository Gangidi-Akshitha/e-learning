import { TestBed } from '@angular/core/testing';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let routerMock: Router;

  beforeEach(() => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: routerMock }
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to login if user is not logged in', () => {
    spyOn(guard['_service'], 'isUserLoggedIn').and.returnValue(false);
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;

    const canActivate = guard.canActivate(routeSnapshot, stateSnapshot);

    expect(canActivate).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should navigate to login if userType is not admin', () => {
    spyOn(guard['_service'], 'isUserLoggedIn').and.returnValue(true);
    spyOn(guard['_service'], 'userType').and.returnValue('user');
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;

    const canActivate = guard.canActivate(routeSnapshot, stateSnapshot);

    expect(canActivate).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should return true if user is logged in and userType is admin', () => {
    spyOn(guard['_service'], 'isUserLoggedIn').and.returnValue(true);
    spyOn(guard['_service'], 'userType').and.returnValue('admin');
    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const stateSnapshot = {} as RouterStateSnapshot;

    const canActivate = guard.canActivate(routeSnapshot, stateSnapshot);

    expect(canActivate).toEqual(true);
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });
});

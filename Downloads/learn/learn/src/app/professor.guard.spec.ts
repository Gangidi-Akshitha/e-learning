import { TestBed } from '@angular/core/testing';
import { CanActivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessorGuard } from './professor.guard';

describe('ProfessorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => {
    const guard = TestBed.inject(ProfessorGuard);
    return guard.canActivate(...guardParameters) as unknown as Observable<boolean | UrlTree>;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

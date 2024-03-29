import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsucessComponent } from './registrationsucess.component';

describe('RegistrationsucessComponent', () => {
  let component: RegistrationsucessComponent;
  let fixture: ComponentFixture<RegistrationsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationsucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

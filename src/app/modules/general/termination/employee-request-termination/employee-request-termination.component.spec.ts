import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestTerminationComponent } from './employee-request-termination.component';

describe('EmployeeRequestTerminationComponent', () => {
  let component: EmployeeRequestTerminationComponent;
  let fixture: ComponentFixture<EmployeeRequestTerminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRequestTerminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRequestTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

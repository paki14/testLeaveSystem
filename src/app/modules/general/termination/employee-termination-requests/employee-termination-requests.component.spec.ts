import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTerminationRequestsComponent } from './employee-termination-requests.component';

describe('EmployeeTerminationRequestsComponent', () => {
  let component: EmployeeTerminationRequestsComponent;
  let fixture: ComponentFixture<EmployeeTerminationRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTerminationRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTerminationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

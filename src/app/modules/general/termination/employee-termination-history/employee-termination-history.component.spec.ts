import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTerminationHistoryComponent } from './employee-termination-history.component';

describe('EmployeeTerminationHistoryComponent', () => {
  let component: EmployeeTerminationHistoryComponent;
  let fixture: ComponentFixture<EmployeeTerminationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTerminationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTerminationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

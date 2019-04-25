import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddTerminationRecordComponent } from './employee-add-termination-record.component';

describe('EmployeeAddTerminationRecordComponent', () => {
  let component: EmployeeAddTerminationRecordComponent;
  let fixture: ComponentFixture<EmployeeAddTerminationRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddTerminationRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddTerminationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

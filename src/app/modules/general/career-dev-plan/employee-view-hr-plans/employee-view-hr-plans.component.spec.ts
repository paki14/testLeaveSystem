import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewHRPlansComponent } from './employee-view-hr-plans.component';

describe('EmployeeViewHRPlansComponent', () => {
  let component: EmployeeViewHRPlansComponent;
  let fixture: ComponentFixture<EmployeeViewHRPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewHRPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewHRPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

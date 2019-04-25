import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeArrangeDiscussionComponent } from './employee-arrange-discussion.component';

describe('EmployeeArrangeDiscussionComponent', () => {
  let component: EmployeeArrangeDiscussionComponent;
  let fixture: ComponentFixture<EmployeeArrangeDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeArrangeDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeArrangeDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeaveReasonComponent } from './view-my-leave-reason.component';

describe('ViewMyLeaveReasonComponent', () => {
  let component: ViewMyLeaveReasonComponent;
  let fixture: ComponentFixture<ViewMyLeaveReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyLeaveReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyLeaveReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

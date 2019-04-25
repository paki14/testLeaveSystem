import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleParOneUserComponent } from './schedule-par-one-user.component';

describe('ScheduleParOneUserComponent', () => {
  let component: ScheduleParOneUserComponent;
  let fixture: ComponentFixture<ScheduleParOneUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleParOneUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleParOneUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

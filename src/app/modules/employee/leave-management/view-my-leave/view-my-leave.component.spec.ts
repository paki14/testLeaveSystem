import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeaveComponent } from './view-my-leave.component';

describe('ViewMyLeaveComponent', () => {
  let component: ViewMyLeaveComponent;
  let fixture: ComponentFixture<ViewMyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

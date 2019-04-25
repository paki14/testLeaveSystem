import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformCancelLeaveRequestModelComponent } from './conform-cancel-leave-request-model.component';

describe('ConformCancelLeaveRequestModelComponent', () => {
  let component: ConformCancelLeaveRequestModelComponent;
  let fixture: ComponentFixture<ConformCancelLeaveRequestModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformCancelLeaveRequestModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformCancelLeaveRequestModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

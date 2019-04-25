import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificEmpLeaveComponent } from './view-specific-emp-leave.component';

describe('ViewSpecificEmpLeaveComponent', () => {
  let component: ViewSpecificEmpLeaveComponent;
  let fixture: ComponentFixture<ViewSpecificEmpLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificEmpLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificEmpLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

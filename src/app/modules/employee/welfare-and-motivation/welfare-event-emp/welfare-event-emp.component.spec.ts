import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareEventEmpComponent } from './welfare-event-emp.component';

describe('WelfareEventEmpComponent', () => {
  let component: WelfareEventEmpComponent;
  let fixture: ComponentFixture<WelfareEventEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareEventEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareEventEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

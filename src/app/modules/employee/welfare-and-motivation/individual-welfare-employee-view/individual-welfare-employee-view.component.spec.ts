import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWelfareEmployeeViewComponent } from './individual-welfare-employee-view.component';

describe('IndividualWelfareEmployeeViewComponent', () => {
  let component: IndividualWelfareEmployeeViewComponent;
  let fixture: ComponentFixture<IndividualWelfareEmployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualWelfareEmployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualWelfareEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWelfareEmployeeViewComponent } from './general-welfare-employee-view.component';

describe('GeneralWelfareEmployeeViewComponent', () => {
  let component: GeneralWelfareEmployeeViewComponent;
  let fixture: ComponentFixture<GeneralWelfareEmployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralWelfareEmployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWelfareEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

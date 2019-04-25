import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewComponent } from './emp-view.component';

describe('EmpViewComponent', () => {
  let component: EmpViewComponent;
  let fixture: ComponentFixture<EmpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

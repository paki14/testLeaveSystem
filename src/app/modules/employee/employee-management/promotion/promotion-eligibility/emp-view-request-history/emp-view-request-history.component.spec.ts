import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewRequestHistoryComponent } from './emp-view-request-history.component';

describe('EmpViewRequestHistoryComponent', () => {
  let component: EmpViewRequestHistoryComponent;
  let fixture: ComponentFixture<EmpViewRequestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewRequestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

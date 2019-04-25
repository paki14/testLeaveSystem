import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewDeniedHistoryComponent } from './emp-view-denied-history.component';

describe('EmpViewDeniedHistoryComponent', () => {
  let component: EmpViewDeniedHistoryComponent;
  let fixture: ComponentFixture<EmpViewDeniedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewDeniedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewDeniedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

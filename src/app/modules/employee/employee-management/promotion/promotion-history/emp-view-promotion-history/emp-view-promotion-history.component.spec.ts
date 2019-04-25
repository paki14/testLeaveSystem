import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewPromotionHistoryComponent } from './emp-view-promotion-history.component';

describe('EmpViewPromotionHistoryComponent', () => {
  let component: EmpViewPromotionHistoryComponent;
  let fixture: ComponentFixture<EmpViewPromotionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewPromotionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewPromotionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

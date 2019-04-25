import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpComplainHistoryComponent } from './table-emp-complain-history.component';

describe('TableEmpComplainHistoryComponent', () => {
  let component: TableEmpComplainHistoryComponent;
  let fixture: ComponentFixture<TableEmpComplainHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEmpComplainHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEmpComplainHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

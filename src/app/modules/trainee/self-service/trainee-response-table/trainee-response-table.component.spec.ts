import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeResponseTableComponent } from './trainee-response-table.component';

describe('TraineeResponseTableComponent', () => {
  let component: TraineeResponseTableComponent;
  let fixture: ComponentFixture<TraineeResponseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeResponseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeResponseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
